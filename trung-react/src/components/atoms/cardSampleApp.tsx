import React from "react";
import ButtonSampleApp from "./buttonSampleApp";

interface CardSampleAppProps {
  children?: React.ReactNode;
  className?: string;
}
export default function CardSampleApp({
  children,
  className,
}: CardSampleAppProps) {
  return (
    <div className="mb-2 rounded-sm border border-gray-300 bg-white shadow-sm">
      <div
        className={`p-3 text-white font-bold text-2xl bg-yellow-400  border-b border-gray-300 ${className}`}
      >
        {children}
      </div>
      <div className="h-58px p-3">
        <ButtonSampleApp className="h-8 w-20 px-5 text-lg">
          Increment
        </ButtonSampleApp>
      </div>
    </div>
  );
}
