import React from "react";
type IconProps = {
  width?: string;
  height?: string;
};
export const IconArrowForward = (props: IconProps) => {
  const { width = "18px", height = "18px" } = props;
  return (
    <>
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M268 112l144 144-144 144M392 256H100"
        />
      </svg>
    </>
  );
};
