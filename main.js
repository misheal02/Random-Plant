var plantList = ["Rafflesia arnoldii", "Nepenthes species", "Nepenthes species", "Ficus", "Hericium americanum", "Tremella mesenterica", "Dracaena cinnabari", "African Acacia", "Utricularia species","Utricularia gibba"];

document.getElementById("select").addEventListener("click", function(){
  var randomNum = Math.random(); //returns a decimal btw 0 and 1.
  var randomNumBig = randomNum*plantList.length;
  var randomRound= Math.floor(randomNumBig);
  document.getElementById("yeet").innerHTML = plantList[randomRound];
})
