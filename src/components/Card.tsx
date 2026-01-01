import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';

  return (
    <div
      className={`bg-white rounded-2xl shadow-md transition-all duration-300 ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
