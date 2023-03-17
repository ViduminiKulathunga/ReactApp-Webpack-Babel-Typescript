import React from "react";

type TypograpyProps = React.HTMLAttributes<HTMLElement> & {
  varient?: "h1" | "h2";
  children: React.ReactNode;
};

const Typograpy = ({ varient, children }: TypograpyProps) => {
  return <>{varient === "h1" ? <h1>{children}</h1> : <h2>{children}</h2>}</>;
};

export default Typograpy;
