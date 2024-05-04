import {Link} from 'react-router-dom';
function HowItWorks(){
 return <div className='howitworksCont'>
        <h1 className='howitworksCont_header'>How It Works</h1>
        <div className="linkandinstrunction">
            <p className= 'instruction'>
            1. Post a Project or contest<br /><br/>
            2. Choose the perfect freelancer<br /><br/>
            3. Pay when you’re satisfied<br /><br/>
            </p>

            <div className="howitworkslink">
         <div><Link to='/Freelancers'><button  className="Freelancers"> Find Freelancer</button></Link></div>
         <div><Link to='/FindJob'><button  className="Job">Find Job</button></Link></div>
         <div><Link to='/PostAJob'><button  className="Job">Post a Job</button></Link></div>
           </div> 
        </div>

        </div>

}
export default HowItWorks;