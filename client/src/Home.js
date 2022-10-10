import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            name: "Sample",
        description : "A software engineer is a person who applies the principles of software engineering to design, develop, maintain, test, and evaluate computer software. The term programmer is sometimes used as a synonym, but may also lack connotations of engineering education or skills."
    };
    this.handleName= this.handleName.bind(this);
    this.handleD= this.handleD.bind(this);
    }
    handleName(event){
        this.setState({name: event.target.value});
        event.preventDefault();
    }
    handleD(event){
        this.setState({description: event.target.value});
        event.preventDefault();
    }

    render(){
        return(
            
            <div>
            <div class="row g-0">
        <div class=" col-md-4 d-flex justify-content-center">
            <img src="https://thumbs.dreamstime.com/b/black-hacker-software-engineer-symbol-white-background-concept-depicting-danger-using-internet-protection-co-117453507.jpg" class="img-fluid rounded-start " alt="dada" width="300px" height="300px"/>
        </div>
        <div class=" col-md-6 row g-4">
            <div class="card-body">
                <h5 class="d-flex flex-row " type="text" name="Nam" id="name">{this.state.name}</h5>
                <p class="text-start">{this.state.description}</p>
                
                
       
            </div>
        </div>
        <div class="input-group col-md-6 mb-3 ">
            <div class="input-group-prepend">
                <span class="input-group-text">Name</span>
            </div>
            <h2><textarea class="form-control" aria-label="With textarea" value={this.state.name} onChange={this.handleName}></textarea></h2>
        </div>
        
    <div class="input-group col-md-6 mb-5 ">
            <div class="input-group-prepend">
                <span class="input-group-text">Description</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" value={this.state.description} onChange={this.handleD}></textarea>
        </div>
        

    </div>


        </div>
        );
    }
}
