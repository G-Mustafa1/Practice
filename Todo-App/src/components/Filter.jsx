import React, { useState } from 'react'

const Filter = ({filters, setFilters}) => {
    
    return (
        <div className="flex justify-between gap-3 mb-3">
            <button
                onClick={() => setFilters("all")}
                className={`${filters === "all" && "bg-orange-600"} bg-orange-500 hover:bg-orange-600  text-white px-4 py-2 rounded-lg flex-1 `}>
                All
            </button>
            <button
                onClick={() => setFilters("completed")}
                className={`${filters === "completed" && "bg-green-600"} bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex-1 `}
            >
                Complete
            </button>
            <button
                onClick={() => setFilters("pending")}
                className={`${filters === "pending" && "bg-yellow-600"} bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex-1`}
            >
                Uncomplete
            </button>
        </div>
    )
}

export default Filter
