import { Carousel } from "flowbite-react";
import horno from '../../Assets/horno.webp'
import mon from '../../Assets/masa-mon.webp'
import mija from '../../Assets/mija.webp'
import brioche from '../../Assets/brioche.png'

export function Carouselt() {
  return (
    
      <div className="max-w-xl mx-auto h-56 sm:h-64 xl:h-80 2xl:h-96">
  
      <Carousel>
        <img
          src={brioche}
          alt="bri"
          className="w-full h-[100%] sm:h-auto object-cover"
        />
        <img
          src={mija}
          alt="mija"
          className="w-full h-[100%] sm:h-auto object-cover"
        />
        <img
          src={mon}
          alt="mon"
          className="w-full h-[100%] sm:h-auto object-cover"
        />
        <img
          src={horno}
          alt="horno"
          className="w-full h-[100%] sm:h-auto object-cover"
        />
      </Carousel>
    </div>


  );
}
