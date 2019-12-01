import React from "react";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const style = require("../styles/index.scss");

export default function Index() {
  return (
    <div>
      <p className={style["-border"]}>
        This is a dynamic component rendered client-side only.
      </p>
    </div>
  );
}
