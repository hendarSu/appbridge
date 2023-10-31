// components/Layout.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <div>
    <main>{children}</main>
  </div>
);

export default Layout;
