export default class Car {
  constructor(brand, motor, color) {
    this._brande = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const NewObj = this.constructor[Symbol.species];
    return new NewObj(this._brand, this._motor, this._color);
  }
}
