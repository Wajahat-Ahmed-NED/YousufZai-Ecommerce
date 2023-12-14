import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
} from "@mui/material";
import { Button } from "@material-ui/core";

const QuizApp = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  // Example quiz data
  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      correctAnswer: "Mars",
    },
    // Add more quiz questions here
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    // Check answer, handle score, etc. Here, just go to the next question
    setSelectedOption("");
    setQuestionIndex(questionIndex + 1);
    // if (questionIndex < quizData.length - 1) {
    //   setQuestionIndex(questionIndex + 1);
    // } else {
    //   // Quiz completed, show score or completion message
    //   alert("Quiz Completed!");
    // }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "10%" }}>
      <Paper elevation={10} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Quiz # 1
        </Typography>
        <Typography variant="h6" gutterBottom textAlign={"center"}>
          Intro To Web Basics
        </Typography>
        <hr />
        <br />
        {questionIndex < quizData.length ? (
          <div>
            <Typography variant="h6" gutterBottom>
              Question {questionIndex + 1}:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {quizData[questionIndex].question}
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">Choose an option:</FormLabel>
              <RadioGroup
                value={selectedOption}
                onChange={handleOptionChange}
                style={{ marginTop: "10px" }}
              >
                {quizData[questionIndex].options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: "20px" }}
                onClick={handleNextQuestion}
                disabled={!selectedOption}
              >
                {questionIndex === quizData.length - 1 ? "Finish" : "Next"}
              </Button>
            </FormControl>
          </div>
        ) : (
          <>
            <br />
            <Typography variant="h5" style={{ textAlign: "center" }}>
              Quiz Completed!
            </Typography>
            <br />
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "tomato" }}
            >
              You Scored 8/10 - (80%)
            </Typography>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default QuizApp;
