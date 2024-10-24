import * as React from "react";
import { SVGProps } from "react";
const House = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#141C0D"
      fillRule="evenodd"
      d="M18 8.833V17.5a1.5 1.5 0 0 1-1.5 1.5h-3.75a1.5 1.5 0 0 1-1.5-1.5v-3.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v3.75a1.5 1.5 0 0 1-1.5 1.5H1.5A1.5 1.5 0 0 1 0 17.5V8.833c0-.42.176-.82.485-1.105l7.5-7.076.01-.01a1.5 1.5 0 0 1 2.029.01l7.5 7.076A1.5 1.5 0 0 1 18 8.833Z"
      clipRule="evenodd"
    />
  </svg>
);
export default House;
