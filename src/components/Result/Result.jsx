import React from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";

import { useStore } from "../../store";
import { getMatchResults, getMatchResultById } from "../../utils/skyLark";

function Result(props) {
  const { handleReset } = props;
  const [state, dispatch] = useStore();

  const {
    refImages,
    queryImage,
    maxRefImages,
    initialResponses,
    matchResults,
  } = state;

  React.useEffect(() => {
    if (
      refImages.length === maxRefImages &&
      queryImage &&
      initialResponses.length <= maxRefImages &&
      matchResults.length <= maxRefImages
    ) {
      refImages.forEach((targetImage) => {
        getMatchResults(targetImage, queryImage)(dispatch);
        // get the match results,
        // if good match results then show
        // else show no results
      });
    }

    if (
      initialResponses.length >= 1 &&
      initialResponses.length <= maxRefImages
    ) {
      initialResponses.forEach((response) => {
        getMatchResultById(response.id)(dispatch);
      });
    }
  }, [
    refImages,
    queryImage,
    maxRefImages,
    matchResults,
    initialResponses,
    dispatch,
  ]);

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
          <img src={state.queryImage && queryImage.path} alt="query" />
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" onClick={handleReset}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Result.propTypes = {
  handleReset: PropTypes.func.isRequired,
};

export default Result;
