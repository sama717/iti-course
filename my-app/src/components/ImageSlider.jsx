import React, { useState, useRef } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/carousel.css'

export default function ImageSlider() {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const intervalIdRef = useRef(null);  // Use useRef to persist intervalId

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % 5);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
    };

    const handlePlayStop = () => {
        if (isPlaying) {
            clearInterval(intervalIdRef.current);  // Clear the interval stored in the ref
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            intervalIdRef.current = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % 5);
            }, 2000); // Change image every 2 seconds
        }
    };

    // Clean up interval on unmount to avoid memory leaks
    React.useEffect(() => {
        return () => clearInterval(intervalIdRef.current);
    }, []);

    return (
        <div className="mt-5 text-center">
            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
                <Carousel.Item className='carousel'>
                    <img
                        className="d-block"
                        src="https://images.pexels.com/photos/27969812/pexels-photo-27969812/free-photo-of-croissant-with-salmon-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Image 1"
                    />
                </Carousel.Item>
                <Carousel.Item className='carousel'>
                    <img
                        className="d-block"
                        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Image 2"
                    />
                </Carousel.Item>
                <Carousel.Item className='carousel'>
                    <img
                        className="d-block"
                        src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Image 3"
                    />
                </Carousel.Item>
                <Carousel.Item className='carousel'>
                    <img
                        className="d-block"
                        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Image 4"
                    />
                </Carousel.Item>
                <Carousel.Item className='carousel'>
                    <img
                        className="d-block"
                        src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Image 5"
                    />
                </Carousel.Item>
            </Carousel>

            <div className="mt-3">
                <Button variant="primary" onClick={handlePrev}>Prev</Button>
                {' '}
                <Button variant={isPlaying ? "danger" : "success"} onClick={handlePlayStop}>
                    {isPlaying ? 'Stop' : 'Play'}
                </Button>
                {' '}
                <Button variant="primary" onClick={handleNext}>Next</Button>
            </div>
        </div>
    );
}
