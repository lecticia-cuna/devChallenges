export function getRandomQuote(quotes){
    if (!quotes || quotes.length ===0) return null;

    return quotes[Math.floor(Math.random() * quotes.length)];
}


export function shareQuoteClip(quoteObj) {
    if (!quoteObj) return;

    const text = `"${quoteObj.quote}" — ${quoteObj.author}`;
    return navigator.clipboard.writeText(text)
        .then(() =>{
            alert("citação copiada para o clipboard")
        })
        .catch((err)=>{
            console.error("Erro", err);
        });

}
