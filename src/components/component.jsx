import React from 'react'
import "./styles/app.css"
import NotesData from "../notesData" 
import Notes from "./notes"
class Componentss extends React.Component{
    
    render(props)
    {   console.log(NotesData)
        return (
           <Notes title = {this.props.title} instructions = {this.props.title}/>         
        )
    }
}

export default Componentss