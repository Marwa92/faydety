import React from "react";
import Theme from "./theme";

export default () => (
  <style>
    {`
        body {
            color: #444;
            margin: 0;
            font-size: 14px;
            background-color: #fff;
            font-family: ${Theme.fonts.sans}
        }

    `}
  </style>
);
