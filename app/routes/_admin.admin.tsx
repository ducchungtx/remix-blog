import { Outlet } from "@remix-run/react";

function AdminScreen() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AdminScreen;
