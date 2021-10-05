import React from 'react';
import { useHistory } from 'react-router';

const BestCourse = (props) => {
    const {id,title,image,sDiscription}= props.bestCourse
    const history=useHistory()
    const clickHandler=()=>{
      history.push(`/courses/${id}`)
    }
    return (
        <div className="col-3 g-5 ms-5">
          <div className="card " style={{width: "18rem"}}>
  <img src={image} height="150px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{sDiscription}</p>
    <button onClick={clickHandler} className="btn btn-primary">deatails</button>
  </div>
</div>
        </div>
    );
};

export default BestCourse;