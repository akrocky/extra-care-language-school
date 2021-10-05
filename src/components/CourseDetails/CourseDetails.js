
import { useParams } from 'react-router-dom';
import useCoursesAll from '../../hooks/useCoursesAll'


const CourseDetails = () => {
  const {id} = useParams();
  const [courses] = useCoursesAll()
  const singleCourseDetails = courses?.find(course =>course.id == id) 
 
 

    return (
        <div>
        <div class="card mx-auto my-5" style={{"width":" 30rem"}}>
  <img src={singleCourseDetails?.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{singleCourseDetails?.title}</h5>
    <p class="card-text">{singleCourseDetails?.sDiscription}</p>
    <p class="card-text">Total lesson : {singleCourseDetails?.lesson}</p>
    <p class="card-text">Duration:{singleCourseDetails?.duration}</p>
    <p class="card-text">Cost : {singleCourseDetails?.cost}</p>
    <br />
    <p class="card-text"> {singleCourseDetails?.discription}</p>

    
  </div>
  
  
</div>

        </div>
    );
};

export default CourseDetails;