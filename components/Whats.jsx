import Image from "next/image";
import whatsImage from "../assets/social/whatsapp.png";

const Whats = () => {
  return (
    <a 
    href={`https://wa.me/+201112994482`}
    target="_blank"
      class="bg-secondColor text-lightBlue-600 shadow-lg font-normal 
            h-14 w-14 flex items-center justify-center align-center rounded-full 
            cursor-pointer ml-2 fixed bottom-8 right-4 z-50"
    >
      <Image
        src={whatsImage}
        alt="whatsImage"
        width={48}
        height={48}
        className="h-12 w-12 hover:scale-110 transition duration-100"
        priority
      />
    </a>
  );
};

export default Whats;
