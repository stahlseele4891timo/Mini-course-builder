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

  var lessons = Array.prototype.slice.call(document.querySelectorAll(".lesson"));
  var tabs = Array.prototype.slice.call(document.querySelectorAll("#lesson-nav button"));
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var current = 0;

  function show(index, moveFocus) {
    current = Math.max(0, Math.min(lessons.length - 1, index));
    lessons.forEach(function (lesson, i) { lesson.hidden = i !== current; });
    tabs.forEach(function (tab, i) {
      if (i === current) tab.setAttribute("aria-current", "true");
      else tab.removeAttribute("aria-current");
    });
    prev.disabled = current === 0;
    next.disabled = current === lessons.length - 1;
    history.replaceState(null, "", "#" + lessons[current].id);
    window.scrollTo(0, 0);
    if (moveFocus) lessons[current].querySelector("h2").focus();
  }

  tabs.forEach(function (tab, i) { tab.addEventListener("click", function () { show(i, true); }); });
  prev.addEventListener("click", function () { show(current - 1, true); });
  next.addEventListener("click", function () { show(current + 1, true); });

  var start = lessons.map(function (l) { return "#" + l.id; }).indexOf(location.hash);
  show(start === -1 ? 0 : start, false);
})();
