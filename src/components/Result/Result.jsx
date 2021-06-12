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
      refImages.forEach((targetImage) => {
        getMatchResults(targetImage, queryImage).then((data) => {
          console.log("trying to get data...", data);
          data &&
            dispatch({
              type: ADD_MATCH_RESULTS,
              payload: data,
            });
        });
      });
    }

    if (matchResults.length === maxRefImages) {
      getMatchResponseImages();
    }
  }, [matchResults]);

  const getMatchResponseImages = () => {
    console.log("gettingmatches...", matchResults);
    matchResults.forEach((result, index) => {
      const res = JSON.parse(result.response_json);
      if (res.recognitions[0][1] > 0) {
        console.log("got the match", refImages[index]);

        const reader = new FileReader();
        reader.onload = (e) => {
          reader.readAsDataURL(refImages[index]);
          setMatchedImage(reader.result);
        };
      }
    });
  };

  console.log(matchedImage);

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
        <Grid item xs={6} md={12}>
          {matchedImage ? (
            <img src={matchedImage} alt="matched" />
          ) : (
            <Typography variant="h4">No Matches Found</Typography>
          )}
        </Grid>
        <Grid item xs={6} md={12}>
          {queryImage && <img src={queryImage} alt="query" />}
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
