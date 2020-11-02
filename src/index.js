import React from 'react'
import ReactDOM from 'react-dom';
import Header from "./components/header"
import Footer from "./components/footer"
import Componentss from "./components/component"
import SearchBar from "./components/SearchBar"
import NotesData from "./notesData"
import "./components/styles/app.css"
class App extends React.Component{
    state = {title : ""}

        onSearchSubmit = async(term)=>{
            NotesData.push(term)
            this.setState({title : term})
               
        }   
    render(){
        
        if(NotesData.length!=0){
            return (
                <>
                 
                 <div className = "ui container">
                 <Header />
                 <SearchBar onSubmit = {this.onSearchSubmit} />
                 {NotesData.map((note)=>{
                     return <Componentss title={note} />
                 })}
                 {/* <Componentss  title = {NotesData[0]}/>
                 <Componentss  title = {NotesData[1]}/>
                 <Componentss  title = {NotesData[2]}/> */}
                 </div>
                 <Footer />
                </>
             )
        }
        else {
            return (
                 <>
                 <div className = "ui container">
                 <Header />
                 <SearchBar onSubmit = {this.onSearchSubmit} />
                 <h1>Nothing to purchase</h1>
                 
                 </div>
                 <Footer />
                 </>
            )
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))