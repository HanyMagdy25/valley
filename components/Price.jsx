import Image from "next/image";
import priceImage from "../assets/price.jpg";
import houseImage from "../assets/house.png";
import logoImage from "../assets/logo.png";

const Price = () => {
  return (
    <div className="w-full bg-gray-50 pb-14">
      <div className="container m-auto px-6">
        <div className="mx-auto pt-14 pb-10 block text-center">
          <h2 className="mx-auto text-4xl font-bold md:text-4xl">
            جدول الأسعار
          </h2>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 py-3 sm:py-12 lg:col-span-6 lg:py-4">
            <div className="flex gap-3 items-center mb-6">
              <Image src={houseImage} alt="house" className="w-12" />
              <h2 className="font-bold text-3xl">VT4B1</h2>
            </div>
            <div>
              <div className="flex gap-2 mb-2">
                <h2 className="text-xl font-semibold">اسم المبنى</h2>:
                <h2 className="text-lg font-semibold">VT4B1</h2>
              </div>
              <div className="flex gap-2 mb-2">
                <h2 className="text-xl font-semibold">المساحة</h2>:
                <h2 className="text-lg font-semibold">150 متر</h2>
              </div>
              <div className="flex gap-2 mb-2">
                <h2 className="text-xl font-semibold">الدور</h2>:
                <h2 className="text-lg font-semibold">الثانى</h2>
              </div>
              <div className="flex gap-2 mb-2">
                <h2 className="text-xl font-semibold">المميزات</h2>:
                <h2 className="text-lg font-semibold">
                  سطح / غرفة غسيل / موقف خاص للسيارة / ستايل خاص
                </h2>
              </div>
              <div className="flex gap-2 mb-2">
                <h2 className="text-xl font-semibold">التفاصيل</h2>:
                <h2 className="text-lg font-semibold">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 mt-8">
              <div className="flex gap-2 mb-2">
                <h2 className="text-xl font-semibold">المالك</h2>:
                <Image src={logoImage} alt="logoImage" className="w-20" />
              </div>
              <div className="flex gap-2 mb-2">
                <h2 className="text-xl font-semibold">المطور</h2>:
                <Image src={logoImage} alt="logoImage" className="w-20" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="group relative overflow-hidden rounded-md bg-slate-900 hover:bg-gray-800 px-6 py-2 font-medium text-white">
                صور الوحدة
                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/20 rounded-md" />
              </button>
              <button className="group relative overflow-hidden rounded-md bg-slate-900 hover:bg-gray-800 px-6 py-2 font-medium text-white">
                مخطط الوحدة
                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/20 rounded-md" />
              </button>
            </div>
          </div>
          <div className="relative col-span-12 flex py-3 sm:py-12 lg:col-span-6 lg:py-4">
            <div
              className="relative w-full flex-wrap items-start 
            after:absolute after:top-3 after:-left-3 after:w-full after:h-full
            after:bg-yellow-400 after:z-10 after:rounded-md"
            >
              <Image
                className="relative z-20 rounded-md"
                src={priceImage}
                alt="priceImage"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
