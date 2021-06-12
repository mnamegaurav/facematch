import {
  ADD_REF_IMAGE,
  ADD_QUERY_IMAGE,
  NEXT_STEP,
  PREVIOUS_STEP,
  RESET_STEP,
  UI_LOADING_START,
  UI_LOADING_END,
  ADD_MATCH_RESULTS,
} from "./types";

export const initialState = {
  uiLoading: false,
  refImages: [], // [{id: 1, imageData: 'something'}]
  queryImage: null,
  stepCount: 1,
  maxRefImages: 2,
  matchResults: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_REF_IMAGE:
      return {
        ...state,
        refImages: action.payload,
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
    case ADD_MATCH_RESULTS:
      return {
        ...state,
        matchResults: [...state.matchResults, action.payload],
      };
    default:
      return state;
  }
};
