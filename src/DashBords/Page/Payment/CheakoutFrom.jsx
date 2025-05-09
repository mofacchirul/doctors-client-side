import React, { useContext, useEffect, useState } from 'react';
import UserTanStack from '../../../Pages/MyAppointment/UserTanstack';
import Securecaxios from '../../../Axios/SecureAxios/SecureAxios';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AuthContext } from '../../../Componets/Provider/Auth';

const CheakoutFrom = () => {
    const [appointment] = UserTanStack();

    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const axios = Securecaxios()

    const prices = appointment.map(item => item.price); 
    const totalPrice = prices.reduce((total, price) => total + price, 0);
    useEffect(() => {
        if (totalPrice > 0) {
            axios.post('/create-checkout-session', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch(error => console.error("Error fetching clientSecret:", error));
        }
    }, [axios, totalPrice]);

    console.log("Prices: ", prices);
    console.log("Total price: ", totalPrice);
    console.log("Doctor appointments: ", appointment);
    const handleSubmit = async (event) => {

        event.preventDefault();
        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setErrorMessage(error.message);
            return;
        } else {
            setErrorMessage('');
        }

        const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous",
                },
            },
        });

        if (cardError) {
            console.log("Confirm Error", cardError);
            return;
        }

        if (paymentIntent?.status === "succeeded") {
            setTransactionId(paymentIntent.id);

          
    };
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#FF8C00",
                            "::placeholder": { color: "#D2691E" },
                        },
                        invalid: { color: "#00FFFF" },
                    },
                }}
            />
            <button className="btn mt-4 btn-white" type="submit" >
                Pay
            </button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {transactionId && <p className="text-green-600">Transaction ID: {transactionId}</p>}
        </form>
    );
};

export default CheakoutFrom;
