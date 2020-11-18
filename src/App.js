import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Form from './components/Form';
import Pokemon from './components/Pokemon';

import Favorites from './Favorites/Favorites';
import Navbar from './Navbar/Navbar';

import './App.css';
import axios from 'axios';
function App() {
   const [searchPokemon, saveSearchPokemon] = useState({});
   const [pokemon, savePokemon] = useState('');

   useEffect(() => {
      if (Object.keys(searchPokemon).length === 0) return;
      const apiPokemon = async () => {
         const { pokemon } = searchPokemon;
         const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
         const result = await axios(url);
         savePokemon(result.data);
         console.log(result.data);
      };
      apiPokemon();
   }, [searchPokemon]);

   return (
      <Fragment>
         <Form savePokemon={saveSearchPokemon} />
         <div className='container margin-top-5'>
            <div className='row'>
               <div className='col-md-6'>
                  <Pokemon pokemon={pokemon} />
               </div>
            </div>
         </div>
         <BrowserRouter>
            <div>
            <Navbar />
               <Redirect from='/' to='/favorites' />
               <Switch>
                  <Route path='/favorites' component={Favorites} />
               </Switch>
            </div>
         </BrowserRouter>
      </Fragment>
   );
}

export default App;
