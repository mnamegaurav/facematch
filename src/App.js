import { useStore } from "./store";

function App() {
  const [state, dispatch] = useStore();
  return <div className="App">{state.stepCount}</div>;
}

export default App;
