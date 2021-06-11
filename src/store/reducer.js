import {
  ADD_REF_IMAGE,
  ADD_QUERY_IMAGE,
  NEXT_STEP,
  PREVIOUS_STEP,
  RESET_STEP,
  UI_LOADING_START,
  UI_LOADING_END,
} from "./types";

export const initialState = {
  uiLoading: false,
  refImages: [], // [{id: 1, imageData: 'something'}]
  queryImage: null,
  stepCount: 1,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_REF_IMAGE:
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
    case RESET_STEP:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
