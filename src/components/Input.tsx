/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

interface InputFieldProps {
  id: string;
  type: string;
  name: string;
  label: string;
  value?: string;
  errorMessage?: string;
  fronticon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder:string;
}

const Input = forwardRef<HTMLInputElement, InputFieldProps>(
  ({
    id,
    type,
    name,
    value = "",
    onChange,
    label,
    errorMessage,
    fronticon,
    placeholder,
  }) => {
    return (
      <div>
        <div className="mb-2 md:mb-3">
          {/* input */}
          <div className={`relative w-full`}>
            {/* front icon */}
            {fronticon && (
              <div className="z-40 absolute mt-3 cursor-pointer md:text-lg">
                {fronticon}
              </div>
            )}
            {/* input backicon */}
            <input
              id={id}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              className={`w-full p-2 border rounded-md top-3`}
              placeholder={placeholder}
            />

            {/* input label */}
            <label
              htmlFor={id}
              className={`flex select-none pointer-events-none absolute
                peer-placeholder-shown:text-primary-purple leading-tight 
               peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 
               transition-all -top-5 left-2`}
            >
              {label}
            </label>
          </div>

          {/* error message */}
          {errorMessage && (
            <div
              className={`flex ml-1 font-Vollkorn text-pink-700 text-sm sm:text-md 3xl:text-xl 4xl:text-2xl`}
            >
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
