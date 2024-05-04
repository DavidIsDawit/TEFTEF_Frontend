import {Link} from 'react-router-dom';
function Navbar(){
  return <nav className='flexcontainer'>

    <p className='language'>English</p>

   <Link to='/'  style={{ textDecoration: 'none' }}  > <p className="home" >TEFTEF.</p> </Link> 
    <div className="useraccount">
         <Link to='/login'><button  className="acclog">Login</button></Link>

         <Link to='/signup'><button className="accsign" >Sign up</button></Link>
    </div>
    

     </nav>
}
export default Navbar