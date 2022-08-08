export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') throw TypeError('name must be a srting');
    if (typeof (length) !== 'number') throw TypeError('length must be a number');
    if (!Array.isArray(students)) throw TypeError('students must be an array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof (name) !== 'string') throw TypeError('name must be a srting');
    this._name = name;
  }

  set length(length) {
    if (typeof (length) !== 'number') throw TypeError('length must be a number');
    this.length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) throw TypeError('students must be an array');
    this._students = students;
  }
}
