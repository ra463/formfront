import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Createform.scss";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import { useDispatch, useSelector } from "react-redux";
import { createformAction } from "../../redux/actions/createformaction";
import { toast } from "react-hot-toast";
import PulseLoader from "react-spinners/PulseLoader";

const Createform = () => {
  const { error, message, loading } = useSelector((state) => state.form);

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([{ option: "" }]);
  const [answer, setAnswer] = useState([{ option: "" }]);
  const [rightAnswer, setRightAnswer] = useState([{ option: "" }]);
  const [selectedText, setSelectedText] = useState([]);
  const [sentence, setSentence] = useState("");
  const [passage, setPassage] = useState("");
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([{ option: "" }]);
  const [rightOption, setRightOption] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      createformAction(
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
      )
    );
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, dispatch]);

  return (
    <>
      <Header />
      <div className="create_form">
        <div className="first">
          <h1>Create Quiz Form</h1>
          <p>
            Here you can create your own quiz. You can add as many questions as
            you want. You can also add options for each question.
          </p>
        </div>
        <div className="second">
          <form onSubmit={handleSubmit}>
            <Question1
              description={description}
              setDescription={setDescription}
              category={category}
              setCategory={setCategory}
              answer={answer}
              setAnswer={setAnswer}
              rightAnswer={rightAnswer}
              setRightAnswer={setRightAnswer}
            />
            <Question2
              sentence={sentence}
              setSentence={setSentence}
              selectedText={selectedText}
              setSelectedText={setSelectedText}
            />
            <Question3
              options={options}
              setOptions={setOptions}
              passage={passage}
              setPassage={setPassage}
              title={title}
              setTitle={setTitle}
              rightOption={rightOption}
              setRightOption={setRightOption}
            />

            <div className="btn">
              {loading ? (
                <button disabled={loading} type="submit" className="load">
                  <PulseLoader size="10px" color="white" />
                </button>
              ) : (
                <button className="active" type="submit">
                  Create Form
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Createform;
