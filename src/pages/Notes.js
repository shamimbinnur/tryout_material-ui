import React,{useState, useEffect} from 'react'
import { Typography, Grid, Paper, Container } from '@material-ui/core'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css';
import axios from 'axios';

const Notes = ()=> {
    const [notes, setNotes] = useState(null)

    useEffect( async()=>{
        try {
            const {data} = await axios.get('https://api.jsonbin.io/b/60883bbc5210f622be3b523a/1')
            console.log(data.notes)
            setNotes(data.notes) 
        } catch (error) {
            
        }
        
    },[])

    const handleDelete = async(id)=> {
        try {
            const {data} = await axios.delete(`https://api.jsonbin.io/b/60883bbc5210f622be3b523a${id}`)
            const newNotes = data.notes.filter( note => note.id !=id )
            setNotes(newNotes) 
        } catch (error) {
            
        }

    }

    const breakpoints = {
        default: 3,
        1100:2,
        700:1
    }

    return (
        <Container>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                { notes !=null ? (notes.map( note => (
                    <div item key={note.id} >
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </div>
                ))) : null }
            </Masonry>

        </Container>
    )
}

export default Notes
