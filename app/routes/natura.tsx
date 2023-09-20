import {
  Button,
  Input,
  ThemeProvider,
  buildTheme,
} from "@naturacosmeticos/natds-react";
import { Link } from "@remix-run/react";

export default function Index() {
  const theme = buildTheme("natura", "light");

  return (
    <>
      <ThemeProvider theme={theme}>
        <Input id="aa" value="abc" />
        <Button onClick={() => console.log("click")} variant="contained">
          Hello World
        </Button>
        <Link to="/">Back</Link>
      </ThemeProvider>
    </>
  );
}
