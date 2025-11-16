import React, { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Swal from 'sweetalert2'
import Filter from './components/Filter'
import Header from './components/Header'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState("all");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const date = new Date();
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateTime = date.toLocaleDateString();
    const newTodo = [...todos, {
      title,
      completed: false,
      dateTime,
      time
    }];
    setTodos(newTodo);
  }


  const editTodo = (todo, index) => {
    Swal.fire({
      title: "Edit Task",
      input: "text",
      inputLabel: 'Enter the new task text',
      inputValue: todo.title,
      showCancelButton: true,
      confirmButtonText: "Save",
      showLoaderOnConfirm: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!"
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        const now = new Date();
        const updatedTodo = todos.map((item, indx) => (
          indx === index ? {
            ...item, title: result.value,
            dateTime: now.toLocaleDateString(),
            time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          } : item
        ));
        setTodos(updatedTodo);
      }
    });
  }
  const deleteTodo = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(todos.filter((_, i) => i !== index));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  const toggleTodo = (index) => {
    console.log(index);
    const updatedTodo = todos.map((t, i) => i === index ? { ...t, completed: !t.completed } : t,);
    setTodos(updatedTodo);
  }

  const filterTodos = todos.filter((item) => {
    if (filters === "all") {
      return true;
    } else if (filters === "completed") {
      return item.completed;
    } else if (filters === "pending") {
      return !item.completed;
    }
  })

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0F172A]">
      <div className="p-6 rounded-xl w-full max-w-md bg-[#1E293B] shadow-lg shadow-black transition duration-300 ease-in-out hover:shadow-xl hover:scale-101 ">
        <Header />
        <AddTodo addTodo={addTodo} />
        <Filter filters={filters} setFilters={setFilters} />
        <TodoList todos={filterTodos} deleteTodo={deleteTodo} editTodo={editTodo} toggleTodo={toggleTodo} />
      </div>
    </div>
  )
}

export default App
