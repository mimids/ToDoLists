class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    // lise ga change shitatoki callbac ga onTodolistChanged
    this.model.bindTodoListChanged(this.onTodoListChanged)
    // Display initial todos
    this.onTodoListChanged(this.model.todos)
    ////////view ni handler wo watasu
    this.view.bindAddTodo(this.handleAddTodo)
    this.view.bindDeleteTodo(this.handleDeleteTodo)
    this.view.bindToggleTodo(this.handleToggleTodo)

    ////local storage ni kakikomeruyouninaru
    this.view.bindEditTodo(this.handleEditTodo)
  }



  ///////hyouji saru model.todos ga haittekuru
  onTodoListChanged = todos => {
    this.view.displayTodos(todos)
  }

  ////////////////view ni watasu handoru
  handleAddTodo = (todoText,todoDay) => {
    this.model.addTodo(todoText,todoDay)
  }

  handleEditTodo = (id, todoText) => {
    this.model.editTodo(id, todoText)
  }

  handleDeleteTodo = (id) => {
    this.model.deleteTodo(id)
  }

  handleToggleTodo = (id) => {
    this.model.toggleTodo(id)
  }



}
