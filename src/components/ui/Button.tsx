import { CSSProperties } from 'react';

type ButtonProps = {
  text: string;
  style?: CSSProperties;
};

export default function Button({ text, style }: ButtonProps) {
  return (
    <button
      className='bg-btn-yellow hover:bg-hover-btn-yellow rounded-full text-lg py-2.5 px-9 font-semibold'
      style={style}
    >
      {text}
    </button>
  );
}
