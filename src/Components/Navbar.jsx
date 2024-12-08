import Container from "./Container"
import logo from "../assets/Logo(1).png"

const Navbar = () => {
  return (
    <div className="py-[35px] bg-white">
        <Container>
            <div className="md:flex md:justify-between md:items-center">
                <img className="object-cover mx-[150px] md:mx-[0px]" src={logo} alt="loading......" />
                <div className="flex items-center font-[inter] text-[18px] font-medium">
                    <ul className="flex space-x-[50px] mx-[10px] md:mx-[0px] my-[10px] md:my-[0px]">
                        <li className="hover:text-[#5956E8] cursor-pointer"><a href="#">Home</a></li>
                        <li className="hover:text-[#5956E8] cursor-pointer"><a href="#">About</a></li>
                        <li className="hover:text-[#5956E8] cursor-pointer"><a href="#">Service</a></li>
                        <li className="hover:text-[#5956E8] cursor-pointer"><a href="#">Blog</a></li>
                        <li className="hover:text-[#5956E8] cursor-pointer"><a href="#">Contact</a></li>
                    </ul>
                </div>
                <button className=" md:mx-[0px] mx-[150px] md:py-[13px] py-[7px] md:px-[24px] px-[14px] bg-[#5956E8] rounded-xl text-white font-inter md:text-[18px] text-[10px] font-medium"><a href="#">Contact Us</a></button>
            </div>
        </Container>
    </div>
  )
}

export default Navbar