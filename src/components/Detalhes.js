import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detalhes.css';

function Detalhes() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        setRecipe(response.data.meals[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail-container">
      <div className="recipe-card">
        <h1 className="recipe-title">{recipe.strMeal}</h1>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="recipe-image"
        />

        <div className="recipe-instructions">
          <h2>Instructions</h2>
          <p>{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default Detalhes;
