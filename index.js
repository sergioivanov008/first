const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");

//debugger;
//createTask('super learn JS');
//deleteTask('2f9be242-6635-4783-a9dc-6c6659b193ca');
updateTask('super learn JS done true', 'a1390b82-4f19-4eba-a214-e741f4303e68', true);

clickMeButton.addEventListener("click", () => {
  const promise = getImages(pageNumberEl.value);
  promise.then(onImagesReceived);
});

getTasksButton.addEventListener("click", () => {
  const promise = getTasks();
  promise.then(onTasksReceived);
});

function onImagesReceived(data) {
  data.forEach(el => {
    const img = document.createElement('img');
    img.src = el.thumbnail;
    document.querySelector('#result').appendChild(img);
  });
};

function onTasksReceived(tasks) {
  const result = document.querySelector('#tasks-result');
  result.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = task.title;
    li.dataset.id = task.id;
    document.querySelector('#tasks-result').appendChild(li);
  });
};