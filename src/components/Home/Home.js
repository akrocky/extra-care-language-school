import React from 'react';
import useCoursesAll from '../../hooks/useCoursesAll';
import BestCourse from '../BestCourse/BestCourse';
import './Home.css'

const Home = () => {
    const [courses]=useCoursesAll();
    const bestCourses= courses?.filter(course=>course.group === "best selling")
    
    return (<div>
        <div className="home-div">
            <h1 className="px-5 pt-5">Extra Care Language School</h1>
            <h5 className="mx-5">Prepare for your future goal</h5>
        </div>
        <div className="text-center my-3">
            <h1>
                WHY CHOOSE OUR SCHOOL  PATHWAY PROGRAMME?
</h1>
<p className="mx-5">
applying to university in a new country can be a daunting process, especially when you don't speak the language. We'll work closely with you at every stage of the application process, helping you build your German and English language skills and adjust to life in a different country.
</p>
        </div>
        <div>
            <h1 className="text-center">Most Popular Courses in our School</h1>
            <div className="row mx-5">
                {
                   bestCourses?.map(bestCourse=><BestCourse key={bestCourse.id} bestCourse={bestCourse} ></BestCourse>)
                }
            </div>
        </div>
        </div>
    );
};

export default Home;