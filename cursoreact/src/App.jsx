import React, { useEffect, useState } from "react";

import axios from 'axios' 
import Header from "./components/header";
import Tasks from "./components/tasks";
import AddTask from "./components/addTask";
import TaskDetails from "./components/taskDetails"

import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import './components/task.css'

import "./App.css";

const App = () => {
  // let message = "Hello World!";

  // state representam os valores renderizados, ou seja, o que está atualmente na tela. setState() agenda uma atualização para o objeto state de um componente. Quando o state muda, o componente responde renderizando novamente.

  const [tasks, setTasks] = useState([ // Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais. Hooks não funcionam dentro de classes — eles permitem que você use React sem classes. (Nós não recomendamos reescrever seus componentes já existentes de um dia para o outro, mas você pode começar a usar Hooks nos novos se você quiser.)

    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
  ]);

  /*
  useEffect(()=> {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data);
    };
    fetchTasks();
  }, []); // lista de dependências

  */
 
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId)
        return {
          ...task,
          completed: !task.completed,
        };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact // fazer o filtro
          render={() => ( // abrindo direto com os parenteses, irá dar no mesmo do que com o return.
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>

    </Router>
  );
};

export default App;
