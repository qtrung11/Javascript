const initialData = [
  {
    id: 1,
    title: `Issue 1`,
    author: "Thomas",
    status: `Open`,
    description: ` This is an issue need to be fixed`,
    severity: "low",
  },
  {
    id: 2,
    title: "Tony",
    status: "Open",
    description: "tony test",
    severity: "low",
  },
];
const savedIssues = localStorage.getItem("issues");

const tempTodos = savedIssues ? JSON.parse(savedIssues) : [...initialData];

function saveTodos() {
  localStorage.setItem("issues", JSON.stringify(tempTodos));
}

const issueForm = document.getElementById("issueForm");
const titleForm = document.getElementById("titleForm");
const authorForm = document.getElementById("authorForm");
const severityForm = document.getElementById("severityForm");
const btnAddTodo = document.getElementById("addBtn");
const todos = document.getElementById("todos");

btnAddTodo.addEventListener("click", (event) => {
  //Vì form type = submit nên nếu không preventDefault thì web sẽ tự động reload sau khi sự kiện Submit
  event.preventDefault();

  const title = titleForm.value;
  const author = authorForm.value;
  const severity = severityForm.value;

  if (title === "") {
    alert("Please enter the title");
    return;
  }
  const newTodo = {
    id: tempTodos.length + 1,
    title: title,
    author: author,
    status: "Open",
    description: author + " is solving",
    severity: severity,
  };

  tempTodos.push(newTodo);
  saveTodos();
  renderHtmlTodo(tempTodos);

  issueForm.reset();
});

function renderItem(item) {
  const cardElement = document.createElement("div");
  cardElement.setAttribute("class", "rounded border border-gray-300");

  const headerForm = headerRender(item);
  const bodyForm = bodyRender(item);

  cardElement.appendChild(headerForm);
  cardElement.appendChild(bodyForm);

  return cardElement;
}

function renderHtmlTodo(data) {
  todos.innerHTML = "";
  data.forEach((item) => {
    const todo = renderItem(item);
    todos.appendChild(todo);
  });
}

function headerRender(item) {
  const itemElement = document.createElement("div");
  itemElement.setAttribute(
    "class",
    "flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2.5 ",
  );

  const idElement = document.createElement("span");
  idElement.innerHTML = item.id;

  const titleElement = document.createElement("span");
  titleElement.innerHTML = item.title;

  const statusElement = document.createElement("span");
  if (item.status === "Open") {
    statusElement.setAttribute(
      "class",
      "rounded items-center bg-green-500 px-2 py-0.5 text-xs  text-white",
    );
  } else {
    statusElement.setAttribute(
      "class",
      "rounded items-center bg-cyan-500 px-2 py-0.5 text-xs  text-white",
    );
  }
  statusElement.innerHTML = item.status;

  const severityElement = document.createElement("span");
  severityElement.setAttribute(
    "class",
    "rounded bg-yellow-500 px-2 py-0.5 text-sm  text-white ml-auto",
  );
  severityElement.innerHTML = item.severity;

  itemElement.appendChild(idElement);
  itemElement.appendChild(titleElement);
  itemElement.appendChild(statusElement);
  itemElement.appendChild(severityElement);

  return itemElement;
}
function bodyRender(item) {
  const actionButtonElement = actionButtonRender(item);
  const bodyElement = document.createElement("div");
  bodyElement.setAttribute(
    "class",
    "flex min-h-24 gap-5 px-4 py-5 items-center justify-between",
  );

  const contentElement = document.createElement("h3");
  contentElement.setAttribute("class", "text-base font-bold");
  contentElement.innerHTML = item.description;

  bodyElement.appendChild(contentElement);
  bodyElement.appendChild(actionButtonElement);

  return bodyElement;
}
function actionButtonRender(item) {
  const actionButtonElement = document.createElement("div");
  actionButtonElement.setAttribute("class", "flex gap-2 self-end self-center");

  const openButtonElement = document.createElement("button");
  openButtonElement.setAttribute("type", "button");
  openButtonElement.setAttribute(
    "class",
    " openButton rounded bg-green-500 px-3 py-1.5  text-white transition hover:bg-green-700",
  );
  openButtonElement.innerHTML = "Open";

  openButtonElement.addEventListener("click", () => {
    item.status = "Open";
    renderHtmlTodo(tempTodos);
  });

  const closeButtonElement = document.createElement("button");
  closeButtonElement.setAttribute("type", "button");
  closeButtonElement.setAttribute(
    "class",
    "closeButton rounded bg-cyan-600 px-3 py-1.5  text-white transition hover:bg-cyan-700",
  );
  closeButtonElement.innerHTML = "Close";

  closeButtonElement.addEventListener("click", () => {
    item.status = "Close";
    renderHtmlTodo(tempTodos);
  });
  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.setAttribute("type", "button");
  deleteButtonElement.setAttribute(
    "class",
    "deleteButton rounded bg-red-600 px-3 py-1.5  text-white transition hover:bg-red-700",
  );
  deleteButtonElement.innerHTML = "Delete";

  deleteButtonElement.addEventListener("click", () => {
    const index = tempTodos.findIndex(
      (elementInTempTodos) => elementInTempTodos.id === item.id,
    );

    if (index !== -1) {
      tempTodos.splice(index, 1);
      renderHtmlTodo(tempTodos);
    }
  });

  if (item.status === "Open") {
    actionButtonElement.appendChild(closeButtonElement);
  } else {
    actionButtonElement.appendChild(openButtonElement);
  }
  actionButtonElement.appendChild(deleteButtonElement);

  return actionButtonElement;
}

