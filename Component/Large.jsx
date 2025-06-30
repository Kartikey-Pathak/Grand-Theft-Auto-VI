import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use, useRef, useState } from "react";


function Large({url,state}){

    const large=useRef(null)

    useGSAP(() => {

         gsap.to(large.current, {
            opacity: 1,
            scale:1,
            duration:0.5,
            delay:0.1,
            ease: "power1.inOut"
        })


           }, [])


    return(
             <div ref={large} className=" opacity-0 scale-0  h-screen w-full left-0 right-0 bg-black absolute z-[160] flex justify-center items-center">
                        <div className=" flex justify-center items-center absolute z-[170] right-5 md:right-10 top-10">
                            <div onClick={()=>{state(false)}} className=" rounded-full size-12 bg-gray-800 cursor-pointer hover:bg-gray-600 transition-all flex justify-center items-center"><i className=" text-xl text-yellow-200 font-bold fa-solid fa-xmark"></i></div>

                        </div>
                        <img src={url} className=" object-contain lg:object-cover h-[100vh] md:w-[90%] w-[100vw]" alt="" />

                    </div>

        
    )
}
export default Large;