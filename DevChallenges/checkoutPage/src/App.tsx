
import './App.css'
import CardBackground from './components/CardBackground'
import CardCheckout from './components/CardCheckout';
import CardContactInfo from './components/CardContactInfo';
//import CardCheckout from './components/CardCheckout'

function App() {


  return (

       <div className="min-h-screen bg-[#F3F4F6]">
        <CardBackground>
          <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-6 bg-white rounded-xl">
            <CardCheckout>

            </CardCheckout>
            <CardContactInfo>

            </CardContactInfo>

          </div>
      
      </CardBackground>
       

      </div>
       


    
       
 
      
    

  );
}

export default App
