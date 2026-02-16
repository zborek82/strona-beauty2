import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  // Zmiana: usunięcie rounded-full na rzecz rounded-none (ostre krawędzie)
  const baseStyles = "px-10 py-4 font-medium transition-all duration-500 tracking-[0.2em] uppercase text-xs relative overflow-hidden group";
  
  const variants = {
    primary: "bg-amber-500 text-neutral-950 hover:bg-white hover:text-black border border-amber-500",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-white",
    text: "px-0 py-2 border-b border-amber-500 text-amber-500 hover:text-white hover:border-white w-fit px-0"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};