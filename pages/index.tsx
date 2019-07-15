import * as React from "react";
// @ts-ignore
import style from "../styles/index.css";

const getName = (): string => "42";

const Index = (): object => (
  <div className={style["hero-block"]}>
    <h1 className={style.heading}>Hello {getName()}!!!</h1>
  </div>
);
export default Index;
