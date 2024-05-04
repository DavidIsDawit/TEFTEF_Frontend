import programming from "../Assests/images/programmingg.png";
import content_writer from "../Assests/images/content_writer.png";
import designer from "../Assests/images/designer.png";
import digital_marketer from "../Assests/images/digital_marketer.png";
function Jobs(){
   return(
    <div className='JobsSection'>
        <h1 className='Job_header' >Jobs</h1>
        <div className='JobsSectionimgs'>
        <div className='jopdesccont'>
        <img className= 'jobpic'src={programming} alt='programming '/>
        <p className= 'nametag'> Programming </p>
        </div>
        <div className='jopdesccont'>
        <img className= 'jobpic'src={content_writer} alt='content writer '/>
        <p className= 'nametag'> Content writing </p>
        </div>
        <div className='jopdesccont'>
        <img className= 'jobpic'src={designer} alt='designer'/>
        <p className= 'nametag'> Graphics designing </p>
        </div>
        <div className='jopdesccont'>
        <img className= 'jobpic'src={digital_marketer} alt='digital_marketer'/>
        <p className= 'nametag'> Digital marketer </p>
        </div>
        <div className='jopdesccont'>
        <img className= 'jobpic'src={programming} alt='programming '/>
        <p className= 'nametag'> Programming </p>
        </div>
        <div className='jopdesccont'>
        <img className= 'jobpic'src={content_writer} alt='content writer '/>
        <p className= 'nametag'> Content writing </p>
        </div>
        <div className='jopdesccont'>
        <img className= 'jobpic'src={designer} alt='designer'/>
        <p className= 'nametag'> Graphics designing </p>
        </div>
        <div className='jopdesccont'>
        <img className= 'jobpic'src={digital_marketer} alt='digital_marketer'/>
        <p className= 'nametag'> Digital marketer </p>
        </div>

        </div>         
    </div>
   )
}
export default Jobs;