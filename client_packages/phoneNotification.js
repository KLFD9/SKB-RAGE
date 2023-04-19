mp.events.add("showPhoneNotification", (message) => {
  mp.game.ui.setNotificationTextEntry("STRING");
  mp.game.ui.addTextComponentSubstringPlayerName(message);
  mp.game.ui.setNotificationMessage(
    "CHAR_LS_CUSTOMS",
    "CHAR_LS_CUSTOMS",
    true,
    1,
    "Livraison Express",
    ""
  );
  mp.game.ui.drawNotification(false, true);
});
