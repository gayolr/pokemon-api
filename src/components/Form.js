import React, { useState } from 'react';

const Form = ({savePokemon}) => {
   const [search, saveSearch] = useState({
      pokemon: ''
   });

   const [error, saveError] = useState(false);
   const { pokemon } = search;

   const updateState = e => {
      saveSearch({ ...search, [e.target.name]: e.target.value });
   };

   const searchInfo = e => {
      e.preventDefault();

      if (pokemon.trim() === '') {
         saveError(true);
         return;
      }
      saveError(false);
   };

   savePokemon(search);
   return (
      <div className='bg-info'>
         {error ? (
            <p className='alert alert-danger text-center p2'>
               Todos los campos son obligatorios
            </p>
         ) : null}
         <div className='container'>
            <div className='row'>
               <form
                  onSubmit={searchInfo}
                  className='col card text-white bg-transparent mb-5 pt-5 pb-2'
               >
                  <fieldset>
                     <legend className='text-center'>Buscador Pokemon</legend>
                     <div className='row'>
                        <div className='col-md-6'>
                           <div className='form-group'>
                              <label>Pokemon:</label>
                              <input
                                 type='text'
                                 className='form-control'
                                 name='pokemon'
                                 placeholder='Nombre pokemon'
                                 onChange={updateState}
                                 value={pokemon}
                              ></input>
                           </div>
                        </div>
                     </div>
                     <button
                        type='submit'
                        className='btn btn-primary float-left'
                     >
                        Buscar
                     </button>
                  </fieldset>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Form;
