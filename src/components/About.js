import React from 'react'
export default function About(){
    return(
        <section id="about">
            <div className="container mx-auto flex py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-center">
                        Hi, I'm Ryan.
                        <br className="hidden lg:inline-block" /> I'm an (aspiring) electrical and computer engineer.
                    </h1>
                    <p className="mb-5">
                        I am currently a student at the University of Queensland, Brisbane.
                    </p>
                    <p className="mb-8">
                        I am studying a Bachelor/Masters Degree of Electrical and Computer Engineering, and have a passion for all things computing.
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
