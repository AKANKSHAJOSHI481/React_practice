import React, { useState } from 'react'
import Card from './Card'
export default function Cards({courses, category}) {
    let allCourses = [];
    const [likedCourses, setLikedCourses] = useState([]);
    const getCourses = ()=>{
        if(category === "All"){
            Object.values(courses).forEach((coursecCategory)=>{
                coursecCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            console.log(allCourses);
            return allCourses;
        }
        else{
            return courses[category];
        }
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {!courses ? (
            <div>
                <p>No data found</p>
            </div>
        ) : (
            getCourses().map((course) => {
                return <Card key = {course.id} course={course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses}/>
            })
        )}
    
    </div>
  )
}
