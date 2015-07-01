'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var CustomNode = require('./CustomNode');
var Position = require('famous/components/Position');
var Animation = require('./components/Animation');
// Boilerplate code to make your life easier
FamousEngine.init();

var scene = FamousEngine.createScene('body');
var rootNode = scene.addChild();
var farBuildings = rootNode.addChild(new CustomNode('url(images/parallax_far_buildings.png)', '#B3E5FC', 0, 0, 1800, 500));


var plane = rootNode.addChild(new CustomNode('url(images/plane_100x100.png)', '#B3E5FC', 200, 200, 100, 100));
var animation = new Animation(plane);
animation.start();
