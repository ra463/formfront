/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";

const Question1 = ({
  setDescription,
  category,
  setCategory,
  answer,
  setAnswer,
  rightAnswer,
  setRightAnswer,
}) => {
  const dargCard = useRef(null);
  const dargOverCard = useRef(null);
  const dargCard1 = useRef(null);
  const dargOverCard1 = useRef(null);

  const sortHandler = () => {
    let items = [...category];

    const dragItem = items.splice(dargCard.current, 1)[0];
    items.splice(dargOverCard.current, 0, dragItem);

    dargCard.current = null;
    dargOverCard.current = null;

    setCategory(items);
  };

  const sortHandler1 = () => {
    let items = [...answer];

    const dragItem = items.splice(dargCard1.current, 1)[0];
    items.splice(dargOverCard1.current, 0, dragItem);

    dargCard1.current = null;
    dargOverCard1.current = null;

    setAnswer(items);
  };

  const addInput = (e) => {
    e.preventDefault();
    setCategory([...category, { option: "" }]);
  };

  const addAnswer = (e) => {
    e.preventDefault();
    setAnswer([...answer, { option: "" }]);
  };

  const addOption = (e) => {
    e.preventDefault();
    setRightAnswer([...rightAnswer, { option: "" }]);
  };

  const deleteInput = (i, e) => {
    e.preventDefault();
    const list = [...category];
    list.splice(i, 1);
    setCategory(list);
  };

  const deleteAnswer = (i, e) => {
    e.preventDefault();
    const list = [...answer];
    list.splice(i, 1);
    setAnswer(list);
  };

  const deleteOption = (i, e) => {
    e.preventDefault();
    const list = [...rightAnswer];
    list.splice(i, 1);
    setRightAnswer(list);
  };

  const handleChange1 = (i, e) => {
    e.preventDefault();
    const list = [...category];
    list[i].option = e.target.value;
    setCategory(list);
  };

  const handleChange2 = (i, e) => {
    e.preventDefault();
    const list = [...answer];
    list[i].option = e.target.value;
    setAnswer(list);
  };

  const handleChange3 = (i, e) => {
    const list = [...rightAnswer];
    list[i].option = e.target.value;
    setRightAnswer(list);
  };

  return (
    <div className="container">
      <h4>
        <AiOutlineBars />
        Question 1
      </h4>
      <input
        onChange={(e) => setDescription(e.target.value)}
        className="desc"
        type="text"
        placeholder="Description(Optional)"
      />
      <p
        style={{
          marginBottom: "0",
        }}
      >
        Categories
      </p>
      <h5
        style={{
          marginBottom: "5px",
        }}
      >
        Note: To Drag and Drop the options, click on the icon and drag it.
      </h5>
      <div className="category">
        {category.map((item, i) => {
          const { option } = item;
          return (
            <div
              className="num_cat"
              key={i}
              draggable
              onDragStart={(e) => (dargCard.current = i)}
              onDragEnter={(e) => (dargOverCard.current = i)}
              onDragEnd={sortHandler}
              onDragOver={(e) => e.preventDefault()}
            >
              <MdOutlineDashboard
                style={{
                  cursor: "grab",
                }}
              />
              <input
                className="cat_q1"
                type="text"
                placeholder="Enter Option"
                onChange={(e) => handleChange1(i, e)}
                required
                value={option}
              />
              {category.length > 1 && (
                <button
                  className="delete_btn"
                  onClick={(e) => deleteInput(i, e)}
                >
                  Remove Field
                </button>
              )}
            </div>
          );
        })}
        <button className="add_btn" onClick={addInput}>
          Add More Options
        </button>
      </div>
      <div className="combine">
        <div className="combine_first">
          <p>Items</p>
          <div className="category">
            {answer.map((item, i) => {
              const { option } = item;
              return (
                <div
                  className="num_cat"
                  key={i}
                  draggable
                  onDragStart={(e) => (dargCard1.current = i)}
                  onDragEnter={(e) => (dargOverCard1.current = i)}
                  onDragEnd={sortHandler1}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <MdOutlineDashboard
                    style={{
                      cursor: "grab",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Enter Ctaegory"
                    onChange={(e) => handleChange2(i, e)}
                    value={option}
                    required
                  />
                  {answer.length > 1 && (
                    <button
                      className="delete_btn"
                      onClick={(e) => deleteAnswer(i, e)}
                    >
                      Remove Field
                    </button>
                  )}
                </div>
              );
            })}
            <button className="add_btn" onClick={addAnswer}>
              Add More Options
            </button>
          </div>
        </div>
        <div className="combine_second">
          <p>Belongs To</p>
          {rightAnswer.map((item, i) => {
            const { option } = item;
            return (
              <div className="num_cat" key={i}>
                <input
                  className="cat_q1"
                  type="text"
                  placeholder="Enter Correct Answer"
                  onChange={(e) => handleChange3(i, e)}
                  required
                  value={option}
                />
                {rightAnswer.length > 1 && (
                  <button
                    className="delete_btn"
                    onClick={(e) => deleteOption(i, e)}
                  >
                    Remove Field
                  </button>
                )}
              </div>
            );
          })}
          <button className="add_btn" onClick={addOption}>
            Add More Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question1;
