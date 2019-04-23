import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/root';

document.addEventListener("DOMContentLoaded", () => {
    var root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
});