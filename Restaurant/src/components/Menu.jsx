import { useQuery } from "@tanstack/react-query";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import CardDialog from "./CardDialog";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const [modalRecipe, setModalRecipe] = useState(null);

  // Fetch function
  const fetchData = async (searchText) => {
    const query = searchText || "";
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    return res.json();
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipes", selectedRecipe],
    queryFn: () => fetchData(selectedRecipe),
    keepPreviousData: true,
  });

  // On input change
  const handleChange = (e) => {
    setSearch(e.target.value);
    setSelectedRecipe(e.target.value);
  };

  const handleClick = () => {
    if (!search.trim()) return;
    setSelectedRecipe(search);
  };
  const enterCheck = (e) => {
    if (e.key === "Enter") handleClick();
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of exquisite dishes prepared with passion and precision
          </p>
        </div>
        <div className="mb-10 flex justify-center gap-2.5 w-full">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            onKeyDown={enterCheck}
            placeholder="Search for recipes..."
            className="border border-primary rounded-md py-1.5 px-3 text-gray-900 w-[500px] text-lg"
          />
          <button
            onClick={handleClick}
            className="bg-primary py-3.5 px-5 text-white rounded-md text-lg"
          >
            Search
          </button>
        </div>
        {isError && (
          <div className="flex justify-center">
            <h1 className="text-red-500 text-4xl">Something went wrong</h1>
          </div>
        )}
        {isLoading && (
          <div className="flex justify-center items-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {!isLoading && data?.recipes?.length === 0 && (
          <div className="flex justify-center">
            <h1 className="text-gray-500 text-2xl">No recipes found</h1>
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.recipes?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform duration-500 hover:scale-105"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h5 className="text-gray-700">({item.cuisine})</h5>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Expertly crafted with premium ingredients and innovative techniques
                </p>
                <div className="flex justify-between text-gray-700 mb-2.5">
                  <span><b>Rating:</b> {item.rating}</span>
                  <span><b>Reviews:</b> {item.reviewCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">{item.rating}</span>
                  <button onClick={() => setModalRecipe(item)} className="bg-primary flex items-center gap-2.5 text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium">
                    See Details <ArrowRightIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalRecipe && (
        <CardDialog modalRecipe={modalRecipe} setModalRecipe={setModalRecipe} />
      )}
    </section >
  );
}
