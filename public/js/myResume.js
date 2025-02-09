


document.addEventListener("DOMContentLoaded", () => {
   
  

      
   let selectedTemplateId = sessionStorage.getItem("selectedTemplateId");
   
   
   if (!selectedTemplateId) {
      selectedTemplateId = "1"; // Default to template 1 if none is selected
   }

   if (selectedTemplateId) {
      console.log("Selected Template ID:", selectedTemplateId);

      const bioData = JSON.parse(sessionStorage.getItem("bioData"));
      const addressData = JSON.parse(sessionStorage.getItem("addressData"));
      const experienceData = JSON.parse(sessionStorage.getItem("experienceData"));
      const projectsData = JSON.parse(sessionStorage.getItem("projectsData"));
      const educationData = JSON.parse(sessionStorage.getItem("educationData"));
      const skillsData = JSON.parse(sessionStorage.getItem("skillsData"));



     
        
      const isDataAvailable =
         (bioData && Object.keys(bioData).length > 0) ||
         (addressData && Object.keys(addressData).length > 0) ||
         (experienceData && experienceData.length > 0) ||
         (projectsData && projectsData.length > 0) ||
         (educationData && educationData.length > 0) ||
         (skillsData && skillsData.length > 0);

         
        
      // Example of dynamically changing content based on the template
      const templatePreview = document.querySelectorAll("#template-preview");
      
      templatePreview.forEach((templatePreview) => {
         
     
         
         if (selectedTemplateId === "1") {
            
            if (!isDataAvailable) {
               templatePreview.innerHTML = `
            <div class="overlay">
      <button class="backtoedit-btn">
         <span> BACK TO EDIT </span>
      </button>
      <button class="downloadpdf-btn">
         <span>DOWNLOAD PDF </span>
      </button>
   </div>
   
   <div class="download-sidebar">
      <img src="images/ResumeLogo.png" alt="Profile Picture">
      <h1></h1>
      <h2></h2>
      <ul>
         <li></li>
         <li></li>
         <li></li>
      </ul>
   </div>

   <div class="download-main-content">
      <div class="download-section">
         <h3>Experience</h3>
         <ul>
            <li><b></b></li>
            <li><b></b></li>
            <li><b></b></li>
         </ul>
      </div>



      <div class="download-section">
         <h3>Projects</h3>
         <ul>
            <li><b></b></li>
            <li><b></b></li>
            <li>
               <a href="" target="_blank" class="githublink-with-inline-svg"></a>
               <a href="" target="_blank" class="livelink-with-inline-svg"></a>
            </li>
            <li></li>
         </ul>
      </div>

      <div class="download-section">
         <h3>Education</h3>
         <ul>
            <li></li>
            <li></li>
            <li></li>
         </ul>
      </div>

      <div class="download-section">
         <h3>Key Skills</h3>
         <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
      </div>
   </div>`;
            
            
            }

            else {
               templatePreview.innerHTML = `
            <div class="overlay">
               <button class="backtoedit-btn">
                  <span> BACK TO EDIT </span>
               </button>
               <button class="downloadpdf-btn">
                  <span>DOWNLOAD PDF </span>
               </button>
            </div>
         <div class="download-sidebar">
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
            }
      
         } else if (selectedTemplateId === "2") {
            console.log(templatePreview);
            templatePreview.innerHTML = `
               
               <div class="template2-container">
               <div class="overlay">
                       <button class="backtoedit-btn">
                          <span> BACK TO EDIT </span>
                       </button>
                       <button class="downloadpdf-btn">
                          <span>DOWNLOAD PDF </span>
                       </button>
                    </div>

      <div class="leftPanel">
         <img src="${bioData?.profileImage || 'images/ResumeLogo.png'}" alt="Profile Picture" />
         <div class="details">
            <div class="item bottomLineSeparator">
               <h2 class="h2">BIO</h2>
               <div class="smallText">
                  <p class="p"><i class="fa fa-phone contactIcon" aria-hidden="true"></i> ${addressData?.phone || '(123) 456-7890'}</p>
                  <p class="p"><i class="fa fa-envelope contactIcon" aria-hidden="true"></i>
                     <a href="mailto:${addressData?.email || 'email@example.com'}">
                        ${addressData?.email || 'email@example.com'}
                     </a>
                  </p>
                  <p class="p"><i class="fa fa-map-marker contactIcon" aria-hidden="true"></i> 
                     ${addressData ? `${addressData.city}, ${addressData.state}, ${addressData.country}` : 'Your Location'}
                  </p>
               </div>
            </div>

            <div class="item bottomLineSeparator">
               <h2 class="h2">SKILLS</h2>
               <div class="smallText">
                  <ul>
                     ${skillsData && skillsData.length > 0 ? skillsData.map(skill => `<li>${skill}</li>`).join('') : '<li>No Skills Available</li>'}
                  </ul>
               </div>
            </div>

            <div class="item">
               <h2 class="h2">EDUCATION</h2>
               <div class="smallText">
                  <ul>
                     ${educationData && educationData.length > 0 ? educationData.map(edu => `
                        <li><b>${edu.degree}</b></li>
                        <li>${edu.university}</li>
                        <li>${edu.startYear} - ${edu.endYear}</li>
                     `).join('') : '<li>No Education Information Available</li>'}
                  </ul>
               </div>
            </div>
         </div>
      </div>

      <div class="rightPanel">
         <div>
            <h1 class="h1">${bioData ? `${bioData.firstName} ${bioData.lastName}` : 'John Doe'}</h1>
            <div class="smallText">
               <h3 class="h3">${bioData?.role || 'Web Developer'}</h3>
            </div>
         </div>

         <div>
            <h2 class="h2">About Me</h2>
            <div class="smallText">
               <p class="p">${bioData?.description || 'Write something about yourself here...'}</p>
            </div>
         </div>

         <div class="projects">
            <h2 class="h2">Projects</h2>
            <ul>
               ${projectsData && projectsData.length > 0 ? projectsData.map(project => `
                  <li>
                     <div class="projectName bolded"><span>${project.projectName}</span></div>
                     <div class="smallText">
                        <p class="p">${project.projectdescription}</p>
                        <p class="p"><span class="bolded">Tech Stack:</span> ${project.techStack}</p>
                        <p class="p">${project.githubLink ? `<span class="bolded">GitHub Link:</span> <a href="${project.githubLink}" target="_blank">${project.githubLink}</a>` : ''}</p>
                        <p class="p">${project.liveLink ? `<span class="bolded">Live Link:</span> <a href="${project.liveLink}" target="_blank">${project.liveLink}</a>` : ''}</p>
                     </div>
                  </li>
               `).join('') : '<li>No Projects Available</li>'}
            </ul>
         </div>

         <div class="workExperience">
            <h2 class="h2">Work Experience</h2>
            <ul>
               ${experienceData && experienceData.length > 0 ? experienceData.map(exp => `
                  <li>
                     <div class="jobPosition">
                        <span class="bolded">${exp.jobTitle}</span>
                        <span>${exp.startYear} - ${exp.endYear}</span>
                     </div>
                     <div class="projectName bolded"><span>${exp.orgName}</span></div>
                  </li>
               `).join('') : '<li>No Work Experience Available</li>'}
            </ul>
         </div>
      </div>
   </div>
`;

         }
         else if (selectedTemplateId === "3") {
            console.log(templatePreview);
            templatePreview.innerHTML = `
      <!-- Left Sidebar -->
      <div class="template3-left-sidebar">
      <div class="overlay">
         <button class="backtoedit-btn">
            <span> BACK TO EDIT </span>
         </button>
         <button class="downloadpdf-btn">
            <span>DOWNLOAD PDF </span>
         </button>
      </div>
         <img src="${bioData?.profileImage || 'images/ResumeLogo.png'}" alt="Profile Picture" class="template3-img">
         
         <h3 class="template3-heading">Profile</h3>
         <p><strong>First Name:</strong>${bioData ? `${bioData.firstName} ${bioData.lastName}` : 'John Doe'}</p>
         <p><strong>Role:</strong> ${bioData?.role || 'Web Developer'}</p>
         <p><strong>Description:</strong> ${bioData?.description || 'Passionate developer with expertise in building scalable web applications.'}</p>

         <h3 class="template3-heading">Address</h3>
         <p><strong>Postal Code:</strong> ${addressData?.postalCode || '12345'}</p>
         <p><strong>City:</strong> ${addressData?.city || 'Your City'}</p>
         <p><strong>State:</strong> ${addressData?.state || 'Your State'}</p>
         <p><strong>Country:</strong> ${addressData?.country || 'Your Country'}</p>
         <p><strong>Phone:</strong> ${addressData?.phone || '+123-456-7890'}</p>
         <p><strong>Email:</strong> <a href="mailto:${addressData?.email || 'username@provider.com'}">${addressData?.email || 'username@provider.com'}</a></p>
      </div>

      <!-- Main Body -->
      <main class="template3-main-body">
         <h2 class="template3-secondary"><i class="fa-solid fa-briefcase"></i> Experience</h2>
         <div class="template3-experience">
            ${experienceData && experienceData.length > 0 ? experienceData.map(exp => `
               <div>
                  <h3>Job Title: ${exp.jobTitle}</h3>
                  <p><strong>Organisation Name:</strong> ${exp.orgName}</p>
                  <p><strong>Start Year:</strong> ${exp.startYear}</p>
                  <p><strong>End Year:</strong> ${exp.endYear}</p>
               </div>
            `).join('') : '<p>No Work Experience Available</p>'}
         </div>

         <h2 class="template3-secondary"><i class="fa-solid fa-folder-open"></i> Projects</h2>
         <div class="template3-project">
            ${projectsData && projectsData.length > 0 ? projectsData.map(project => `
               <div>
                  <h3>Project Name: ${project.projectName}</h3>
                  <p><strong>Description:</strong> ${project.projectdescription}</p>
                  <p><strong>Tech Stack:</strong> ${project.techStack}</p>
                  <p><strong>GitHub:</strong> <a href="${project.githubLink}" target="_blank">${project.githubLink}</a></p>
                  <p><strong>Live Link:</strong> <a href="${project.liveLink}" target="_blank">${project.liveLink}</a></p>
               </div>
            `).join('') : '<p>No Projects Available</p>'}
         </div>

         <h2 class="template3-secondary"><i class="fa-solid fa-graduation-cap"></i> Education</h2>
         <div class="template3-education">
            ${educationData && educationData.length > 0 ? educationData.map(edu => `
               <div>
                  <p><strong>Degree:</strong> ${edu.degree}</p>
                  <p><strong>Domain:</strong> ${edu.domain}</p>
                  <p><strong>University:</strong> ${edu.university}</p>
                  <p><strong>Start Year:</strong> ${edu.startYear}</p>
                  <p><strong>End Year:</strong> ${edu.endYear}</p>
               </div>
            `).join('') : '<p>No Education Information Available</p>'}
         </div>

         <h2 class="template3-secondary"><i class="fa-solid fa-lightbulb"></i> Key Skills</h2>
         <ul class="template3-skills">
            ${skillsData && skillsData.length > 0 ? skillsData.map(skill => `<li>${skill}</li>`).join('') : '<li>No Skills Available</li>'}
         </ul>
      </main>
   
`;
         }
      
         else {
            console.log("No template selected. Showing default content.");
         }
      });
   }  

   const backToEditBtn = document.querySelectorAll(".backtoedit-btn");
   const downloadPdfBtn = document.querySelectorAll('.downloadpdf-btn');
   const templates = document.querySelectorAll('.download-templates');

   templates.forEach((template) => {
      template.style.display = 'none';
   });



   
   if (selectedTemplateId) {
      templates.forEach((template, index) => {
         if (index + 1 == selectedTemplateId) {
            template.style.display = 'flex'; // Show the selected template
            attachPdfListeners(template); // Attach event listeners for the buttons
         } else {
            template.style.display = 'none'; // Hide unselected templates
         }
      });

   } else {
      // If no template ID is saved, show the first template by default
      if (templates.length > 0) {
         templates[0].style.display = 'flex';
         attachPdfListeners(templates[0]); // Attach event listeners for the first template
      }
   }
   

  
   function attachPdfListeners(template) {
   
      if (downloadPdfBtn) {
         downloadPdfBtn.forEach((button) => {
            button.replaceWith(button.cloneNode(true));
         });

         // Re-query buttons after cloning
         const updatedDownloadPdfBtn = template.querySelectorAll('.downloadpdf-btn');
         updatedDownloadPdfBtn.forEach((button) => {
            button.addEventListener('click', function () {
               PdfdownloadFunc(template);
            });
         });
      }
   }
   
   
   function PdfdownloadFunc(template) {
      const { jsPDF } = window.jspdf;

      const pdfNameInput = document.querySelector('.pdf-name-input');
      let pdfName = pdfNameInput ? pdfNameInput.value.trim() : 'resume.pdf';

      if (!pdfName.endsWith('.pdf')) {
         pdfName += '.pdf';
      }

      // Generate the canvas
      html2canvas(template, { scale: 2 }).then((canvas) => {
         const imgData = canvas.toDataURL('image/png');
         const pdf = new jsPDF('p', 'mm', 'a4');

         const pdfWidth = pdf.internal.pageSize.getWidth();
         const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

         pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

         // Extract all links (including links inside SVG icons)
         const links = template.querySelectorAll('a');
         links.forEach((link) => {
            const href = link.href;
            const rect = link.getBoundingClientRect();

            // Convert DOM coordinates to PDF coordinates
            const pdfX = (rect.left / canvas.width) * pdfWidth;
            const pdfY = (rect.top / canvas.height) * pdfHeight;
            const pdfWidthLink = (rect.width / canvas.width) * pdfWidth;
            const pdfHeightLink = (rect.height / canvas.height) * pdfHeight;

            // Add a clickable link to the PDF
            pdf.link(pdfX, pdfY, pdfWidthLink, pdfHeightLink, { url: href });
         });

         // Save the PDF
         pdf.save(pdfName);
      });
   }


   if (backToEditBtn) {
      backToEditBtn.forEach(button => {
         button.addEventListener('click', function (event) {
            window.location.href = "/fillDetails"
            event.stopPropagation();
         });
      });
   }

  
});