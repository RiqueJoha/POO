class Mouse{
    #nombre="def nombre";
    getNombre(){
        return this.#nombre
    }
    setNombre(nuevoNombre){
        this.#nombre= nuevoNombre;
    }
}

const mouseJoha=new Mouse();
mouseJoha.setNombre("Mouse Joha");
console.log(mouseJoha.getNombre());

class Computadora{
    #nombre="def nombre";
    getNombreComputadora(){
        return this.#nombre
    }
    setNombreComputadora(nuevoNombre){
        this.#nombre= nuevoNombre;
    }

}

const computadoraJoha=new Computadora();
computadoraJoha.setNombre("Computadora Joha");
console.log(computadoraJoha.getNombre());

