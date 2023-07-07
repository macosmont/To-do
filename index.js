    // Selecionar elementos da lista de tarefas
    const taskList = document.getElementById("task-list");
    const taskItems = taskList.getElementsByTagName("li");

    // Adicionar evento de clique aos botões de favoritar e apagar
    for (let i = 0; i < taskItems.length; i++) {
      const favoriteButton = taskItems[i].getElementsByClassName("favorite-button")[0];
      const deleteButton = taskItems[i].getElementsByClassName("delete-button")[0];

      favoriteButton.addEventListener("click", function() {
        toggleFavorite(this);
      });

      deleteButton.addEventListener("click", function() {
        deleteTask(this);
      });
    }

    // Adicionar evento de clique ao botão "Adicionar"
    const addButton = document.getElementById("add-button");
    addButton.addEventListener("click", function() {
      addTask();
    });

    // Função para marcar/desmarcar uma tarefa como concluída
    function toggleCompleted(checkbox) {
      const taskItem = checkbox.parentNode;
      taskItem.classList.toggle("completed");
    }

    // Função para favoritar/desfavoritar uma tarefa
    function toggleFavorite(button) {
      const taskItem = button.parentNode;
      taskItem.classList.toggle("favorite");
    }

    // Função para apagar uma tarefa
    function deleteTask(button) {
      const taskItem = button.parentNode;
      taskList.removeChild(taskItem);
    }

    // Função para adicionar uma nova tarefa
    function addTask() {
      const newTaskInput = document.getElementById("new-task-input");
      const newTaskText = newTaskInput.value.trim();

      if (newTaskText !== "") {
        const newTaskItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.addEventListener("change", function() {
          toggleCompleted(this);
        });

        const taskText = document.createTextNode(newTaskText);

        const favoriteButton = document.createElement("button");
        favoriteButton.classList.add("favorite-button");
        favoriteButton.textContent = "Favoritar";
        favoriteButton.addEventListener("click", function() {
          toggleFavorite(this);
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Apagar";
        deleteButton.addEventListener("click", function() {
          deleteTask(this);
        });

        newTaskItem.appendChild(checkbox);
        newTaskItem.appendChild(taskText);
        newTaskItem.appendChild(favoriteButton);
        newTaskItem.appendChild(deleteButton);
        taskList.appendChild(newTaskItem);

        newTaskInput.value = "";
      }
    }