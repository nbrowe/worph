import { isInDictionary } from "./words_dictionary.mjs";
import { getWorphSeed } from "./worph_seeds.mjs";
import prompt from "prompt-sync";
const pr = prompt();

export default function worph() {
  const numberOfPlayers = parseInt(pr("Players?", 0));
  let startPlayer = Math.floor(Math.random() * numberOfPlayers);
  let victor = playWorph(numberOfPlayers, startPlayer);
  console.log(`Player ${victor} wins!`);
}

function playWorph(playerCount, startPlayer) {
  let currentWord = getWorphSeed().toLowerCase();
  let currentPlayer = startPlayer;
  const moveHistory = [currentWord,];
  const playerCanMove = Array(playerCount).fill(true);
  // Game loop
  while (!(playerCanMove.filter(p => p).length == 1)) {
    let attempt = pr(`Player ${currentPlayer}, the word is [${currentWord}]. Worph the word. > `).toLowerCase();
    if (!moveHistory.includes(attempt) && isInDictionary(attempt) && isAWorph(currentWord, attempt)) {
      console.log(` Good word`);
      moveHistory.push(attempt);
      currentWord = attempt;
    } else {
      console.log(`The word ${attempt} cannot be played.`)
      console.log(`        [inHistory? ${moveHistory.includes(attempt)}, inDict? ${isInDictionary(attempt)}, validWorph? ${isAWorph(currentWord, attempt)}]`)
      playerCanMove[currentPlayer] = false;
    }
    currentPlayer = (currentPlayer + 1) % playerCount;
  }
  return currentPlayer;
}

function isAWorph(current, target) {
  /* Calculate the edit distance of two strings.
     String 1, String2, String 1 length, String 2 length */
  function editDistance(str1, str2, m, n) {
    if (m == 0) return n;
    if (n == 0) return m;
    if (str1[m - 1] == str2[n - 1]) return editDistance(str1, str2, m - 1, n - 1);
    return 1 + Math.min(
      editDistance(str1, str2, m, n - 1),
      editDistance(str1, str2, m - 1, n),
      editDistance(str1, str2, m - 1, n - 1)
    );
  }

  const dist = editDistance(current, target, current.length, target.length)
  const lengthDiff = target.length - current.length;
  const lastS = target.endsWith('s') && !current.endsWith('s');
  // TODO need to find a way to detect that, if there was a length change, that there was an added s
  console.log(`        [editdist] dist=${dist}, lengthDiff=${lengthDiff}, ${(lastS? '':'no ') + 'final S'}`)

  return dist == 1 && (lengthDiff == 0 || (lengthDiff == 1 && !lastS));
}
