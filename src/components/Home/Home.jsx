import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Cards from '../CardComponents/Cards/Cards';

const Home = () => {
    const data=useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
           <div className="max-w-[1400px] mx-auto">
           <Cards cards={data}></Cards>
           </div>
        </div>
    );
};

export default Home;