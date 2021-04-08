import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="18"
      ariaHidden="true"
      data-icon="sort-up"
      data-prefix="fas"
      viewBox="0 0 320 512"
    >
      <path
        fill="#B2B1B1"
        d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
