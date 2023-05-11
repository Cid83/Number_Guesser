/*
Oyunun Fonksiyonları:
- Oyuncu min ve max değerleri arasında olan sayıyı tahmin etmeli
- Oyuncunun belirli bir tahmin hakkı olucak
- Oyuncunun kazanma durumunu bildir
- Tekrar denemesi için bir seçenek ver
*/

// Arayüz Elemanları
const game = document.querySelector('#game'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num');

//   Oyunda kullanılcak değerler
let min = 1,
  max = 10,
  winningNumber = getRandomNum(min, max),
  guessesLeft = 3;

//   min ve max değerlerini arayüze gönder
minNum.textContent = min;
maxNum.textContent = max;

// Yapılan tahmini izle
guessBtn.addEventListener('click', () => {
  // input içerisindeki veriyi al v esayıya çevir
  let guess = parseInt(guessInput.value);

  //   oyunu kazandı mı kontrol et
  if (guess === winningNumber) {
    // Oyunu kazandı
    gameOver(true, `BINGO!  Right Guess: ${winningNumber}`);

    guessInput.style.borderColor = 'purple'

  } else {
    // Yanlış sayı tahmini
    guessesLeft--;

    if (guessesLeft === 0) {
      // Oyunu kaybetti
      gameOver(false, `LOST! Right Guess:  ${winningNumber}`);
    } else {
      // kalan hak 0 dan fazla ise
      //   çerçeveyi kırmızı yap
      guessInput.style.borderColor = 'red';

      // inputu temizle
      guessInput.value = '';

      // kullanıcay kaç hakkının kaldığını söyle
      setMessage(`${guess} is not correct, ${guessesLeft} left you have`, 'red');
    }
  }
});

// Oyunu bitirme
function gameOver(won, msg) {
  let color = won ? 'purple' : 'red';
  console.log(color);

  // inputu iptal et
  guessInput.disabled = true;

  // inputun çerçevesini değiştir
  guessInput.borderColor = color;

  // kullanıcıyı bilgilendir
  setMessage(msg);
}

// Kullanıcıya mesaj verme
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

//   rastgele sayı bulma methodu
function getRandomNum(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);
  return random;
}