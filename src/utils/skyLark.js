import axios from "axios";

import { SKY_LARK_API, SKY_LARK_API_KEY } from "../api";
import { ADD_INITIAL_RESPONSES, ADD_MATCH_RESULTS } from "../store/types";

export const getMatchResults =
  (targetImage, queryImage) => async (dispatch) => {
    const formData = new FormData();
    formData.append("target_image", targetImage);
    formData.append("query_image", queryImage);
    formData.append("key", SKY_LARK_API_KEY);

    const config = {
      headers: {
        accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .post(SKY_LARK_API, formData, config)
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADD_INITIAL_RESPONSES,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("Error in Skylark API POST", err);
      });
  };

export const getMatchResultById = (id) => (dispatch) => {
  const config = {
    headers: {
      accept: "application/json",
    },
    params: {
      key: SKY_LARK_API_KEY,
    },
  };

  axios
    .get(`${SKY_LARK_API}${id}`, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: ADD_MATCH_RESULTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Error in Skylark API GET", err);
    });
};
