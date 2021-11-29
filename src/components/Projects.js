import {CodeIcon, ChipIcon, PlusSmIcon} from "@heroicons/react/solid";
import React from "react";


export default function Projects(){
    return(
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center items-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <div className="flex justify-center">
                    <CodeIcon className= "w-10 mb-4" />
                    <PlusSmIcon className="w-10 mb-4" /> 
                    <ChipIcon className="w-10 mb-4"/>
                </div>
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Things I've Built
                </h1>
                
            </div>
        </div>

    </section>
    );

}
