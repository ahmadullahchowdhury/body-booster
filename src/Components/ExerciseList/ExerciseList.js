
import React from 'react';
import './ExerciseList.css'



const ExerciseList = (props) => {
    let {name, time} = props.exercise
    return (
        <div className='exercises-container'>
            <img src={props.exercise.img} alt="" />
                <p><strong>Name: {name}</strong></p>
                <p><strong>Time: {time}</strong></p>
                <button  className='add-to-side-bar-btn' onClick={() => props.handleClicked(props.exercise)}>
                <p>Add to List</p>
                </button>
        </div>
    );
};

export default ExerciseList;