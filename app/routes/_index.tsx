import type { MetaFunction } from "@remix-run/node";

import Hero from "~/components/Profile/Hero";
// import { Link } from "@remix-run/react";

// import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  // const user = useOptionalUser();
  return (
    <div>
      {/* Hero */}
      <Hero />
    </div>
  );
}
