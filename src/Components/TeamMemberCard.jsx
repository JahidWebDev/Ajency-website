import team1 from "../assets/team1.png";
import team from "../assets/team.png";
import team3 from "../assets/team3.png";
import Container from "./Container";

const TeamMemberCard = () => {
  return (
    <Container>
      <div className="item-center pt-[100px]">
        <h3 className="text-center text-[40px] font-inter font-bold text-[#181818]">
          Our Expert Team Member.
        </h3>
        <p className=" mx-auto w-[542px] pt-[20px] pb-[50px] text-center text-[1rem] font-inter font-normal text-[rgba(25,24,24,0.71)]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="flex justify-between  pb-[142px]">
        <div className="relative group w-[370px] h-[444px] rounded-lg overflow-hidden bg-white">
          {/* Image */}
          <img
            src={team1} // Replace this with your image
            alt="Team Member"
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5956E8] via-[#5956E8] to-transparent p-6 transition-opacity duration-700 opacity-80 group-hover:opacity-100">
            <h2 className="text-white text-lg font-bold">Masum Ahmed</h2>
            <p className="text-white text-sm">UX Designer</p>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
        <div className="relative group w-[370px] h-[444px] rounded-lg overflow-hidden bg-white">
          {/* Image */}
          <img
            src={team} // Replace this with your image
            alt="Team Member"
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5956E8] via-[#5956E8] to-transparent p-6 transition-opacity duration-700 opacity-80 group-hover:opacity-100">
            <h2 className="text-white text-lg font-bold">Tamzid Ahmed</h2>
            <p className="text-white text-sm">UI Designer</p>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
        <div className="relative group w-[370px] h-[444px] rounded-lg overflow-hidden bg-white">
          {/* Image */}
          <img
            src={team3} // Replace this with your image
            alt="Team Member"
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5956E8] via-[#5956E8] to-transparent p-6 transition-opacity duration-700 opacity-80 group-hover:opacity-100">
            <h2 className="text-white text-lg font-bold">Mohu Ahmed</h2>
            <p className="text-white text-sm">UX Designer</p>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>
    </Container>
  );
};

export default TeamMemberCard;
