import React from 'react'
import { InputLabel } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
import { Select } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import { TextField } from '@material-ui/core'

//type of props passesd to inputQuizSettings
type InputFormPropTypes = {
  totalQuestions: number,
  setTotalQuestions: (e: number) => void,
  category: number;
  setCategory: (e: number) => void,
  difficulty: string,
  setDifficulty: (e: string) => void,
  userName: string,
  setUserName: (name: string) => void
  startQuiz: boolean,
  setStartQuiz: (value: boolean) => void
}


//making component functional to pass props to it FC for Functional Component
const InputQuizSettings: React.FC<InputFormPropTypes> = ({
  totalQuestions,
  setTotalQuestions,
  category,
  setCategory,
  difficulty,
  setDifficulty,
  userName,
  setUserName,
  startQuiz,
  setStartQuiz
}) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStartQuiz(true);
    console.log(userName);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="userNameField">
          <TextField required
            // style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Your Name: "
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value as string)}
            fullWidth
          />
        </div>

        <div className="totalQuestionField">
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-required-label">Number of Questions:</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={totalQuestions}
              label="Number of Questions: *"
              onChange={(e) => setTotalQuestions(Number(e.target.value))}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="categoryField">
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-required-label">Select Category:</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={category}
              label="Select Category:*"
              onChange={(e) => setCategory(Number(e.target.value))}
            >
              <MenuItem value={17}>Science and Nature</MenuItem>
              <MenuItem value={18}>Computers</MenuItem>
              <MenuItem value={22}>Geography</MenuItem>
              <MenuItem value={10}>Books</MenuItem>
              <MenuItem value={19}>Mathematics</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="diffcultyField">
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-required-label">Select Difficulty:</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={difficulty}
              label="Number of Questions: *"
              onChange={(e) => setDifficulty(e.target.value as string)}
            >
              <MenuItem value={'easy'}>Easy</MenuItem>
              <MenuItem value={'medium'}>Medium</MenuItem>
              <MenuItem value={'hard'}>Hard</MenuItem>
            </Select>
          </FormControl>
        </div>

        <button type="submit" className='btn-startQuiz'>Start Quiz</button>
        {/* <input type="submit" value='Start Quiz' className='btn-startQuiz' /> */}
      </form>
    </div>
  )
}

export default InputQuizSettings