document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskDescription = taskInput.value;

    if (taskDescription) {
     
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      taskList.appendChild(taskItem);

      taskInput.value = "";
    }
  });
});

