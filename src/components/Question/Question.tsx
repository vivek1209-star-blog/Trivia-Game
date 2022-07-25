import { Button } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface Props {
    currQues: number;
    questions: any;
    options: any;
    correct: any;
    score : string;
    setScore:(val: string) => void;
    setCurrQues:(val: any) => void;
    setQuestions:(val: string) => void;
  }

const Question: React.FC<Props> = ({
  currQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setCurrQues,
  setQuestions,
}) => {
  const [selected, setSelected] = useState<boolean | undefined>(false);
  const [error, setError] = useState<any>(false);

  const navigate = useNavigate();

  const handleSelect = (i?:any) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i?:any) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    try{
    if (currQues > 8) {
        navigate('/result');
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected(false);
    } else setError("Please select an option first");
}
catch(error){
    console.log('error', error)
}
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions(questions);
  };

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i:any) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={() => handleNext()}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;