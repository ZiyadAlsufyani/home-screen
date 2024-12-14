const express = require('express');
const path = require('path');
const rti = require('rticonnextdds-connector');
const app = express();
const bodyParser = require('body-parser');

const configFile = path.join(__dirname, 'QSystem.xml');
const PORT = 5000;

app.use(bodyParser.json());

const connector = new rti.Connector('HomeScreenDomainParticipantLibrary::HomeScreenPubParticipant', configFile);
const output = connector.getOutput('HomeScreenPublisher::HomeScreenWriter');

app.post('/write', async (req, res) => {
  const { fromDevice, toDevice, orderNum } = req.body;
  console.log(req.body);

  try {
    console.log('Writing...');
    output.instance.setString('fromDevice', fromDevice);
    output.instance.setString('toDevice', toDevice);
    output.instance.setNumber('orderNum', orderNum);
    output.write();

    res.status(200).send('Data written successfully');
  } catch (err) {
    console.error('Error encountered:', err);
    res.status(500).send('Failed to write data: ' + err.message);
  } 
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Handle termination signals
process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing connector');
  connector.close();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing connector');
  connector.close();
  process.exit(0);
});