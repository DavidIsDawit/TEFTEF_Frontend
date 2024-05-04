import {Link} from 'react-router-dom';

function login(){
  const username='';
    return <div className='acc'>
      {/* <h1 className='logincont'>TEFTEF. </h1> */}
      <h1 className='logincont'>Welcome back </h1>

      <div className="loggoogleandfacebookaccount">
        <Link to='/GoogleAccount'><button  className="googleaccbutton"> Login with Google account</button></Link>
      <Link to='/GoogleAccount'><button  className="facebookaccbutton"> Login with Facebook account</button></Link>
      </div>;

      <p style= {{color:'white'}}>-------------------------or------------------------------</p>
      <div className='usernameandpassword'> <input type="text" id='username' value={username}placeholder='Email or Username'/>
      <input type="text" id='username' value={username} placeholder='Password'/></div>
      <p style= {{color:'white'}}>Forgot password?</p>
      <div className="loggoogleaccount"><Link to='/GoogleAccount'><button  className="googleaccbutton"> Login </button></Link></div>;
      <p style= {{color:'white'}}>--------------------------------------------------------</p>
      <p style= {{color:'white'}}>Don't have an account? <strong style= {{color:'blue'}} >sign up</strong></p>
      </div>
  }
 export default login; 