import React from 'react';
import Footer from './Footer';

const InputField = ({ label, placeholder, type = 'text' }) => (
  <div className="mt-4 w-full">
    <label className="text-xl font-semibold text-white">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="self-stretch px-2 py-3 text-lg leading-8 bg-white text-neutral-400 w-full"
    />
  </div>
);

const ContactUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-slate-700">
      <div className="flex flex-col items-center justify-center px-20 py-32 max-md:px-5 max-md:py-24">
        <div className="flex gap-14 mb-16 w-full max-w-[1200px] max-md:flex-col">
          {/* Left side - Description */}
          <div className="flex flex-col w-1/3 max-md:w-full">
            <div className="flex flex-col mt-0 max-md:mt-10">
              <h2 className="self-start text-xl font-semibold tracking-widest text-fuchsia-300">
                OUR CONTACT
                <hr/>
              </h2>

              <h1 className="self-start mt-12 text-6xl leading-snug text-white max-md:mt-10 max-md:text-4xl">
                Get in touch with us
              </h1>
              <p className="mt-8 text-lg leading-8 text-neutral-400 max-md:mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                tellus leo, vestibulum a ipsum sed, suscipit sodales ex.
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex w-2/3 -mt-14 flex-col bg-black bg-opacity-40 border border-white px-10 py-20 max-md:w-full max-md:mt-10">
            <form className="flex flex-col w-full text-2xl font-semibold text-white">
              {/* First Name and Last Name in the same row */}
              <div className="flex gap-9 w-full">
                <InputField label="First Name" placeholder="First Name" />
                <InputField label="Last Name" placeholder="Last Name" />
              </div>
              {/* Email and Message in separate rows */}
              <div>
                <InputField label="Email" placeholder="Your Email" type="email" />
                <InputField
                  label="Message"
                  placeholder="Type Your Message Here"
                  type="text"
                />
              </div>

              <button className="px-10 py-5 mt-8 text-lg font-medium tracking-wider bg-teal-500 w-[278px]">
                Send Message
              </button>
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
