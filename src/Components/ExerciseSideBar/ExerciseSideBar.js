import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ExerciseSideBar.css'

const ExerciseSideBar = (props) => {  
    let newTime = 0;
    let exercises = props.exerciseItems
    for(let exercise of exercises){
        newTime =  + newTime + exercise.time 
    }

    const [time, setTime] = useState(0)
    function exerciseTime(timeValue){
        localStorage.setItem('exercise-time', timeValue )
        setTime(localStorage.getItem('exercise-time'))
    }

      const toastClick = () => toast.success("Owah, Congratulations", { autoClose: 3000 });

    return (
        <div className='SideBar'>
            <h2>Ahmadullah Chowdhury</h2>
            <div className='info'>
                <p>Weight: 50 kg</p>
                <p>Age: 23 years</p>
            </div>

            <h1>Exercise Summary</h1>
            <h3>Add Break Period</h3>
            <ul className='list-inline'>
                <li onClick={() =>exerciseTime(20)} >20</li>
                <li onClick={() =>exerciseTime(30)} >30</li>
                <li onClick={() =>exerciseTime(40)} >40</li>
                <li onClick={() =>exerciseTime(60)} >60</li>
            </ul>
            <h3>Total Exercise Time: {newTime} Sec</h3>
            <h3>Break Time: { localStorage.getItem('exercise-time') } Sec</h3>
            <button  onClick={toastClick} className='complete-btn'>Completed</button>
            <ToastContainer autoClose={3000}  />
        </div>
    );
};

export default ExerciseSideBar;