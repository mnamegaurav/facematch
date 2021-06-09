import { useStore } from "./store";

import Home from "./components/Home";
import QueryImage from "./components/QueryImage";
import Result from "./components/Result";
import NotFound from "./components/NotFound";

import { NEXT_STEP, PREVIOUS_STEP } from "./store/types";

function App() {
  const [state, dispatch] = useStore();

  const handleNextStep = () => {
    dispatch({ type: NEXT_STEP });
  };

  const handlePrevStep = () => {
    dispatch({ type: PREVIOUS_STEP });
  };

  // this switch-case will only return the
  // components depending on the step counts
  switch (state.stepCount) {
    case 1:
      return <Home handleNextStep={handleNextStep} />;
    case 2:
      return (
        <QueryImage
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      );
    case 3:
      return <Result handlePrevStep={handlePrevStep} />;
    default:
      return <NotFound />;
  }
}

export default App;
