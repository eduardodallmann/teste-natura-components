import { Link } from "@remix-run/react";
import { BoxStyled } from "~/components/box-styled";

export default function Index() {
  return (
    <>
      <BoxStyled>teste</BoxStyled>
      <Link to="/">Back</Link>
    </>
  );
}
