"use client";
import { useState, useEffect } from "react";

// Function to fetch meal ideas based on ingredient
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

// Function to fetch meal details by ID
async function fetchMealDetails(mealId) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    return data.meals[0] || null;
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load meal ideas when ingredient changes
  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        setIsLoading(true);
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
        setSelectedMeal(null);
        setIngredients([]);
        setIsLoading(false);
      } else {
        setMeals([]);
        setSelectedMeal(null);
        setIngredients([]);
      }
    };
    
    loadMealIdeas();
  }, [ingredient]);

  // Handle meal selection
  const handleMealSelect = async (meal) => {
    setIsLoading(true);
    
    // If the same meal is clicked again, toggle it off
    if (selectedMeal && selectedMeal.idMeal === meal.idMeal) {
      setSelectedMeal(null);
      setIngredients([]);
      setIsLoading(false);
      return;
    }
    
    // Get detailed meal information
    const mealDetails = await fetchMealDetails(meal.idMeal);
    setSelectedMeal(meal);
    
    // Extract ingredients and measures from meal details
    const extractedIngredients = [];
    if (mealDetails) {
      for (let i = 1; i <= 20; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        const measure = mealDetails[`strMeasure${i}`];
        
        if (ingredient && ingredient.trim() !== "") {
          extractedIngredients.push({
            name: ingredient,
            measure: measure || "to taste"
          });
        }
      }
    }
    
    setIngredients(extractedIngredients);
    setIsLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-pink-50 shadow-lg rounded-lg border-2 border-pink-300">
      <h2 className="text-2xl font-bold mb-4 text-pink-700 border-b-2 border-pink-200 pb-2">
        {ingredient ? `Meal Ideas for ${ingredient}` : "Meal Ideas"}
      </h2>
      
      {isLoading && (
        <div className="py-4 text-center text-pink-600">
          <p>Loading...</p>
        </div>
      )}
      
      {!ingredient && !isLoading && (
        <p className="text-pink-600 italic text-center py-8">
          Select an item to see delicious meal ideas ✨
        </p>
      )}
      
      {ingredient && meals && meals.length === 0 && !isLoading && (
        <p className="text-pink-600 italic text-center py-8">
          No meal ideas found for {ingredient} 😢
        </p>
      )}
      
      <ul className="space-y-3">
        {meals && meals.map((meal) => (
          <li key={meal.idMeal}>
            <div 
              className={`p-3 bg-white rounded-lg shadow-sm transition-all duration-200 border cursor-pointer ${
                selectedMeal && selectedMeal.idMeal === meal.idMeal 
                  ? "border-pink-500 bg-pink-100" 
                  : "border-pink-200 hover:bg-pink-100"
              }`}
              onClick={() => handleMealSelect(meal)}
            >
              <div className="flex items-center gap-4">
                <img 
                  src={meal.strMealThumb} 
                  alt={meal.strMeal}
                  className="w-16 h-16 rounded-lg object-cover shadow-sm"
                />
                <span className="text-gray-800 font-medium">{meal.strMeal}</span>
              </div>
              
              {selectedMeal && selectedMeal.idMeal === meal.idMeal && ingredients.length > 0 && (
                <div className="mt-4 pl-4 border-t border-pink-200 pt-3">
                  <h3 className="font-medium text-pink-700 mb-2">Ingredients:</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {ingredients.map((ing, index) => (
                      <li key={index} className="text-gray-700">
                        <span className="font-medium">{ing.name}</span>
                        <span className="text-gray-500 ml-1">({ing.measure})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}