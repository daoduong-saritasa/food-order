import Head from "expo-router/head";

export function ComponentWithHead({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <>
      <Head>
        <title>Lunch Hub {title ? `| ${title}` : ""}</title>
      </Head>
      {children}
    </>
  );
}