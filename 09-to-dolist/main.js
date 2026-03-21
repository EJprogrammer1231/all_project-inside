const inputField = document.getElementById("inputField");
const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

const taskcount = document.getElementById("taskcount");
const taskcompletedBtn = document.getElementById("taskcompletedBtn");

addBtn.addEventListener("click", () => {
  const inputField_val = inputField.value.trim();

  if (inputField_val === "") return;

  const createTask_li = document.createElement("li");
  const createBtn_li = document.createElement("button");
  const createCheck_li = document.createElement("input");

  createCheck_li.type = "checkbox";
  createBtn_li.textContent = "✖";

  createBtn_li.addEventListener("click", () => {
    createTask_li.remove();
  });

  createCheck_li.addEventListener("change", () => {
    if (createCheck_li.checked) {
      createTask_li.style.color = "gray";
    } else {
      createTask_li.style.color = "black";
    }
  });

  createTask_li.appendChild(createCheck_li);
  createTask_li.appendChild(document.createTextNode(inputField_val));
  createTask_li.appendChild(createBtn_li);

  taskList.appendChild(createTask_li);

  inputField.value = "";
});

// Changed part: remove every checked task when "Clear Completed" is clicked.
taskcompletedBtn.addEventListener("click", () => {
  const checkedItems = taskList.querySelectorAll('li input[type="checkbox"]:checked');

  checkedItems.forEach((checkbox) => {
    checkbox.closest("li")?.remove();
  });
});
