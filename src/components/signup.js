import {Link} from 'react-router-dom';

function signup(){
  const username='';
    return <div className='acc'>
      {/* <h1 className='logincont'>TEFTEF. </h1> */}
      <h1 className='logincont'>Welcome back </h1>
      <div className="loggoogleandfacebookaccount">
        <Link to='/GoogleAccount'><button  className="googleaccbutton"> Login with Google account</button></Link>
      <Link to='/GoogleAccount'><button  className="facebookaccbutton"> Login with Facebook account</button></Link>
      </div>;
      <p style= {{color:'white'}}>----------------or---------------------</p>
      <div className='firstandlastname'> 
      <div><input type="text" id='firstname' value={username} placeholder='First Name'/></div>
      <div><input type="text" id='lastname' value={username} placeholder='Last Name'/></div>
      </div>
      <div className='usernameandpassword'> 
        <input type="text" id='username' value={username}placeholder='Email or Username'/>
       <input type="text" id='password' value={username} placeholder='Password'/>
       </div>       
       <div className='agreement'>
      <input 
        type="checkbox" 
        id="agreeCheckbox" 
        
      />
      <label htmlFor="agreeCheckbox">
        <p style={{ color: 'white' }}>
          I agree to the TEFTEF user agreement and privacy policy.
        </p>
      </label>
    </div>
      <div className="loggoogleaccount"><Link to='/GoogleAccount'><button  className="googleaccbutton"> Join TEFTEF </button></Link></div>;
      <p style= {{color:'white'}}>---------------------------------------</p>
      <p style= {{color:'white'}}>Already have an account? <strong style= {{color:'blue'}} >Log in</strong></p>
      </div>
  }
 export default signup; 