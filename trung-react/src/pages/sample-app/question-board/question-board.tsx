import React from "react"
import { dataQuestions, dataSubmission } from "../../../mocks/questionBoard";

interface Board {
  id: string,
  name: string,
  category: string
}

interface CategoryValue {
  title: string,
  boards: Board[]
}

function QuestionBoard() {
  const [questions] = React.useState(dataQuestions);
  const [submissions] = React.useState(dataSubmission);
  const categories = questions.reduce((acc: Record<string, CategoryValue>, curr) => {
    const category = curr.category;
    if(!acc[category]) {
      acc[category] = {
        title: category,
        boards: []
      }
    }
    acc[category].boards.push(curr)

    return acc;
  }, {})

  /*
    {
      'html': {
        title: 'html',
        boards: [
         {
            "id": "sign-up-form",
            "name": "Sign-Up Form",
            "category": "HTML"
          }
        ]
      }
    }

  */

  return (
    <div className="question_board">
      {Object.values(categories || {}).map(item => {
        return (
          <div key={item.title} className="column">
            <h2>{item.title} - 1 / {item.boards.length}</h2>

            {item.boards.map(board => {
              const submission = submissions.find(submission => submission.questionId === board.id)
              return (
                <div key={board.id} className="boards">
                  <div className="question">
                    <div className={`question__status question__status--${submission ? submission.status.toLowerCase() : 'none'}`} />
                    <h2 className="question__title">{board.name}</h2>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default QuestionBoard