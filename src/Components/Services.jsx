import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { LuAlignHorizontalDistributeEnd } from "react-icons/lu";
import { LuCopyMinus } from "react-icons/lu";
import { FaObjectUngroup } from "react-icons/fa6";
import { FaRegObjectGroup } from "react-icons/fa6";
import { RxTransform } from "react-icons/rx";
import Container from "./Container";

const Services = () => {
  return (
    <div className="pt-[87px] pb-[100px] font-inter">
        <Container>
      {/* 1st card */}
      <div className="text-center items-center">
        <h2 className="text-[#181818] text-[40px] font-bold">Our Services</h2>
        <p className="w-[542px] mx-auto mt-[20px] mb-[50px] text-[16px] font-normal leading-[27px] text-[rgba(24,24,24,0.70)] ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
      </div>
        <div className="flex justify-between mb-[26px]">
          <div className="py-[63px] pb-[66px] px-[48px] border-[0.5px] border-[#E3E3E] rounded hover:shadow-md  hover:shadow-[#5956E880] transition-shadow">
            <div className="inline-block p-[17px] border-[0.5px] border-[rgba(89,86,232,0.29)] rounded hover:shadow-md">
              <MdOutlineFormatLineSpacing className="text-[#5956E8] text-[37px]" />
            </div>
            <h3 className="text-[25px] font-bold text-[#181818] pt-[27px] pb-[20px]">UI/UX Design</h3>
            <p className="w-[274px] text-[rgba(25,24,24,0.71)]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <div className="py-[63px] pb-[66px] px-[48px] border-[0.5px] border-[#E3E3E] rounded hover:shadow-md  hover:shadow-[#5956E880] transition-shadow">
            <div className="inline-block p-[17px] border-[0.5px] border-[rgba(89,86,232,0.29)] rounded hover:shadow-md">
              <LuAlignHorizontalDistributeEnd  className="text-[#5956E8] text-[37px]" />
            </div>
            <h3 className="text-[25px] font-bold text-[#181818] pt-[27px] pb-[20px]">Web Development</h3>
            <p className="w-[274px] text-[rgba(25,24,24,0.71)]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <div className="py-[63px] pb-[66px] px-[48px] border-[0.5px] border-[#E3E3E] rounded  hover:shadow-md  hover:shadow-[#5956E880] transition-shadow">
            <div className="inline-block p-[17px] border-[0.5px] border-[rgba(89,86,232,0.29)] rounded hover:shadow-md">
              <LuCopyMinus className="text-[#5956E8] text-[37px]" />
            </div>
            <h3 className="text-[25px] font-bold text-[#181818] pt-[27px] pb-[20px]">Digital Marketing</h3>
            <p className="w-[274px] text-[rgba(25,24,24,0.71)]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
        </div>
        
        {/* 2nd card */}

        <div className="flex justify-between">
          <div className="py-[63px] pb-[66px] px-[48px] border-[0.5px] border-[#E3E3E] rounded  hover:shadow-md  hover:shadow-[#5956E880] transition-shadow">
            <div className="inline-block p-[17px] border-[0.5px] border-[rgba(89,86,232,0.29)] rounded hover:shadow-md">
              <FaObjectUngroup  className="text-[#5956E8] text-[37px]" />
            </div>
            <h3 className="text-[25px] font-bold text-[#181818] pt-[27px] pb-[20px]">Graphic Design</h3>
            <p className="w-[274px] text-[rgba(25,24,24,0.71)]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <div className="py-[63px] pb-[66px] px-[48px] border-[0.5px] border-[#E3E3E] rounded  hover:shadow-md  hover:shadow-[#5956E880] transition-shadow">
            <div className="inline-block p-[17px] border-[0.5px] border-[rgba(89,86,232,0.29)] rounded hover:shadow-md">
              <FaRegObjectGroup className="text-[#5956E8] text-[37px]" />
            </div>
            <h3 className="text-[25px] font-bold text-[#181818] pt-[27px] pb-[20px]">Web Design</h3>
            <p className="w-[274px] text-[rgba(25,24,24,0.71)]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <div className="py-[63px] pb-[66px] px-[48px] border-[0.5px] border-[#E3E3E] rounded  hover:shadow-md  hover:shadow-[#5956E880] transition-shadow">
            <div className="inline-block p-[17px] border-[0.5px] border-[rgba(89,86,232,0.29)] rounded hover:shadow-md">
              <RxTransform  className="text-[#5956E8] text-[37px]" />
            </div>
            <h3 className="text-[25px] font-bold text-[#181818] pt-[27px] pb-[20px]">Motion Design</h3>
            <p className="w-[274px] text-[rgba(25,24,24,0.71)]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
