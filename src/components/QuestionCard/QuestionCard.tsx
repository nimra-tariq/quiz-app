import { Typography } from '@material-ui/core'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import React from 'react'
import { QuestionCardType} from '../../types/types';

const QuestionCard: React.FC<QuestionCardType> = ({
  quiz
}
) => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return ( <div>{quiz.map((quizObj,i)=><>
    <Typography variant='h5'>{quizObj.question}</Typography>
      <div className="optionDiv">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value={quizObj.options[0]} control={<Radio />} label={quizObj.options[0]} />
            <FormControlLabel value={quizObj.options[1]} control={<Radio />} label={quizObj.options[1]} />
            <FormControlLabel value={quizObj.options[2]} control={<Radio />} label={quizObj.options[2]} />
            <FormControlLabel value={quizObj.options[3]} control={<Radio />} label={quizObj.options[3]} />
          </RadioGroup>
        </FormControl>
      </div>
      </>
  )}
    </div >
  )
}

export default QuestionCard