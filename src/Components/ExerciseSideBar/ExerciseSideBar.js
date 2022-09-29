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

    //setting breaktime and adding localstorage
    const [time, setTime] = useState(0)
    function breakTime(timeValue){
        localStorage.setItem('break-time', timeValue )
        setTime(localStorage.getItem('break-time'))
    }
    //toast function
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
                <li onClick={() =>breakTime(20)} >20</li>
                <li onClick={() =>breakTime(30)} >30</li>
                <li onClick={() =>breakTime(40)} >40</li>
                <li onClick={() =>breakTime(60)} >60</li>
            </ul>
            <h3>Total Exercise Time: {newTime} Sec</h3>
            <h3>Break Time: { localStorage.getItem('break-time') } Sec</h3>
            <button  onClick={toastClick} className='complete-btn'>Completed</button>
            <ToastContainer autoClose={3000}  />
        </div>
    );
};

export default ExerciseSideBar;