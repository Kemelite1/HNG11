
import Image1 from '../assets/images/s1.png';
import Image2 from '../assets/images/s2.png';
import Image3 from '../assets/images/s3.png';
import Image4 from '../assets/images/s4.png';
import Image5 from '../assets/images/s5.png';
import Image6 from '../assets/images/s6.png';
import Image7 from '../assets/images/s7.png';
import Image8 from '../assets/images/s8.png';

const RecommendedProducts = () => {
  const products = [
    { id: 1, image: Image1, name: 'Nike Court Legacy Lift', description: 'Women’s Shoe', price: 'NGN 120,000' },
    { id: 2, image: Image2, name: 'Nike Dunk Low', description: 'Men’s Shoe', price: 'NGN 140,000' },
    { id: 3, image: Image3, name: 'Nike Air Max 270', description: 'Little Kids Shoe', price: 'NGN 80,000' },
    { id: 4, image: Image4, name: 'Ozmillen Shoes', description: 'Women’s Shoe', price: 'NGN 200,000' },
    { id: 5, image: Image5, name: 'New Balance', description: 'Unisex Shoe', price: 'NGN 250,000' },
    { id: 6, image: Image6, name: 'Gazelle Bold Shoe', description: 'Women’s Shoe', price: 'NGN 300,000' },
    { id: 7, image: Image7, name: 'Nike Force 1 low EasyOn', description: 'Little Kids Shoe', price: 'NGN 80,000' },
    { id: 8, image: Image8, name: 'Lite Racer Adapt 7.0 Wide', description: 'Men’s Shoe', price: 'NGN 70,000' },
  ];

  return (
    <section className="w-[1104px] h-[900px] flex flex-col justify-start items-start gap-10">
      <h2 className="self-stretch text-gray-700 text-[32px] font-bold font-['Plus Jakarta Sans'] leading-[38.40px]">Recommended for you</h2>
      <div className="self-stretch h-[822px] flex flex-col justify-start items-start gap-5">
        <div className="self-stretch flex justify-start items-center gap-5">
          {products.slice(0, 4).map((product) => (
            <article key={product.id} className="w-[261px] flex flex-col justify-start items-start gap-6">
              <img className="self-stretch h-[289px] rounded-[10px]" src={product.image} alt={product.name} />
              <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <h3 className="self-stretch text-stone-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">{product.name}</h3>
                <p className="self-stretch text-stone-600 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">{product.description}</p>
                <p className="self-stretch text-stone-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="self-stretch flex justify-start items-center gap-5">
          {products.slice(4, 8).map((product) => (
            <article key={product.id} className="w-[261px] flex flex-col justify-start items-start gap-6">
              <img className="self-stretch h-[289px] rounded-[10px]" src={product.image} alt={product.name} />
              <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <h3 className="self-stretch text-stone-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">{product.name}</h3>
                <p className="self-stretch text-stone-600 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">{product.description}</p>
                <p className="self-stretch text-stone-800 text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
