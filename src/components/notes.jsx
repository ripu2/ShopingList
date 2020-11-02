import React from 'react'

class Notes extends React.Component{
    render(props){
        return (
            <div className="content">
                <h1>{this.props.title}</h1>
                <p> {this.props.instructions}</p>
            </div>
        )
    }
}

export default Notes