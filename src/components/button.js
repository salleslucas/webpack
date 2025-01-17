import './button.scss';
class Button{
    create(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = 'Click me!';
        buttonElement.classList.add('button');
        document.querySelector('body').appendChild(buttonElement);
    }
}

export default Button;