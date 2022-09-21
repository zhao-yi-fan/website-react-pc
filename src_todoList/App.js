import { Component } from 'react'
import Input from './components/Input/input'
import List from './components/List/list'
import Footer from './components/Footer/footer'
export default class App extends Component {
  state = {
    todos: [],
  }

  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(todoObj => {
      if (todoObj.id === id) return { ...todoObj, checked: done }
      else return todoObj
    })

    this.setState({
      todos: newTodos,
    })
  }

  deleteTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.filter(i => i.id !== todoId)
    })
  }

  checkAllTodo = (checked) => {
    this.setState({
      todos: this.state.todos.map(i => {
        return {
          ...i,
          checked
        }
      }),
    })
  }

  clearAllDone = () => {
    this.setState({
      todos: this.state.todos.filter(i => {
        return !i.checked
      })
    })
  }

  render () {
    const { todos } = this.state
    return (
      <>
        <Input addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
      </>
    )
  }
}