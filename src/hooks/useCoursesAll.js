
import  { useEffect, useState } from 'react';

const useCoursesAll = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/akrocky/review-website-akrocky-Api/main/courses.JSON')
        .then(res=>res.json())
        .then(data => setCourses(data))
    },[])
    return [courses,setCourses];
};

export default useCoursesAll;