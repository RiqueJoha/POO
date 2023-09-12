class Mouse {
    #nombre = "def nombre";
    getNombre() {
        return this.#nombre
    }
    setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }
}

const mousePropietario = new Mouse();
mousePropietario.setNombre("Mouse Joha");
console.log(mousePropietario.getNombre());

class Computadora {
    #nombre = "def nombre";
    getNombreComputadora() {
        return this.#nombre
    }
    setNombreComputadora(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

}

const computadoraPropietario = new Computadora();
computadoraPropietario.setNombreComputadora("Computadora Joha");
console.log(computadoraPropietario.getNombreComputadora());

