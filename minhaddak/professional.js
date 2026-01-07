const data = localStorage.getItem("selectedProfessional");

if(!data){
  document.getElementById("profileContainer").innerHTML = "<p>No professional selected.</p>";
  throw new Error("No data in localStorage");
}

const p = JSON.parse(data);
const container = document.getElementById("profileContainer");

// Build profile HTML
let html = `
  <div class="profile-header">
    ${p.ProfilePic ? `<img src="${p.ProfilePic}" alt="Profile Picture">` : ""}
    <div class="profile-info">
      <h2>${p.Name}</h2>
      <p><strong>Profession:</strong> ${p.Profession}</p>
      <p><strong>Location:</strong> ${p.Location}</p>
      <p><strong>Phone:</strong> ${p.Phone}</p>
      <p><strong>Email:</strong> ${p.Email || "N/A"}</p>
      <p><strong>Experience:</strong> ${p.Experience || "N/A"}</p>
      <a href="tel:${p.Phone}">📞 Call</a>
    </div>
  </div>

  <div class="about-section">
    <h3>About</h3>
    <p>${p.About || "No description provided."}</p>
  </div>
`;

// Additional images
const pics = ['Picture1', 'Picture2', 'Picture3'];
let hasPics = pics.some(key => p[key]);

if(hasPics){
  html += `<div class="additional-images">`;
  pics.forEach(key => {
    if(p[key]){
      html += `<img src="${p[key]}" alt="Additional Image">`;
    }
  });
  html += `</div>`;
}


// Close button
html += `<a href="index.html" class="close-btn">Close</a>`;

container.innerHTML = html;
