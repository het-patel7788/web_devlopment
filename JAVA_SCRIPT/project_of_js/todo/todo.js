// Select input, button, and list
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Event: when add button is clicked
addBtn.addEventListener("click", function () {
  const task = input.value.trim(); // Get input text and remove extra spaces

  if (task !== "") {
    // Create new list item
    const li = document.createElement("li");
    li.innerText = task;

    // Add delete button to the task
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.style.marginLeft = "10px";

    // Delete task when delete button is clicked
    delBtn.addEventListener("click", function () {
      li.remove();
    });

    // Append delete button to the list item
    li.appendChild(delBtn);

    // Add list item to the task list
    list.appendChild(li);

    // Clear the input
    input.value = "";
  }
});
