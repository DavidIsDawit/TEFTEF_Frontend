import {Link} from 'react-router-dom';
function Footer(){
   return <div className='footer_cont'>
            <div className='PlcandSocials'>
          <div className='Plc'><Link to='/Home'><button  className="TefTefplc"> <h1 className='home'>TefTef.</h1><p>TefTef Freelancing.plc</p></button></Link></div>      
            
         <div><Link to='/Tiktok'><button  className="TiktokButton"> TikTok</button></Link></div>
         <div><Link to='/FB'><button  className="FBButton">Facebook</button></Link></div>
         <div><Link to='/Twitter'><button  className="TwitterButton">Twitter</button></Link></div>
         </div>
            </div>
}
export default  Footer;