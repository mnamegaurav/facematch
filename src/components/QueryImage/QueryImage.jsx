import React from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";

import ImageDropzone from "../common/ImageDropzone";
import { getCroppedFace } from "../../utils/faceApi";
import { ADD_QUERY_IMAGE } from "../../store/types";
import { useStore } from "../../store";

function QueryImage(props) {
  const { handleNextStep, handlePrevStep } = props;
  const [state, dispatch] = useStore();

  const handleChange = (loadFiles) => {
    // save the image to global state
    dispatch({
      type: ADD_QUERY_IMAGE,
      payload: getCroppedFace(loadFiles[0]),
    });
  };

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
          <ImageDropzone
            onChange={handleChange}
            maxFiles={1}
            dropzoneText="Click or Drop a File to Upload. (Max Limit 1 Files of 5 MB Only"
          />
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextStep}
              disabled={!state.queryImage}
            >
              Next
            </Button>
          </Grid>
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

QueryImage.propTypes = {
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
};

export default QueryImage;
