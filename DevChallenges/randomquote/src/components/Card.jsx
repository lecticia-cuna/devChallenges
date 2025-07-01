function Card() {
  return (
    <div>
    <div className="bg-[#1E2333] text-white rounded-xl p-8 w-full max-w-xl shadow-lg">
      <h2 className="text-center text-xl font-semibold">George Bernard Shaw</h2>

      <div className="flex justify-center gap-2 mt-2 ">
        <span className="px-3 py-1 border border-[#AEB0FF] text-[#AEB0FF] rounded-full text-xs">Famous Quotes</span>
        <span className="px-3 py-1 border border-[#AEB0FF] text-[#AEB0FF] rounded-full text-xs">Inspirational</span>
      </div>

      <p className="text-center text-2xl font-light mt-6">
        “Learn from yesterday, live for today, hope for tomorrow.”
      </p>
    </div>
    <div className="flex justify-center gap-4 mt-4">
        <button className="bg-[#2A2F45] text-white px-5 py-2 rounded-lg">Random </button>
        <button className="bg-[#2A2F45] text-white px-5 py-2 rounded-lg">Share </button>
      </div>
   </div> 
  );
}

export default Card;
