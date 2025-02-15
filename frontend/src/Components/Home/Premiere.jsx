import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo_icon from "../../assets/logo1.svg"; // Update the path accordingly
import Meditation_2 from "../../assets/Meditation_2.svg"; // Update the path accordingly

export default function Premier() {
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [cardError, setCardError] = useState("");

  const navigate = useNavigate();

  // Luhn Algorithm for Credit Card Validation
  const isValidCardNumber = (num) => {
    let sum = 0;
    let shouldDouble = false;
    const digits = num.replace(/\D/g, "").split("").reverse().map(Number);

    for (let digit of digits) {
      let val = digit;
      if (shouldDouble) {
        val *= 2;
        if (val > 9) val -= 9;
      }
      sum += val;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidCardNumber(cardNumber)) {
      setCardError("Invalid card number. Please enter a real one.");
      toast.error("Invalid card number!");
      return;
    }

    console.log("Billing Details Submitted:", {
      cardNumber,
      expireDate,
      cvc,
      country,
      cardholderName,
    });

    // Navigate to the Success Page
    navigate("/successpage");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center px-20 py-14 bg-gray-800 overflow-hidden">
      <ToastContainer />
      <div className="flex flex-col self-start max-md:max-w-full w-1/2 ml-20">
        {/* Logo and Heading */}
        <div className="flex gap-2.5 mt-5 self-start font-semibold text-white">
          <img src={logo_icon} alt="App Logo" className="w-16 h-16" />
          <div className="flex flex-col my-auto">
            <h1 className="text-2xl font-bold">CALM MIND</h1>
            <p className="mt-1.5 text-base">STRESS FREE ZONE</p>
          </div>
        </div>

        {/* Payment Information */}
        <div className="flex flex-col items-start text-base font-medium max-w-[426px] text-slate-400 mt-10">
          <h1 className="text-3xl font-semibold text-white">Payment Information</h1>
          <p className="mt-0 text-lg leading-loose">Review your payment details before proceeding.</p>

          {/* Billing Form */}
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

            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 16); // Allow only numbers, max 16 digits
                setCardNumber(value);
                setCardError(""); // Reset error when typing
              }}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="w-full px-4 py-2 mb-2 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400"
              required
            />
            {cardError && <p className="text-red-500 text-sm mb-3">{cardError}</p>}

            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block mb-2">Expiration Date</label>
                <input
                  type="text"
                  value={expireDate}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "").slice(0, 4); // Allow only numbers, max 4 characters
                    if (value.length >= 2) value = value.slice(0, 2) + "/" + value.slice(2);
                    setExpireDate(value);
                  }}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400"
                  required
                />
              </div>

              <div className="w-1/2">
                <label className="block mb-2">Security Code (CVC)</label>
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 3); // Only numbers, max 3 digits
                    setCvc(value);
                  }}
                  placeholder="CVC"
                  maxLength={3}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400"
                  required
                />
              </div>
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

            <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded mt-3">
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-1/2 text-right">
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
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}