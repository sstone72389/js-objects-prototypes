'use strict'

const Hero = function (name, alias, power) {
  this.name = name
  this.alias = alias
  this._power = power
}

Hero.prototype.usePower = function () {
  return this._power
}

Hero.prototype.unmask = function () {
  return this.alias + ' is really ' + this.name + '!'
}

const bob = new Hero('bob', 'bobs burgers', 'flipping burgers (except that one \
archer episode)')

const bubbles = new Hero('bubbles', 'the green bastard', 'looking stupid')

const julian = new Hero('julian', 'n/a', 'drinking rum')

const dareDevil = new Hero('Matthew Murdock', 'Dare Devil', 'being blind and \
kicking ass')

module.exports = {Hero, bob, bubbles, julian, dareDevil}
