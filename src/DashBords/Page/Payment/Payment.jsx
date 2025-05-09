import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheakoutFrom from "./CheakoutFrom";



const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
    
    return (
        <div className="mt-20">
            <Elements stripe={stripePromise}>
            <CheakoutFrom></CheakoutFrom>
           
            </Elements>
        </div>
    );
};

export default Payment;