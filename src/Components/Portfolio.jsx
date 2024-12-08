import Container from "./Container";
import img1 from "../assets/cardimg1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import { FaArrowRight } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <Container>
      {/* 1st part */}
      <div className="item-center text-center">
        <h3 className="text-inter font-bold text-[40px] text-[#181818]">
          Our Work Portfolio
        </h3>
        <p className="mx-auto text-titlecol font-inter w-[542px] text-[16px] font-normal mt-[20px] mb-[50px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="flex justify-between mb-[28px]">
        <div className="relative">
          <img src={img1} alt="loading......." />
          <div className="rounded-md bg-heroco py-[25px]  px-[41px] absolute top-0 left-0 translate-x-[20px] translate-y-[187px]">
            <h4 className="text-white mb-[10px] font-inter text-[20px] font-semibold">
              Graphic Design
            </h4>
            <div className="flex items-center">
              <p className="text-white font-normal font-inter text-[1rem]">
                See Details
              </p>
              <FaArrowRight className="text-white ml-[10px]" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={img2} alt="loading......." />
          <div className="rounded-md bg-heroco py-[25px]  px-[41px] absolute top-0 left-0 translate-x-[20px] translate-y-[187px]">
            <h4 className="text-white mb-[10px] font-inter text-[20px] font-semibold">
              Website Design
            </h4>
            <div className="flex items-center">
              <p className="text-white font-normal font-inter text-[1rem]">
                See Details
              </p>
              <FaArrowRight className="text-white ml-[10px]" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={img3} alt="loading......." />
          <div className="rounded-md bg-heroco py-[25px]  px-[41px] absolute top-0 left-0 translate-x-[20px] translate-y-[187px]">
            <h4 className="text-white mb-[10px] font-inter text-[20px] font-semibold">
              Mern Developer
            </h4>
            <div className="flex items-center">
              <p className="text-white font-normal font-inter text-[1rem]">
                See Details
              </p>
              <FaArrowRight className="text-white ml-[10px]" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={img4} alt="loading......." />
          <div className="rounded-md bg-heroco py-[25px]  px-[41px] absolute top-0 left-0 translate-x-[20px] translate-y-[187px]">
            <h4 className="text-white mb-[10px] font-inter text-[20px] font-semibold">
              Digital Marketin
            </h4>
            <div className="flex items-center">
              <p className="text-white font-normal font-inter text-[1rem]">
                See Details
              </p>
              <FaArrowRight className="text-white ml-[10px]" />
            </div>
          </div>
        </div>
      </div>
      {/* 2nd part */}
      <div className="flex justify-between">
        <div className="relative">
          <img src={img5} alt="loading......." />
          <div className="rounded-md bg-heroco py-[25px]  px-[41px] absolute top-0 left-0 translate-x-[20px] translate-y-[187px]">
            <h4 className="text-white mb-[10px] font-inter text-[20px] font-semibold">
              Graphic Design
            </h4>
            <div className="flex items-center">
              <p className="text-white font-normal font-inter text-[1rem]">
                See Details
              </p>
              <FaArrowRight className="text-white ml-[10px]" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={img6} alt="loading......." />
          <div className="rounded-md bg-heroco py-[25px]  px-[41px] absolute top-0 left-0 translate-x-[20px] translate-y-[187px]">
            <h4 className="text-white mb-[10px] font-inter text-[20px] font-semibold">
              UI/UX Design
            </h4>
            <div className="flex items-center">
              <p className="text-white font-normal font-inter text-[1rem]">
                See Details
              </p>
              <FaArrowRight className="text-white ml-[10px]" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={img7} alt="loading......." />
          <div className="rounded-md bg-heroco py-[25px]  px-[41px] absolute top-0 left-0 translate-x-[20px] translate-y-[187px]">
            <h4 className="text-white mb-[10px] font-inter text-[20px] font-semibold">
              Website Design
            </h4>
            <div className="flex items-center">
              <p className="text-white font-normal font-inter text-[1rem]">
                See Details
              </p>
              <FaArrowRight className="text-white ml-[10px]" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={img8} alt="loading......." />
          <div className="rounded-md bg-heroco py-[25px]  px-[41px] absolute top-0 left-0 translate-x-[20px] translate-y-[187px]">
            <h4 className="text-white mb-[10px] font-inter text-[20px] font-semibold">
              Mern Developer
            </h4>
            <div className="flex items-center">
              <p className="text-white font-normal font-inter text-[1rem]">
                See Details
              </p>
              <FaArrowRight className="text-white ml-[10px]" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
