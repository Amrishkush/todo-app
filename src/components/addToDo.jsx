import { Component } from "react"


class AddToDo extends Component{
    state = {
        value: ''
    }
    submit = (event)=>{         //always use arrow function so this can be used //event paramaeter as object
        event.preventDefault();    //to clear default now submit will work
        this.props.addTodo(this.state.value)
        this.setState({value:''})
    }
    onChange = (event)=>{
        this.setState({value: event.target.value})
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className='col-12'>
                       <form onSubmit={this.submit} > {/**like onClick event in react there is onSubmit and this calls
                        submit function declared above so that page do not reload*/}
                          <input 
                          className="form-control" 
                          value = {this.state.value} 
                          onChange= {this.onChange} 
                          type="text" />
                       </form>
                    </div>
                    <div className="col-12">
                           <button type="submit" onClick={this.submit} className="btn btn-success m-2">   {/*i want to submit so type is submit */}
                           Add Todos
                         </button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default AddToDo;