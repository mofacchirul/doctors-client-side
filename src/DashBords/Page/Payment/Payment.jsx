import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheakoutFrom from "./CheakoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
    return (
        <div className="py-8 lg:py-12 lg:max-w-1/2 max-w-2/3  mx-auto">
            <Elements stripe={stripePromise}>
            <CheakoutFrom></CheakoutFrom>
           
            </Elements>
        </div>
    );
};

export default Payment;