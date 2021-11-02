import Home from './Todos/Home'
import AddTodos from './Todos/AddTodos'

export class App extends Component {
  state = {
    Todos : [
      {Task:'Fetch', Time: '10',color: 'blue', id: '1'},
      {Task:'Dance', Time: '12',color: 'black', id: '2'},
      {Task:'play', Time: '1',color: 'brown', id: '3'}
    ]
  }
  addTodos = (Todos) =>{
    Todos.id = Math.random()
     Todos = [ ...this.state.Todos, Todos ]
    this.setState({
      Todos:Todos
    })
    console.log(Todos)

  }
  DeleteTodos= (id)=>{
    let Todos =this.state.Todos.filter(Todo=>{
      return(
        Todo.id!==id
      )
    })
    this.setState({
      Todos:Todos
    })
    console.log(id)
  }
  render() {
    return (
      <div className= 'app'>
        <Home Todos={this.state.Todos} DeleteTodos = {this.DeleteTodos}/>
        <AddTodos addTodos={this.addTodos}/>
      </div>
    )
  }
}
