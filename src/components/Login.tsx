import React from 'react';
import { loginFields } from '../data';
export const Login: React.FC<IButtonProps> = ({ handleClick }) => {
  return (
    <div className=" grid grid-cols-1 place-items-center">
      <section className="grid grid-cols-1 place-items-center max-w-screen-md bg-primary/80 py-5">
        <header className="mb-4">
          <h1 className="text-2xl text-tertiary uppercase mt-10 font-light">
            Login
          </h1>
        </header>
        <form className="px-5 flex flex-col justify-center items-center">
          {loginFields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
              className="mb-4 p-2 rounded-md bg-secondary text-white shadow-lg placeholder-white px-4"
            />
          ))}
          <button className="bg-[#0DF5F599] w-full p-2 text-white mb-2 uppercase rounded-md shadow-lg">
            Login
          </button>
        </form>
        <button onClick={handleClick} type="button" className="text-white">
          Don't have an account? <span className="text-tertiary">Signup</span>
        </button>
      </section>
    </div>
  );
};
