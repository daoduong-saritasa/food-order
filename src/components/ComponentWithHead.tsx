import Head from "expo-router/head";
import { type ReactNode } from "react";

export function ComponentWithHead({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <>
      <Head>
        <title>
          Lunch Hub
          {title ? `| ${title}` : ""}
        </title>
      </Head>
      {children}
    </>
  );
}