
const isIntersecting = (entry) => {
    return entry.isIntersecting //true (dentro de la pantalla)
};

const accion = (entry) => {
    const nodo = entry.target
    console.log("Hey");

    //desregistra la imagen
    observer.unobserve(nodo)
};

const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(accion);
});
export const registerImage = (imagen) => {

    observer.observe(imagen)
};