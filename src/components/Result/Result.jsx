import React from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";

import { useStore } from "../../store";

function Result(props) {
  const { handlePrevStep } = props;
  const [state] = useStore();

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
