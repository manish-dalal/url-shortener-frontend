import React from "react";

export default function Loading() {
  return (
    <svg
      style={{
        margin: "auto",
        background: "rgba(241, 242, 243, 0)",
        display: "block"
      }}
      width="30px"
      height="30px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx={50}
        cy={50}
        fill="none"
        stroke="#1d0e0b"
        strokeWidth={10}
        r={35}
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(41.5375 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
}
