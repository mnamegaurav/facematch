import React from "react";
import PropTypes from "prop-types";
import { DropzoneArea } from "material-ui-dropzone";

function ImageDropzone(props) {
  const { onChange, maxFiles, dropzoneText } = props;

  return (
    <DropzoneArea
      clearOnUnmount={false}
      filesLimit={maxFiles}
      onChange={(loadedFiles) => onChange(loadedFiles)}
      maxFileSize={5000000}
      dropzoneText={dropzoneText}
      acceptedFiles={["image/jpeg, image/png"]}
      showPreviews={true}
      showPreviewsInDropzone={false}
      showFileNamesInPreview={true}
    />
  );
}

ImageDropzone.propTypes = {
  onChange: PropTypes.func.isRequired,
  maxFiles: PropTypes.number.isRequired,
  dropzoneText: PropTypes.string.isRequired,
};

export default ImageDropzone;
