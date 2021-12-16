var btnRegistrar = document.getElementById("btnRegistrar");
btnRegistrar.addEventListener("click", () => {
    axios.post("http://localhost:4567/usuario", {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    })
        .then(function (res) {
            alert("Usuario:" + res.data.status + " id:" + res.data.id);
        })
        .catch(function (error) {
            console.log(error)
        })
});

var btnLista = document.getElementById("btnLista");
btnLista.addEventListener("click", function () {
    axios.get("http://localhost:4567/usuarios")
    .then(function (res) {
        let json = res.data;
        let listaTareas = document.getElementById("usuarios");
        for (var clave in json) {
            // Controlando que json realmente tenga esa propiedad
            if (json.hasOwnProperty(clave)) {
                // Mostrando en pantalla la clave junto a su valor
                // alert("La clave es " + clave + " y el valor es " + json[clave]);
                let tarea = document.createElement("li");
                tarea.textContent = clave + " " + json[clave].email;
                listaTareas.appendChild(tarea);
            }
        }
    })
    .catch()
})