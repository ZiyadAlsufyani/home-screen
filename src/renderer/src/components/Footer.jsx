import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import '../assets/Footer.css';

const Footer = ({ selectedCount, orderNumber, incrementOrderNumber }) => {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const fromDevice = 'home';  // value for fromDevice
    const toDevice = 'kitchen';  // value for toDevice

    try {
      const response = await fetch('/write', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fromDevice: fromDevice, toDevice: toDevice, orderNum: parseInt(orderNumber) })
      });

      const data = await response.text();
      if (response.status !== 200) {
        alert(data); // Show alert if there are no subscriptions
        return; // Stop further execution
      }

      incrementOrderNumber(); // Increment the order number only if data is written successfully
      navigate('/OrderNumber', { state: { orderNumber } });
    } catch (error) {
      console.error('Error writing data:', error);
      alert('Error writing data: ' + error.message); // Show alert if there's an error
    }
  };

  return (
    <footer className="Footer">
      <Button
        size="lg"
        endDecorator={<KeyboardArrowRight />}
        color="success"
        onClick={handleButtonClick}
        disabled={selectedCount === 0}
      >
        Go to checkout ({selectedCount})
      </Button>
    </footer>
  );
};

export default Footer;
