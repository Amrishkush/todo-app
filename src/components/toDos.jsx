import { Component } from "react"
import ToDo from "./toDo";
import AddToDo from "./addToDo";


class ToDos extends Component{
    // state = {             //we are adding state we want to change state whenever new todo updated and show it
    //     todos : [{id:1, value:'dummy', isDone: false     //to see how it works
    //     }]        //we will store detail about every todo like value(what?) id(unique?) isItDone(tick)
    // }
    state ={
        todos:
        localStorage.getItem('todos')?
        JSON.parse(localStorage.getItem('todos')):
        []
    }
    addNewToDo = (todoValue)=>{
        let todos = this.state.todos;
        todos.push({
            id: new Date().getTime(),
            value: todoValue,
            isDone: false
        })
        this.updateState(todos)  
    }
    updateState=(todos)=>{
        this.setState({
            todos:todos
            // todos   //only todos can be written because todos name is same
        })
        localStorage.setItem('todos',JSON.stringify(todos))
        
    }

    onDelete = (todoId)=>{
        let todos = this.state.todos.filter(item=>item.id !== todoId);
        this.updateState(todos)
    }

    handleDone = (todoId)=>{
        let todos = this.state.todos;
        todos.map(item=>{
            if(item.id===todoId){
                item.isDone= !item.isDone;
            }
            return item;
        })
        this.updateState(todos)
    }
    styles = {
        padding:"13%", 
        backgroundColor:"bisque",
        width:"80%",
        marginLeft: "10%"
    }
    render(){
        
        return(
            <div>
            
                <h1 style={{backgroundColor:"coral" ,padding: "10px", marginBottom: "5px"}}>
                <object data="https://beta.designforventures.co/Free-Animated-SVG-Icons/warehouse/notepad-icon-dark-grey.svg" aria-label="notepad" type="image/svg+xml">NotePad</object>Todos App</h1>
                {/* {this.state.todos.length===0 ? <h1>No todos</h1>    //only to see how it works
                    : this.state.todos.map((item,index) => { 
                    return <h3>Todo is here</h3>} ) } */}
                    {this.state.todos.length===0 ? <h1 style={this.styles}>No todos</h1> 
                    : this.state.todos.map((item,index) => { 
                    return <ToDo 
                            key= {index}
                            todo ={item}
                            index={index+1}
                            delete={this.onDelete}
                            handleDone={this.handleDone}
                            />} ) 
                    }
                    <AddToDo addTodo = {this.addNewToDo}/>            
                </div>
        )
    }
    
}

export default ToDos;