import axios from "axios";

import { SKY_LARK_API, SKY_LARK_API_KEY } from "../api";

export const getMatchResultById = async (id) => {
  const config = {
    headers: {
      accept: "application/json",
    },
    params: {
      key: SKY_LARK_API_KEY,
    },
  };

  try {
    const { data } = await axios.get(`${SKY_LARK_API}${id}`, config);
    if (data && data.status === "pending") {
      getMatchResultById(data.id);
    } else if (data.status === "success") {
      return data;
    }
  } catch (err) {
    console.log("Error in Skylark API GET", err);
  }
};

export const getMatchResults = async (targetImage, queryImage) => {
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

  try {
    const { data } = await axios.post(SKY_LARK_API, formData, config);
    if (data && data.id) {
      const res = await getMatchResultById(data.id);
      return res;
    }
  } catch (err) {
    console.log("Error in Skylark API POST", err);
  }
};
