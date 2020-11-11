function getImages(pageNumber) {
  const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
  return promise.then((response) => {
    return response.data;
  });
}

function getTasks() {
  const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetid=348348&count=20`);
  return promise.then((response) => {
    return response.data;
  });
}

function createTask(title) {
  const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
    widgetid: 348348, 
    title: title
  });
  return promise.then((response) => {
    return response.data;
  });
}

function deleteTask(id) {
  const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetid=348348&taskId=${id}&count=20`);
  return promise.then((response) => {
    return response.data;
  });
}

function updateTask(title, id, done) {
  const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
    widgetid: 348348, 
    title: title,
    taskId: id,
    done: done
  });
  return promise.then((response) => {
    return response.data;
  });
}
