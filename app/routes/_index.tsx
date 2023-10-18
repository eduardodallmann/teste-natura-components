import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Link to="/styled">Go to styled page</Link>
      <br />
      <Link to="/natura">Go to natura page</Link>
      <br />
      <Link to="/emotion">Go to emotion page</Link>
    </>
  );
}
