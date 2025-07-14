import Item from "./Item";
import type { ItemProps } from "./Item";



function CardCheckout() {

  const produtos: ItemProps[] = [
    {
      imagem: "/src/assets/Gold.png",
      nome: "iPhone 12 Pro",
      cor: "Golden",
      quantidade: 1,
      preco: 999.0,
    },
    {
      imagem: "/src/assets/Apple-watch.png",
      nome: "Apple Watch",
      cor: "Blue",
      quantidade: 1,
      preco: 399.0,
    },
    {
      imagem: "/src/assets/iMac.png",
      nome: "iMac",
      cor: "Green",
      quantidade: 1,
      preco: 1199.0,
    },
    {
      imagem: "/src/assets/iMac.png",
      nome: "iMac",
      cor: "Green",
      quantidade: 1,
      preco: 1199.0,
    },
    
  ];

  
  const subtotal = produtos.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  const taxa = subtotal * 0.16;
  const total = subtotal + taxa;

  return (
    <div className="bg-[#E5E7EB] p-5 shadow-md flex-1 text-black rounded-xl">
      {produtos.map((produto) => (
        <Item{...produto} />
      ))}

      <br></br>
      <hr className="border-[#D2D5DA]" ></hr>
      <br></br>

     
      <div className="mt-6">
        <div className="flex gap-2 mb-6">
          <input
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 outline-none bg-white placeholder:text-[#1D1D1F]"
            type="text"
            placeholder="Enter coupon code"
          />
          <button className="bg-black text-white px-4 py-2 rounded-md ">
            Apply Coupon
          </button>
        </div>
      </div>

      
      <div className="text-sm space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Sub total</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${taxa.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-base mt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default CardCheckout;
