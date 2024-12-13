const express = require('express');
const path = require('path');
const rti = require('rticonnextdds-connector');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const configFile = path.join(__dirname, 'QSystem.xml');
const stateFile = path.join(__dirname, 'appState.json');
const PORT = 5000;

// Initialize state
let appState = {
  lastOrderNum: 0
};

// Load saved state if exists
try {
  if (fs.existsSync(stateFile)) {
    appState = JSON.parse(fs.readFileSync(stateFile));
  }
} catch (err) {
  console.error('Error loading state:', err);
}

// Save state helper
const saveState = () => {
  fs.writeFileSync(stateFile, JSON.stringify(appState));
};

app.use(bodyParser.json());

// Get last order number
app.get('/last-order', (req, res) => {
  res.json({ lastOrderNum: appState.lastOrderNum });
});

app.post('/write', async (req, res) => {
  const { fromDevice, toDevice, orderNum } = req.body;
  console.log(req.body);
  const connector = new rti.Connector('HomeScreenDomainParticipantLibrary::MyPubParticipant', configFile);
  const output = connector.getOutput('MyPublisher::MySquareWriter');

  try {
    console.log('Waiting for subscriptions...');
    const waitTime = 5000;
    const hasSubscriptions = await output.waitForSubscriptions(waitTime);

    if (!hasSubscriptions) {
      throw new Error('No subscriptions found');
    }

    console.log('Writing...');
    output.instance.setString('fromDevice', fromDevice);
    output.instance.setString('toDevice', toDevice);
    output.instance.setNumber('orderNum', orderNum);
    output.write();

    // Update and save state
    appState.lastOrderNum = orderNum;
    saveState();
    res.status(200).send('Data written successfully');
  } catch (err) {
    console.error('Error encountered:', err);
    res.status(500).send('Failed to write data: ' + err.message);
  } finally {
    connector.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});