import wespic from "../Assests/images/wes-modified.png";
import davepic from "../Assests/images/dave-modified.png";
import ermipic from "../Assests/images/ermi-modified.png";
import abupic from "../Assests/images/abu2-modified.png";



function Freelancers (){
    return(
        <div className="Fcont"><h1 className='Freelancer_header'>Freelancers</h1><div className="FreelancersSection">
            <div className="freenamestarandprofession">
            <img className= 'freepic'src={wespic} alt='wes pic'/>
            <div className="namestar"><p className='names'>Wesen </p>  <p id="wesen" className="start">5*</p></div>
            <p className= 'freenametag'> Cyber analyst </p>
            </div>
            <div className="freenamestarandprofession">
            <img className= 'freepic'src={davepic} alt='dave pic'/>
            <div className="namestar"><p className='names'>Dawit  </p>  <p id="dave" className="start">5*</p></div>
            <p className= 'freenametag'> Web developer </p>
            </div>
            <div className="freenamestarandprofession">
            <img className= 'freepic'src={ermipic} alt='ermi pic'/>
            <div className="namestar"><p className='names'>Ermias  </p>  <p id="ermi" className="start">5*</p></div>
            <p className= 'freenametag'> Data scientist </p>
            </div>
            <div className="freenamestarandprofession">
            <img className= 'freepic'src={abupic} alt='abu pic'/>
            <div className="namestar"><p className='names'>Eyuel </p>  <p id="eyuel" className="start">5*</p></div>
            <p className= 'freenametag'> AI developer </p>
            </div>   
            <div className="freenamestarandprofession">
            <img className= 'freepic'src={wespic} alt='wes pic'/>
            <div className="namestar"><p className='names'>Wesen </p>  <p id="wesen" className="start">5*</p></div>
            <p className= 'freenametag'> Cyber analyst </p>
            </div>
            <div className="freenamestarandprofession">
            <img className= 'freepic'src={davepic} alt='dave pic'/>
            <div className="namestar"><p className='names'>Dawit  </p>  <p id="dave" className="start">5*</p></div>
            <p className= 'freenametag'> Web developer </p>
            </div>
            <div className="freenamestarandprofession">
            <img className= 'freepic'src={ermipic} alt='ermi pic'/>
            <div className="namestar"><p className='names'>Ermias  </p>  <p id="ermi" className="start">5*</p></div>
            <p className= 'freenametag'> Data scientist </p>
            </div>
            <div className="freenamestarandprofession">
            <img className= 'freepic'src={abupic} alt='abu pic'/>
            <div className="namestar"><p className='names'>Eyuel </p>  <p id="eyuel" className="start">5*</p></div>
            <p className= 'freenametag'> AI developer </p>
            </div>   

        </div>
        </div>
    )
}
export default  Freelancers;