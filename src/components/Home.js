import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import MyCard from './MyCard';
import CardCollection from './CardCollection';
import AddCard from './AddCard';
import Navbar from './Navbar';

const Home = () => {
    return(
        <div className='pagebox'>
          
            <Navbar />

            <Route path='/mycard' render={() => <MyCard />}/>
            <Route path='/collection' render={() => <CardCollection />}/>
            <Route path='/add' render={() => <AddCard />}/>


   
        </div>

    )
}

export default Home
