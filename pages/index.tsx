import React from "react";
import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";
import Link from "next/link";
// @ts-ignore
import markdownText from "../markdown/README.md";
// @ts-ignore
import style from "../styles/index.scss";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/dynamic"), {
  ssr: false
});

const Index = () => (
  <div className={style.heroBlock}>
    <h1 className={style.heading}>Hello human, this is SSR.</h1>
    <DynamicComponentWithNoSSR />
    <ReactMarkdown source={markdownText} escapeHtml={false} />
    <Link href="/about">
      <a>Click to visit another page</a>
    </Link>
  </div>
);

export default Index;
