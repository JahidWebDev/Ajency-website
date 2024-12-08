import Container from "./Container";
import ellips from "../assets/Ellipse 7.png";
import group from "../assets/Group 32.png";
import { GiRoundStar } from "react-icons/gi";

const Review = () => {
  return (
    <Container>
      <div className="font-inter">
        <h2 className="w-[603px] text-[#181818] text-[40px] font-bold">
          We Care About Our Customer Experience Too
        </h2>
        <p className="pt-[20px] pb-[50px] w-[542px] text-[rgba(25,24,24,0.71)] text-[16px] font-normal">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="flex justify-between">
        <div className=" relative w-[370px] pt-[48px] pb-[48px] px-[48px] bg-white shadow-[0px_6px_35px_0px_rgba(0,0,0,0.08)]">

          <img src={ellips} alt="loading......." />
          <div className="flex text-[#FBBF25] gap-x-[5px] pt-[30px] pb-[20px]">
            <GiRoundStar/>
            <GiRoundStar/>
            <GiRoundStar/>
            <GiRoundStar/>
            <GiRoundStar/>
          </div>
          <p className=" mb-[15px] font-inter text-[rgba(25,24,24,0.71)] w-[ 274px] text-[1rem] font-normal">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <h4 className="text-[#181818] font-inter font-semibold text-[20px]">Ridoy Ahmed</h4>
          <h6 className="text-[#5D5D5D] text-[1rem] font-normal font-inter">UX Designer</h6>
        <img className=" absolute right-[22px] bottom-[20px]" src={group} alt="loading......." />
        </div>
        <div className=" relative w-[370px] pt-[48px] pb-[48px] px-[48px] bg-white shadow-[0px_6px_35px_0px_rgba(0,0,0,0.08)]">

          <img src={ellips} alt="loading......." />
          <div className="flex text-[#FBBF25] gap-x-[5px] pt-[30px] pb-[20px]">
            <GiRoundStar/>
            <GiRoundStar/>
            <GiRoundStar/>
            <GiRoundStar/>
            <GiRoundStar/>
          </div>
          <p className=" mb-[15px] font-inter text-[rgba(25,24,24,0.71)] w-[ 274px] text-[1rem] font-normal">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <h4 className="text-[#181818] font-inter font-semibold text-[20px]">Nabil Ahmed</h4>
          <h6 className="text-[#5D5D5D] text-[1rem] font-normal font-inter">UX Designer</h6>
        <img className=" absolute right-[22px] bottom-[20px]" src={group} alt="loading......." />
        </div>
        <div className=" relative w-[370px] pt-[48px] pb-[48px] px-[48px] bg-white shadow-[0px_6px_35px_0px_rgba(0,0,0,0.08)]">

          <img src={ellips} alt="loading......." />
          <div className="flex text-[#FBBF25] gap-x-[5px] pt-[30px] pb-[20px]">
            <GiRoundStar/>
            <GiRoundStar/>
            <GiRoundStar/>
            <GiRoundStar/>
            <GiRoundStar/>
          </div>
          <p className=" mb-[15px] font-inter text-[rgba(25,24,24,0.71)] w-[ 274px] text-[1rem] font-normal">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <h4 className="text-[#181818] font-inter font-semibold text-[20px]">Fahim Ahmed</h4>
          <h6 className="text-[#5D5D5D] text-[1rem] font-normal font-inter">UX Designer</h6>
        <img className=" absolute right-[22px] bottom-[20px]" src={group} alt="loading......." />
        </div>
      </div>
    </Container>
  );
};

export default Review;
