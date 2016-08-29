'use strict';

const Hero = function (name, alias, power) {
  this.name = name;
  this.alias = alias;
  this._power = power;
};

// Create usePower and attach it to the constructor function's prototype.
Hero.prototype.usePower = function () {
  return this._power;
};

// Create a method to say the hero's name and alias. Attach it to the prototype.
Hero.prototype.unmask = function () {
  return this.alias + '\'s real identity is ' + this.name + '!';
};

module.exports = Hero;
