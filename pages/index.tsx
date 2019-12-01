import React from "react";
import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";
import Link from "next/link";
// @ts-ignore
import style from "../styles/index.scss";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/dynamic"), {
  ssr: false
});
// eslint-disable-next-line @typescript-eslint/no-var-requires
const input = require("../markdown/README.md");

const Index: React.FC = () => (
  <div className={style.heroBlock}>
    <h1 className={style.heading}>This heading is server-side rendered.</h1>
    <DynamicComponentWithNoSSR />
    <ReactMarkdown source={input} escapeHtml={false} />
    <Link href="/about">
      <a>Click to visit another page</a>
    </Link>
  </div>
);

export default Index;
