import React, { HtmlHTMLAttributes } from 'react';

export interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  /** enter text */
  children: React.ReactNode;
  /** select a particular variant */
  variant: 'primary' | 'secondary';
}

/** This is a button */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        color: 'white',
        border: 'none',
        backgroundColor: variant === 'primary' ? 'red' : 'green',
        cursor: 'pointer',
        borderRadius: '5px',
        padding: '5px 10px',
      }}
    >
      {children}
    </button>
  );
};
