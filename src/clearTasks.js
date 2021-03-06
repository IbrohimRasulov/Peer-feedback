import { displayTasksFromLS } from './add&delete'; // eslint-disable-line import/no-cycle

const clearTask = (tasks, todoList) => {
  document.querySelector('#clr-btn').addEventListener('click', () => {
    tasks = tasks.filter((task) => task.completed === false);

    tasks.forEach((task, index) => {
      task.index = index;
    });

    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(tasks));

    todoList.innerHTML = '';
    displayTasksFromLS(tasks);
  });
};

export { clearTask as default };