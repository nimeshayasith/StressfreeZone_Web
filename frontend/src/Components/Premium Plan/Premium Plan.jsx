import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "react-toastify/dist/ReactToastify.css";
import logo_icon from "../../assets/logo1.svg";
import { IoIosArrowBack } from "react-icons/io";


export default function Premier() {
  const stripe = useStripe();
  const elements = useElements();
  const [country, setCountry] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    try {
      const { error: createError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          name: cardholderName,
        },
      });

      if (createError) {
        throw createError;
      }

      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/payment/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          country: country,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Payment failed');
      }

      navigate("/successpage");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        color: "#ffffff",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
        backgroundColor: "#374151",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode: true,
  };

  return (
    <div className="h-screen w-full flex items-center justify-center px-20 py-14 bg-gray-800 overflow-hidden">
      <ToastContainer />
      <div className="flex flex-col self-start max-md:max-w-full w-1/2 ml-20">
      <div className="flex items-center w-full">
            <IoIosArrowBack
              className="text-white cursor-pointer text-xl mr-2"
              onClick={() => navigate(-1)} // Navigate to the previous page
            />
          
         
        {/* Logo and Heading */}
        <div className="flex gap-2.5 mt-5 self-start font-semibold text-white">
          <img src={logo_icon} alt="App Logo" className="w-16 h-16" />
          <div className="flex flex-col my-auto">
            
            <h1 className="text-2xl font-bold">CALM MIND</h1>
            <p className="mt-1.5 text-base">STRESS FREE ZONE</p>
          </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="flex flex-col items-start text-base font-medium max-w-[426px] text-slate-400 mt-10">
          <p className="mt-0 text-lg leading-loose">Review your payment details before proceeding.</p>
          <form onSubmit={handleSubmit} className="w-full">
            <label className="block mb-2">Cardholder Name</label>
            <input
              type="text"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              placeholder="John Doe"
              maxLength={50}
              className="w-full px-4 py-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400"
              required
            />

            <label className="block mb-2">Card Details</label>
            <div className="w-full px-4 py-2 mb-4 rounded bg-gray-700 text-white border border-gray-600">
              <CardElement options={cardElementOptions} />
            </div>

            <label className="block mb-2">Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="United States"
              maxLength={50}
              className="w-full px-4 py-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400"
              required
            />

            <button 
              type="submit" 
              className="w-full bg-teal-500 hover:bg-cyan-800 text-white py-3 rounded mt-3 disabled:opacity-50"
              disabled={processing || !stripe}
            >
              {processing ? "Processing..." : "Get Started"}
            </button>

            
          </form>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-1/2 text-right">
        {/* Keep existing annual membership component */}
        <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-slate-900 p-6">
          <h2 className="text-2xl text-slate-300 font-bold mb-4">Annual Membership</h2>
          <p className="text-lg text-gray-400 mb-4">7-Day Free Trial</p>
          <p className="text-xl font-semibold text-slate-700 mb-4">
            $5/month, billed annually at $50 after 7-day free trial cancel
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <span className="text-gray-300">
                Exclusive Access to Advanced Stress Management Tools
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <span className="text-gray-300">24/7 Expert Support and Guidance</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <span className="text-gray-300">Customized Wellness Plans</span>
            </li>
          </ul>
        
        </div>
      </div>
    </div>
  );
}