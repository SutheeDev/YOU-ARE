const wordsList = ['awesome', 'beautiful', 'enough', 'loved', 'brilliant', 'unique', 'bold', 'impressive', 'bold'];
const words = document.querySelector('.words');

const wordsEl = wordsList.map((word) => {
    return `
        <span class="words">${word}</span>
    `;
});
document.addEventListener('DOMContentLoaded', () => {
    
});