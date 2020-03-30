<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h3>{{heading}}</h3>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <b-button v-b-modal.modal-1>Create New Todo Item</b-button>
      </div>
    </div>
      <hr>

      <div>
        <b-modal id="modal-1" title="Create New Todo Item">
          <div class="my-4">
            <label>Enter Todo Content</label>
            <input type="text" class="form-control" v-model="title" @keyup.enter="addTodo" :class="{ 'error': error }">
          </div>
        </b-modal>
      </div>

      <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <div v-for="(todo, index) in todosFiltered" :key="index" class="todo-items"> 
        <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-2">
                <span class="badge badge-secondary">
                  #{{index}}
                </span>
              </div>
              <div class="col-md-6">
                <div v-if="!todo.edit" @dblclick="todoEdit(index)" :class="{'completed': todo.completed}">
                  {{todo.title}}
                  </div>
                <input v-else type="text" class="form-control" v-model="todo.title"
                @blur="doneEdit(index)" @keyup.enter="doneEdit(index)" @keyup.esc="cancelEdit(index)" v-focus>
                
              </div>
              <div class="col-md-2">
                 <div class="form-check" v-if="!todo.edit">
                  <input type="checkbox" class="form-check-input" v-model="todo.completed" :class="{ 'error': error }">
                  <label class="form-check-label">Mark As Complete</label>
                </div>
                <small v-else class="hint">
                    <p>"Esc" Key = cancel editing.<br>
                    "Enter" Key = update title.</p>
                </small>
              </div>
              <div class="col-md-2">
                <button class="btn btn-sm btn-danger" @click="removeItem(index)">X</button>
              </div>
            </div>
        </div>
      </div>
      </transition-group>

        <div class="card card-footer">
          <div class="row">
            <div class="col-md-3">
              {{remaining}} todos left.
            </div>
            <div class="col-md-3">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" :checked="!anyRemaining" @change="checkAllTodos">
                <label class="form-check-label">Check All</label>
              </div>
            </div>
            <div class="col-md-3">
              <button :class="{active: filter == 'all'}" @click="filter = 'all'" class="btn btn-sm btn-default">All</button>
              <button :class="{active: filter == 'active'}" @click="filter = 'active'" class="btn btn-sm btn-default">Active</button>
              <button :class="{active: filter == 'completed'}" @click="filter = 'completed'" class="btn btn-sm btn-default">Completed</button>
            </div>
            <transition name="fade">
              <div class="col-md-3" v-if="showClearCompletedButton">
                <button class="btn btn-sm btn-info" @click="clearCompleted">Clear Completed</button>
              </div>
            </transition>
          </div>
        </div>

  </div>
</template>

<script>
export default {
  name: 'TodoList',

  data(){
    return {
      heading: 'Todo List',
      title: '',
      beforeEdit: '',
      error: false,
      filter: 'all',

      todos: [
        {
          title: 'Learn Vue and Bootstrap',
          edit: false,
          completed: false
        }
      ]
    }
  },

  computed: {
    remaining(){
      return this.todos.filter(todo => !todo.completed).length;
    },

    anyRemaining(){
      return this.remaining !== 0;
    },

    todosFiltered(){
      if(this.filter == 'all'){
        return this.todos;
      } else if(this.filter == 'active'){
        return this.todos.filter(todo => todo.completed == false);
      } else if(this.filter == 'completed'){
        return this.todos.filter(todo => todo.completed == true);
      }

      return this.todos;
    },

    showClearCompletedButton(){
      return this.todos.filter(todo => todo.completed).length > 0;
    }
  },

  directives: {
    focus: {
      inserted: function(el){
        el.focus();
      }
    }
  },

  methods: {
    addTodo(){

      if(!this.title){
        this.error = true;
      } else {
      let todo_item = {
        title: this.title,
        edit: false,
        completed: false
      };

      this.todos.push(todo_item);
      this.title = '';
     }
    },

    todoEdit(index){
      this.beforeEdit = this.todos[index].title;
      this.todos[index].edit = true;
    },

    cancelEdit(index){
          this.todos[index].title = this.beforeEdit;
          this.todos[index].edit = false;
    },

    doneEdit(index){
          if(!this.todos[index].title){
             this.todos[index].title = this.beforeEdit;
          }

          this.todos[index].edit = false;
    },

    checkAllTodos(){
      this.todos.forEach(todo => todo.completed = event.target.checked);
    },

    clearCompleted(){
      this.todos = this.todos.filter(todo => !todo.completed);
    },

    removeItem(index){
      this.todos.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");

  .container {
    margin-top: 5%;
  }

  h3 {
    text-align: center;
  }

  .error {
    border: 1px solid red;
  }

  .hint {
    color: green;
  }

  .completed {
    text-decoration: line-through;
    color: green;
  }

  .active {
    background: green;
    color: white;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .todo-items {
    animation-duration: 0.3s;
  }
</style>
