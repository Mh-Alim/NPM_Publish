import { Button } from "@repo/ui/button";
import { Admin } from "@repo/ui/admin";
import { InputBox } from "@repo/ui/input-box";

export default function Home() {
  return (
    <div>
      <h1>Docs page</h1>
      <Button appName="docs">Docs page</Button>
      <Admin />
      <InputBox />
    </div>
  );
}
