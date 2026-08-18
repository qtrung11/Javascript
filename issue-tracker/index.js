const initialData = [
  {
    id: 1,
    title: `Issue 1`,
    author: Thomas,
    status: `new`,
    description: ` This is a issue need to be fixed`,
    severity: "low",
  },
  {
    id: 2,
    title: "tony",
    status: "new",
    description: "tony test",
    severity: "low",
  },
];
const tempTodos = [];
tempTodos.push(...initialData);

const btnAddTodo = document.getElementById("addBtn");
const todos = document.getElementById("todos");

btnAddTodo.addEventListener("click", () => {
  const newTodo = {
    id: 3,
    title: "lorem10",
    status: "new",
    description: "react test" + Date.now(),
    severity: "low",
  };
  tempTodos.push(newTodo);
  renderHtmlTodo(tempTodos);
});

function renderItem(item) {
  const cardElement = document.createElement("div");
  cardElement.setAttribute("class", "rounded border border-gray-300 mt-4");

  const itemElement = document.createElement("div");
  itemElement.setAttribute(
    "class",
    "flex gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2.5",
  );

  const idElement = document.createElement("p");
  idElement.innerHTML = item.id;

  const statusElement = document.createElement("p");
  statusElement.setAttribute(
    "class",
    "rounded bg-gray-500 px-2 py-0.5 text-xs  text-white",
  );
  statusElement.innerHTML = item.status;

  const bodyElement = document.createElement("div");
  bodyElement.setAttribute(
    "class",
    "flex min-h-24 gap-5 px-4 py-5 items-center justify-between",
  );

  const contentElement = document.createElement("h3");
  contentElement.setAttribute("class", "text-base font-bold");
  contentElement.innerHTML = item.description;

  const actionButtonElement = document.createElement("div");
  actionButtonElement.setAttribute("class", "flex gap-2 self-end self-center");

  const closeButtonElement = document.createElement("button");
  closeButtonElement.setAttribute("type", "button");
  closeButtonElement.setAttribute(
    "class",
    "rounded bg-blue-600 px-3 py-1.5  text-white transition hover:bg-blue-700",
  );
  closeButtonElement.innerHTML = "Close";

  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.setAttribute("type", "button");
  deleteButtonElement.setAttribute(
    "class",
    "rounded bg-red-600 px-3 py-1.5  text-white transition hover:bg-red-700",
  );
  deleteButtonElement.innerHTML = "Delete";

  cardElement.appendChild(itemElement);
  cardElement.appendChild(bodyElement);

  itemElement.appendChild(idElement);
  itemElement.appendChild(statusElement);

  bodyElement.appendChild(contentElement);
  bodyElement.appendChild(actionButtonElement);

  actionButtonElement.appendChild(closeButtonElement);
  actionButtonElement.appendChild(deleteButtonElement);

  return cardElement;
}

function renderHtmlTodo(data) {
  todos.innerHTML = "";
  data.forEach((item) => {
    const todo = renderItem(item);
    todos.appendChild(todo);
  });
}
renderHtmlTodo(tempTodos);
