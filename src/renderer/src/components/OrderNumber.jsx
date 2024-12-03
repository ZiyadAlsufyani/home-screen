import { useLocation } from 'react-router-dom';
import '../assets/OrderNumber.css';
import StickyHeader from './StickyHeader';

export default function OrderNumber() {
  const location = useLocation();
  const orderNumberFromState = location.state?.orderNumber;

  return (
    <>
      <StickyHeader title="Order Number Page" />
      <div className="OrderNumber">
        <h1>Order Number Is: {orderNumberFromState}</h1>
        <p>Thank you, have a great meal!</p>
      </div>
    </>
  );
}
