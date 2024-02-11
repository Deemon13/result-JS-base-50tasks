const URL = "https://jsonplaceholder.typicode.com/todos";

const body = document.querySelector("body");

const todosList = document.createElement("ul");

const errorMsg = "Ошибка получения данных...";

async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(errorMsg);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

getData(URL);

async function createMarkupTodos(url) {
  try {
    const todos = await getData(url);
    if (!todos) {
      throw new Error(errorMsg);
    }

    todos.forEach((task) => {
      const taskContainer = document.createElement("li");
      const taskTitle = document.createElement("h3");
      const taskIsCompleted = document.createElement("span");

      taskTitle.innerText = `${task.title}`;
      taskIsCompleted.innerText = `${
        task.completed ? "Выполнено" : "Не выполнено"
      }`;

      taskContainer.append(taskTitle, taskIsCompleted);
      todosList.append(taskContainer);
    });
    return todosList;
  } catch (error) {
    console.error(error);
  }
}

function toggleLoader() {
  try {
    const loader = document.querySelector("#loader");
    const isHidden = loader.hasAttribute("hidden");

    if (isHidden) {
      loader.removeAttribute("hidden");
    } else {
      loader.setAttribute("hidden", "");
    }
  } catch (error) {
    return;
  }
}

async function renderTodos(url) {
  try {
    toggleLoader();
    const todos = await createMarkupTodos(url);
    if (!todos) {
      throw new Error(errorMsg);
    }
    body.append(todos);
  } catch (error) {
    console.error(error);
  } finally {
    toggleLoader();
  }
}

renderTodos(URL);
