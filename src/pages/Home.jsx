import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import "../App.css";
import Categories from '../Components/Categories';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

export default function Home() {
    return (
        <div>
           <Navbar/>
           <Announcement/>
           <Slider/>
           <Categories/>
          
           <Newsletter/>
           <Footer/>
        </div>
    )
}
