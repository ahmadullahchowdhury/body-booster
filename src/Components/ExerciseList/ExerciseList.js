
import React from 'react';
import './ExerciseList.css'



const ExerciseList = (props) => {
    
    return (
        <div className='exercises-container'>
            <img src={props.exercise.img} alt="" />
                <p><strong>Name: {props.exercise.name}</strong></p>
                <p><strong>Time: {props.exercise.time}</strong></p>
                <button  className='add-to-side-bar-btn' onClick={() => props.handleClicked(props.exercise)}>
                <p>Add to List</p>
                </button>
        </div>
    );
};

export default ExerciseList;