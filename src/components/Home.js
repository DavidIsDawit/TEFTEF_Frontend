// import backgroundpic from '../Assests/images/backgroundpic.png';
import {Link} from 'react-router-dom';
import Freelancers from "./Freelancers";
import Jobs from "./Jobs";
import {Routes,Route} from 'react-router-dom';
function Home(){
    return(
    <div className='container'>
             
        <div className='herosectionitems'>
             <p className='writing'>Partime & Remote  Jobs here in <strong>Ethiopia</strong> </p>
        </div>
        <div className='link_container'>
        <div className="links">
         <div><Link to='/Freelancers'><button  className="Freelancers"> Find Freelancer</button></Link></div>
         <div><Link to='/FindJob'><button  className="Job">Find Job</button></Link></div>
         <div><Link to='/PostAJob'><button  className="Job">Post a Job</button></Link></div>
        </div>        
    </div>        
           
    </div>
    )
}
export default Home;