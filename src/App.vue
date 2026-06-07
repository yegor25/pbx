<!-- <template>
  <div class="app">
    <h1>Todo List</h1>

   
    <div class="input-group">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Добавь задачу..."
      />
      <button @click="addTodo">Добавить</button>
    </div>

  
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <label>
          <input type="checkbox" v-model="todo.completed" />
          <span :class="{ done: todo.completed }">
            {{ todo.text }}
          </span>
        </label>
        <button @click="removeTodo(todo.id)">❌</button>
      </li>
    </ul>

    <p>Всего: {{ todos.length }} | Выполнено: {{ completedCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"

interface Todo {
  id: number
  text: string
  completed: boolean
}

const newTodo = ref<string>("")
const todos = ref<Todo[]>([])

const addTodo = (): void => {
  if (!newTodo.value.trim()) return

  todos.value.push({
    id: Date.now(),
    text: newTodo.value,
    completed: false,
  })

  newTodo.value = ""
}

const removeTodo = (id: number): void => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

const completedCount = computed(() =>
  todos.value.filter(todo => todo.completed).length
)
</script>

<style scoped>
.app {
  max-width: 400px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

.input-group {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 8px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.done {
  text-decoration: line-through;
  color: gray;
}
</style> -->

<template>
  <v-app>
    <v-main>
           <div class="app">
    <TheHeader/>
     
   <Login/>
  </div>
    </v-main>
 
  </v-app>
  
 
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import Login from './views/login/Login.vue';

  interface Todo {
    id: number;
    title: string;
    isDone: boolean
  }
  const newTodo = ref<string>("")
  const todos = ref<Todo[]>([])
  const addTodo:() => void = () => {
    if(!newTodo.value.trim().length) return
    todos.value.push({title: newTodo.value.trim(), id: Date.now(), isDone: false})
    newTodo.value = ""
  }

  
</script>

<style>
.app {
  border: 1px solid red;
 height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

</style>