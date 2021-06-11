import Home from "./components/Home";
import QueryImage from "./components/QueryImage";
import Result from "./components/Result";
import NotFound from "./components/NotFound";

import { NEXT_STEP, RESET_STEP } from "./store/types";
import { useStore } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { stepCount } = state;

  console.log(state);

  const handleNextStep = () => {
    dispatch({ type: NEXT_STEP });
  };

  const handleReset = () => {
    dispatch({ type: RESET_STEP });
  };

  // this switch-case will only return the
  // components depending on the step counts
  switch (stepCount) {
    case 1:
      return <Home handleNextStep={handleNextStep} />;
    case 2:
      return <QueryImage handleNextStep={handleNextStep} />;
    case 3:
      return <Result handleReset={handleReset} />;
    default:
      return <NotFound />;
  }
}

export default App;
