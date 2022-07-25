import React from 'react'
import { useState, useEffect } from 'react';
import { CircularProgress } from "@material-ui/core";
import "./Quiz.css";
import Question from '../../components/Question/Question';
interface Props {
  name : string;
  questions: any;
  score : string;
  setScore:(val: string) => void;
  setQuestions:(val: string) => void;
}

export const Quiz: React.FC<Props> = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState<any>();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);


  const handleShuffle = (options ?: any) => {
    return options?.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
    <span className="subtitle">Welcome, {name}</span>

    {questions ? (
      <>
        <div className="quizInfo">
          <span>{questions[currQues]?.category}</span>
          <span>
            {/* {questions[currQues].difficulty} */}
            Score : {score}
          </span>
        </div>
        <Question
          currQues={currQues}
          setCurrQues={setCurrQues}
          questions={questions}
          options={options}
          correct={questions[currQues]?.correct_answer}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
        />
      </>
    ) : (
      <CircularProgress
        style={{ margin: 100 }}
        color="inherit"
        size={150}
        thickness={1}
      />
    )}
  </div>
  )
}
