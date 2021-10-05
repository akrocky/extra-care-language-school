import React from 'react';
import useCoursesAll from '../../hooks/useCoursesAll';
import Course from '../Course/Course';

const Courses = () => {
  const [courses] =useCoursesAll()
  

    return (
        <div className="container">
          <h1 className=" bg-black text-white text-center bold-xxv mt-5" > Our Courses</h1>
          <p className="text-center mb-5">We only focus on two languages which are German and Eglish</p>
          <div className = "row">
          {
            courses?.map(course => <Course key={course.id} course={course} ></Course>
            )
          }
          </div>
        </div>
    );
};

export default Courses;