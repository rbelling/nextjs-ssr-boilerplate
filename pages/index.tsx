import * as React from "react";
// @ts-ignore
import style from "../styles/index.scss";

const getName = (): string => "Visitor";

const Index = (): object => (
  <div className={style.heroBlock} onClick={() => window.alert(getName())}>
    <h1 className={style.heading}>Hello {getName()}, this is next.js</h1>
  </div>
);

export default Index;
