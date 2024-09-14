const btnArrow = document.querySelector(".arrov");
const btnFolder = document.querySelector(".folder");
const btnfolderIcon = document.querySelector(".fa-folder");
const folders = document.querySelector(".folders");
const setting = document.querySelector(".setting");
const symbolSetting = document.querySelector(".btn-setting-img");
const settingWindow = document.querySelector(".setting-window");
const logout = document.querySelector(".logout");
const newFolder = document.querySelector(".new-folder");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-window");

const close = function () {
  settingWindow.classList.add("hidden");
  newFolder.classList.remove("hidden");
  overlay.classList.add("hidden");
};
const foldersBtn = function () {
  btnArrow.classList.toggle("rotate");
  folders.classList.toggle("hidden");
};
const settingButton = function () {
  settingWindow.classList.remove("hidden");
  newFolder.classList.add("hidden");
  overlay.classList.remove("hidden");
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !settingWindow.classList.contains("hidden")) {
    close();
  }
});
closeModal.addEventListener("click", close);
symbolSetting.addEventListener("click", settingButton);
setting.addEventListener("click", settingButton);
btnArrow.addEventListener("click", foldersBtn);
btnFolder.addEventListener("click", foldersBtn);
btnfolderIcon.addEventListener("click", foldersBtn);
