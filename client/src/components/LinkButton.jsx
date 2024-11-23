import React from 'react';
import { Link } from 'react-router-dom';

export const LinkButton = ({ to, text, className }) => {
  return (
    <Link
      to={to}
      className={`mt-4 inline-block px-6 py-2 text-white bg-[#292cc9] hover:bg-[#3643f4] rounded-lg text-center transition-colors duration-300 ease-in-out ${className}`}
    >
      {text}
    </Link>
  );
};
