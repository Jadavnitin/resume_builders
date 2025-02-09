


   let selectedTemplateId = sessionStorage.getItem("selectedTemplateId");


   if (!selectedTemplateId) {
      selectedTemplateId = "1"; // Default to template 1 if none is selected
   }

   if (selectedTemplateId) {
      console.log("Selected Template ID:", selectedTemplateId);

      // Retrieve user data from sessionStorage
      const bioData = JSON.parse(sessionStorage.getItem("bioData"));
      const addressData = JSON.parse(sessionStorage.getItem("addressData"));
      const experienceData = JSON.parse(sessionStorage.getItem("experienceData"));
      const projectsData = JSON.parse(sessionStorage.getItem("projectsData"));
      const educationData = JSON.parse(sessionStorage.getItem("educationData"));
      const skillsData = JSON.parse(sessionStorage.getItem("skillsData"));



      // Example of dynamically changing content based on the template
      const templatePreview = document.getElementById("template-preview");



      if (selectedTemplateId === "1") {
         templatePreview.innerHTML = `
         <div class="download-sidebar">
         <div class="overlay">
            <button class="backtoedit-btn">
               <span> BACK TO EDIT </span>
            </button>
            <button class="downloadpdf-btn">
               <span>DOWNLOAD PDF </span>
            </button>
         </div>
         
            <img src="${bioData?.profileImage || 'images/ResumeLogo.png'}" alt="Profile Picture">
            <h1>${bioData ? bioData.firstName + " " + bioData.lastName : "John Doe"}</h1>
            <h2>${bioData ? bioData.role : "Your Role"}</h2>
            <ul>
               <li><strong>Email:</strong> ${addressData ? addressData.email : "email@example.com"}</li>
               <li><strong>Phone:</strong> ${addressData ? addressData.phone : "(123) 456-7890"}</li>
               <li><strong>Location:</strong> ${addressData ? `${addressData.city}, ${addressData.state}, ${addressData.country}` : "Your Location"}</li>
            </ul>
         </div>
         <div class="download-main-content">
            <div class="download-section">
               <h3>Experience</h3>
               <ul>
                  ${experienceData && experienceData.length > 0 ? experienceData.map(exp => `
                     <li><b>${exp.jobTitle}</b></li>
                     <li><b>${exp.orgName}</b></li>
                     <li><b>${exp.startYear} - ${exp.endYear}</b></li>
                  `).join('') : "<li>No Experience Available</li>"}
               </ul>
            </div>
            
            <div class="download-section">
          <h3>Projects</h3>
          <ul>
      ${projectsData && projectsData.length > 0 ? projectsData.map(project => `
         <li><b>${project.projectName}</b></li>
         <li><b>${project.techStack}</b></li>
         <li>
            ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="githublink-with-inline-svg"></a>` : ""}
            ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="livelink-with-inline-svg"></a>` : ""}
         </li>
         <li>${project.projectdescription}</li>
      `).join('') : "<li>No Projects Available</li>"}
          </ul>
         </div>

            <div class="download-section">
               <h3>Education</h3>
               <ul>
                  ${educationData && educationData.length > 0 ? educationData.map(edu => `
                     <li><b>${edu.degree}</b></li>
                     <li><b>${edu.university}</b></li>
                     <li><b>${edu.startYear} - ${edu.endYear}</b></li>
                  `).join('') : "<li>No Education Information Available</li>"}
               </ul>
            </div>
            
            <div class="download-section">
            <h3>Key Skills</h3>
           <ul>
         ${skillsData && skillsData.length > 0 ? skillsData.map(skill => `
         <li>${skill}</li>
      `).join('') : "<li>No Skills Available</li>"}
        </ul>
       </div>
         </div>
      `;
      } else if (selectedTemplateId === "2") {
         templatePreview.innerHTML = `
   <div class="download2-left">
      <img src="${bioData?.profileImage || 'images/ResumeLogo.png'}" alt="Profile Picture">
      <h1>${bioData ? bioData.firstName + " " + bioData.lastName : "John Doe"}</h1>
      <h2>${bioData ? bioData.role : "Your Role"}</h2>

      <div class="download2-section">
         <h3>Contact Me</h3>
         <ul>
            <li><strong>Email:</strong> ${addressData ? addressData.email : "email@example.com"}</li>
            <li><strong>Phone:</strong> ${addressData ? addressData.phone : "(123) 456-7890"}</li>
            <li><strong>Location:</strong> ${addressData ? `${addressData.city}, ${addressData.state}, ${addressData.country}` : "Your Location"}</li>
         </ul>
      </div>

      <div class="download2-section">
         <h3>Education</h3>
         <ul>
            ${educationData && educationData.length > 0 ? educationData.map(edu => `
               <li><b>${edu.degree}</b></li>
               <li>${edu.university}</li>
               <li>${edu.startYear} - ${edu.endYear}</li>
            `).join('') : "<li>No Education Information Available</li>"}
         </ul>
      </div>

      <div class="download2-section">
         <h3>Skills</h3>
         <ul>
            ${skillsData && skillsData.length > 0 ? skillsData.map(skill => `
               <li>${skill}</li>
            `).join('') : "<li>No Skills Available</li>"}
         </ul>
      </div>
   </div>

   <div class="download2-right">
      <div class="download2-section">
         <h2>About Me</h2>
         <p>${bioData ? bioData.description : "Write something about yourself here."}</p>
      </div>

      <div class="download2-section">
         <h2>Work Experience</h2>
         ${experienceData && experienceData.length > 0 ? experienceData.map(exp => `
            <h3>${exp.jobTitle}</h3>
            <p>${exp.orgName}</p>
            <p>${exp.startYear} - ${exp.endYear}</p>
            <ul>
               <li>${exp.responsibilities ? exp.responsibilities[0] : ""}</li>
               <li>${exp.responsibilities ? exp.responsibilities[1] : ""}</li>
            </ul>
         `).join('') : "<p>No Work Experience Available</p>"}
      </div>

      <div class="download2-section">
         <h2>Projects</h2>
         <ul>
            ${projectsData && projectsData.length > 0 ? projectsData.map(project => `
               <li><b>${project.projectName}</b></li>
               <li>${project.techStack}</li>
               <li>
                  ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="githublink-with-inline-svg"></a>` : ""}
                  ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="livelink-with-inline-svg"></a>` : ""}
               </li>
               <li>${project.projectdescription}</li>
            `).join('') : "<li>No Projects Available</li>"}
         </ul>
      </div>

    
   </div>
`;

      }
   } else {
      console.log("No template selected. Showing default content.");
   }
