// Spawn Véhicule
function createVehicle(player, modelName) {
  const modelHash = mp.joaat(modelName);

  const playerPosition = player.position;
  const vehiclePosition = new mp.Vector3(
    playerPosition.x + 2,
    playerPosition.y + 2,
    playerPosition.z
  );
  const vehicle = mp.vehicles.new(modelHash, vehiclePosition);

  player.outputChatBox(`Véhicule ${modelName} créé.`);
  player.call("showPhoneNotification", [
    `Merci pour votre commande ${player.name}, votre ${modelName} viens d'arriver. Faites en bon usage !`,
  ]);
}

module.exports.createVehicle = createVehicle;
