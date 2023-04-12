console.log("script05.js")

const repositorio = new Repo()
const todoList = document.getElementById("detalhes-todo");
const userList = document.getElementById("detalhes-user");
const main = document.getElementById('main');

let obj = {
    id: 1,
    nome: "Jean Paul Lopes",
    cargo: "Professor" ,       
    unidade: "UniRitter",
    digital: true,
    sincrono: true
}

let pes = new Pessoa(obj)
pes.nome = "Viviane Godinho"
console.log(pes.descricao())

console.log(dados.length)

dados.forEach((el)=> repositorio.addTodo(new Todo(el) ))
dadosPessoas.forEach((el)=> repositorio.addPessoa(new Pessoa(el) ))
console.log(repositorio.todos)
console.log(repositorio.pessoas)

function cadastrar() {
    let texto = document.getElementById("descricao").value
    let obj = {
        userId: 0,
        id: 0,
        title: texto,
        completed: false
    }
    let todo = new Todo(obj)
    repositorio.addTodo( todo )

    let message = document.createElement("p");
    message.innerText = 'Incluído com sucesso!';
    message.className = 'success-message'
    message.id = 'message-success'
    document.getElementById("cadastrarGroup").appendChild(message);

    setTimeout(() => {
        document.getElementById('message-success').remove();
        displayTodos();
        window.scrollTo(0, document.body.scrollHeight);
    }, 3500);
}


function displayFilteredTodos(val) {
    todoList.innerHTML = "";
    userList.innerHTML = "";

    let todo = repositorio.getTodo(val);

    if(todo != undefined){
        const li = document.createElement("li");
        const ul = document.createElement("ul");
        const liUser = document.createElement("li");
  
        li.innerHTML = TodoView.toHTML( todo );
        li.completed = todo.completed;
        li.setAttribute("completed", `${todo.completed}`);
  
        liUser.innerHTML = PessoaView.toHTML(repositorio.getPessoa(todo.userId));
  
        ul.appendChild(liUser);
        li.appendChild(ul);
        li.className="fade-item"; 
        todoList.appendChild(li);

        var items = document.getElementsByClassName("fade-item");
        for (let i = 0; i < items.length; ++i) {
          fadeIn(items[i], i * 80)
        }

    }
}

function displayFilteredUsers(val){
    todoList.innerHTML = "";
    userList.innerHTML = "";

    let pessoa = repositorio.getPessoa(val);

    if(pessoa != undefined){
        const li = document.createElement("li");
        const ul = document.createElement("ul");
  
        li.innerHTML = PessoaView.toHTML( pessoa );
  
        repositorio.getTodosByUserId(pessoa.id).forEach((todo) => {
            const liTarefas = document.createElement("li");
            liTarefas.innerHTML = TodoView.toHTML(todo);
            liTarefas.setAttribute("completed", `${todo?.completed}`);

            ul.appendChild(liTarefas);
            li.appendChild(ul);
            userList.appendChild(li);
           
        });
       
        
    }
}

function displayTodosUsers(){
   todoList.innerHTML = "";
   userList.innerHTML = "";

   repositorio.pessoas.forEach((pessoa) => {

    const li = document.createElement("li");
    const ul = document.createElement("ul");

    li.innerHTML = PessoaView.toHTML( pessoa );

    repositorio.getTodosByUserId(pessoa.id).forEach((todo) => {
        const liTarefas = document.createElement("li");
        liTarefas.innerHTML = TodoView.toHTML(todo);
        liTarefas.setAttribute("completed", `${todo?.completed}`);

        ul.appendChild(liTarefas);
        li.appendChild(ul);
        li.className="fade-item"; 
        userList.appendChild(li);
       
    });
   });
        
   var items = document.getElementsByClassName("fade-item");
    for (let i = 0; i < items.length; ++i) {
        fadeIn(items[i], i * 80)
   }
        
    
}

function displayTodos() {
    todoList.innerHTML = "";
    userList.innerHTML = "";
  
    repositorio.todos.forEach((todo) => {
        if(todo != undefined){
            const li = document.createElement("li");
            const ul = document.createElement("ul");
            const liUser = document.createElement("li");
      
            li.innerHTML = TodoView.toHTML( todo );
            li.completed = todo.completed;
            li.setAttribute("completed", `${todo.completed}`);
      
            liUser.innerHTML = PessoaView.toHTML(repositorio.getPessoa(todo.userId));
      
            ul.appendChild(liUser);
            li.appendChild(ul);
            li.className="fade-item"; 
            todoList.appendChild(li);
        }
    });

    var items = document.getElementsByClassName("fade-item");
    for (let i = 0; i < items.length; ++i) {
      fadeIn(items[i], i * 80)
    }

  }

  function fadeIn (item, delay) {
    setTimeout(() => {
      item.classList.add('fadein')
    }, delay)
  }

