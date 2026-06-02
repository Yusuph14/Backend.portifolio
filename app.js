async function loadProjects() {
    const res = await fetch("/api/projects");
    const data = await res.json();

    const container = document.getElementById("projects");

    container.innerHTML = data.map(p => `
    <div class="card">
      <button class="delete" onclick="deleteProject(${p.id})">X</button>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <small>Tools: ${p.tools.join(", ")}</small><br>
      <small>Status: ${p.status}</small>
    </div>
  `).join("");
}

/* ➕ ADD PROJECT */
async function addProject() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const tools = document.getElementById("tools").value.split(",");

    await fetch("/api/admin/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            description,
            tools,
            status: "Completed"
        })
    });

    loadProjects();
}

/* ❌ DELETE PROJECT */
async function deleteProject(id) {
    await fetch(`/api/admin/projects/${id}`, {
        method: "DELETE"
    });

    loadProjects();
}

loadProjects();