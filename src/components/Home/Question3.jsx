import React from "react";
import { AiOutlineBars } from "react-icons/ai";

const Question3 = ({
  options,
  setOptions,
  passage,
  setPassage,
  title,
  setTitle,
  rightOption,
  setRightOption,
}) => {
  const selectOption = (i, e) => {
    e.preventDefault();
    if (e.target.checked) {
      setRightOption(i);
    }
  };

  const addInput = (e) => {
    e.preventDefault();
    setOptions([...options, { option: "" }]);
  };

  const deleteInput = (i, e) => {
    e.preventDefault();
    const list = [...options];
    list.splice(i, 1);
    setOptions(list);
  };

  const handleChange = (i, e) => {
    e.preventDefault();
    const list = [...options];
    list[i].option = e.target.value;
    setOptions(list);
  };
  return (
    <div className="container">
      <h4>
        <AiOutlineBars />
        Question 3
      </h4>
      <div className="passage">
        <textarea
          onChange={(e) => setPassage(e.target.value)}
          placeholder="Type your Passage Here"
          required
        ></textarea>
      </div>

      <div className="allquestion">
        <div className="question">
          <h4>Question 3.1</h4>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="desc"
            placeholder="Type your Question Here"
          ></input>

          <div className="q_options">
            <div className="head">
              <h5>Make Options For Selection</h5>
              <p>
                (Note: Select the right option by Double Clicking on the radio
                button)
              </p>
            </div>
            {options.map((option, i) => (
              <div className="num_option" key={i}>
                <input
                  type="radio"
                  id={i}
                  name="option"
                  value={option.option}
                  onChange={(e) => selectOption(option.option, e)}
                  checked={rightOption === option.option}
                />

                <label htmlFor={i}>
                  <input
                    className="option"
                    type="text"
                    value={option.option}
                    placeholder="Type your Option Here"
                    onChange={(e) => handleChange(i, e)}
                    required
                  />
                </label>

                {options.length > 1 && (
                  <button
                    className="delete_btn"
                    onClick={(e) => deleteInput(i, e)}
                  >
                    Remove Field
                  </button>
                )}
              </div>
            ))}
            <button
              style={{
                color: "green",
                background: "rgb(0 128 0/10%)",
              }}
              className="add_btn"
              onClick={addInput}
            >
              Add Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question3;
