class Triangle {

  constructor(base, height) {
    this.base = base; // Base
    this.height = height; // Altura
  }

  get area() {
    return this.calcAreaTriangle();
  }

  calcAreaTriangle() {
    return (this.base * this.height) / 2;
  }

}

const Singleton = (function () {
  let instance;

  function createInstance(x, y) {
    let classObj = new Triangle(x, y);
    return classObj;
  }

  return {
    getInstance: function (x, y) {
      if (!instance) {
        instance = createInstance(x, y);
      }

      return instance;
    }
  }
})();

function run() {
  let instance1 = Singleton.getInstance(10, 5);
  let instance2 = Singleton.getInstance(20, 10);
  let instance3 = Singleton.getInstance(20, 10);
  console.log(instance1.area);
  console.log(instance2.area);
  console.log(instance3.area);
}

run();
