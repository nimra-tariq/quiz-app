
export type Quiz={
    correct_answer:string,
    question:string,
    options:string[],
  }
export type QuizObj={
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers:string[]
    question: string,
    type: string
}

export type QuestionCardType={
    quiz:Quiz[]
}