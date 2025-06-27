import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


function Head(){
    const cont=useRef(null);

    useGSAP(()=>{

        gsap.fromTo("#hero",{
            scale:4,
            duration:3,
            delay:0.5,
        },{
            scale:1,
            duration:3,
            delay:0.5,
            scrollTrigger:{
                scrub:true,
                trigger:cont.current,
                markers:true,
                start:"top 1000",
                end:"bottom 100"
            }
        })
        gsap.from("#gta",{
            opacity:1,
            duration:1,
        })
        gsap.to("#gta",{
            opacity:0.6,
             scrollTrigger:{
                scrub:true,
                trigger:cont.current,
                start:"top 40",
                end:"bottom 20"
            }
            
        })

    })


    return(
        <div  className=" h-full w-full">
            
            
            <div ref={cont} className=" h-screen w-full overflow-hidden relative">
                <div className=" top-0">
                <img id="gta" src="/gta.webp" className=" opacity-100 top-0 object-cover fixed z-10" alt="" />
                </div>
                <div className=" flex justify-center items-center absolute mt-20 z-30 h-full w-full">
                    <div className=" bg-white size-28 hover:size-32 transition-all cursor-pointer rounded-full flex justify-center items-center">
                        <i className=" text-4xl text-gray-600 fa-solid fa-play"></i>
                    </div>
                </div>
            <img  id="hero" src="/hero.webp" className=" fixed z-0 h-full w-full object-cover scale-110" alt="" />
            </div>
            
        </div>
    )
}
export default Head;