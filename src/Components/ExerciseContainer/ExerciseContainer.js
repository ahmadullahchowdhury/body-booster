import React, { useEffect, useState } from 'react';
import ExerciseList from '../ExerciseList/ExerciseList';
import ExerciseSideBar from '../ExerciseSideBar/ExerciseSideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
import './ExerciseContainer.css';



const ExerciseContainer = () => {

    const [exercises , setExercise]  = useState([])
    const [sideBarExercise , setSideBarExercise]  = useState([])

    //getting data from  data json file
    useEffect(() =>{
        fetch('exercise.json').then(res => res.json()).then(data => setExercise(data))
    },[])


//button onclick function to be pass via props from parent components
    const handleClicked = (selectedExercise) =>{
        const updatedExercise = [...sideBarExercise , selectedExercise ]
        setSideBarExercise(updatedExercise)
    }
    return (
        <div className='container'>
            <div className='title'>
            <FontAwesomeIcon icon={faDumbbell} size="2x"></FontAwesomeIcon>
            <h1 className='heading'>Body Booster</h1>
            </div>

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