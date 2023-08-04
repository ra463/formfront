import axios from "axios";
import { server } from "../store";

export const createformAction =
  (
    description,
    category,
    answer,
    rightAnswer,
    selectedText,
    sentence,
    passage,
    title,
    options,
    rightOption
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "createformRequest" });

      const { data } = await axios.post(
        `${server}/create`,
        {
          description,
          category,
          answer,
          rightAnswer,
          selectedText,
          sentence,
          passage,
          title,
          options,
          rightOption,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({ type: "createformSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "createformFail",
        payload: error.response.data.message,
      });
    }
  };

export const gerFormDataAction = () => async (dispatch) => {
  try {
    dispatch({ type: "getFormDataRequest" });

    const { data } = await axios.get(`${server}/getdata`, {
      withCredentials: true,
    });

    dispatch({ type: "getFormDataSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getFormDataFail",
      payload: error.response.data.message,
    });
  }
};
