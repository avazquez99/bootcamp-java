function calcularPuntoEquilibrio() {

    var costoFijoTotal = parseFloat(document.getElementById('costo-fijo').value);
    var precioUnitario = parseFloat(document.getElementById('precio').value);
    var costoUnitario = parseFloat(document.getElementById('costo-unitario').value);
    
    var puntoEquilibrio = costoFijoTotal / (precioUnitario - costoUnitario);
    
    document.getElementById('resultado').textContent = "El punto de equilibrio es: " + puntoEquilibrio.toFixed(2);
    
}