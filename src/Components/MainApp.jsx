import "./MainApp.css";
import img from "./Img/icon.png";

const MainApp = () => {
  return (
    <div className='MainContainer'>
        <div className='Container'>
           <div className='SubContainer' id="Sub1">
            
               <p>
                 <b>Girl Develop It</b> <br></br>
                 <i>𝒹𝑜𝓃'𝓉 𝒷𝑒 𝓈𝒽𝓎. 𝒹𝑒𝓋𝑒𝓁𝑜𝓅 𝒾𝓉.</i>
                 <img src={img} alt="images" />
               </p> 
                
           </div>
           <div className='SubContainer'>
            <h1>About</h1>
            <p>It can be intimidating for women to learn and ask questions when they are in an 
                <b> extreme minority</b>. While open and welcoming, today's budding developer 
                community is uo to <b>91% male</b>. If we can empower more females with the confidence 
                in the technological capabilities <i>we can begin to change this landscape.</i>
            </p>
           </div>
           <div className='SubContainer' id="Sub3">
             <h1>Our Location</h1>
             <ul>
                <b><li>USA</li></b>
             <ul > 
                <li><a href="">New York</a></li>
                <li><a href="">Columbus</a></li>
                <li><a href="">Austin</a></li>
                <li><a href="">Philly</a></li>
             </ul>
             </ul>
             <ul>
                <b><li>World</li></b>
             <ul > 
                <li><a href="">Ottawa</a></li>
                <li><a href="">Syndney</a></li>
             </ul>
             </ul>
           </div>
           <div className='SubContainer' id="Sub4">
            <p>
                <a href="">Twitter</a> | <a href="">Facebook</a> | <a href="">Flicker</a>
            </p>
           </div>
           </div>
    </div>
  )
}

export default MainApp