new gridjs.Grid({
    columns: ["MP Systems", "Data Source(s)", "Learning Type", "MP Pillars", "Stage", "Application Domain"],
    sort:true,
    search:true,
    data: [
      ["Copilot", 
      "Code + documentation", 
      "Self-supervised",
      "Intention + Invention",
      "Development",
      "General"],
      ["Copilot", 
      "Code + documentation", 
      "Self-supervised",
      "Intention + Invention",
      "Development",
      "General"]
    ]
  }).render(document.getElementById("wrapper"));