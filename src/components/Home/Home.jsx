import React from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";

import ImageDropzone from "../common/ImageDropzone";
import { ADD_REF_IMAGE } from "../../store/types";
import { useStore } from "../../store";

function Home(props) {
  const { handleNextStep } = props;
  const [, dispatch] = useStore();

  const handleChange = (loadFiles) => {
    // save all the images to global state
    loadFiles.forEach((image) => {
      dispatch({
        type: ADD_REF_IMAGE,
        payload: image,
      });
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
            maxFiles={2}
            dropzoneText="Click or Drop a File to Upload. (Max Limit 2 Files of 5 MB each Only"
          />
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextStep}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  handleNextStep: PropTypes.func.isRequired,
};

export default Home;
