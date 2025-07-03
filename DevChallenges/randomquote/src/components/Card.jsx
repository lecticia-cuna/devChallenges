import randomIcon from "../assets/regroup.svg";
import shareIcon from "../assets/link.svg";
import { useState, useEffect, useRef } from "react";
import { fetchQuotes } from "../services/quoteApi";
import { getRandomQuote, shareQuoteClip} from "../services/metodos";

function Card() {
  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState(null);
  const randomRef = useRef(null);


  useEffect(() => {
    fetchQuotes().then((data) => {
      setQuotes(data);
      setCurrent(getRandomQuote(data));
    });
  }, []);

  useEffect(() => {
    const btn = randomRef.current;

    const handleClick = () =>{
        const nova = getRandomQuote(quotes)
        setCurrent(nova);
    };

    if (btn) {
      btn.addEventListener("click", handleClick);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("click", handleClick);
      }
    };
  }, [quotes]);

  const shareQuote = () => {
  shareQuoteClip(current);

};


  return (
    <div>
      <div class="bg-[url(src/assets/bg-image-random-quote.svg)] bg-[#1E2333] text-white rounded-xl p-8 w-full max-w-xl shadow-lg">
        <h2 class="text-center text-xl font-semibold">{current?.author}</h2>

        <div class="flex justify-center gap-2 mt-2 ">
            {current?.tags?.map((tag, index) => (
                <span 
                    key={index} 
                    class="px-3 py-1 border border-[#AEB0FF] text-[#AEB0FF] rounded-full text-xs">
                    {tag}
          </span>

            ))}
         
        </div>

        <p class="text-center text-2xl font-light mt-6">
        "  {current?.quote} "
        </p>
      </div>

      <div class="flex justify-center gap-4 mt-3">
        <button 
        ref={randomRef}
        class="flex items center gap-3 bg-[#2A2F45] text-white px-4 py-2 rounded-lg w-30 h-11">
          Random
          <img src={randomIcon} alt="random icon" className="w-6 h-7"></img>
        </button>
        <button 
        onClick ={shareQuote}
        class="flex items center gap-3 bg-[#2A2F45] text-white px-4 py-2 rounded-lg w-25 h-11">
          Share
          <img src={shareIcon} alt="share icon" class="w-6 h-7" />
        </button>
      </div>
    </div>
  );
}

export default Card;
