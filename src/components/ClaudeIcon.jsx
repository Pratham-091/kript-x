import React from 'react';

export default function ClaudeIcon({ size = 28, className = "", style = {} }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={style}
    >
      <path 
        d="M12 2C12.5 7.5 16.5 11.5 22 12C16.5 12.5 12.5 16.5 12 22C11.5 16.5 7.5 12.5 2 12C7.5 11.5 11.5 7.5 12 2Z" 
        fill="#D97757" 
      />
      <circle cx="12" cy="12" r="3" fill="#FFE2D8" />
    </svg>
  );
}
