const browser = mp.browsers.new("package://speedometer/index.html");
let speedometerVisible = false;

console.log("Fichier speedometer.js côté client chargé.");

function updateSpeedometer() {
  if (
    mp.players.local.vehicle &&
    mp.players.local.vehicle.getPedInSeat(-1) === mp.players.local.handle
  ) {
    if (!speedometerVisible) {
      console.log("Affichage du compteur de vitesse.");
      speedometerVisible = true;
      browser.execute(
        'document.getElementById("speedometer").style.display = "block";'
      );
    }
    const speed = (mp.players.local.vehicle.getSpeed() * 3.6).toFixed(0);
    console.log(`Mise à jour du compteur de vitesse : ${speed} km/h`);
    browser.execute(
      `document.getElementById("speedometer").innerText = "${speed} km/h";`
    );
  } else if (speedometerVisible) {
    console.log("Masquage du compteur de vitesse.");
    speedometerVisible = false;
    browser.execute(
      'document.getElementById("speedometer").style.display = "none";'
    );
  }
}

mp.events.add("playerReady", () => {
  mp.events.add("render", updateSpeedometer);
  console.log("Événement playerReady déclenché, activation du chat.");
  mp.gui.chat.activate(true);
  mp.gui.chat.show(true);
});
