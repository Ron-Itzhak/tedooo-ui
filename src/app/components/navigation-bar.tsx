import { Search, Home, MessageCircle, Bell, User } from "lucide-react";
import Image from "next/image";
import SVGIcon from "../../lib/assets/tedooo-logo.svg";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const NavigationBar = () => {
  return (
    <header className="bg-white py-2 h-[58px] shadow-sm">
      <div className="w-[1120px] mx-auto  flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={SVGIcon} alt="Logo - SVG" />
          <div className="relative">
            <Search
              strokeWidth={1}
              size={18}
              className="absolute left-2 top-2.5 "
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-tedooo-bg-search py-2 pl-8 pr-4 rounded-full text-tedooo-bg-grey placeholder-tedooo-bg-grey focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center space-x-7">
          <a
            href="#"
            className={`relative flex items-center space-x-1 text-teal-500  ${poppins.className} font-normal`}
          >
            <Home strokeWidth={2} size={18} color="#28a38f" />
            <span>Home</span>
            <span className="absolute bottom-[-17px] -left-1 w-[90px] h-[2px] bg-teal-500 rounded"></span>
          </a>
          <a
            href="#"
            className={`flex items-center space-x-1 text-tedooo-bg-grey hover:text-teal-500 ${poppins.className} font-normal`}
          >
            <MessageCircle strokeWidth={2} size={18} />
            <span>Messaging</span>
          </a>
          <a
            href="#"
            className={`flex items-center space-x-1 text-tedooo-bg-grey hover:text-teal-500 ${poppins.className} font-normal`}
          >
            <Bell strokeWidth={2} size={18} />
            <span className={poppins.className}>Notifications</span>
          </a>
          <div className=" py-1 h-10 w-10 rounded-full overflow-hidden bg-tedooo-bg-search">
            <User
              className="h-full w-full object-cover"
              size={32}
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
