import React, { Fragment, useState } from 'react';

const Pokemon = ({ pokemon }) => {
   if (pokemon.length === 0) return null;

   const resultInfo = e => {
      e.preventDefault();
      let data = [{
         pokemonName: e.target[0].value,
         pokemonWeight: e.target[1].value,
         pokemonOrder: e.target[2].value,
         pokemonId: e.target[3].value,
      }];

      localStorage.setItem('favorites', JSON.stringify(data));
   };

   return (
      <Fragment>
         <h2>Pokemon</h2>
         <img
            src={pokemon?.sprites?.front_default}
            className='card-img-top'
         ></img>
         <form onSubmit={resultInfo}>
            <div className='card'>
               <div className='card-body'>
                  <h5 className='card-title'>Name: {pokemon.name}</h5>
                  <input
                     type='text'
                     className='form-control'
                     name='pokemon'
                     value={`Name: ` + pokemon.name}
                     disabled
                     hidden
                  ></input>
                  <input
                     type='text'
                     className='form-control'
                     name='pokemon'
                     value={`Weight: ` + pokemon.weight}
                     disabled
                  ></input>
                  <input
                     type='text'
                     className='form-control'
                     name='pokemon'
                     value={`Order: ` + pokemon.order}
                     disabled
                  ></input>
                  <input
                     type='text'
                     className='form-control'
                     name='pokemon'
                     value={`ID: ` + pokemon.id}
                     disabled
                  ></input>
                  <br></br>
                  <button type='submit' className='btn btn-primary float-left'>
                     Save to favorites
                  </button>
               </div>
            </div>
         </form>
      </Fragment>
   );
};

export default Pokemon;
