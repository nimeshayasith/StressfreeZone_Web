
import React from 'react'


export default function login  ()  {

    return (
      <div className="flex overflow-hidden flex-wrap gap-10 px-20 py-14 bg-slate-700 max-md:px-5">
        <div className="flex flex-col self-start max-md:max-w-full">
          <div className="flex gap-2.5 self-start font-semibold text-white">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/363c2b4aec4280bd33da05c2608bb30d1200a94b70c31fc79be4b76cfb4257e6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/363c2b4aec4280bd33da05c2608bb30d1200a94b70c31fc79be4b76cfb4257e6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/363c2b4aec4280bd33da05c2608bb30d1200a94b70c31fc79be4b76cfb4257e6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/363c2b4aec4280bd33da05c2608bb30d1200a94b70c31fc79be4b76cfb4257e6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/363c2b4aec4280bd33da05c2608bb30d1200a94b70c31fc79be4b76cfb4257e6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/363c2b4aec4280bd33da05c2608bb30d1200a94b70c31fc79be4b76cfb4257e6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/363c2b4aec4280bd33da05c2608bb30d1200a94b70c31fc79be4b76cfb4257e6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/363c2b4aec4280bd33da05c2608bb30d1200a94b70c31fc79be4b76cfb4257e6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
              className="object-contain shrink-0 aspect-[1.09] rounded-[99px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[81px]"
            />
            <div className="flex flex-col my-auto">
              <div className="text-2xl">CALM MIND</div>
              <div className="mt-1.5 text-base">Stress Free Zone</div>
            </div>
          </div>
          <div className="flex flex-col items-start pl-20 mt-12 w-full text-base font-medium text-slate-400 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <div className="self-center text-3xl font-semibold text-white">
              Create an Account 👋
            </div>
            <div className="mt-5 text-lg leading-loose">
              Kindly fill in your details to create an account
            </div>
            <div className="mt-12 text-gray-500 max-md:mt-10">Your fullname*</div>
            <div className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5">
              Enter your name
            </div>
            <div className="mt-5 text-gray-500">Email address*</div>
            <div className="px-8 py-5 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5">
              Enter email address
            </div>
            <div className="mt-5 text-gray-500">Create password*</div>
            <div className="flex gap-10 px-6 py-5 mt-3 rounded-md border border-solid bg-zinc-800 border-slate-400 max-md:pl-5 max-md:max-w-full">
              <div>Create a password</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ee462243df25be38c73016ff887a14ad7d766ec095e297764ecf42774da854?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                className="object-contain shrink-0 self-start w-6 aspect-square"
              />
            </div>
            <div className="flex gap-3.5 mt-5 text-gray-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/651e6fc93ea9727ced87f450ffd86978ba3dbcd3f383a5f47f928145123e5833?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                className="object-contain shrink-0 self-start w-5 aspect-square"
              />
              <div className="basis-auto">I agree to terms & conditions</div>
            </div>
            <div className="px-16 py-6 mt-9 text-center text-white bg-teal-500 rounded-md max-md:px-5 max-md:max-w-full">
              Register Account
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21e3f378eeb4aed8ff54ba55efbd42e71a9a1e4a3ac17ed7b1dca8e29169e727?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
          className="object-contain w-full aspect-[0.75] max-md:max-w-full"
        />
      </div>
    );
    }


