import Container from "./Container"
import news from "../assets/news1.png"
import news2 from "../assets/news2.jpg"
import news3 from "../assets/news3.jpg"
import { MdMan } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const News = () => {
  return (
    <div className="pt-[142px] pb-[113px] font-inter">
         <Container>
            <div className="items-center text-center">
                <h2 className="text-[#181818] text-[40px] font-bold">Our Letest News</h2>
                <p className="mt-[20px] mb-[67px] mx-auto text-[rgba(25,24,24,0.71)] w-[542px] text-[1rem] font-normal">There are many variations of passages of Lorem Ipsum available,
                 but the majority have suffered alteration in some form.</p>
            </div>
             <div className="flex justify-between">
                <div className="pt-[17px] pb-[46px] px-[19px] bg-white border border-[#E3E3E3]  rounded-md">
                   <img src={news} alt="loading...." />
                   <div className="ml-[16px] mt-[24px]">
                      <div className="flex items-center">
                      <MdMan className="text-[16px] text-[#5D5D5D] mr-[10px]"/>
                       <p className="text-[#5D5D5D] text-[1rem] font-normal mr-[30px]">Admin</p>
                       <SlCalender className="text-[15px] text-[#5D5D5D]" />
                       <p className="text-[#5D5D5D] text-[1rem] font-normal  ml-[10px]">11/18/2024</p>
                      </div>
                      <h2 className="mt-[10px] mb-[15px] w-[271px] text-[#181818] text-[20px] font-semibold">Business Plans That Fit Your Best Blog</h2>
                      <p className="mb-[10px] w-[300px] font-normal text-[16px] text-[#5D5D5D]">There are many variations of passages of Lorem Ipsum , 
                      but the majority have suffered alteration in some form.</p>
                      <a className="text-[#5956E8] text-[16px] font-semibold" href="#">Learn More</a>
                   </div>
                </div>
                <div className="pt-[17px] pb-[46px] px-[19px] bg-white border border-[#E3E3E3] rounded-md">
                   <img src={news2} alt="loading...." />
                   <div className="ml-[16px] mt-[24px]">
                      <div className="flex items-center">
                      <MdMan className="text-[16px] text-[#5D5D5D] mr-[10px]"/>
                       <p className="text-[#5D5D5D] text-[1rem] font-normal mr-[30px]">Admin</p>
                       <SlCalender className="text-[15px] text-[#5D5D5D]" />
                       <p className="text-[#5D5D5D] text-[1rem] font-normal  ml-[10px]">11/18/2024</p>
                      </div>
                      <h2 className="mt-[10px] mb-[15px] w-[271px] text-[#181818] text-[20px] font-semibold">Business Plans That Fit Your Best Blog</h2>
                      <p className="mb-[10px] w-[300px] font-normal text-[16px] text-[#5D5D5D]">There are many variations of passages of Lorem Ipsum , 
                      but the majority have suffered alteration in some form.</p>
                      <a className="text-[#5956E8] text-[16px] font-semibold" href="#">Learn More</a>
                   </div>
                </div>
                <div className="pt-[17px] pb-[46px] px-[19px] bg-white border border-[#E3E3E3] rounded-md">
                   <img src={news3} alt="loading...." />
                   <div className="ml-[16px] mt-[24px]">
                      <div className="flex items-center">
                      <MdMan className="text-[16px] text-[#5D5D5D] mr-[10px]"/>
                       <p className="text-[#5D5D5D] text-[1rem] font-normal mr-[30px]">Admin</p>
                       <SlCalender className="text-[15px] text-[#5D5D5D]" />
                       <p className="text-[#5D5D5D] text-[1rem] font-normal  ml-[10px]">11/18/2024</p>
                      </div>
                      <h2 className="mt-[10px] mb-[15px] w-[271px] text-[#181818] text-[20px] font-semibold">Business Plans That Fit Your Best Blog</h2>
                      <p className="mb-[10px] w-[300px] font-normal text-[16px] text-[#5D5D5D]">There are many variations of passages of Lorem Ipsum , 
                      but the majority have suffered alteration in some form.</p>
                      <a className="text-[#5956E8] text-[16px] font-semibold" href="#">Learn More</a>
                   </div>
                </div>
             </div>
         </Container>
    </div>
  )
}

export default News