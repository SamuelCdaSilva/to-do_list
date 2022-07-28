import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './button';
import './taskDetails.css'

const  TaskDetails= () => {
    const params = useParams(); 
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }    
    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda delectus fugiat et, error nam molestiae ullam perspiciatis suscipit perferendis magnam dolor architecto mollitia qui magni natus consequuntur nulla maiores?</p>
            </div>
        </>
    );
}


export default TaskDetails ;