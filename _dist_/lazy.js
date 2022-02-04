
const isIntersecting = (entry) => {
    return entry.isIntersecting //true (dentro de la pantalla)
};

const loadImage = (entry) => {
    const container = entry.target; 
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //carga la imagen
    imagen.src = url;


    //desregistra la imagen
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(loadImage);
});
export const registerImage = (imagen) => {

    observer.observe(imagen)
};