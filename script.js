const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let transactionFormData = new FormData(form);
    let transactionTableRef = document.getElementById("table");
    let newTransactionRowRef = transactionTableRef.insertRow(-1);

    let newTypeCellRef = newTransactionRowRef.insertCell(0)
    newTypeCellRef.textContent = transactionFormData.get("inputGustos")

    newTypeCellRef = newTransactionRowRef.insertCell(1);
    newTypeCellRef.textContent = "0"

    newTypeCellRef = newTransactionRowRef.insertCell(2);
    newTypeCellRef.textContent = "Editar"
})

var editando=false;

function cambiarEditable(nodo){



    if (editando == false) {

        var Td = nodo.parentNode; 
        var Tr = Td.parentNode; 
        var contenedorForm = document.getElementById('contenedor');
        var nodosTr = Tr.getElementsByTagName('td');
        var gusto = nodosTr[0].textContent; 
        var porcentaje = nodosTr[1].textContent;
        var edit = nodosTr[2].textContent; 
        
        var nuevoCodigo = '<td><input type="text" name="gusto" id="gusto" value="'+gusto+'" size="10"></td>'+
        
        '<td><input type="text" name="porcentaje" id="porcentaje" value="'+porcentaje+'" size="5"</td> <td>En edición</td>';

        Td.innerHTML = nuevoCodigo;
        contenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+'<form name = "formulario" action="resultado.html" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

        editando = "true";
        }
    }

    function capturarEnvio(){

        var nodoContenedorForm = document.getElementById('contenedor'); 
        
        nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
        
        '<form name = "formulario" action="resultado.html" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
        
        '<input type="hidden" name="gusto" value="'+document.querySelector('#gusto').value+'">'+
        
        '<input type="hidden" name="porcentaje" value="'+document.querySelector('#porcentaje').value+'">'+
        
        
        
        '<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
        
        document.formulario.submit();
        
        }