mp.events.add("checkVehicleModel", (modelName) => {
  const modelHash = mp.game.joaat(modelName);
  if (!mp.game.streaming.isModelValid(modelHash)) {
    mp.events.callRemote("invalidVehicleModel", modelName);
  } else {
    mp.events.callRemote("validVehicleModel", modelName);
  }
});
