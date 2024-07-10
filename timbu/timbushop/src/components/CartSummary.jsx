const CartSummary = () => {
    return (
      <section className="w-[1104px] h-[609px] pb-[51px] bg-neutral-50 rounded-3xl flex flex-col justify-start items-center gap-[51px]">
        <header className="self-stretch h-[111px] pl-12 pr-[861px] pt-[38px] pb-[39px] rounded-tl-3xl rounded-tr-3xl border-b border-neutral-200 flex items-center">
          <h1 className="text-gray-700 text-[28px] font-bold font-['Plus Jakarta Sans'] leading-[33.60px]">Cart Summary</h1>
        </header>
        <main className="self-stretch h-[396px] flex flex-col justify-start items-start gap-12">
          <div className="self-stretch h-[276px] flex flex-col justify-start items-center gap-8">
            <div className="self-stretch h-[151px] flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex justify-between items-center">
                <p className="text-neutral-950 text-2xl font-normal font-['Plus Jakarta Sans'] leading-[28.80px]">Subtotal</p>
                <p className="text-right text-gray-700 text-2xl font-bold font-['Plus Jakarta Sans'] leading-[28.80px]">NGN 320,000</p>
              </div>
              <div className="self-stretch flex justify-between items-center">
                <p className="text-neutral-950 text-2xl font-normal font-['Plus Jakarta Sans'] leading-[28.80px]">Delivery Fees</p>
                <p className="text-right text-gray-700 text-2xl font-bold font-['Plus Jakarta Sans'] leading-[28.80px]">NGN 3,000</p>
              </div>
              <div className="self-stretch flex justify-between items-center">
                <p className="text-neutral-950 text-2xl font-normal font-['Plus Jakarta Sans'] leading-[28.80px]">Estimated Tax</p>
                <p className="text-right text-gray-700 text-2xl font-bold font-['Plus Jakarta Sans'] leading-[28.80px]">NGN 0.00</p>
              </div>
            </div>
            <div className="w-[1008px] flex justify-between items-center">
              <p className="text-neutral-950 text-2xl font-normal font-['Plus Jakarta Sans'] leading-[28.80px]">Total</p>
              <p className="text-right text-gray-700 text-2xl font-bold font-['Plus Jakarta Sans'] leading-[28.80px]">NGN 323,000</p>
            </div>
          </div>
          <button className="self-stretch h-[72px] px-12 py-[23px] bg-cyan-700 rounded-[10px] flex justify-center items-center gap-2.5">
            <span className="text-white text-2xl font-semibold font-['Plus Jakarta Sans'] leading-[28.80px]">Checkout</span>
          </button>
        </main>
      </section>
    );
  }
  
  export default CartSummary;
  