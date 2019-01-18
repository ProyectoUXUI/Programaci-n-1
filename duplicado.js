document.addEventListener('DOMContentLoaded', function(){
  // const botonComprar = document.querySelectorAll(".boton-comprar")[0];
  // botonComprar.addEventListener("click", function() {
  //   alert("Gracias por tu compra");
  // })
  const form = document.querySelectorAll(".form")[0];
  form.addEventListener("submit", function() {
    const cantidad = document.querySelectorAll(".cantidad")[0].value;
    const producto = document.querySelectorAll(".producto")[0].value;
    alert(`Gracias por comprar ${cantidad} ${producto}`);
  })
});
