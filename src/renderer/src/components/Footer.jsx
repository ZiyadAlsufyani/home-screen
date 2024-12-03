import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import '../assets/Footer.css';

const Footer = ({ selectedCount, orderNumber, incrementOrderNumber }) => {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    incrementOrderNumber(); // Increment the order number

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
      //alert(data);
    } catch (error) {
      console.error('Error writing data:', error);
    }

    navigate('/OrderNumber', { state: { orderNumber } });
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
