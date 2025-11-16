import { Delete, Edit, Trash } from "lucide-react";
import React, { useState } from "react";

const TodoList = ({ todos, deleteTodo, editTodo, toggleTodo }) => {
  const [expandedIndex, setExpandedIndex] = useState(null); // NEW STATE

  const toggleExpand = (index) => {
    console.log(index, "hy");
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  }
  return (
    <div className="max-w-xl mx-auto ">
      <ul className="flex flex-col gap-3 my-3 max-h-[300px] overflow-auto ul" >
        {
          todos.length === 0 ? (
            <p className="text-center font-semibold text-3xl my-2.5 text-gray-200">No Todos</p>
          ) : (
            todos.map((todo, index) => {
              const isExpanded = index === expandedIndex;
              console.log(expandedIndex);

              return (
                <li
                  key={index}
                  className={`p-4 rounded-xl shadow cursor-pointer transition-colors duration-200 
                 ${todo.completed ? "bg-lime-700" : "bg-slate-600"}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      onClick={() => toggleTodo(index)}
                      //         className={`p-4 rounded-xl shadow cursor-pointer transition-colors duration-200 
                      // ${todo.completed ? "bg-lime-700 line-through" : "bg-slate-600"}`}
                      className={`flex gap-1.5 text-base text-white leading-relaxed
                      ${todo.completed && "line-through"}`}>
                      <h4 className="text-gray-200 font-semibold">{index + 1}</h4>
                      <p className={`${isExpanded ? "" : "line-clamp-1"} max-w-[230px]`}>{todo.title}</p>
                    </div>
                    {
                      todo.title.length > 25 && (
                        <div className="flex items-center w-[100px]">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(index);
                            }}
                            className=" text-sm text-yellow-300 underline mt-1">
                            {isExpanded ? "See less" : "See more"}
                          </button>
                        </div>
                      )
                    }
                    {/* <span className="flex gap-1.5 text-base text-white leading-relaxed flex-1 h-[45px] overflow-hidden">
                      <h4 className="text-gray-200 font-semibold">{index + 1}.</h4>
                      {todo.title}
                    </span> */}

                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteTodo(index);
                        }}
                        className="bg-red-500 hover:bg-red-600  px-3 py-1.5 text-white rounded-lg"
                      >
                        <Trash size={20} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          editTodo(todo, index);
                        }}
                        className="bg-indigo-500 hover:bg-indigo-600 px-3 py-1.5 text-white rounded-lg"
                      >
                        <Edit size={20} />
                      </button>
                    </div>
                  </div>

                  <span
                    onClick={() => toggleTodo(index)}
                    className={`text-sm flex gap-2 text-green-300 font-medium mt-1 ${todo.completed && "line-through"}`}>
                    <h4>{todo.time}</h4> {todo.dateTime}
                  </span>
                </li>
              )
            })
          )
        }
      </ul>
    </div>
  );
};

export default TodoList;
