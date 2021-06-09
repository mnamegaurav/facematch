import {
  ADD_REF_IMAGE,
  ADD_QUERY_IMAGE,
  NEXT_STEP,
  PREVIOUS_STEP,
  UI_LOADING_START,
  UI_LOADING_END,
} from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_REF_IMAGE:
      console.log(action.payload);
      return {
        ...state,
        refImages: [...state.refImages, action.payload],
      };
    case ADD_QUERY_IMAGE:
      return {
        ...state,
        queryImage: action.payload,
      };
    case NEXT_STEP:
      return {
        ...state,
        stepCount: state.stepCount + 1,
      };
    case PREVIOUS_STEP:
      return {
        ...state,
        stepCount: state.stepCount - 1,
      };
    case UI_LOADING_START:
      return {
        ...state,
        uiLoading: true,
      };
    case UI_LOADING_END:
      return {
        ...state,
        uiLoading: false,
      };
    default:
      return state;
  }
};
