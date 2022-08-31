function textMove (){
    var textMoveTl = gsap.timeline();
    textMoveTl.fromTo('.ab1', {
        y: 100
    }, {
        y: 0,
        duration: 0.3
    }); 
    textMoveTl.fromTo('.bl1', {
        y: -100
    }, {
        y: 0,
        duration: 0.3
    }, '<');
    textMoveTl.fromTo('.ab2', {
        y: 200
    }, {
        y: 0,
        duration: 0.3
    }, '<'); 
    textMoveTl.fromTo('.bl2', {
        y: -200
    }, {
        y: 0,
        duration: 0.3
    }, '<');
    textMoveTl.fromTo('.ab3', {
        y: 300
    }, {
        y: 0,
        duration: 0.3
    }, '<');
    textMoveTl.fromTo('.bl3', {
        y: -300
    }, {
        y: 0,
        duration: 0.3
    }, '<');
    textMoveTl.fromTo('.ab4', {
        y: 400
    }, {
        y: 0,
        duration: 0.3
    }, '<');
    textMoveTl.fromTo('.bl4', {
        y: -400
    }, {
        y: 0,
        duration: 0.3
    }, '<');
    textMoveTl.fromTo('.ab5', {
        y: 500
    }, {
        y: 0,
        duration: 0.3
    }, '<');
    textMoveTl.fromTo('.bl5', {
        y: -500
    }, {
        y: 0,
        duration: 0.3
    }, '<');
};

const wordsArray = ['beautiful', 'loved', 'inspired', 'amazing', 'brilliant', 'reliable', 'creative', 'enough', 'charming', 'bright'];

const wordsList = document.querySelector('.wordsList');
document.addEventListener('DOMContentLoaded', () => {
    const allWordsEl = wordsArray.map((word) => {
        return  `
            <h1 class="stroke ab5">${word}</h1>
            <h1 class="stroke ab4">${word}</h1>
            <h1 class="stroke ab3">${word}</h1>
            <h1 class="stroke ab2">${word}</h1>
            <h1 class="stroke ab1">${word}</h1>
            <h1 class="main">${word}</h1>
            <h1 class="stroke bl1">${word}</h1>
            <h1 class="stroke bl2">${word}</h1>
            <h1 class="stroke bl3">${word}</h1>
            <h1 class="stroke bl4">${word}</h1>
            <h1 class="stroke bl5">${word}</h1>
        `;
    });

    function insertText1(){
        wordsList.innerHTML = allWordsEl[0];
    }
    function insertText2(){
        wordsList.innerHTML = allWordsEl[1];
    }
    function insertText3(){
        wordsList.innerHTML = allWordsEl[2];
    }
    function insertText4(){
        wordsList.innerHTML = allWordsEl[3];
    }
    function insertText5(){
        wordsList.innerHTML = allWordsEl[4];
    }
    function insertText6(){
        wordsList.innerHTML = allWordsEl[5];
    }
    function insertText7(){
        wordsList.innerHTML = allWordsEl[6];
    }
    function insertText8(){
        wordsList.innerHTML = allWordsEl[7];
    }
    function insertText9(){
        wordsList.innerHTML = allWordsEl[8];
    }
    function insertText10(){
        wordsList.innerHTML = allWordsEl[9];
    }
    
    function changeColor(index){
    const colorPairs = [['#07004D', '#EB8A90'], ['#C6E0FF', '#FF6700'], ['#2978A0', '#E9EB9E'], ['#FFA5AB', '#4F0147'], ['#FF0035', '#f1f1f1']];
    let firstColor = colorPairs[index][0];
    let secondColor = colorPairs[index][1];

        var changeColorTll = gsap.timeline();
            changeColorTll.to('body', {
                backgroundColor: firstColor,
                duration: 0
            }, '<');
            changeColorTll.to('.main', {
                color: secondColor,
                duration: 0
            }, '<');
            changeColorTll.to('.you-are', {
                color: secondColor,
                duration: 0
            }, '<');
            changeColorTll.to('.stroke', {
                textStrokeColor: secondColor,
                duration: 0
            }, '<');
        };

    var masterTl = gsap.timeline({repeat: -1});
    masterTl.add(textMove, '+=0.1')
            .add(() => changeColor(0))
            .add(insertText1, '+=1')
            .add(textMove, '+=0.1')
            .add(() => changeColor(1))
            .add(insertText2, '+=1')
            .add(textMove, '+=0.1')
            .add(() => changeColor(2))
            .add(insertText3, '+=1')
            .add(textMove, '+=0.1')
            .add(() => changeColor(3))
            .add(insertText4, '+=1')
            .add(textMove, '+=0.1')
            .add(() => changeColor(4))
            .add(insertText5, '+=1')
            .add(textMove, '+=0.1')
            .add(() => changeColor(0))
            .add(insertText6, '+=1')
            .add(textMove, '+=0.1')
            .add(() => changeColor(1))
            .add(insertText7, '+=1')
            .add(textMove, '+=0.1')
            .add(() => changeColor(2))
            .add(insertText8, '+=1')
            .add(textMove, '+=0.1')
            .add(() => changeColor(3))
            .add(insertText9, '+=1')
            .add(textMove, '+=0.1')
            .add(() => changeColor(4))
            .add(insertText10, '+=1')
});
