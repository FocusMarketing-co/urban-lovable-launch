import React from 'react';

interface GeometricPatternProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const GeometricPattern: React.FC<GeometricPatternProps> = ({ 
  className = "", 
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  return (
    <div className={`flex ${className}`}>
      <div className="grid grid-cols-3 gap-1">
        <div className={`${sizeClasses[size]} bg-brand-blue transform rotate-45`}></div>
        <div className={`${sizeClasses[size]} bg-brand-pink transform rotate-45`}></div>
        <div className={`${sizeClasses[size]} bg-brand-blue transform rotate-45`}></div>
        <div className={`${sizeClasses[size]} bg-brand-pink transform rotate-45`}></div>
        <div className={`${sizeClasses[size]} bg-brand-blue transform rotate-45`}></div>
        <div className={`${sizeClasses[size]} bg-brand-pink transform rotate-45`}></div>
        <div className={`${sizeClasses[size]} bg-brand-blue transform rotate-45`}></div>
        <div className={`${sizeClasses[size]} bg-brand-pink transform rotate-45`}></div>
        <div className={`${sizeClasses[size]} bg-brand-blue transform rotate-45`}></div>
      </div>
    </div>
  );
};

export default GeometricPattern;