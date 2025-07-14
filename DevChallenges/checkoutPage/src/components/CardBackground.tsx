import React from "react";


type CardBackgroundProps ={
    children: React.ReactNode;
};



function CardBackground({children}: CardBackgroundProps){
    return (
        <div className="bg-[url('/src/assets/background-image.png')] bg-cover bg-no-repeat bg-center w-full h-[250px] absolute top-0 left-0 m-0 p-0 text-white bg-[#E5E7EB]">
            <p className="text-center text-[27px] font-bold mt-[60px] font-inter flex items-center justify-center gap-x-7"> Checkout 
                <span className="px-3 py-0.75  border border-[#1D1D1F] bg-[#1D1D1F] text-[white] rounded-full text-sm font-normal font-inter mt-2">3 ITEMS</span></p>
            
            <div className="flex justify-center mt-4 bg-[#F3F4F6]">
            {children}
            </div>


    
        
            
            
        </div>


    );
}

export default CardBackground;