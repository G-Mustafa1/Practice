import React, { useState } from 'react'
import Swal from 'sweetalert2';

const AddTodo = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubbmit = (e) => {
        e.preventDefault();
        if (!input.trim()) {
            Swal.fire({
                title: "Please enter a todo",
                icon: "warning",
                // draggable: true
            });
            return
        }
        addTodo(input);
        setInput('');
    }
    return (
        <form onSubmit={handleSubbmit} className="flex gap-3 mb-5">
            <input
                className="flex-grow bg-[#334155] text-white p-3 rounded-lg outline-none border border-[#475569] placeholder-gray-300"
                type="text"
                placeholder="Add Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                // style={{backgroundColor: input === "" && "blue", hover: "black"}}
                type='submit' className="bg-blue-500 hover:bg-blue-600 text-white px-5 rounded-lg">
                Add
            </button>
        </form>
    )
}

export default AddTodo
