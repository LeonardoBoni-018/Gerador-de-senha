// Eleemtnos
const generatepassWordButton = document.querySelector("#generate-password")
const generatepassWordElement= document.querySelector("#generated-password")


// Novas funcionalidades

const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")


// Funçoes
// Letras,numeris e simbolos
const getLetterLowerCase = () => {
    // console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97)) //Tabela asc
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}




const getLetterUpperCase = () => {
    // console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 65)) //Tabela asc
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}



const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

const getSybol = () => {
    const symbols = "(){}=<>/,.!@#&$+-";

    return symbols[Math.floor(Math.random() * symbols.length)]
}

// console.log(getSybol())
// console.log(getNumber())



const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber,getSybol) => {
    let password = ""

    const passwordLength = +lengthInput.value;

    const generators = [
    ]

    if(lettersInput.checked){
        generators.push(getLetterLowerCase, getLetterUpperCase)   
    }

    if(numbersInput.checked){
        generators.push(getNumber)   
    }

    if(symbolsInput.checked){
        generators.push(getSybol)   
    }

    if(generators.length === 0){
        return;   
    }

    console.log(generators.length)

    for(i = 0; i < passwordLength; i = i + generators.length){
        generators.forEach( () => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)] ()

            password += randomValue
        })
    }
    password = password.slice(0, passwordLength)
    generatepassWordElement.style.display = "block"
    generatepassWordElement.querySelector("h4").innerText = password
}


// Eventos
generatepassWordButton.addEventListener("click", () =>{
    generatePassword( getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSybol)
})

openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide")
})

copyPasswordButton.addEventListener("click", (e)=> {
    e.preventDefault()

    const password = generatepassWordElement.querySelector("h4").innerText
    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText = "Senha copiada com sucesso"

        setTimeout( () => {
            copyPasswordButton.innerText = "Copiar"
        }, 1000)
    })
})