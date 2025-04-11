// Ejercicio POO 1:

// Crear la clase Person, con propiedades name, age y genre,
//  y el método obtDetails(),
// que muestra por consola las propiedades de la persona.
class Person {
  constructor(name, age, genre) {
    this.name = name;
    this.age = age;
    this.genre = genre;
  }
  obtDetails = () => {
    console.log(
      `Nombre: ${this.name}, Edad: ${this.age}, Género (no asumimos): ${this.genre}`
    );
  };
}
const aPerson = new Person("Michi", 999, "Servidor de Satan");
aPerson.obtDetails();
// Crear la clase Student, que hereda de Person,
// e incluye las propiedades course y group
// y el método register(),
//  que muestre por consola el resultado.
class Student extends Person {
  constructor(name, age, genre, course, group) {
    super(name, age, genre);
    this.course = course;
    this.group = group;
  }
  register = () => {
    console.log(
      `${this.name} se ha registrado en '${this.course}' del grupo ${this.group} correctamente`
    );
  };
}
const randomStudent = new Student(
  "Peppa",
  "16",
  "Femenino",
  "Intro to Slaughterhouse",
  "Z"
);
randomStudent.register();
// Crear la clase Teacher, que hereda de Person, e incluye las propiedades
//  asignatura y level y el método assign(), que muestre por consola el resultado.
class Teacher extends Person {
  constructor(name, age, genre, asignatura, level) {
    super(name, age, genre);
    this.asignatura = asignatura;
    this.level = level;
  }
  assign = () => {
    console.log(
      `${this.name} ha sido asignado a ${this.asignatura} en el nivel ${this.level}`
    );
  };
}
const randomTeacher = new Teacher(
  "Paco el Carnicero",
  "63",
  "Masculino",
  "Slaughterhouse",
  "Avanzado"
);
randomTeacher.assign();
