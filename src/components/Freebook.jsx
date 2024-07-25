import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import banner from '../../public/Banner.png';
const Freebook = ({ books }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Ensure books is an array and log it to verify
    console.log(books);

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='font-bold text-xl pb-2'>Free Courses</h1>
                <p>Get our free books now! Discover endless stories and knowledge. Don't miss this amazing opportunity to read!</p>
            </div>
            <div>
                <Slider {...settings} >
                    {books.map((book, index) => (
                        <Cards
                            key={index}
                            image={book.volumeInfo.imageLinks?.thumbnail || {banner}}
                            name={book.volumeInfo.title}
                            price={book.saleInfo.listPrice?.amount || 'Free'}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Freebook;
