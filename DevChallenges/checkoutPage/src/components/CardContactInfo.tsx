function CardContactInfo() {
  return (
    <div className="bg-[#FFFFFF] p-6 flex-1 justify-start">
      <div className="text-left p-3">
        <p className="font-medium text-gray-900 text-left">
          Contact Information
        </p>
        <br></br>
        <p className="font-medium  text-gray-600 text-left">
          First & Last name
        </p>
        <input
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 outline-none bg-[#F3F4F6] 
            placeholder:text-gray-500 mt-3 mb-4 w-full"
          type="text"
          placeholder="Enter first & last name"
        />
        <p className="font-medium text-gray-600 text-left">Email Adress</p>
        <input
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 outline-none bg-[#F3F4F6] 
            placeholder:text-gray-500 mt-3 mb-4 w-full"
          type="text"
          placeholder="Enter email adress"
        />
        <p className="font-medium text-gray-600 text-left">Country</p>
        <input
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 outline-none bg-[#F3F4F6] 
            placeholder:text-[#1D1D1F] mt-2 mb-4"
          type="text"
          placeholder="Enter coupon code"
        />
        <div className="flex w-full space-x-4">
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select className="px-3 py-2 rounded-md border border-gray-300 outline-none bg-[#F3F4F6] font-medium text-[#080808]">
            
              <option>Finland</option>
              <option>Portugal</option>
              <option>Moçambique</option>
            </select>
          </div>

          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              placeholder="00270"
              className="px-4 py-2 rounded-md border border-gray-300 outline-none bg-[#F3F4F6] text-gray-900"
            />
          </div>
        </div>
        <button className="bg-black text-white w-full px-4 py-2 rounded-md  mt-7">
          Continue
        </button>
      </div>
    </div>
  );
}
export default CardContactInfo;
