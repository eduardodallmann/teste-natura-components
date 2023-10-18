import { Link } from "@remix-run/react";
import { BoxEmotion } from "~/components/box-emotion";

export default function Index() {
  return (
    <>
      <BoxEmotion>teste</BoxEmotion>
      <Link to="/">Back</Link>
    </>
  );
}
