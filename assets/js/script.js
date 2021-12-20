const res = document.querySelector('#res')    
const inputAlt = document.querySelector('#txtalt')
const inputPeso = document.querySelector('#txtpeso')

function getFormData() {

    if (inputAlt.value.length == 0 || inputPeso.value.length == 0) {
        alert('[ERRO] Por favor, preencha os campos corretamente.')
        hideRes()
    } else if(inputAlt.value < 1 || inputPeso.value < 1) {
        alert('[ERRO] Por favor, preencha os campos com dados válidos')
        hideRes()
    } else {        
        let valueAlt = Number(inputAlt.value)
        let valuePeso = Number(inputPeso.value)
        
        calcImc(valueAlt, valuePeso)
    }
}

function calcImc(altura, peso) {
    hideRes()
    let imc = peso / ((altura/100)**2)
    showRes(imc.toFixed(2))
    resetForm()
}

function showRes(imc) {
    res.style.display = "block"
    res.innerHTML = `Você tem um IMC de ${imc}`

    if(imc < 17) {
        res.innerHTML += `, ou seja, está gravemenete abaixo do peso indicado.`
    } else if (imc >= 17 && imc < 18.5) {
        res.innerHTML += `, ou seja, está abaixo do peso normal.`
    } else if (imc >= 18.5 && imc < 24.5) {
        res.innerHTML += `, ou seja, está na faixa de peso considerada saudável pela OMS.`
    } else if (imc >= 24.5 && imc < 30) {
        res.innerHTML += `, ou seja, está acima do peso indicado, com potencial risco à sua saúde.`
    } else if (imc >= 30 && imc < 35) {
        res.innerHTML += `, ou seja, está na faixa da obesidade de grau I`
    } else if (imc >= 35 && imc < 40) {
        res.innerHTML += `, ou seja, está na faixa da obesidade de grau II`
    } else if (imc > 40) {
        res.innerHTML += `, ou seja, está na faixa da obesidade de grau III`
    }
}

function hideRes() {
    res.style.display = "none"
}

function resetForm() {
    inputAlt.value = null
    inputPeso.value = null
}