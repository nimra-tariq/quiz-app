import { Paper } from '@material-ui/core'
import { Box } from '@material-ui/core'
import InputQuizSettings from '../InputQuizSettings/InputQuizSettings'
import QuestionCard from '../QuestionCard/QuestionCard'
import { getQuiz } from '../../api/getQuestionApi'
import './style.css'
import { useState } from 'react'
import Result from '../Result/Result'
import { useEffect } from 'react'
import { Quiz } from '../../types/types'

const QuizContainer = () => {

  //setting states and passing as props
  // useState takes the generic argument telling the type of value passed and enforces the variable and set fucntion of type passes
  const [totalQuestions, setTotalQuestions] = useState<number>(5);
  const [category, setCategory] = useState<number>(19)
  const [difficulty, setDifficulty] = useState<string>('easy')
  const [userName, setUserName] = useState<string>('')
  const [startQuiz, setStartQuiz] = useState(false)
  const [quiz,setQuiz]=useState<Quiz[]>([])
  useEffect(() => {
   if(!startQuiz)
   getQuiz(totalQuestions,category,difficulty).then(quiz=> setQuiz(quiz));
  }, [startQuiz])


  return (
    <div className='container quizContainer'>
      <Paper elevation={5} >
        <Box sx={{
          height: 500,
          borderRadius: 10,
          // bgcolor: 'primary.main'
        }}>
          {/* <InputQuizSettings 
        totalQuestions={totalQuestions}
        setTotalQuestions={setTotalQuestions}
        category={category}
        setCategory={setCategory}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        userName={userName}
        setUserName={setUserName}
        startQuiz={startQuiz}
        setStartQuiz={setStartQuiz}
        ></InputQuizSettings> */}
          <QuestionCard quiz={quiz}></QuestionCard>
        </Box>
      </Paper>
    </div>
  )
}

export default QuizContainer