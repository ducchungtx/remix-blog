import { Outlet } from "@remix-run/react";

import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";

function PublicLayout() {
  return (
    <div>
      <Header />
      <main className=" mx-auto px-4 sm:px-6 lg:px-4 mt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;