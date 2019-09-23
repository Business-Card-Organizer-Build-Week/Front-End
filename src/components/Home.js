import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import MyCard from './MyCard';
import CardCollection from './CardCollection';
import AddCard from './AddCard';

const Home = () => {
    return(
        <div className='pagebox'>
          
            <div className='home'>
            <NavLink to='/mycard'>My Card </NavLink>
            <NavLink to='/collection'>Collected Cards </NavLink>
            <NavLink to ='/add'>Add a Card </NavLink>
            </div>

            <Route path='/mycard' render={() => <MyCard />}/>
            <Route path='/collection' render={() => <CardCollection />}/>
            <Route path='/add' render={() => <AddCard />}/>


   
        </div>

    )
}

export default Home
