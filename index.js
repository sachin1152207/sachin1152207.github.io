console.log("Script activated")

show_todo()
let btn = document.getElementById("btn").addEventListener("click", function () {
    let title = document.getElementById("todoTitle")
    let desc = document.getElementById("todoDesc")
    let todo = localStorage.getItem("todo")
    if (todo == null) {
        todoObj = []
    }
    else {
        todoObj = JSON.parse(todo)
    }
    let myobj = {
        title: title.value,
        desc: desc.value
    }
    todoObj.push(myobj)
    localStorage.setItem("todo", JSON.stringify(todoObj))
    title.value = ""
    desc.value = ""
    show_todo()
})

function show_todo() {
    let todo = localStorage.getItem("todo")
    if (todo == null) {
        todoObj = []
    }
    else {
        todoObj = JSON.parse(todo)
    }
    let html = ""
    todoObj.forEach(function (element, index) {
        html += `<tr>
        <td>${index + 1}</td>
            <td>${element.title}</td>
            <td>${element.desc}</td>
            <td><button class="btn btn-primary" id="${index}" onclick="deleteTodo(this.id)">Delete</button></td>
            </tr>`
    });
    let todoShow = document.querySelector("tbody")
    if (todoObj.length != 0) {
        document.querySelector("#alert").innerHTML = ""
        document.querySelector("thead").innerHTML = `<tr>
        <th scope="col">SNo</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Action</th>
    </tr>`
        todoShow.innerHTML = html;
    }
    else {
        document.querySelector("#alert").innerHTML = `<div class="alert alert-warning" role="alert">
        Add Your Todo!
        </div>`
        document.querySelector("thead").innerHTML = ""
    }
}

function deleteTodo(index) {
    let todo = localStorage.getItem("todo")
    if (todo == null) {
        todoObj = []
    }
    else {
        todoObj = JSON.parse(todo)
    }
    todoObj.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(todoObj));
    document.querySelector("thead").innerHTML = ""
    show_todo()
}
