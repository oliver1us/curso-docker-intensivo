<template>
  <div class="background">
    <div class="container">
      <h1>ToDo List 📝</h1>
      <div class="form">
        <input v-model="newTask" placeholder="Nueva tarea" />
        <button @click="addTodo">Agregar</button>
      </div>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          ✅ {{ todo.task }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const todos = ref([])
const newTask = ref('')
const API_URL = ref('')

const fetchConfig = async () => {
  const res = await fetch('/config.json')
  const config = await res.json()
  API_URL.value = config.API_URL
  fetchTodos()
}

const fetchTodos = async () => {
  if (!API_URL.value) return
  const res = await fetch(`${API_URL.value}/api/todos`)
  todos.value = await res.json()
}

const addTodo = async () => {
  if (!newTask.value.trim()) return
  await fetch(`${API_URL.value}/api/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task: newTask.value })
  })
  newTask.value = ''
  fetchTodos()
}

onMounted(fetchConfig)
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #1e1e2f, #2d2d44);
  font-family: 'Segoe UI', sans-serif;
}

/* Fondo general */
.background {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

/* Contenedor principal */
.container {
  max-width: 500px;
  background: #2c2c3e;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  color: #fff;
  width: 100%;
}

/* Título */
h1 {
  margin-bottom: 20px;
}

/* Formulario de ingreso */
.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}

input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background: #444;
  color: #fff;
}

input::placeholder {
  color: #aaa;
}

input:focus {
  outline: none;
  background: #555;
}

/* Botón Agregar */
button {
  background-color: #00c3ff;
  border: none;
  padding: 10px 16px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #009fc1;
}

/* Lista de tareas */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #3a3a4f;
  margin-bottom: 10px;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
  font-size: 16px;
  animation: fadeIn 0.3s ease-in-out;
}

/* Animación para tareas nuevas */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Botón eliminar */
.delete-btn {
  margin-left: 10px;
  background: transparent;
  border: none;
  color: #ff5c5c;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.delete-btn:hover {
  transform: scale(1.2);
}

</style>
