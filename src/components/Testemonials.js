import wespic from "../Assests/images/wes-modified.png";
import davepic from "../Assests/images/dave-modified.png";

function Testimonials(){
     return (<div className='Testimonials_cont'>
               <h1 className='Testimonials_header'>Testimonials </h1>
               <div className="TestImgandParagraph">
                <div className='eachtestimgparg'>
                <img className="TestPic" src={wespic} alt="wespic" />
         <p className='testpar'> Hi my name is wesen , am a Data Analyst as a freelancer in TefTef freelancing app .
         <br/>  I get roughly 5000 birr per hour and i get to spend my time anywhere with my loved ones!   </p>
                </div>
                <div className='eachtestimgparg'>
                <img className="TestPic" src={davepic} alt="davepic" />
         <p className='testpar'> Hi my name is Dawit , am a web developer as a freelancer in TefTef freelancing app .
         <br/>I get roughly 2000 birr per hour and i get to spend my time anywhere with my loved ones!  </p>     
                </div>
                <div className='eachtestimgparg'>
                <img className="TestPic" src={wespic} alt="wespic" />
                <p className='testpar'> Hi my name is wesen , am a Data Analyst as a freelancer in TefTef freelancing app .
         <br/> I get roughly 5000 birr per hour and i get to spend my time anywhere with my loved ones!   </p>        
                </div>
                <div className='eachtestimgparg'>
                <img className="TestPic" src={davepic} alt="davepic" />
        
         <p className='testpar'> Hi my name is Dawit , am a web developer as a freelancer in TefTef freelancing app .
         <br/> I get roughly 2000 birr per hour and i get to spend my time anywhere with my loved ones!  </p> 
                </div>
                <div className='eachtestimgparg'>
                <img className="TestPic" src={wespic} alt="wespic" />
         
         <p className='testpar'> Hi my name is wesen , am a Data Analyst as a freelancer in TefTef freelancing app .
        <br/>I get roughly 5000 birr per hour and i get to spend my time anywhere with my loved ones!   </p>
                </div>
                <div className='eachtestimgparg'>
                <img className="TestPic" src={davepic} alt="davepic" />
                <p className='testpar'> Hi my name is Dawit , am a web developer as a freelancer in TefTef freelancing app .
         <br/> I get roughly 2000 birr per hour and i get to spend my time anywhere with my loved ones!  </p> 
                </div>
               
               
               </div>
             </div>  ) 
     
}
export default Testimonials;