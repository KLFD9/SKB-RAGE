function showNotification(message, duration, icon, iconName) {
  mp.game.ui.setNotificationTextEntry("STRING");
  mp.game.ui.addTextComponentSubstringPlayerName(message);
  if (icon && iconName) {
    mp.game.ui.setNotificationMessage(
      icon,
      iconName,
      false,
      2,
      "Message de",
      "Bienvenue"
    );
  }
  mp.game.ui.drawNotification(false, true);
  setTimeout(() => {
    mp.game.ui.hideHudComponentThisFrame(9);
  }, duration);
}
mp.events.add("showNotification", (message, duration, icon, iconName) => {
  showNotification(message, duration, icon, iconName);
});
