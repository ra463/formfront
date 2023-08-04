/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import { gerFormDataAction } from "../../redux/actions/createformaction";
import "./RenderPart.scss";
import PulseLoader from "react-spinners/PulseLoader";

const RenderPart = () => {
  const { formData, loading } = useSelector((state) => state.getdata);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gerFormDataAction());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {loading && (
        <div className="no_data">
          <PulseLoader size="22px" color="navy" />
        </div>
      )}
      {formData.length === 0 && <h1 className="no_data">No Data Found</h1>}
      {formData &&
        formData.length > 0 &&
        formData.map((data, i) => (
          <div key={i} className="create_form">
            <div className="first">
              <h1>Untitled Quiz {i + 1}</h1>
              <p>
                Answer these questions and press submit button to submit your
                quiz.
              </p>
            </div>
            <div className="second">
              <form>
                <div className="render_container">
                  <h4>Question 1</h4>
                  <p>{data?.questions1?.description}</p>
                  <div className="inner_part">
                    <div className="inner_container con1">
                      {data?.questions1?.category.map((item, i) => (
                        <div key={i}>{item.option}</div>
                      ))}
                    </div>
                    <div className="inner_container con2">
                      {data?.questions1?.answers.map((item, i) => (
                        <div key={i}>{item.option}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="render_container">
                  <h4>Question 2</h4>
                  <div className="options">
                    {data?.questions2?.options.map((item, i) => (
                      <div key={i}>{item}</div>
                    ))}
                  </div>
                  <div className="sentence">{data?.questions2?.sentence}</div>
                </div>
                <div className="render_container">
                  <h4>Question 3</h4>
                  <div className="passage">
                    <p>{data?.questions3?.passage}</p>
                  </div>
                  <div className="questions">
                    <h5>Question 3.1</h5>
                    {data?.questions3?.allquestion.map((item, i) => (
                      <div className="all_options" key={i}>
                        <p>{item?.title}</p>
                        {item?.options3.map((item, i) => (
                          <div className="options" key={i}>
                            <input type="radio" />
                            {item.option}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="btn">
                  <button className="active">Submit Quiz</button>
                </div>
              </form>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RenderPart;
