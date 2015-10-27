import _ from 'lodash';
import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './list/list.jsx';


console.log('loadsh is imported', _.isEqual(1, 1));
var headerTemplate = require("./header.jade")();
var footerTemplate = require("./footer.jade")();
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('header').innerHTML = headerTemplate;
  document.getElementById('footer').innerHTML = footerTemplate;

  ReactDOM.render(<List />, document.getElementById('test_list'));

});

