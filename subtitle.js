function getRandomGreeting() {
  var greetings = [
    "Avocados \ud83e\udd51 from Mexico \ud83c\uddf2\ud83c\uddfd",
    "I spent too much time making these",
    "no free vbux here.",
    "aw I wanted free v-bucks:(",
  "Stolen from 3kh0, fair and square."
    
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
