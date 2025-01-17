import './title.css';
class Title{
    create(title){
        const titleElement = document.createElement('h1');
        titleElement.innerText = title;
        titleElement.classList.add('title');
        document.querySelector('body').appendChild(titleElement);
    }
}

export default Title;