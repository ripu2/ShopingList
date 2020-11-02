import React from 'react'
import "./styles/app.css"
class Footer extends React.Component{
    render(){
        return (
            <div className="Footer">Made with ❤️ by Ripu <br /><small>Copyright ©  {new Date().getFullYear()}</small></div>
        )
    }
}

export default Footer