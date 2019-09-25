import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import MyCard from './MyCard';
import CardCollection from './CardCollection';
import AddCard from './AddCard';
import Navbar from './Navbar';
import { axiosWithAuth } from './axiosWithAuth'
import PrivateRoute  from './PrivateRoute'

// Need id off props from somewhere
const Home = (id) => {
    const [myCard, setMyCard] = useState(null);
    axiosWithAuth().get(`https://cardorganizer.herokuapp.com/api/users/${id}`)
    return(
        <div className='pagebox'>
            
          
            <Navbar />

            <Route path='/home/collection' render={() => <CardCollection />}/>
            <Route path='/home/add' render={() => <AddCard />}/>


   
        </div>

    )
}

export default Home
