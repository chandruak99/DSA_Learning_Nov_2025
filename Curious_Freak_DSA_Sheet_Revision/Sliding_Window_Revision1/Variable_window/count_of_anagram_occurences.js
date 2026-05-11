const s = "forxxorfxxdofr";
const p = "for";

function countAnagram(s, p) {
  let n = s.length;
  let k = p.length;
  let pFreq = new Array(26).fill(0);
  let windowFreq = new Array(26).fill(0);
  let count = 0;

  const getIdx = (char) => char.charCodeAt(0) - "a".charCodeAt(0);

  const checkEqual = () => {
    let isEqual = true;
    for (let i = 0; i < 26; i++) {
      if (pFreq[i] !== windowFreq[i]) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < k; i++) {
    pFreq[getIdx(p[i])]++;
    windowFreq[getIdx(s[i])]++;
  }

  if (checkEqual()) {
    count++;
  }
  for (let i = k; i < n; i++) {
    windowFreq[getIdx(s[i])]++;
    windowFreq[getIdx(s[i - k])]--;

    if (checkEqual()) {
      count++;
    }
  }

  return count;
}

console.log(countAnagram(s, p));
