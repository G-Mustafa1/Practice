import React from 'react'

const Categories = ({ category, setSearch, search }) => {
    console.log(category);

    return (
        <div className='flex flex-col justify-center items-center my-5'>
            <h1 className='text-4xl font-bold text-black'>Categories</h1>
            <div className='flex flex-wrap justify-between items-center gap-2.5 my-10'>
                <button
                    onClick={() => setSearch('all')}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition hover:bg-blue-700 hover:text-white
                        ${search === "all" 
                            ? "bg-blue-700 text-white border-blue-700" 
                            : "bg-blue-500 text-white border-blue-500"}`}>
                    All
                </button>
                {category.map((item) => (
                    <div key={item.slug}>
                        <button
                            onClick={() => setSearch(item.slug)}
                            className={`bg-blue-500 py-2.5 px-5 rounded-lg text-white hover:bg-blue-700
                            ${search === item.slug
                                && "bg-blue-700 text-white border-blue-700"
                            }
                            `}>
                            {item.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories
