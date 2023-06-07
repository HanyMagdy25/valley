import Image from "next/image";
import heroImage from "../assets/hero.jpg";

// export const CardHero = () => {
//   return (
//     <div class="col-span-1 m-auto cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-200 hover:translate-y-2">
//       <img
//         class=" w-full object-cover"
//         alt="featured image"
//         src="https://images.unsplash.com/photo-1660241588741-d653d53348fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
//       />
//     </div>
//   );
// };

const Hero = () => {
  return (
    <div>
      <div className="w-full h-[400px] md:h-[500px] ">
        <Image
          src={heroImage}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
