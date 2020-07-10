////////////////////////////////////////
class View {
  constructor(root) {
    this.root = root

    this.app = this.getElement("#week" + this.root)
    ////////////////////////////////////////////////

    this.title = this.createElement('h2')
    this.title.textContent = youbi[this.root] + " " + arrDays[this.root]

    if(holyday[arrDays[this.root]]!=undefined){

      this.title.textContent+=" "+holyday[arrDays[this.root]]
      this.app.style.backgroundColor = 'lightpink';

    }
    ////////////////////////////////////////////
    // The form, with a [type="text"] input, and a submit button
    this.form = this.createElement('form')

    // input tukuru
    this.input = this.createElement('input')
    this.input.type = 'text'
    this.input.placeholder = 'Add todo'
    this.input.name = 'todo'


    // button tukuru
    this.submitButton = this.createElement('button')
    this.submitButton.textContent = 'Submit'

    // form no nakani input to button wo ireru
    this.form.append(this.input, this.submitButton)
    ///////////////////////////////////////////////

    // TODOLIST list narabu tokoto
    this.todoList = this.createElement('ul', 'todo-list' + this.root)
    ///////////////////////////////////////////////

    // root ni ireru
    this.app.append(this.title, this.form, this.todoList)

    this._temporaryTodoText
    this._initLocalListeners()
  }

  // Update temporary state koreganaito refreche shitemo kienai
  _initLocalListeners() {
    this.todoList.addEventListener('input', event => {
      if (event.target.className === 'editable') {
        this._temporaryTodoText = event.target.innerText
      }
    })
  }

  ////// edit 
  bindEditTodo(handler) {
    this.todoList.addEventListener('focusout', event => {
      if (this._temporaryTodoText) {
        const id = parseInt(event.target.parentElement.id)

        handler(id, this._temporaryTodoText)
        this._temporaryTodoText = ''
      }
    })
  }

  //////////CleateElement
  createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }
  ///////////get
  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }
  /////////////naibu kansu
  get _todoText() {
    return this.input.value
  }

  _resetInput() {
    this.input.value = ''
  }

  //////////hyouji

  displayTodos(todos) {
    // saisyoni zennbu kesu Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild)
    }
    // localStorage.clear()
    // Show default message
    if (todos.length === 0) {
      const p = this.createElement('p')
      p.textContent = 'Nothing to do! Add a task?'
      this.todoList.append(p)
    } else {
      // moshi TODOS ni nakamiga areba list nisuru

      todos.forEach(todo => {
        // console.log(this.root+" "+todo.day+" "+thisYear+" "+todo.year+" "+weekOfyear+" "+todo.week)
        if (this.root == todo.day && thisYear == todo.year && weekOfyear == todo.week) {
          const li = this.createElement('li')
          li.id = todo.id

          // Each todo item will have a checkbox you can toggle
          const checkbox = this.createElement('input')
          checkbox.type = 'checkbox'
          checkbox.checked = todo.complete


          // The todo item text will be in a contenteditable span
          const span = this.createElement('span')
          span.contentEditable = true
          span.classList.add('editable')

          // If the todo is complete, it will have a strikethrough
          if (todo.complete) {
            const strike = this.createElement('s')
            strike.textContent = todo.text
            span.append(strike)
          } else {
            // Otherwise just display the text
            span.textContent = todo.text
          }

          // The todos will also have a delete button
          const deleteButton = this.createElement('button', 'delete')
          deleteButton.textContent = 'Delete'
          li.append(checkbox, span, deleteButton)

          // Append nodes to the todo list
          this.todoList.append(li)
        }
      })
    }
  }
  ///////////////yonidasu taimingu

  bindAddTodo(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault()

      if (this._todoText) {
        handler(this._todoText, this.root)
        this._resetInput()
      }
    })
  }

  bindDeleteTodo(handler) {
    this.todoList.addEventListener('click', event => {
      if (event.target.className === 'delete') {
        const id = parseInt(event.target.parentElement.id)

        handler(id)
      }
    })
  }

  bindToggleTodo(handler) {
    this.todoList.addEventListener('change', event => {
      if (event.target.type === 'checkbox') {
        const id = parseInt(event.target.parentElement.id)

        handler(id)
      }
    })
  }

}
