import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
// @ts-ignore
import style from "../styles/index.scss";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/dynamic"), {
  ssr: false
});

const Index: React.FC = () => (
  <div className={style.heroBlock}>
    <h1 className={style.heading}>Hello human, this is SSR.</h1>
    <DynamicComponentWithNoSSR />
    <Link href="/about">
      <a>Click to visit another page</a>
    </Link>
  </div>
);

export default Index;
