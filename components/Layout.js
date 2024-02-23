import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Apple News</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
