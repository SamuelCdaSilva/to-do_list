import React, { useState } from 'react';
import Tasks from './components/tasks-component/tasks'
import './components/tasks-component/task.css'
import './App.css';
import AddTask from './components/tasks-component/addTask';

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
            completed: false,
        },
    ]);


    return ( 
        <>
            <div className="container">
                <AddTask/>
              <Tasks tasks={tasks} />
            </div>
        </>
    );
};

export default App;