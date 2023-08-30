import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Lista.css';
function Lista() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => {
        setRecipes(response.data.meals);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="recipe-list-container">
      <div className="recipe-list">
        <h1 className="recipe-list-title">Explore Receitas</h1>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.idMeal} className="recipe-item">
              <div className="recipe-item-title">{recipe.strMeal}</div>
              <div className="recipe-item-details">
                {recipe.strInstructions.substr(0, 150)}...
              </div>
              <a href={`/recipe/${recipe.idMeal}`} className="recipe-item-link">
                Ver Receita
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lista;
