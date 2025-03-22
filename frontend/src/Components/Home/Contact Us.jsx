import React, {useRef} from 'react';
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";

const ContactUsPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gyn8v33', 'template_b4620ba', form.current, {
        publicKey: '2qJtg-gH2flJJf0Lz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message sent successfully!", { position: "top-right" });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error(error.response?.data?.message || "Message sending failed!", { position: "top-right" });
        },
      );
  };
  return (
    <div className="flex flex-col min-h-screen justify-between bg-slate-700">
      <ToastContainer autoClose={2000} />
      <div className="flex flex-col items-center justify-center px-20 py-32 max-md:px-5 max-md:py-24">
        <div className="flex gap-14 mb-16 w-full max-w-[1200px] max-md:flex-col">
          {/* Left side - Description */}
          <div className="flex flex-col w-1/3 max-md:w-full">
            <div className="flex flex-col mt-20 max-md:mt-10">
              <h2 className="self-start text-xl font-semibold tracking-widest text-fuchsia-300">
                OUR CONTACT
                <hr/>
              </h2>

              <h1 className="self-start mt-12 text-6xl leading-snug text-white max-md:mt-10 max-md:text-4xl">
                Get in touch with us
              </h1>
              <p className="mt-8 text-lg leading-8 text-neutral-400 max-md:mt-5">
              "Have any questions or need assistance? Feel free to reach out to us! We're here to help and 
              will get back to you as soon as possible. Simply fill out the form, and we'll be in touch shortly."
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex w-2/3 flex-col bg-black bg-opacity-40 border border-white px-10 py-20 max-md:w-full max-md:mt-10">
          
            <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full text-2xl font-semibold text-white">
              <label>Name</label>
              <input type="text" name="user_name" className="p-2 h-10 text-xl text-black rounded-sm"/>
              <label>Email</label>
              <input type="email" name="user_email" className="p-2 h-10 text-xl text-black rounded-sm"/>
              <label>Message</label>
              <textarea name="message" className="p-2 h-40 text-xl text-black rounded-sm"/>
              <input type="submit" value="Send" className="px-10 py-5 mt-8 text-lg font-medium tracking-wider bg-teal-500 w-[278px] rounded-md"/>
            </form>
          </div>
        </div>
      </div>
      {/* Footer without any margin */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default ContactUsPage;
