var preloader = document.getElementById("preloader")
var progressBtn = document.getElementById("progress-btn");

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        progressBtn.style.display = "block"
    }
    else{
        progressBtn.style.display = "none"
    }
})

window.addEventListener('load', () => {
    preloader.style.display= "none"
})

animationText()
function animationText() {
    const aniText = document.querySelector("#ani-txt")
    const words = [
        "App developer",
        "web developer",
        "ui&ux designer",
        "content creator"
    ]

    let indexText = 0

    setInterval(() => {
        if (indexText == words.length) indexText = 0

        addRandomTextContent(words[indexText])
        indexText++
    }, 4000)

    function getRandomChar() {
        const glitchChars = "X六0@ƒ1{!<>-_/[]{}░▒▓—åß∂ƒ©˙∆˚æ≈ç√∫=+*^?#λ$"
        return glitchChars[Math.floor(Math.random() * glitchChars.length)]
    }

    function getRandomWord(value) {
        let finalVal = ""
        for (let i = 0; i < value.length; i++) {
            finalVal += value[i] == " " ? " " : getRandomChar()
        }
        return finalVal
    }

    function addRandomTextContent(word) {
        aniText.innerHTML = getRandomWord(word)

        const totalRounds = 2
        const interval = 50
        let count = 0
        let globalCount = 0
        let canChange = false

        let timer_ = setInterval(() => {
            let finalValue = ""

            for (let i = 0; i < word.length; i++) {
                if (i <= count && canChange) {
                    finalValue += word[i]
                } else {
                    finalValue += getRandomChar()
                }
            }

            aniText.innerHTML = finalValue

            if (canChange) count++
            if (globalCount == totalRounds) canChange = true
            if (count == word.length) {
                clearInterval(timer_)
                count = 0
                globalCount = 0
                canChange = false
            }

            globalCount++
        }, interval)
    }
}

const worksList = document.querySelector(".works");
const programSkill = document.querySelector(".programSkill");
const frontSkill = document.querySelector(".frontSkill");
const backSkill = document.querySelector(".backSkill");
const dbSkill = document.querySelector(".dbSkill");

const workContainer = [
    {
        "imgLink" : "./assets/work/1.png",
        "WebLink" : "https://silambu-coffee-shop.netlify.app/"
    },
    {
        "imgLink" : "./assets/work/2.png",
        "WebLink" " "https://silambu-portpolio.netlify.app/"
    },
    {
        "imgLink" : "./assets/work/3.png",
        "WebLink" " "https://hacker-spicy-ecommerce.netlify.app/"
    },
    {
        "imgLink" : "./assets/work/4.png",
        "WebLink" " "https://youtube-silambu.netlify.app/"
    }
]

for (let i = 0; i < workContainer.length; i++){
    worksList.innerHTML += `
    <li class="content">
    <img loading="lazy" src="${workContainer[i].imgLink}" alt="" srcset="">
        <div class="hover-content">
            <a href="${{workContainer[i].webLink}">${workContainer[i].webLink</a>
        </div>
    </li>
    `
}

const programSkillsContainer = [
    {
        "img": "./assets/images/javascript-original.svg",
        "language" : "Javascript"
    },
    {
        "img": "./assets/images/python-original.svg",
        "language" : "python"
    },
    {
        "img": "./assets/images/c-original.svg",
        "language" : "c"
    },
    {
        "img": "./assets/images/cplusplus-original.svg",
        "language" : "c++"
    }
]

for (let j = 0; j < programSkillsContainer.length; j++){
    programSkill.innerHTML += `
    <li>
        <img src="${programSkillsContainer[j].img}" alt="" srcset="">
        <p>${programSkillsContainer[j].language}</p>
    </li>
    `
}

const frontSkillsContainer = [
    {
        "img": "./assets/images/html5-original.svg",
        "language" : "html"
    },
    {
        "img": "./assets/images/css3-original.svg",
        "language" : "css"
    },
    {
        "img": "./assets/images/javascript-original.svg",
        "language" : "javascript"
    },
    {
        "img": "./assets/images/bootstrap-original.svg",
        "language" : "bootstrap"
    }
]

for (let j = 0; j < frontSkillsContainer.length; j++){
    frontSkill.innerHTML += `
    <li>
        <img src="${frontSkillsContainer[j].img}" alt="" srcset="">
        <p>${frontSkillsContainer[j].language}</p>
    </li>
    `
}

const BackSkillsContainer = [
    {
        "img": "./assets/images/javascript-original.svg",
        "language" : "Javascript"
    },
    {
        "img": "./assets/images/nodejs-original.svg",
        "language" : "nodeJS"
    },
    {
        "img": "./assets/images/express-original.svg",
        "language" : "Express"
    }
]


for (let j = 0; j < BackSkillsContainer.length; j++){
    backSkill.innerHTML += `
    <li>
        <img src="${BackSkillsContainer[j].img}" alt="" srcset="">
        <p>${BackSkillsContainer[j].language}</p>
    </li>
    `
}

const dbSkillsContainer = [
    {
        "img": "./assets/images/mongodb-original.svg",
        "language" : "mongodb"
    },
    {
        "img": "./assets/images/mysql-original.svg",
        "language" : "mySql"
    }
]

for (let j = 0; j < dbSkillsContainer.length; j++){
    dbSkill.innerHTML += `
    <li>
        <img src="${dbSkillsContainer[j].img}" alt="" srcset="">
        <p>${dbSkillsContainer[j].language}</p>
    </li>
    `
}
