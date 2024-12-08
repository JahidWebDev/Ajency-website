import Container from "./Container";
import logo2 from "../assets/logo2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Fotter = () => {
  return (
    <div className="py-[100px] bg-[#5956E81A] font-inter">
      <Container>
        <div className="flex justify-between">
          <div>
            <img src={logo2} alt="loading........" />
            <p className="w-[300px] text-[1rem] font-normal text-[#5D5D5D] mt-[15px] mb-[20px]">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-white py-[12px] px-[12px] text-[16px] text-[#337FFF]">
                <FaFacebookF />
              </div>
              <div className="rounded-full bg-white py-[12px] px-[12px] text-[16px] text-[#2acfe9]">
                <FaTwitter />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-[#181818] text-[20px] font-semibold mb-[20px]">
              Company
            </h4>
            <ul className="text-[#5D5D5D] space-y-[15px] text-[16px] font-normal">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#181818] text-[20px] font-semibold mb-[20px]">
              Product
            </h4>
            <ul className="text-[#5D5D5D] space-y-[15px] text-[16px] font-normal">
              <li>
                <a href="#">Prototype</a>
              </li>
              <li>
                <a href="#">Plans & Pricing</a>
              </li>
              <li>
                <a href="#"> Customers</a>
              </li>
              <li>
                <a href="#">Integration</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#181818] text-[20px] font-semibold mb-[20px]">
              Support
            </h4>
            <ul className="text-[#5D5D5D] space-y-[15px] text-[16px] font-normal">
              <li>
                <a href="#">Help Desk</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Become a Partner</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#181818] text-[20px] font-semibold mb-[20px]">
              Contact
            </h4>
            <ul className="text-[#5D5D5D] space-y-[15px] text-[16px] font-normal">
              <li>
                <a href="#">524 Broadway , NYC </a>
              </li>
              <li>
                <a href="#">+1 777 - 978 - 5570</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Fotter;
