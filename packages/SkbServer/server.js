const { createVehicle } = require("./spawnvehicule.js");

mp.events.add("playerJoin", (player) => {
  player.call("showNotification", [
    `Bienvenue en ville, ${player.name}!, nous sommes impatients de voir ce que vous aller faire aujourd'hui !`,
    10000,
    "CHAR_CHOP",
    "CHAR_CHOP",
  ]);
});

//Spawn d'un vehicule
mp.events.addCommand("vehicule", (player, fullText, modelName) => {
  if (modelName) {
    player.call("checkVehicleModel", [modelName]);
  } else {
    player.call("Usage : /vehicule [nom_du_vehicule]");
  }
});

mp.events.add("invalidVehicleModel", (player, modelName) => {
  player.outputChatBox(`Modèle de véhicule invalide : ${modelName}`);
});

mp.events.add("validVehicleModel", (player, modelName) => {
  createVehicle(player, modelName);
});

// Suppression du véhicule
mp.events.addCommand("vehiculesup", (player) => {
  if (player.vehicle && player.seat === 0) {
    const vehicle = player.vehicle;
    vehicle.destroy();
    player.outputChatBox("Le véhicule a été supprimé.");
  } else {
    player.outputChatBox(
      "Vous devez être le conducteur d'un véhicule pour utiliser cette commande."
    );
  }
});
