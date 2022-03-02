import {Paper} from '@material-ui/core'
import { Box } from '@material-ui/core'
import InputQuizSettings from '../InputQuizSettings/InputQuizSettings'
import './style.css'
import { useState } from 'react'

const QuizContainer = () => {
  //setting states and passing as props
  // useState takes the generic argument telling the type of value passed and enforces the variable and set fucntion of type passes
  const [totalQuestions, setTotalQuestions] = useState<number>(5);
  const [category, setCategory] = useState<number>(17)
  const [difficulty, setDifficulty] = useState<string>('easy')
  const [userName, setUserName] = useState<string>('')
  return (
    <div className='container quizContainer'>
      <Paper elevation={5} >
      <Box  sx={{
        height: 500,
        borderRadius: 10,
        // bgcolor: 'primary.main'
      }}>
        <InputQuizSettings 
        totalQuestions={totalQuestions}
        setTotalQuestions={setTotalQuestions}
        category={category}
        setCategory={setCategory}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        userName={userName}
        setUserName={setUserName}
        ></InputQuizSettings>
      </Box>
      </Paper>
    </div>
  )
}

export default QuizContainer