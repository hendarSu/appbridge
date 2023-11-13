// components/Layout.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>WooBridge</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      {children}
    </main>
  </div>
);

export default Layout;
