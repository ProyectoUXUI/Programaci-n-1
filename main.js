document.addEventListener('DOMContentLoaded', function(){
  const botonComprar = document.querySelectorAll(".boton-comprar")[0];
  botonComprar.addEventListener("click", function() {
    const producto = document.querySelectorAll(".producto")[0];
    const cantidad = document.querySelectorAll(".cantidad")[0].value;
    const notas = document.querySelectorAll(".notas")[0].value;
    //alert("Gracias por tu compra" + cantidad + "de" + producto.options[producto.selectedIndex].text, );
    alert(`Gracias por tu compra ${cantidad} de ${producto.options[producto.selectedIndex].text} con las siguientes notas ${notas}`);
  });

});
