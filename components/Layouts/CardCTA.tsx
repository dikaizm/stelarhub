import { RiRocket2Fill } from "react-icons/ri";
import Image from "next/image";

import ctaImg from "@/assets/images/cta-girl-business.png";
import graphicImg from "@/assets/images/cta-graphic.svg";

export default function CardCTA() {
  return (
    <div className="w-full py-12 container text-dark rounded-t-[2rem]">
      <div className="bg-[#F8B42E] rounded-[1.5rem] relative flex gap-8 flex-col-reverse sm:flex-row overflow-hidden">

        <div className="absolute -left-24 z-0 bottom-0">
          <Image className="h-full w-fit" src={graphicImg} alt="Hero graphic" />
        </div>

        <div className="w-fit h-96 sm:h-auto sm:w-1/2 md:w-1/3 z-10">
          <Image className="h-full sm:h-[95%] w-full sm:w-fit sm:absolute z-10 bottom-0" src={ctaImg} alt="Hero professional girl" />
        </div>

        <div className="sm:w-2/3 p-7 md:p-10 z-20">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">
            <div className="text-[#E84F4F]">Siap Mengubah <br className="md:hidden block" />Ide Kamu</div>
            <div>Menjadi Kenyataan?</div>
          </h2>
          <p className="text-white mt-4">Di Stelar, kami bersemangat untuk mewujudkan visimu menjadi solusi yang inovatif dan berkualitas tinggi. Apakah Kamu memiliki proyek spesifik atau memerlukan bantuan dalam menentukan pendekatan teknologi terbaik? kami siap membantu di setiap langkah.</p>

          <a href="https://wa.me/6285600809354" className="mt-8 w-fit bg-white text-[#F96666] flex items-center gap-2 py-3 px-5 rounded-full">
            <span className="font-semibold">Mari Kita Mulai!</span>
            <RiRocket2Fill className="w-5 h-5 rotate-45" />
          </a>
        </div>

      </div>
    </div>
  )
}