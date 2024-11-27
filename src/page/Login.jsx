import Button from "../components/Button";
import Panel from "../components/Panel";

export default function Login() {
  return (
    <Panel title="Welcome">
      <div>
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </div>
    </Panel>
  );
}