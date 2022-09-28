import React, { useEffect, useState } from 'react';
import ExerciseList from '../ExerciseList/ExerciseList';
import ExerciseSideBar from '../ExerciseSideBar/ExerciseSideBar';
import './ExerciseContainer.css'




const ExerciseContainer = () => {
    const [exercises , setExercise]  = useState([])
    const [sideBarExercise , setSideBarExercise]  = useState([])

    useEffect(() =>{
        fetch('exercise.json').then(res => res.json()).then(data => setExercise(data))
    },[])



    const handleClicked = (selectedExercise) =>{
        const updatedExercise = [...sideBarExercise , selectedExercise ]
        setSideBarExercise(updatedExercise)



    }
    return (
        <div>
            <h1 className='heading'>Body Booster</h1>

        <div className='exercise-all-container'>
        
            <div className='exercise-container'>
                {
                    exercises.map(exercise => <ExerciseList exercise={exercise}
                        handleClicked = {handleClicked}
                        key={exercise.id}
                    >
                    </ExerciseList>)
                }
            </div>
            <div>

                <ExerciseSideBar exerciseItems={sideBarExercise}></ExerciseSideBar>
            </div>
        </div>
        </div>
    );
};

export default ExerciseContainer;