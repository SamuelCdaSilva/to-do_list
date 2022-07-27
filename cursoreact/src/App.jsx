import React, { useState } from 'react';
import Tasks from './components/tasks'
import { v4 as uuidv4 } from 'uuid';
import AddTask from './components/addTask';
import Header from './components/header';
import './components/task.css'
import './App.css';

const App = () => {
    // let message = "Hello World!";

    // state representam os valores renderizados, ou seja, o que está atualmente na tela. setState() agenda uma atualização para o objeto state de um componente. Quando o state muda, o componente responde renderizando novamente.
    const [tasks, setTasks] = useState([ 
        {
            id: '1',
            title: 'Estudar Programação',
            completed: false,
        },
        {
            id: '2',
            title: 'Ler livros',
            completed: true,
        },
    ]);

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id == taskId) return {
                ... task, completed: !task.completed}

            return task; 
        })

        setTasks(newTasks)
    }

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [
            ... tasks, 
            {
                title: taskTitle,
                id: uuidv4(),
                completed: false,
            },
        ];
        
        setTasks(newTasks);
    };

    const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter(task => task.id != taskId)

        setTasks(newTasks);
    };


    return ( 
        <>
            <div className="container">
                <Header/>
                <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
            </div>
        </>
    );
};

export default App;