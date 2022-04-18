const res = document.querySelector('#result')
const heightInput = document.querySelector('#height')
const weightInput = document.querySelector('#weight')
const form = document.querySelector('#form-imc')


form.addEventListener('submit', e => {
    e.preventDefault();
    getFormData(heightInput.value, weightInput.value)
})

function getFormData(h, w) {
    if (h.length == 0 || w.length == 0) {
        alert('[ERRO] Por favor, preencha os campos corretamente.')
        hideRes()
    } else {
        let height = Number(h)
        let weight = Number(w)

        if(height < 1 || weight < 1) {
            alert('[ERRO] Por favor, preencha os campos com dados válidos')
            hideRes()
        } else {     
            calcImc(height, weight)
        }
    }
} 
function calcImc(height, weight) {
    hideRes()
    let imc = weight / ((height/100)**2)
    showRes(imc.toFixed(2))
    form.reset();
}

function showRes(imc) {
    res.style.display = "block"
    res.textContent = `Você tem um IMC de ${imc}`

    if(imc < 17) {
        res.textContent += `, ou seja, está gravemenete abaixo do peso indicado.`
    } else if (imc >= 17 && imc < 18.5) {
        res.textContent += `, ou seja, está abaixo do peso normal.`
    } else if (imc >= 18.5 && imc < 24.5) {
        res.textContent += `, ou seja, está na faixa de peso considerada saudável pela OMS.`
    } else if (imc >= 24.5 && imc < 30) {
        res.textContent += `, ou seja, está acima do peso indicado, com potencial risco à sua saúde.`
    } else if (imc >= 30 && imc < 35) {
        res.textContent += `, ou seja, está na faixa da obesidade de grau I`
    } else if (imc >= 35 && imc < 40) {
        res.textContent += `, ou seja, está na faixa da obesidade de grau II`
    } else if (imc > 40) {
        res.textContent += `, ou seja, está na faixa da obesidade de grau III`
    }
}

function hideRes() {
    res.style.display = "none"
}
