import React from "react";
// @ts-ignore
import style from "../styles/index.scss";
import dynamic from "next/dynamic";

const getName = (): string => "human";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/dynamic"), {
  ssr: false
});

const Index = () => (
  <div className={style.heroBlock} onClick={() => window.alert(getName())}>
    <h1 className={style.heading}>Hello {getName()}, this is rendered server-side.</h1>
    <DynamicComponentWithNoSSR />
  </div>
);

export default Index;
