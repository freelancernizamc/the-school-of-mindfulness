import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
import Navbar from "../../Shared/Navbar/Navbar";

// TODO: provide publishable key 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <Navbar />
            <SectionTitle subHeading="Please Process Your Payment" heading="Your Payment" ></SectionTitle>
            <div className="mx-20">
                <Elements stripe={stripePromise}>

                    <CheckoutForm cart={cart} price={price} />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;