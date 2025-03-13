import {useState, useEffect} from "react";
import "./slider.css"

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import image5 from '../assets/image5.jpeg'
import image6 from '../assets/image6.jpeg'

const SliderData = [   
        { 
            image: image1,
            heading: "slide one",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
        {
            image: image2,
            heading: "slide two",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
        {
            image: image3,
            heading: "slide three",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
        {
            image: image4,
            heading: "slide four",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
        {
            image: image5,
            heading: "slide five",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
    
        {
            image: image6,
            heading: "slide six",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, minima?"
        },
    ]
    
    export default function Slider(){

const [currentSlide, setCurrentSlide] = useState(0) 
const slideLength = SliderData.length;
// slideLength = 1 2 3
// currentSlide = 0 1 2

const autoScroll = true
let slideInterval 
let intervalTime = 5000;

const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
}
const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
}

function auto(){
    slideInterval = setInterval(nextSlide, intervalTime)
}


useEffect(() => {
    setCurrentSlide(0)
},[])

useEffect(() => {
    if(autoScroll){
        auto();
    }
    return () => clearInterval(slideInterval)
}, [currentSlide]);


    return(
        <div className="slider text-2xl">
             <i className="arrow prev fa-solid fa-arrow-left" onClick={prevSlide}></i>
            <i className="arrow next fa-solid fa-arrow-right" onClick={nextSlide}></i>

            {SliderData.map((slide, index) => {
                return(
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="" />
                                <div className="content">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    <button className="--btn --btn-primary">Get started</button>
                                </div>
                            </>
                        )}
                        
                    </div>
                )
            })}
        </div>
    )
}