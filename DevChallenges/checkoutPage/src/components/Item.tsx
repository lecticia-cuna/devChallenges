
export type ItemProps = {
    imagem: string;
    nome: string;
    cor: string;
    preco: number;
    quantidade: number;
};

export function Item ({imagem, nome, cor, preco, quantidade}: ItemProps){
    return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <img src={imagem} className="w-16 h-16 rounded-lg bg-white"/>
        <div>
          <p className="font-medium text-gray-900">{nome}</p>
          <p className="text-sm text-gray-500">{cor}</p>
          <p className="text-sm text-gray-500">x {quantidade}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <p className="font-bold text-gray-900">${preco.toFixed(2)}</p>
          <span className="text-gray-400 hover:text-red-500 text-lg">✕</span>
        
      </div>
    </div>
  );

}
export default Item;