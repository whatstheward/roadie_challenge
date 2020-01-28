import React from 'react';
import './ReviewModal.css'

const ratingSelection = {
    "One Star": 1,
    "Two Stars": 2,
    "Three Stars": 3,
    "Four Stars": 4,
    "Five Stars": 5
}

class ReviewModal extends React.Component {
    
    state={
        rating: 1,
        user: "",
        title: "",
        content: "",
        date: new Date().toLocaleDateString("en-US"),
        errors: []
    }

    validateSubmission = (e) => {
        e.preventDefault()
        let newErrors = []
        if(this.state.user === ""){
            newErrors.push("Name field is required")
        }
        if(this.state.title===""){
            newErrors.push("Title field is required")
        }
        if(this.state.content===""){
            newErrors.push("Comment field is required")
        }
        if(newErrors.length>0){
        this.setState({errors: newErrors })
        }else{
            this.setState({rating: parseInt(this.state.rating)})
            this.props.handleSubmit(this.state)
        }
    }



    buildOptions=()=>{
        let selectOptions = []
        for(let [key, value] of Object.entries(ratingSelection)){
            selectOptions.push(<option value={value}>{key}</option>)
        }
        return selectOptions
    }

    handleChange=(e)=>{
        if(e.target.name == "rating"){
            this.setState({[e.target.name]: parseInt(e.target.value)})
        }else{
            this.setState({[e.target.name]: e.target.value})
        }    
    }

    render(){
        return(
            <div className="modal">
                <div className="review-form-container">
                <ul>
                    {this.state.errors.map(error=> {
                        return <li>{error}</li>
                })}
                </ul>
                    <header>
                        <p onClick={()=>this.props.toggleModalView()}>X</p>
                    </header>
                    <section>
                        <h1>ADD A REVIEW</h1>
                            <form className="review-form">
                                    <label>Rating</label>
                                    <select onChange={(e)=>this.handleChange(e)} name="rating">
                                        {this.buildOptions()}
                                    </select>
                                    <label>Your name</label>
                                    <input type="text" 
                                            name="user" 
                                            value={this.state.user} 
                                            placeholder="Enter text here..."
                                            onChange={(e)=>this.handleChange(e)} />
                                    <label>Review title</label>
                                    <input type="text" 
                                            name="title"
                                            value={this.state.title}
                                            placeholder="Enter text here..."
                                            onChange={(e)=>this.handleChange(e)} />
                                    <label>Write your review below</label>
                                        <br/>
                                    <textarea
                                            name="content"
                                            value={this.state.content}
                                            placeholder="Enter text here..."
                                            onChange={(e)=>this.handleChange(e)} />
                                <div>
                                    <button className="ui button teal inverted">CANCEL</button>
                                    <button className="ui button teal" onClick={(e)=>{this.validateSubmission(e)}}>SUBMIT</button>
                                </div>
                            </form>
                    </section>
                </div>
            </div>
        )
    }
}

export default ReviewModal