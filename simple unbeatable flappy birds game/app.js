let blockblue = document.querySelector('.blockblue')
let obastacle = document.querySelector('.obstacle')
const containerblock = document.querySelector('.container')
const createblock = document.createElement("div")
let xAxis = 0
let yAxis = 0
let time = 15
let obastaclexAxis = 0
let obastacleyAxis = 0

const objectClickRemove=document.querySelector('.start-btns')
const greenboxRemove=document.querySelector('.start-box')
function removedclick(){
    greenboxRemove.classList.add('hide')
    image.classList.remove('hide')
}
objectClickRemove.addEventListener('click',removedclick)

const startBtn = document.querySelector('.start-btns')
startBtn.addEventListener('click', shapeGen)
let obastacleRules = 0
let obastacleRulesUpper=0
startBtn.addEventListener('click', start,)
function start() {
    StartTimer()
    const tenMin = document.querySelector('.tenMin')
    const tenSec = document.querySelector('.tenSec')
    const timer  = document.querySelector('.timer ')
    tenMin.classList.remove('hide')
    tenSec.classList.remove('hide')
    timer.classList.remove('hide')
    const addShape = document.querySelector('.addshape')
    const randomnumberArray = [0, 1, 2]
    const randomnumber = Math.floor(Math.random() * randomnumberArray.length)
    shapeDiv = document.createElement('div')
    if (randomnumber === 0) {
        shapeDiv.classList.add('shape0')
    } else if (randomnumber === 1) {

        shapeDiv.classList.add('shape1')
    } else if (randomnumber === 2) {

        shapeDiv.classList.add('shape2')

    }
    addShape.appendChild(shapeDiv)
    setInterval(downobject, time)

}
function shapeGen() {
    const obstacle = document.querySelector('.container')
    const randomnumberArray = [0, 1, 2,3]
    const randomnumber =  Math.floor(Math.random() * randomnumberArray.length)  
    obastaclexAxis = 0
    if (randomnumber === 0) {

        obastacle = document.querySelector('.spawn')
        obastacle.classList.add('obstacle0')
        obstacle.appendChild(obastacle)
        obastacleRulesUpper = 0
        obastacleRules = 600
    } else if (randomnumber === 1) {
        obastacle = document.querySelector('.spawn')
        obastacle.classList.add('obstacle1')
        obstacle.appendChild(obastacle)
        obastacleRulesUpper = 0
        obastacleRules = 500
    } else if (randomnumber === 2) {
        obastacle = document.querySelector('.spawn')
        obastacle.classList.add('obstacle2')
        obstacle.appendChild(obastacle)
        obastacleRulesUpper = 0
        obastacleRules = 100
    } else if (randomnumber === 3) {
        obastacle = document.querySelector('.spawn')
        obastacle.classList.add('obstacle3')
        obstacle.appendChild(obastacle)
        obastacleRulesUpper = 100
        obastacleRules = 800
    }
    setInterval(left, time)

}

function downobject() {

    yAxis += 2
    blockblue.style.top = yAxis + 'px'


    if (yAxis > 900) {
        yAxis = 900
        gameOver()
        message()
    }

}
function left() {

    let Pointx = -525
    obastaclexAxis -= 1
    obastacle.style.left = obastaclexAxis+1 + 'px'

    if (obastaclexAxis < -700) {
        obastaclexAxis = 0
        obastacle.classList.remove('obstacle0')
        obastacle.classList.remove('obstacle1')
        obastacle.classList.remove('obstacle2')
        obastacle.classList.remove('obstacle3')
        shapeGen()

    }

    if (obastaclexAxis == Pointx && yAxis >= obastacleRules) {
        yAxis = 0
        gameOver()
        message()

    }
    if (obastaclexAxis == Pointx && yAxis <= obastacleRulesUpper) {
        yAxis = 0
        gameOver()
        message()

    }
}

const objectClick=document.querySelector('.start-btns')
const greenbox=document.querySelector('.start-box')
function gameOver(){
    greenbox.classList.remove('hide')
}



function control(e) {
    switch (e.key) {
        case 'ArrowLeft':

            xAxis -= 50
            if (xAxis < -300) {
                xAxis = -300
            }
            break
        case 'ArrowRight':

            xAxis += 50
            if (xAxis > 350) {
                xAxis = 350
            }

            break
        case 'ArrowUp':

            yAxis -= 50

            if (yAxis <15) {
                yAxis =15
            }

            blockblue.style.top = yAxis + 'px'
            break
        case 'ArrowDown':

            yAxis += 50
            if (yAxis > 600) {
                yAxis = 600
            }

            blockblue.style.top = yAxis + 'px'

            break
        default:

    }
}
document.addEventListener('keydown', control)



var image = document.querySelector(".image");
var currentPos = 0;
var images = ["./images/flap 1.png", "./images/flap 2.png", "./images/flap 3.png"]

var bgAnimated = document.querySelector(".bg");
var currentPosCloud = 0;
var bgAnimateds = ["./images/bg1.jpg","./images/bg2.jpg","./images/bg3.jpg","./images/bg4.jpg","./images/bg5.jpg","./images/bg6.jpg","./images/bg7.jpg","./images/bg8.jpg","./images/bg9.jpg","./images/bg10.jpg","./images/bg11.jpg","./images/bg12.jpg"]

var startAni = document.querySelector(".startAni");
var currentPosintro = 0;
var introAniArray = ["./images/flap 1.png", "./images/flap 2.png", "./images/flap 3.png"]


function volgendefoto() {
    if (++currentPos >= images.length)
        currentPos = 0;

    image.src = images[currentPos];

    if (++currentPosintro >= introAniArray.length)
    currentPosintro = 0;

    startAni.src = introAniArray[currentPosintro];
}

setInterval(volgendefoto, 50);

function clouds() {
    if (++currentPosCloud >= bgAnimateds.length)
    currentPosCloud = 0;

    bgAnimated.src = bgAnimateds[currentPosCloud];
}

setInterval(clouds, 1000);

function message(){
    const deadbird=document.querySelector('.startAni')
    const messageText=document.querySelector('.message')
    messageText.innerHTML="You Died!"
    const startBtn=document.querySelector('.start-btns')
    deadbird.classList.add('hide')
    const dead=document.querySelector('.deathimage')
    dead.classList.remove('hide')
    startBtn.classList.add('hide')


}

function StartTimer(){
let tenmin=0
let seconds=0
function stopwatch() {
    const timer=document.querySelector('.timer')
    timer.innerHTML=seconds
    seconds+=1
if(seconds>60){
    seconds=0
} 
if(seconds==60){
    const Min=document.querySelector('.tenMin')
    tenmin+=1
    Min.innerHTML=tenmin
} 
}
setInterval(stopwatch, 1000);
}