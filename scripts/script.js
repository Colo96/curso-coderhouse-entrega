//Solo calculo la conversion de moneda argentina a otra moneda.
//El selectorInicial debe se ARS y el selectorFinal debe ser (EUR,USD,GBP).

debugger;

const dropList = document.querySelectorAll(".monedaInicial option");
const secondDropList = document.querySelectorAll(".monedaFinal option");
const mostrar = document.querySelector(".exchange-rate");
const input = document.querySelector("input[type='text']");
const selectorInicial = document.querySelector(".monedaInicial");
const selectorFinal = document.querySelector(".monedaFinal");

class Conversor {

    seleccionarMonedaInicial() {
        for (let index = 0; index < dropList.length; index++) {
            console.log(dropList[index].value, " o ", dropList[index].innerHTML);
        }
        let seleccionInicial = prompt("Seleccione una de las siguientes monedas que aparecen por nombre o siglas en la consola: ");
        return seleccionInicial;
    }

    seleccionarMonedaFinal() {
        let seleccionFinal = prompt("Seleccione otra de las siguientes monedas que aparecen por nombre o siglas en la consola: ");
        return seleccionFinal;
    }

    ingresarMonto() {
        let monto = parseFloat(prompt("Ingrese el monto que desea convertir en pesos Argentinos: "));
        if (monto < 0) {
            monto = 0;
        }else if (monto == "") {
            monto = 0;
        }
        input.value = monto;
        return monto;
    }

    calcularMonto(seleccionInicial, seleccionFinal, monto) {
        switch (seleccionFinal) {
            case "EUR":
                mostrar.innerHTML = (monto * 0.00724);
                selectorInicial.value = seleccionInicial;
                selectorFinal.value = seleccionFinal;
                break;
            case "USD":
                mostrar.innerHTML = (monto * 0.00743);
                selectorInicial.value = seleccionInicial;
                selectorFinal.value = seleccionFinal;
                break;
            case "GBP":
                mostrar.innerHTML = (monto * 0.00612);
                selectorInicial.value = seleccionInicial;
                selectorFinal.value = seleccionFinal;
                break;
            default:
                console.warn("Ingreso una opcion que todavia no esta incluida en la aplicacion o ingreso un valor incorrecto");
                break;
        }
    }
}

const conversor = new Conversor();
conversor.calcularMonto(conversor.seleccionarMonedaInicial(), conversor.seleccionarMonedaFinal(), conversor.ingresarMonto());