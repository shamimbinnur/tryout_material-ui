import React, { useState } from 'react'
import { makeStyles, Container, Typography, Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
    field:{
       marginTop: 20,
       marginBottom: 20,
       display: 'block'
    }
})

const Creates = ()=> {

    const createNote = ()=>{
       
    }

    const classes = useStyles();
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('todos')

    const handleSubmit = (e)=>{
        e.preventDefault();
        setTitleError(false)
        setDetailsError(false)

        if(title === ''){
            setTitleError(true)
        }
        if(details === ''){
            setDetailsError(true)
        }
        if(details && title){
            fetch("http://localhost:8000/notes", {
                method: 'POST',
                headers : { 'Content-Type':'application/json'},
                body: JSON.stringify({title, details, category})
            })
            .then(()=> history.push('/'));
            
        }
    }

    return (
        <Container>
            <Typography
            variant='h6'
            color='textSecondary'
            component='h2'
            gutterBottom
            >
                Create a new note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                onChange={(e)=> setTitle(e.target.value) }
                className={classes.field}
                label='Note Title'
                variant='outlined'
                color="secondary"
                fullWidth
                required
                error={titleError}
                />
                <TextField
                onChange={(e)=> setDetails(e.target.value) }
                className={classes.field}
                label='Details'
                variant='outlined'
                color="secondary"
                multiline
                rows={4}
                fullWidth
                required
                error={detailsError}
                />
            
            <FormControl className={classes.field}>
                <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={ (e)=> setCategory(e.target.value)}>
                    <FormControlLabel label='Modney' value='money' control={ <Radio/> } />
                    <FormControlLabel label='Todo' value='todos' control={ <Radio/> } />
                    <FormControlLabel label='Reminder' value='reminders' control={ <Radio/> } />
                    <FormControlLabel label='Work' value='work' control={ <Radio/> } />
                </RadioGroup>
            </FormControl>


            <Button
            type='submit'
            color='secondary'
            variant='contained'
            endIcon= { <NavigateNextIcon/> }
            >
                Submit
            </Button>

            </form>

        </Container>
    )
}

export default Creates
