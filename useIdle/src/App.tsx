import "./App.css";
import useIdle from "./useIdle";

function App() {
  const status = useIdle(5000);
  console.log(status);
  return (
    <>
      <div>Idle custom hooks</div>

      <span>User is on {status ? "true" : "false"}</span>
    </>
  );
}

export default App;
