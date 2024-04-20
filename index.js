const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

const resizeCanvas = () => {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
};

const hindi = 'अआइईउऊऋएऐओऔकखगघचछजझटठडढणतथदनपफबभमयरलवशषसहळक्षज्ञक़ख़ग़ज़ड़ढ़फ़य़ॠॡ।॥';
const vietnamese = 'áàạảãâấầậẩẫăắằặẳẵéèẹẻẽêếềệểễíìịỉĩóòọỏõôốồộổỗơớờợởỡúùụủũưứừựửữýỳỵỷỹđ';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZasdfghjklqwertyuiopzxcvbnm';
const nums = '0123456789';
const sindhi = 'اَآبپتٽٹثٺجڄڇچڏڌڍحڙخڂدڊڎذرڑژزڗسشصضطظعغڳڱڪڪلڃھمنڻڼوۄۏهھیءٻٺٻ';
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


// const alphabet = symbols+hindi + vietnamese + latin + nums;
const alphabet = sindhi+hindi+symbols;

const fontSize = 20;
let columns = 0;
const rainDrops = [];

const initializeRainDrops = () => {
  columns = Math.floor(canvas.width / fontSize);
  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }
};

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#f5ed07';
//   context.fillStyle = '#ebeb36';
  context.font = fontSize + 'px monospace';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

const initialize = () => {
  resizeCanvas();
  initializeRainDrops();
  setInterval(draw, 60);
};

window.addEventListener('resize', () => {
  resizeCanvas();
  initializeRainDrops();
});

initialize();
