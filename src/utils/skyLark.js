import axios from "axios";

import { SKY_LARK_API, SKY_LARK_API_KEY } from "../api";

export const getMatchResults = (targetImage, queryImage) => {
  const requestData = {
    target_image: targetImage,
    query_image: queryImage,
    key: SKY_LARK_API_KEY,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(SKY_LARK_API, JSON.stringify(requestData), config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("Error in Skylark API", err);
    });
};
