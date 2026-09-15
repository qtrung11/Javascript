import React from "react";

interface ButtonSampleAppProps {
  children?: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

export default function ButtonSampleApp({
  type = "button",
  children,
  className = "",
  ...restProps
}: ButtonSampleAppProps) {
  return (
    <button
      {...restProps}
      type={type}
      className={`rounded-md h-14 w-36 
        font-normal py-1 px-2 border
    border-gray-700
    text-gray-700
    text-2xl
    transition
    hover:bg-slate-700
    hover:text-white
    active:bg-slate-300 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
