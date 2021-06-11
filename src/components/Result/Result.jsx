import React from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";

import { useStore } from "../../store";
import { getMatchResults } from "../../utils/skyLark";

function Result(props) {
  const { handlePrevStep } = props;
  const [state] = useStore();

  React.useEffect(() => {
    if (state.refImages.length === 2 && state.queryImage) {
      state.refImages.forEach((targetImage) => {
        getMatchResults(targetImage, state.queryImage);
        // get the match results,
        // if good match results then show
        // else show no results
      });
    }
  }, [state.refImages, state.queryImage]);

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={12}>
          <img src={state.queryImage && state.queryImage.path} alt="query" />
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePrevStep}
            >
              Prev
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Result.propTypes = {
  handlePrevStep: PropTypes.func.isRequired,
};

export default Result;
