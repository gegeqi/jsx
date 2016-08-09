let child_1 = React.createElement('li',null,'cola');
let child_2 = React.createElement('li',null,'tea');
let root = React.createElement('ul',null,child_1,child_2);

var rootElement = document.getElementById('root');
ReactDOM.render(root, rootElement);

let myList = (
    <ul>
        <li>cola</li>
        <li>tea</li>
    </ul>
);