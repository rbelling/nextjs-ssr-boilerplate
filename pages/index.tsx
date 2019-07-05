import * as React from "react";
import "../styles/index.css";

const getName = (): string => "42";

const Index = (): any => (
  <div className="hero-block">
    <h1 className="heading">Hello {getName()}!!!</h1>
  </div>
);
export default Index;
