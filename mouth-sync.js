const visemeGroups = {
  CHSHJ: ["ch", "sh", "j"],
  AEI: ["a", "e", "i"],
  BMP: ["b", "m", "p"],
  CDGKNSTXYZ: ["c", "d", "g", "k", "n", "s", "t", "x", "y", "z"],
  E: ["e"],
  FV: ["f", "v"],
  L: ["l"],
  O: ["o"],
  QW: ["q", "w"],
  R: ["r"],
  U: ["u"],
  TH: ["th"]
};

const mouth = document.getElementById("mouth");

function getViseme(char) {
  const c = char.toLowerCase();

  // Handle digraphs like "ch", "sh", "th"
  if (char.length === 2) {
    for (const [viseme, group] of Object.entries(visemeGroups)) {
      if (group.includes(c)) {
        return `assets/${viseme}.png`;
      }
    }
  }

  // Handle single characters
  for (const [viseme, group] of Object.entries(visemeGroups)) {
    if (group.includes(c)) {
      return `assets/${viseme}.png`;
    }
  }

  return "assets/neutral.png";
}

function startLipsync() {
  const text = document.getElementById("inputText").value;
  if (!text) return;

  let index = 0;
  const letters = text.split("");

  const interval = setInterval(() => {
    if (index >= letters.length) {
      mouth.src = "assets/neutral.png";
      clearInterval(interval);
      return;
    }

    const visemeFrame = getViseme(letters[index]);
    mouth.src = visemeFrame;

    index++;
  }, 100);
}
