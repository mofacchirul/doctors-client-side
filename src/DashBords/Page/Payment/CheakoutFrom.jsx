import React, { useContext, useEffect, useState } from 'react';
import UserTanStack from '../../../Pages/MyAppointment/UserTanstack';
import Securecaxios from '../../../Axios/SecureAxios/SecureAxios';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AuthContext } from '../../../Componets/Provider/Auth';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';


const CheakoutFrom = () => {
    const [appointment,refetch] = UserTanStack();
const [clientSecret,setClientSecret]=useState('')
//    const navigate=useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [transactionId, setTransactionId] = useState('');
const axios= Securecaxios()
const {user}=useContext(AuthContext)
    const prices = appointment.map(item => item.price); 
    const totalPrice = prices.reduce((total, price) => total + price, 0);
    useEffect(() => {
  
            axios.post('/create-checkout-session', { price: totalPrice })
                .then(res => {
                    console.log("Stripe clientSecret:", res.data.clientSecret); // ✅ এটা দিয়ে চেক করো
                    setClientSecret(res.data.clientSecret);
                })
                .catch(error => console.error("Error fetching clientSecret:", error));
        
    }, [axios, totalPrice]);
    
    const handleSubmit = async (event) => {

        event.preventDefault();
        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        const {error,paymentMethod}= await stripe.createPaymentMethod({
            
            type:'card',
            card
        })
        // ...existing code...
console.log(paymentMethod); // Example usage
// ...existing code...
        if(error){
            setError(error.message)
        }
        else{
            setError('')
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
        const payment = {
            email: user.email,
            treansectionIds:paymentIntent.id,
            price: totalPrice,
            date: new Date(),
            appointmentIds: appointment.map(item => item._id),
            appointmentItemIds: appointment.map(item => item.doctorId),
            status: "pending",
        }


        const res = await axios.post("/payment", payment);

        if (res.data?.result?.insertedId) {
            refetch();
            toast.success("Payment SuccessFull")
            // navigate("/paymenthistory");
        }






        }

      
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
            <button  disabled={!stripe || !clientSecret} className="btn my-4 btn-block bg-blue-500 text-white" type="submit" >
                Pay
            </button>
<p className='text-red-500'>{error}</p>
<p className='text-green-500'> <span className='text-blue-400'>TransactionId</span> : {transactionId}</p>
        </form>
    );
};

export default CheakoutFrom;
