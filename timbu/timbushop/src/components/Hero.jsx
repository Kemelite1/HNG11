import HeroImage from '../assets/images/heroimg.png';

const Hero = () => {
  return (
    <div className="h-screen bg-herobg flex justify-center items-center">
      <div className="w-[1280px] h-[707px] top-[75px] flex justify-center items-center">
        <div className="w-[1104px] h-[439px] top-[84px] left-[88px] flex flex-col justify-start items-start gap-14">
          <div className="w-[595px] h-[429px] flex flex-col justify-start items-start gap-8">
            <h1 className="text-secondary1000 text-[56px] w-[595px] h-[201px] font-Plus Jakarta Sans font-bold leading-[67.2px]">
              Timbu Cloud Shop: The Freshest Kicks on the Block
            </h1>
            <p className="text-gray-700 text-[28px] font-normal font-Plus Jakarta Sans leading-[33.60px]">
              Shop for men, women, and kids at affordable rates
            </p>
          </div>
          <div className="h-[72px] px-12 py-[23px] bg-primary rounded-[10px] flex justify-center items-center gap-2.5">
            <a href='Allproducts' className="text-white text-2xl font-semibold font-Plus Jakarta Sans leading-[28.80px]">
              Shop Now
            </a>
          </div>
        </div>
        <img className="w-[439px] h-[439px] rounded-3xl" src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
