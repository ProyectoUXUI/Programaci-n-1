document.addEventListener('DOMContentLoaded', function(){
  // const botonComprar = document.querySelectorAll(".boton-comprar")[0];
  // botonComprar.addEventListener("click", function() {
  //   const producto = document.querySelectorAll(".producto")[0];
  //   const cantidad = document.querySelectorAll(".cantidad")[0].value;
  //   const notas = document.querySelectorAll(".notas")[0].value;
  //   const mensaje = `Gracias por tu compra ${cantidad} de ${producto.options[producto.selectedIndex].text} con las siguientes notas ${notas}`);
  //   const mensajeTexto = document.querySelectorAll(".mensaje-texto")[0];
  //
  //   mensajeTexto.innerHTML = mensaje;
  //
  // });

  const form = document.querySelectorAll(".form")[0];
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const producto = document.querySelectorAll(".producto")[0];
    const cantidad = document.querySelectorAll(".cantidad")[0].value;
    const notas = document.querySelectorAll(".notas")[0].value;
    const mensaje = `Gracias por tu compra ${cantidad} de ${producto.options[producto.selectedIndex].text} con las siguientes notas ${notas}`;
    const mensajeTexto = document.querySelectorAll(".mensaje-texto")[0];

    mensajeTexto.innerHTML = mensaje;

  });

});
