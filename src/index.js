import { Button } from './js/button';

import './css/style.scss';

if(typeof(module.hot) !== 'undefined') {
    module.hot.accept(); // eslint-disable-line no-undef
}

const container = document.getElementById('button-container');
container.innerHTML = '';

const button = new Button('clickMe');
container.appendChild(button.node);