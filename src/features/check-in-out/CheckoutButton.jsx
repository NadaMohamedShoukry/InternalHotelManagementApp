/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";
function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingout } = useCheckout();
  return (
    <Button
      onClick={() => checkout(bookingId)}
      variation="danger"
      size="small"
      disabled={isCheckingout}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
