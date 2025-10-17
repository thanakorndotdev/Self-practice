    document.addEventListener("DOMContentLoaded", () => {
      const savedBg = localStorage.getItem("bgColor") || "#ffffff";
      const savedFont = localStorage.getItem("fontColor") || "#000000";
      const savedSize = localStorage.getItem("fontSize") || "small";
      document.body.style.backgroundColor = savedBg;
      document.body.style.color = savedFont;
      applyFontSize(savedSize);
      document.getElementById("bgColor").value = savedBg;
      document.getElementById("fontColor").value = savedFont;
      document.getElementById("fontSize").value = savedSize;
      document.getElementById("saveBtn").addEventListener("click", () => {
        const bg = document.getElementById("bgColor").value;
        const font = document.getElementById("fontColor").value;
        const size = document.getElementById("fontSize").value;

        localStorage.setItem("bgColor", bg);
        localStorage.setItem("fontColor", font);
        localStorage.setItem("fontSize", size);

        document.body.style.backgroundColor = bg;
        document.body.style.color = font;
        applyFontSize(size);
      });
      document.getElementById("resetBtn").addEventListener("click", () => {
        localStorage.clear();
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        document.body.style.fontSize = "14px";
        document.getElementById("bgColor").value = "#ffffff";
        document.getElementById("fontColor").value = "#000000";
        document.getElementById("fontSize").value = "small";
      });
    });
    function applyFontSize(size) {
      if (size === "small") document.body.style.fontSize = "14px";
      else if (size === "medium") document.body.style.fontSize = "18px";
      else if (size === "large") document.body.style.fontSize = "22px";
    }