import React from "react";
import PropTypes from "prop-types";
import { Grid, Button, Typography } from "@material-ui/core";

import { useStore } from "../../store";
import { getMatchResults } from "../../utils/skyLark";
import { ADD_MATCH_RESULTS } from "../../store/types";

function Result(props) {
  const { handleReset } = props;
  const [state, dispatch] = useStore();

  const [matchedImage, setMatchedImage] = React.useState(null);

  const { refImages, queryImage, maxRefImages, matchResults } = state;

  React.useEffect(() => {
    if (matchResults.length < maxRefImages && !matchedImage) {
      refImages.forEach(async (targetImage) => {
        const { data } = await getMatchResults(targetImage, queryImage);
        data &&
          dispatch({
            type: ADD_MATCH_RESULTS,
            payload: data,
          });
      });
    }

    if (matchResults.length === maxRefImages) {
      getMatchResponseImages();
    }
  }, [matchResults]);

  const getMatchResponseImages = () => {
    matchResults.forEach((result, index) => {
      const res = JSON.parse(result.response_json);
      if (res.recognitions[0][1] > 0) {
        console.log("got the match", refImages[index]);
        setMatchedImage(URL.createObjectURL(refImages[index]));
      }
    });
  };

  return (
    <div>
      <Grid
        container
        spacing={5}
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="h4">---Results---</Typography>
        </Grid>
        <Grid item xs={6} lg={12}>
          <Typography variant="h5">Matched Image</Typography>
          {matchedImage ? (
            <img src={matchedImage} alt="matched" />
          ) : (
            <Typography variant="h4">No Matches Found</Typography>
          )}
        </Grid>
        <Grid item xs={6} lg={12}>
          <Typography variant="h5">Query Image</Typography>
          {queryImage && (
            <img
              src={URL.createObjectURL(queryImage)}
              alt="query"
              height="200"
            />
          )}
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
