import Image1 from '../assets/images/s1.png';
import Image2 from '../assets/images/s2.png';
import Image3 from '../assets/images/s3.png';

const CartItems = () => {
  const cartItems = [
    { id: 1, image: Image1, name: 'Nike Court Legacy Lift', description: 'Women’s Shoe', price: 'NGN 120,000', seller: 'Timbu Cloud', size: '40', quantity: 2 },
    { id: 2, image: Image2, name: 'Nike Dunk Low', description: 'Men’s Shoe', price: 'NGN 140,000', seller: 'Timbu Cloud', size: '40', quantity: 2 },
    { id: 3, image: Image3, name: 'Nike Air Max 270', description: 'Little Kids Shoe', price: 'NGN 80,000', seller: 'Timbu Cloud', size: '40', quantity: 2 },
  ];

  return (
    <div className="w-[1104px] h-[1044px] pb-12 bg-white rounded-3xl flex flex-col justify-start items-center gap-8">
      <header className="self-stretch h-[111px] pl-12 pr-[938px] pt-[38px] pb-[39px] rounded-tl-3xl rounded-tr-3xl border-b border-neutral-200 flex items-center">
        <h1 className="text-gray-700 text-[28px] font-bold font-['Plus Jakarta Sans'] leading-[33.60px]">Carts (3)</h1>
      </header>
      <main className="self-stretch h-[853px] flex flex-col justify-start items-start gap-8">
        {cartItems.map((item) => (
          <div key={item.id} className="self-stretch h-[263px] flex flex-col justify-start items-start gap-8">
            <article className="self-stretch h-[231px] flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex justify-between items-center">
                <div className="flex justify-start items-center gap-8">
                  <img className="w-[151px] h-[151px] rounded-[10px]" src={item.image} alt={item.name} />
                  <div className="flex flex-col justify-start items-start gap-8">
                    <h2 className="w-[420px] text-gray-700 text-2xl font-semibold font-['Plus Jakarta Sans'] leading-[28.80px]">{item.name}</h2>
                    <p className="text-stone-600 text-2xl font-normal font-['Plus Jakarta Sans'] leading-[28.80px]">Seller: <span className="text-black">{item.seller}</span></p>
                    <p className="text-stone-600 text-2xl font-normal font-['Plus Jakarta Sans'] leading-[28.80px]">Size: <span className="text-black">{item.size}</span></p>
                  </div>
                </div>
                <div className="w-[178px] flex flex-col justify-start items-end gap-[90px]">
                  <p className="text-right text-gray-700 text-2xl font-bold font-['Plus Jakarta Sans'] leading-[28.80px]">{item.price}</p>
                  <div className="pl-5 pr-[19px] pt-[9px] pb-2.5 rounded-md border border-neutral-950 flex justify-center items-center">
                    <p className="text-neutral-950 text-2xl font-normal font-['Plus Jakarta Sans'] leading-[28.80px]">{item.quantity}</p>
                  </div>
                </div>
              </div>
              <button className="justify-start items-center gap-6 flex text-amber-600 text-2xl font-normal font-['Plus Jakarta Sans'] leading-[28.80px]">
                Remove
              </button>
            </article>
          </div>
        ))}
      </main>
    </div>
  );
}

export default CartItems;
