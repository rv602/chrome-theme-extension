window.onload = function () {
  chrome.storage.local.get(["key"], function (result) {
    try {
      document.getElementById(result.key).click();
    } catch (e) {
      console.log(e);
    }
  });
};

function setSelected(value) {
  try {
    chrome.storage.local.set({ key: value }, function () {
      document.getElementById(value).checked = true;
    });
  } catch {}
}

function injectFilter(fileName) {
  chrome.tabs.executeScript({ file: fileName });
}

function onDarkMode() {
  // document.getElementById("dark").checked = true;
  chrome.tabs.insertCSS(null, { file: "css/dark.css" });
}

function offDarkMode() {
  // document.getElementById("dark").checked = false;
  chrome.tabs.removeCSS(null, { file: "css/dark.css" });
}

document.querySelectorAll(['[id^="radio"]']).forEach((radioButton) => {
  const filter = radioButton.parentElement.id.replace("option-", "");
  radioButton.addEventListener("click", function () {
    setSelected(radioButton.id);
    injectFilter(`filters/${filter}.js`);
  });
});

document.getElementById("dark").addEventListener("click", (event) => {
  document.getElementById("light").checked = false;
  if (event.target.checked) {
    onDarkMode();
  } else {
    offDarkMode();
  }
});

document.getElementById("light").addEventListener("click", (event) => {
  offDarkMode();
  document.getElementById("dark").checked = false;
})