function filterStatus(tempTodos) {
  const allFilter = document.getElementById("allFilter");
  const openFilter = document.getElementById("openFilter");
  const closeFilter = document.getElementById("closeFilter");

  allFilter.addEventListener("click", () => {
    renderHtmlTodo(tempTodos);
  });

  openFilter.addEventListener("click", () => {
    const openFiltered = tempTodos.filter(
      (elementInTempTodos) => elementInTempTodos.status === "Open",
    );
    renderHtmlTodo(openFiltered);
  });

  closeFilter.addEventListener("click", () => {
    const closeFiltered = tempTodos.filter(
      (elementInTempTodos) => elementInTempTodos.status === "Close",
    );
    renderHtmlTodo(closeFiltered);
  });
}

function orderIssueBy(tempTodos) {
  const orderBy = document.getElementById("orderBy");
  orderBy.addEventListener("change", () => {
    const selectedOption = orderBy.value;
    if (selectedOption === "ASC") {
      tempTodos.sort((a, b) => {
        if (
          a.title.toLocaleLowerCase().trim() >
          b.title.toLocaleLowerCase().trim()
        ) {
          return 1;
        } else if (
          a.title.toLocaleLowerCase().trim() <
          b.title.toLocaleLowerCase().trim()
        ) {
          return -1;
        } else {
          return 0;
        }
      });
      renderHtmlTodo(tempTodos);
    } else if (selectedOption === "DESC") {
      tempTodos.sort((a, b) => {
        if (
          a.title.toLocaleLowerCase().trim() >
          b.title.toLocaleLowerCase().trim()
        ) {
          return -1;
        } else if (
          a.title.toLocaleLowerCase().trim() <
          b.title.toLocaleLowerCase().trim()
        ) {
          return 1;
        } else {
          return 0;
        }
      });
      renderHtmlTodo(tempTodos);
    } else {
      renderHtmlTodo(tempTodos);
    }
  });
}
function searchByDescription(tempTodos) {
  const searchByDescription = document.getElementById("searchByDescription");
  searchByDescription.addEventListener("input", () => {
    const keyword = searchByDescription.value.trim().toLocaleLowerCase();
    console.log(keyword);
    const searched = tempTodos.filter((item) => {
      return item.description.toLocaleLowerCase().includes(keyword);
    });

    if (searched.length > 0) {
      renderHtmlTodo(searched);
    } else {
      renderNotFound(searched)
    }
  });
}
function renderNotFound() {
  todos.innerHTML = "";

  const notFoundElement = document.createElement("div");
  notFoundElement.setAttribute(
    "class",
    "mt-4 flex min-h-52 flex-col items-center justify-center rounded border border-red-200 bg-red-50 px-4 py-8 text-center"
  );

  const xElement = document.createElement("div");
  xElement.setAttribute(
    "class",
    "not-found-x mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-3xl font-bold text-white"
  );
  xElement.textContent = "×";

  const titleElement = document.createElement("h3");
  titleElement.setAttribute("class", "text-lg font-bold text-red-700");
  titleElement.textContent = "Result not found";

 

  notFoundElement.appendChild(xElement);
  notFoundElement.appendChild(titleElement);

  todos.appendChild(notFoundElement);
}
filterStatus(tempTodos);
orderIssueBy(tempTodos);
renderHtmlTodo(tempTodos);
searchByDescription(tempTodos);
