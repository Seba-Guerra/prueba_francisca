

function scrollToElement(elementSelector, instance = 0) {
  // se crea un buscador de elementos (ID) con el fin de instanciar un selector
  const elements = document.querySelectorAll(elementSelector);
  //  confirma si el elemento (ID) existe y de igual forma confirma que el instanciamiento suceda
  if (elements.length > instance) {
    // desplazamiento hacia el selector
    elements[instance].scrollIntoView({ behavior: "smooth" }); // velocidad de desplazamiento
  }
}

const link1 = document.getElementById("link1"); // constantes vinculantes con getElementByid
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener("click", () => {
  // Eventos listener
  scrollToElement(".header"); // Mueve el puntero hacia el primer header
});

link2.addEventListener("click", () => {

  scrollToElement(".header", 1);
});

link3.addEventListener("click", () => {
  scrollToElement(".column");
}); // Mueve el puntero hacia el tercer puntero (Column)
