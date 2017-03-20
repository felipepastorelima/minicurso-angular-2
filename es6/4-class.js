class User {

  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  set name(value) {
    this.firstName = value.split(' ')[0];
    this.lastName = value.split(' ')[1];
  }

  clearId() {
    this.id = null;
  }

}

class Admin extends User {
  constructor(id, firstName, lastName) {
    super(id, firstName, lastName);
  }

  get admin() {
    return true;
  }
}

const user = new User(1, 'Felipe', 'Lima');
console.log('user:', user);
console.log('user.id:', user.id);
console.log('user.firstName:', user.firstName);
console.log('user.lastName:', user.lastName);
console.log('user.name:', user.name);
console.log('user.admin?', user.admin);

console.log('Atualizando nome...');
user.name = 'Lorem ipsum';
console.log('user.name:', user.name);

console.log('Apagando id...');
user.clearId();
console.log('user.id:', user.id);

const admin = new Admin(1, 'Felipe', 'Lima');
console.log('admin:', admin);
console.log('admin.admin?', admin.admin);
