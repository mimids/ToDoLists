class Model {
  constructor() {
    // this.todos = [
    //   { id: 1, year:2020,week:28, day:1, text: 'Run a marathon', complete: false },
    //   { id: 2, year:2020,week:28, day:2,text: 'Plant a garden', complete: false },
    //   { id: 3, year:2020,week:28, day:3, text: '3 Run a marathon', complete: false },
    //   { id: 4, year:2020,week:28, day:4, text: '4 Run a marathon', complete: false },
    //   { id: 5, year:2020,week:28, day:5, text: '5 Run a marathon', complete: true },
    //   { id: 6, year:2020,week:28, day:6, text: '6 Run a marathon', complete: false },
    //   { id: 7, year:2020,week:28, day:1, text: '1 marathon', complete: false },
    //   { id: 8, year:2020,week:28, day:1, text: '1 marathon', complete: false },
    //   { id: 9, year:2019,week:28, day:1, text: '2019 1 marathon', complete: false },
    //   { id: 10, year:2020,week:29, day:1, text: '29 1 marathon', complete: false },
    //   { id: 11, year:2021,week:28, day:1, text: '2021 1 marathon', complete: false }

    // ]
    this.setNewTodos()
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  }
  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback
  }
  setNewTodos(){
    this.todos = JSON.parse(localStorage.getItem('todos')) || []

  }

  _commit(todos) {
    this.onTodoListChanged(todos)
    console.log(todos)
     localStorage.setItem('todos', JSON.stringify(todos))
  }
  
  
  //////////////ADD
  
  addTodo(todoText,todoDay) {
    this.setNewTodos()
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      year:thisYear,
      week:weekOfyear,
      day: todoDay,
      text: todoText,
      complete: false,
    }
 
    this.todos.push(todo)
    this._commit(this.todos)
  }
  ////////////Edit
  editTodo(id, updatedText) {
    this.setNewTodos()
  
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id,year:todo.year,week:todo.week ,day:todo.day ,text: updatedText, complete: todo.complete }
        : todo
    )
    this._commit(this.todos)
  }
  ////////////Delete

  deleteTodo(id) {
    this.setNewTodos()
  
    this.todos = this.todos.filter((todo) => todo.id !== id)
    this._commit(this.todos)
  }

  ///////////toggle

  toggleTodo(id) {
    this.setNewTodos()
  
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id,year:todo.year,week:todo.week, day:todo.day ,text: todo.text, complete: !todo.complete }
        : todo
    )

    this._commit(this.todos)
  }

}