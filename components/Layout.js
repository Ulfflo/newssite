import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Daily News</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
