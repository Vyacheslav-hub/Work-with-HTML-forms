import './style.css';
import { createPopover, removePopover } from './popover.js';

const button = document.getElementById('popover-button');
let visible = false;

button.addEventListener('click', () => {
    visible = !visible;
    if (visible) {
        createPopover("And here's some amazing content. It's very engaging. Right?");
    } else {
        removePopover();
    }
});
