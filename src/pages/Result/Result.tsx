import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Result.css";

interface Props {
  name : string;
  score : string;
}

export const Result: React.FC<Props> = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name, navigate]);

  return (
    <div className="result">
    <span className="title">Final Score : {score}</span>
    <Button
      variant="contained"
      color="secondary"
      size="large"
      style={{ alignSelf: "center", marginTop: 20 }}
      href="/"
    >
      Go to homepage
    </Button>
  </div>
  )
}
