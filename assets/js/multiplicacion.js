// Función que solicita ingreso de un nímero entre 1 y 20
const pedirNumero = () => {
    let numero = parseFloat(prompt("Ingresa un número entre 1 y 20"));
    if (!(numero >= 1 && numero <= 20)) {
        document.write('Número fuera de rango (refrescar la página para intentar denuevo).');
    } else {
        return numero;
    }
}

// Función que muestra multiplicaciones en consola

const multiplicar = (num) => {
    for (let i = 1; i < num+1 ; i++) {
        console.log(`${i} X ${num} = ${i*num}`);
    }
}

// Función que muestra factoriales en conosla

const listarFactoriales = (num) => {
    for (let i = 1; i <= num; i++) {
        let factorial = 1; // caso base
        for (let j= 1; j <= i; j++) {
        factorial = factorial * j;
        }
        console.log(`Factorial de ${i} es : ${factorial}`);
    }
}

// Obtenemos el numero a trabajar

numero = pedirNumero()

// Llamamos las funciones pedidas
multiplicar(numero);
listarFactoriales(numero);

