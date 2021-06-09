import { useStore } from "./store";

import Home from "./components/Home";
import QueryImage from "./components/QueryImage";
import Result from "./components/Result";
import NotFound from "./components/NotFound";

function App() {
  const [state] = useStore();

  // this switch-case will only return the
  // components depending on the step counts
  switch (state.stepCount) {
    case 1:
      return <Home />;
    case 2:
      return <QueryImage />;
    case 3:
      return <Result />;
    default:
      return <NotFound />;
  }
}

export default App;
