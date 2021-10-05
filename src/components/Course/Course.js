import React from 'react';
import { useHistory } from 'react-router';

const Course = (props) => {
    const {id,title,image,sDiscription,duration,certificate}=props.course
    const history=useHistory()
    const clickHandler=()=>{
      history.push(`/courses/${id}`)
    }
    return (
        <div className=" col-4 mb-4 ">
            <div className="card" style={{"width": "20rem"}}>
  <img src={image} className="card-img-top" height="150px" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{sDiscription}</p>
    <p>Duration: {duration}</p>
    <p>Certificate: {certificate}</p>
    <button onClick={clickHandler} className="btn btn-primary"> more deatails...</button>
  </div>
</div>
        </div>
    );
};

export default Course;