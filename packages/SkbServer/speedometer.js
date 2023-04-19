mp.events.add("playerJoin", (player) => {
  player.call("playerReady");
  console.log(
    "Événement playerJoin déclenché. playerReady appelé côté client."
  );
});
