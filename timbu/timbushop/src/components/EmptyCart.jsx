
const EmptyCart= () => {
  return (
    <section className="w-[1104px] h-[756px] pb-[141px] bg-white rounded-3xl flex flex-col justify-start items-center gap-[102px]">
      <header className="self-stretch h-[111px] pl-12 pr-[935px] pt-[38px] pb-[39px] rounded-tl-3xl rounded-tr-3xl border-b border-neutral-200 flex justify-start items-center">
        <h1 className="text-gray-700 text-[28px] font-bold font-['Plus Jakarta Sans'] leading-[33.60px]">Carts (0)</h1>
      </header>
      <div className="self-stretch h-[402px] flex flex-col justify-start items-center gap-12">
        <div className="w-[200px] h-[200px] p-[50px] bg-slate-200 rounded-full flex justify-center items-center">
          <div className="w-[100px] h-[100px] relative flex flex-col justify-start items-start"></div>
        </div>
        <p className="self-stretch text-black text-[28px] font-semibold font-['Plus Jakarta Sans'] leading-[33.60px]">You have no items in your cart</p>
        <button className="self-stretch h-[72px] px-12 py-[23px] bg-cyan-700 rounded-[10px] flex justify-center items-center gap-2.5">
          <span className="text-white text-2xl font-semibold font-['Plus Jakarta Sans'] leading-[28.80px]">Start shopping</span>
        </button>
      </div>
    </section>
  );
};

export default EmptyCart;
