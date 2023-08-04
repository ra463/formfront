/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";

const Question2 = ({
  sentence,
  setSentence,
  selectedText,
  setSelectedText,
}) => {
  const dargCard2 = useRef(null);
  const dargOverCard2 = useRef(null);

  const sortHandler2 = () => {
    let items = [...selectedText];

    const dragItem = items.splice(dargCard2.current, 1)[0];
    items.splice(dargOverCard2.current, 0, dragItem);

    dargCard2.current = null;
    dargOverCard2.current = null;

    setSelectedText(items);
  };

  const getSelectedText = () => {
    const text = window.getSelection().toString();

    if (selectedText.includes(text)) {
      const index = selectedText.indexOf(text);
      const newSelectedText = [...selectedText];
      newSelectedText.splice(index, 1);
      setSelectedText(newSelectedText);
      return;
    }
    setSelectedText([...selectedText, text]);
  };

  useEffect(() => {
    // selectedText.forEach((word) => {
    //   if (sentence.includes(word)) {
    //     // change color of that word
    //     const index = sentence.indexOf(word);
    //     const newSentences = sentence.split("");
    //     newSentences.splice(index, word.length, word.fontcolor("red").bold());
    //     setNewSentence(newSentences.join(""));
    //   }
    // });

    // const words = sentence.split(" ");
    // // console.log(words);
    // const newWords = words.map((word) => {
    //   if (selectedText.includes(word)) {
    //     return word;
    //   }
    //   return word;
    // });
    // setNewSentence(newWords.join(" "));
    // console.log(newWords);

    // selectedText.length > 0 &&
    //   selectedText.forEach((word) => {
    //     if (sentence.includes(word)) {
    //       const index = sentence.indexOf(word);
    //       const newSentences = sentence.split("");
    //       newSentences.splice(index, word.length, word.fontcolor("red").bold());
    //       setNewSentence(newSentences.join(""));
    //     }
    //   });

    const words = sentence.split(" ");
    const selcted = [...selectedText];

    // console.log(finalwords);
    // console.log(selcted);
    // console.log(words);

    // replace the final word present in the new sentence
    selcted.length > 0 &&
      selcted.map((word, i) => {
        // sentence.replace(word, "_____");
        // words.map((word1, j) => {
        //   if (word === word1) {
        //     words[j] = "_____";
        //   }
        // });
        // instead of map loop
        for (let j = 0; j < words.length; j++) {
          if (word === words[j]) {
            words[j] = "_____";
          }
        }
        console.log(words.toString().replaceAll(",", " "));
        setSentence(words.toString().replaceAll(",", " "));
      });
  }, [selectedText, sentence]);

  // remove the word from selectedText array when i click on - button

  // const removeWord = (i, e) => {
  //   const newSelectedText = [...selectedText];
  //   newSelectedText.splice(i, 1);
  //   setSelectedText(newSelectedText);
  // };

  return (
    <div className="container">
      <h4>
        <AiOutlineBars />
        Question 2
      </h4>

      <p className="q2_p">Preview</p>
      <input
        className="desc"
        type="text"
        placeholder="Sentence Preview"
        value={sentence}
        readOnly
      />

      <p className="q2_p">Sentence</p>
      <input
        onDoubleClick={getSelectedText}
        onChange={(e) => setSentence(e.target.value)}
        className="desc"
        type="text"
        required
        placeholder="Type Sentence Here & underline the word to make it blank"
      />

      {selectedText.length > 0 && <h5 className="q2_p">Options</h5>}
      {selectedText.length > 0 && (
        <p>
          Note: If you want to remove options just double tap/click on that word
          again again... and press spacebar in the "Sentence" field to see the
          changes in "Preview" Fiels...
        </p>
      )}
      {selectedText.length > 0 &&
        selectedText.map((word, i) => (
          <div
            className="options"
            key={i}
            draggable
            onDragStart={(e) => (dargCard2.current = i)}
            onDragEnter={(e) => (dargOverCard2.current = i)}
            onDragEnd={sortHandler2}
            onDragOver={(e) => e.preventDefault()}
          >
            <MdOutlineDashboard
              style={{
                cursor: "grab",
              }}
            />
            <span>{word}</span>
            {/* <button onClick={() => removeWord(i)}>Remove Field</button> */}
          </div>
        ))}
    </div>
  );
};

export default Question2;
