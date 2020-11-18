import React, { Component } from 'react';

class Favorites extends Component {
   render() {

      let pokemons= JSON.parse(localStorage.getItem('favorites'));


      const remove = () => {
         localStorage.removeItem('favorites');
      };

      return (
         <div className='container'>
            <h1>List of pokemon favorites: </h1>
            {/* <p>{pokemons[0].pokemonName}</p>
            <p>{pokemons[0].pokemonName}</p>
            <p>{pokemons[0].pokemonOrder}</p>
            <p>{pokemons[0].pokemonWeight}</p> */}
            <button onClick={remove} className='btn btn-primary float-left'>
               Delete from favorites
            </button>
         </div>
      );
   }
}

export default Favorites;
