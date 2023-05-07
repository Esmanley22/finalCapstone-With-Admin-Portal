import React from 'react';
import { Jumbotron } from '../components/Jumbotron';
import CarouselSlide from '../components/CarouselSlide';

function Home() {
 return (
    <main role="home">
    <Jumbotron />
    <div className="bg  pt-3 bg-light border-top border-2 border-black">
        <CarouselSlide />
    </div>
    </main>
    );
};
export default Home