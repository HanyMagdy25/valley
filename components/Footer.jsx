import Link from "next/link";

import facebook from "../assets/social/facebook.png";
import twitter from "../assets/social/twitter.png";
import phone from "../assets/social/phone.png";
import mail from "../assets/social/mail.png";
import logoImage from "../assets/logo.png";
import Image from "next/image";

const socialMedia = [
  { id: 1, image: facebook, path: "/" },
  { id: 2, image: mail, path: "/" },
  { id: 3, image: twitter, path: "/" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto grid grid-cols-12 max-w-screen-xl gap-y-8 md:gap-x-12 px-6 py-10">
        <div className="max-w-sm col-span-12 md:col-span-3">
          <Link href="/" className="flex mb-3">
            <span className="">
              <Image src={logoImage} alt="logoImage" className="w-32" />
            </span>
          </Link>
          <div className="text-gray-500">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="mt-4 mb-2 font-medium xl:mb-4">تواصل معنا</div>
          <div className="text-gray-500">
            <div className="mt-6 lg:mb-0 mb-6 flex flex-wrap gap-2">
              {socialMedia.map((item) => (
                <span
                  key={item.id}
                  className="bg-white text-lightBlue-600 shadow-lg font-normal 
                    h-10 w-10 flex items-center justify-center align-center rounded-full 
                    cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt="facebook"
                    width={48}
                    height={48}
                    className="h-8 w-8 hover:scale-110 transition duration-100"
                    priority
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 pr-1">
          <div className="mt-4 mb-2 font-medium xl:mb-4">روابط سريعة</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary ">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary ">
                  مشاريعنا
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-12 md:col-span-3 max-w-sm ">
          <div className="mt-4 mb-2 text-lg font-semibold xl:mb-4">
            هل انت مهتم؟
          </div>
          <div className="flex flex-col">
            <div className="mb-4">
              <input
                type="text"
                className="mb-2 block h-12 w-full rounded-md bg-gray-200 px-4 outline-none"
                placeholder="الاسم"
              />
              <input
                type="tel"
                className="mb-2 block h-12 w-full rounded-md bg-gray-200 px-4 outline-none"
                placeholder="رقم الجوال"
              />
                <button className="group relative overflow-hidden rounded-md bg-slate-900 hover:bg-gray-800 px-6 py-2 font-medium text-white">
                سجل اهتمامك
                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/20 rounded-md" />
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto px-6">
        <hr className="my-2 border-gray-200 mx-auto dark:border-gray-300 "></hr>
      </div>

      <div className="mx-auto flex max-w-screen-xl px-4 py-3 text-center text-gray-500 justify-center">
        {/* <p className="text-center">© 2023 Valley | جميع الحقوق محفوظة </p> */}
        <p className="text-center"> جميع الحقوق محفوظة | 2023 Valley ©</p>
      </div>
    </footer>
  )
};

export default Footer;
