import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'

const CardDialog = ({ modalRecipe, setModalRecipe }) => {
    console.log(modalRecipe);

    return (
        <Dialog open={true} onOpenChange={() => setModalRecipe(null)}>
            <DialogContent className="max-w-3xl w-full p-6 bg-white text-gray-700">
                <DialogHeader>
                    <DialogTitle>{modalRecipe.name || "Recipe Name"}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 overflow-y-scroll h-[400px]">
                    <div>
                        <img
                            src={modalRecipe.image}
                            alt={modalRecipe.name}
                            className="w-full h-64 object-cover rounded-md"
                        />
                    </div>
                    <div className=''>
                        <p>
                            <b>Cuisine:</b> {modalRecipe.cuisine} | <b>Difficulty:</b>{" "}
                            {modalRecipe.difficulty}
                        </p>
                        <p>
                            <b>Prep Time:</b> {modalRecipe.prepTimeMinutes} min |{" "}
                            <b>Cook Time:</b> {modalRecipe.cookTimeMinutes} min
                        </p>
                        <p>
                            <b>Servings:</b> {modalRecipe.servings} | <b>Calories:</b>{" "}
                            {modalRecipe.caloriesPerServing}
                        </p>

                        <h3 className="font-semibold">Ingredients:</h3>
                        <ul className="list-disc list-inside">
                            {modalRecipe.ingredients.map((ing, idx) => (
                                <li key={idx}>{ing}</li>
                            ))}
                        </ul>

                        <h3 className="font-semibold">Instructions:</h3>
                        <ol className="list-decimal list-inside">
                            {modalRecipe.instructions.map((inst, idx) => (
                                <li key={idx}>{inst}</li>
                            ))}
                        </ol>
                    </div>
                </div>
                <DialogClose asChild>
                    <button className="mt-4 w-full bg-primary text-white py-2 rounded">Close</button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default CardDialog
