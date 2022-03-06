import { Quiz, QuizObj } from "../types/types";

//shuffling the options of quiz if user select same type(eg, mathematics) for 2or many types each type the options will be shuffled
function shuffelAnswers(answers: string[]): string[] {
//math.random generates number between 0.0 to 0.9 sub from 0.5 res will be +ve or -ve randomly so array will be sorted randomly
    return answers.sort(() => Math.random() - 0.5)
}
export async function getQuiz(totalQuizs: number, category: number, difficulty: string): Promise<Quiz[]> {
    const response = await fetch(`https://opentdb.com/api.php?amount=${totalQuizs}&category=${category}&difficulty=${difficulty}&type=multiple`)
    let { results } = await response.json();
    // console.log(results);
    const quiz: Quiz[] = results.map((quizObj: QuizObj) => (
        {
            correct_answer: quizObj.correct_answer,
            question: quizObj.question,
            //push method returns the value that was pushed a number but fun shuffel requires string[] so using concat that returns string[] with concated value
            options: shuffelAnswers(quizObj.incorrect_answers.concat(quizObj.correct_answer))
        }
    ))
    return quiz;
}
