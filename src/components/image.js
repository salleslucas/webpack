import imagem from '../img/images.jpg';
class Image{
    insertLGBTImage(){
        const img = document.createElement('img');

        img.src = imagem;
        img.width = 300;

        document.querySelector('body').appendChild(img);
    }
}

export default Image;