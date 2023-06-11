import { Component } from "react"


class ToDo extends Component{
    onDelete = ()=>{
        this.props.delete(this.props.todo.id)
    }
   randomIndex = Math.floor(Math.random()*6) + 1;
   colors = ["skyblue" , "pink" , "violet", "yellow", "lightblue", "lightgreen", "orange"];
   styles = {
    textDecoration: (this.props.todo.isDone ? 'line-through':''),
    backgroundColor: this.colors[this.randomIndex],
    // color: "white",
    borderRadius: "0.5%"
   }

    render(){
        return(
            
            <div>
                <div className="container mb-1">
                    <div className="row m-3">
                        <div className="col-md-1 m-auto">
                            <h5 className="m-auto" style={{color:this.colors[this.randomIndex] }}>{this.props.index}</h5>
                        </div>
                        <div className="col-md-1 align-self-center">
                            <input type="checkbox"
                                className="form-check form-check-input"
                                checked = {this.props.todo.isDone}
                                onChange={()=>this.props.handleDone(this.props.todo.id)} />
                        </div>
                        <div  style={this.styles} className="col-md-8">
                            <h5 className="pt-1 m-auto">{this.props.todo.value}</h5>
                        </div>
                        <div className="col-md-2">
                            <button onClick = {this.onDelete} className=' btn btn-danger'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ToDo;