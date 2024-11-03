import React, { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default BaseLayout;
