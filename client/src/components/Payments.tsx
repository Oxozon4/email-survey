import StripeCheckout from 'react-stripe-checkout';
// import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Payments: React.FC = () => {
  // const auth = useTypedSelector((state) => state.auth);
  const { handleToken } = useActions();

  return (
    // @ts-ignore (children issue)
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={(token) => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY as string}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
