(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function showTheme() {
    var dark = root.dataset.theme === "dark";
    toggle.textContent = dark ? "Light theme" : "Dark theme";
    toggle.setAttribute("aria-pressed", String(dark));
  }
  toggle.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    showTheme();
  });
  showTheme();

  var form = document.getElementById("plan-form");
  var status = document.getElementById("save-status");
  var KEY = "plan-draft";

  function load() {
    try {
      var saved = JSON.parse(localStorage.getItem(KEY) || "{}");
      Object.keys(saved).forEach(function (name) {
        if (form.elements[name]) form.elements[name].value = saved[name];
      });
    } catch (e) {}
  }
  function save() {
    var data = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (el.name) data[el.name] = el.value;
    });
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
      status.textContent = "Saved in this browser.";
    } catch (e) {
      status.textContent = "Could not save: your browser is blocking storage.";
    }
  }
  form.addEventListener("input", save);
  load();
})();
