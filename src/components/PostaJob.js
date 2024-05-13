import {Link} from 'react-router-dom';
function PostaJob(){
return (
  <div className="post_div">


 <h1 className="post_job_title">Post a Job</h1>,
    <div className="PostaJob_form_button">


        <div>


<form >
    <lable className="lable"> Job type:
    {/* <input type="text" className="inputbox"/> */}
    <select className="dropdown">
        <option value="10">Web developer</option>
        <option value="20">Front-End developer</option>
        <option value="50">Backend developer</option>
        <option value="100">Fullstack developer</option>
        {/* Add more options as needed */}
      </select>
    </lable> 
</form>
<form >
    <lable className="lable"> Skills nedded:
    {/* <input type="text" className="inputbox" /> */}
    <select className="dropdown">
        <option value="10">python</option>
        <option value="20">Javascript</option>
        <option value="50">react</option>
        <option value="100">Angular</option>
        {/* Add more options as needed */}
      </select>
    </lable> 
</form>
<form >
    <lable className="lable"> Payment amount:
    {/* <input type="text" className="inputbox" /> */}
    <select className="dropdown">
        <option value="10">$10</option>
        <option value="20">$20</option>
        <option value="50">$50</option>
        <option value="100">$100</option>
        {/* Add more options as needed */}
      </select>
    </lable> 
</form>
<form >
    <lable className="lable"> Work hours:
    {/* <input type="text" className="inputbox" /> */}
    <select className="dropdown">
        <option value="10">8</option>
        <option value="20">3</option>
        <option value="50">1</option>
        <option value="100">16</option>
        {/* Add more options as needed */}
      </select>
    </lable> 
</form>
<form >
    <lable className="lable"> Employees needed:
    {/* <input type="text"  className="inputbox"/> */}
    <select className="dropdown">
        <option value="10">1</option>
        <option value="20">10</option>
        <option value="50">5</option>
        <option value="100">3</option>
        {/* Add more options as needed */}
      </select>
    </lable> 
</form>
<form >
    <lable className="lable"> Work experience:
    {/* <input type="text"  className="inputbox"/> */}
    <select className="dropdown">
        <option value="10">0</option>
        <option value="20">10</option>
        <option value="50">5</option>
        <option value="100">2</option>
        {/* Add more options as needed */}
      </select>
    </lable> 
</form>
                </div>
<div >
    {/* <h1>Post it</h1> */}
    <div><Link to='/postjob'><button  className="postinbutton"> Post it</button></Link></div>
</div>
     </div>   
  


  </div> 
)

}
export default PostaJob;