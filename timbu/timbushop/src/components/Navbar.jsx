import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-[88px] py-[30px] bg-[#FFFFFF] flex justify-between items-center">
      <Link to="/" className="w-[154px] h-[22px] text-[18px] text-primary font-plus-jakarta-sans font-bold leading-[21.6px]">
        Timbu cloud shop
      </Link>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-[18px] font-plus-jakarta-sans font-semibold">All Products</a>
        <a href="#" className="text-[18px] font-plus-jakarta-sans font-semibold">Men</a>
        <a href="#" className="text-[18px] font-plus-jakarta-sans font-semibold">Women</a>
        <a href="#" className="text-[18px] font-plus-jakarta-sans font-semibold">Kids</a>
      </div>
      
      <div className="flex space-x-3">
        <a href="#" className="p-3">
          <FaSearch />
        </a>
        <a href="#" className="p-3">
          <FaUser />
        </a>
        <a href="#" className="p-3">
          <FaShoppingCart />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

