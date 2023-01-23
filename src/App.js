import "./App.css";
import { useEffect,useState } from "react";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the currency of Bangladesh?",
      answers: [
        {
          text: "USD",
          correct: false,
        },
        {
          text: "BDT",
          correct: true,
        },
        {
          text: "EURO",
          correct: false,
        },
        {
          text: "None of The Above",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What is the capital of Bangladesh?",
      answers: [
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Rangpur",
          correct: false,
        },
        {
          text: "Gaibandha",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which one of these is not a programming language?",
      answers: [
        {
          text: "Java",
          correct: false,
        },
        {
          text: "JavaScript",
          correct: false,
        },
        {
          text: "Hi",
          correct: true,
        },
        {
          text: "C",
          correct: false,
        },
      ],
    },
    
  ];

  const moneyPyramid = 
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000" },
      ].reverse();

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

return (
  <div className="app">
     <>
        <div className="main">
          {timeOut ? (
            <h1 className="endText">You earned: {earned}</h1>
          ) : questionNumber > data.length ? <h1 className="endText">Congrats, You are the millionaire</h1>:
               
                (
                  <>
                    <div className="top">
                      <div className="timer">
                         <Timer setTimeOut={setTimeOut} questionNumber={questionNumber}/>
                      </div>
                    </div>
                    <div className="bottom">
                      <Trivia data={data} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setTimeOut={setTimeOut}/>
                    </div>
                  </>
                )
               }
        </div>


        <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m) => (
              <li className={questionNumber === m.id ? "moneyListItem active": "moneyListItem"} >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
  </div>
);
}
export default App;