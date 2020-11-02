import React from 'react'
import "./styles/app.css"

class SearchBar extends React.Component{
    state = {term : ""}
    onFormSubmit = (event)=>{
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    render(){
        return (
            <div className = "ui segment search">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Make your List</label>
                        <input
                            type = "text"
                            value = {this.state.term}
                            onChange={(e)=>this.setState({term : e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;