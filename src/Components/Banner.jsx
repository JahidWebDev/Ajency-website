import Container from "./Container";
import heroImg from "../assets/Banner Illustration.png"

const Banner = () => {
  return (
    <div className="py-[133px] bg-heroco">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <div className="font-inter text-white ">
              <h1 className="w-[501px] text-[65px] font-bold leading-[80px] ">
                We Are Digital Product Design Agency
              </h1>
              <p className=" w-[542px] my-[25px] text-justify font-inter text-[16px] font-normal leading-[27px] ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable.
              </p>
              <button className="py-[13px] px-[22px] text-inter text-[18px] font-medium bg-white text-[#5956E8] rounded-lg ">
                <a href="#"></a>Get Started
              </button>
            </div>
          </div>
          <div className="w-1/2 ml-[148px]">
            <img src={heroImg} alt="loading........" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
