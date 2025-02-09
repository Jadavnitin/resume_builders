document.addEventListener("DOMContentLoaded", () => {
   
   const sections = document.querySelectorAll(".fill-details-main-container, .fill-details-main-container1, .fill-details-main-container2, .fill-details-main-container3, .fill-details-main-container4, .fill-details-main-container5,.fill-details-main-container6");
   const addMoreExperinces = document.getElementById("add-more-experinces");
   const addProjects = document.getElementById("add-more-projects");
   const addMoreEducations = document.getElementById("add-more-educations");
   const addMoreSkills = document.getElementById("add-more-skills");
   const inputContainerWrapper2 = document.querySelector(".fill-details-main-container2 .fill-deatils-card");
   const inputContainerWrapper3 = document.querySelector(".fill-details-main-container3 .fill-deatils-card");
   const inputContainerWrapper4 = document.querySelector(".fill-details-main-container4 .fill-deatils-card");
   const inputContainerWrapper5 = document.querySelector(".fill-details-main-container5 .fill-deatils-card");
   const navButtons = document.querySelectorAll(".filldeatils-menu-element-container");

   // Define newFieldHTML globally
   const newExperinceField = `
            <div class="fill-details-container">
               <input required="" type="text" name="jobtitle" class="input">
               <label class="label">Job Title</label>
            </div>
            <div class="fill-details-container">
               <input required="" type="text" name="orgname" class="input">
               <label class="label">Organization Name</label>
            </div>
            <div class="fill-details-container">
               <input required="" type="number" name="startyear" class="input">
               <label class="label">Start Year</label>
            </div>
            <div class="fill-details-container">
               <input required="" type="number" name="endyear" class="input">
               <label class="label">End Year</label>
            </div>
            <div class="fill-details-container">
               <input required="" type="number" name="number" class="input">
               <label class="label">Phone</label>
            </div>
            <div class="fill-details-container">
               <input required="" type="email" name="email" class="input">
               <label class="label">Email</label>
            </div>

            <button class="fill-details-btn remove-btn">
               <span class="text">Remove</span>
            </button>

   `;

   const newProjectField = `
   
             <div class="fill-details-container">
               <input required="" type="text" name="projectname" class="input">
               <label class="label">Project name</label>
            </div>
            <div class="fill-details-container">
               <input required="" type="text" name="techstack" class="input">
               <label class="label">Tech Stack</label>
            </div>
            <div class="fill-details-container">
               <input required="" type="text" name="githublink" class="input">
               <label class="label">Github Link</label>
            </div>
            <div class="fill-details-container">
               <input required="" type="text" name="livelink" class="input">
               <label class="label">Live Link</label>
            </div>

            <div class="fill-details-container">
               <input required="" type="text" name="projectdescription" class="input" id="description-input">
               <label class="label">Description</label>
            </div>


            <button class="fill-details-btn remove-btn">
               <span class="text">Remove</span>
            </button>

   `;

   const newEducationField = `
           <div class="fill-details-container">
               <input required="" type="text" name="degree" class="input">
               <label class="label">Degree</label>
            </div>
            <div class="fill-details-container">
               <input required="" type="text" name="domain" class="input">
               <label class="label">Domain</label>
            </div>

            <div class="fill-details-container">
               <input required="" type="text" name="university" class="input">
               <label class="label">University</label>
            </div>

            <div class="fill-details-container">
               <input required="" type="number" name="educationstartyear" class="input">
               <label class="label">Start Year</label>
            </div>
            <div class="fill-details-container">
               <input required="" type="number" name="educationendyear" class="input">
               <label class="label">End Year</label>
            </div>
            
            <button class="fill-details-btn remove-btn">
               <span class="text">Remove</span>
            </button>
   `;


   const newSkillField = `
               <div class="fill-details-container">
               <input required="" type="text" name="skills" class="input">
               <label class="label">Skill</label>

               <button class="fill-details-btn remove-btn">
                  <span class="text">Remove</span>
               </button>
            </div>
   `;



   function clickedActive(index) {
      navButtons.forEach((button, i) => {
         if (i === index) {
            button.classList.add("fill-active");  // Add active class to clicked button
         } else {
            button.classList.remove("fill-active");  // Remove active class from other buttons
         }
      });
   }


   // Assign event listeners to menu navigation buttons
   navButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
         showSection(index);
      });
   });

   // Function to show the relevant section and hide others
   function showSection(index) {
      sections.forEach((section, i) => {
         section.style.display = i === index ? "flex" : "none";
         clickedActive(index);
      });
   }


   // Initially display the first section
   showSection(0);

   // Handle "Next & Submit" and "Back" buttons inside sections
   const nextButtons = document.querySelectorAll(".fill-details-btn");
   nextButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
         const buttonText = button.querySelector(".text").textContent.trim();
         if (buttonText === "Next & Submit") {
            navigateToNextSection(button);
         } else if (buttonText === "Back") {
            navigateToPreviousSection(button);
         }
      });
   });


   const bioData = JSON.parse(sessionStorage.getItem("bioData"));
   // Navigate to the next section
   function navigateToNextSection(button) {
      const currentSection = button.closest("main");
      const currentIndex = Array.from(sections).indexOf(currentSection);



      if (currentIndex < sections.length - 1) {
         showSection(currentIndex + 1);
      }

      const bioSection = document.getElementById("bio");
      const addressSection = document.getElementById("Address");
      const experienceSection = document.getElementById("Experience");
      const projectSection = document.getElementById("Projects");
      const educationSection = document.getElementById("Education");
      const skillSection = document.getElementById("KeySkills");
      const downloadSection = document.getElementById("Download");


      if (bioSection && bioSection.contains(button)) {
         // Collect input values
         const firstName = document.querySelector('input[name="firstname"]').value;
         const lastName = document.querySelector('input[name="lastname"]').value;
         const role = document.querySelector('input[name="role"]').value;
         const description = document.querySelector('#description-input').value;
         const profileImage = document.querySelector("#profile-image").src;


         // Create a bio data object
         const bioData = {
            firstName,
            lastName,
            role,
            description,
            profileImage,
         };

         console.log("Bio Data Collected:", bioData);
         sessionStorage.setItem("bioData", JSON.stringify(bioData));
      }


      if (addressSection && addressSection.contains(button)) {
         // Collect the input values for Address
         const postalCode = document.querySelector('input[name="postalcode"]').value;
         const city = document.querySelector('input[name="city"]').value;
         const state = document.querySelector('input[name="state"]').value;
         const country = document.querySelector('input[name="country"]').value;
         const phone = document.querySelector('input[name="phone"]').value;
         const email = document.querySelector('input[name="email"]').value;

         // Create an address data object
         const addressData = {
            postalCode,
            city,
            state,
            country,
            phone,
            email
         };

         console.log("Address Data Collected:", addressData);
         sessionStorage.setItem("addressData", JSON.stringify(addressData));

      }


      if (experienceSection && experienceSection.contains(button)) {
         // Collect all input containers in the Experience section
         const experienceGroups = document.querySelectorAll(
            "#Experience .input-container"
         );

         // Map through each input group and collect data
         const experiences = Array.from(experienceGroups).map((group) => {
            // Safely retrieve input values or fallback to an empty string
            const jobTitle = group.querySelector('input[name="jobtitle"]')?.value.trim() || "";
            const orgName = group.querySelector('input[name="orgname"]')?.value.trim() || "";
            const startYear = group.querySelector('input[name="startyear"]')?.value.trim() || "";
            const endYear = group.querySelector('input[name="endyear"]')?.value.trim() || "";
            const number = group.querySelector('input[name="number"]')?.value.trim() || "";
            const email = group.querySelector('input[name="email"]')?.value.trim() || "";

            // Log missing fields for debugging
            if (!jobTitle || !orgName || !startYear || !endYear || !number || !email) {
               console.warn("Incomplete Experience Data:", { jobTitle, orgName, startYear, endYear, number, email });
            }

            // Return an object for each experience
            return {
               jobTitle,
               orgName,
               startYear,
               endYear,
               number,
               email,
            };
         });

         // Log the collected experiences to ensure data is being captured
         console.log("Collected Experience Data:", experiences);

         // Store the data in sessionStorage or pass it to another section
         sessionStorage.setItem("experienceData", JSON.stringify(experiences));

         // Navigate to the next section (replace 'projects' with your next section ID)

      }


      if (projectSection && projectSection.contains(button)) {

         const projectsGroups = document.querySelectorAll("#Projects .input-container");

         // Map through each project group and collect data
         const projects = Array.from(projectsGroups).map((group) => {
            const projectName = group.querySelector('input[name="projectname"]')?.value.trim() || "";
            const techStack = group.querySelector('input[name="techstack"]')?.value.trim() || "";
            const githubLink = group.querySelector('input[name="githublink"]')?.value.trim() || "";
            const liveLink = group.querySelector('input[name="livelink"]')?.value.trim() || "";
            const projectdescription = group.querySelector('input[name="projectdescription"]')?.value.trim() || "";

            return {
               projectName,
               techStack,
               githubLink,
               liveLink,
               projectdescription,
            };
         });

         console.log("Collected Projects Data:", projects);

         // Store data in sessionStorage for later use
         sessionStorage.setItem("projectsData", JSON.stringify(projects));

      }


      if (educationSection && educationSection.contains(button)) {
         const educationGroups = document.querySelectorAll("#Education .input-container");

         // Map through each education group and collect data
         const educationData = Array.from(educationGroups).map((group) => {
            const degree = group.querySelector('input[name="degree"]')?.value.trim() || "";
            const domain = group.querySelector('input[name="domain"]')?.value.trim() || "";
            const university = group.querySelector('input[name="university"]')?.value.trim() || "";
            const startYear = group.querySelector('input[name="educationstartyear"]')?.value.trim() || "";
            const endYear = group.querySelector('input[name="educationendyear"]')?.value.trim() || "";

            return {
               degree,
               domain,
               university,
               startYear,
               endYear,
            };
         });

         console.log("Collected Education Data:", educationData);

         // Store data in sessionStorage for later use
         sessionStorage.setItem("educationData", JSON.stringify(educationData));

      }



      if (skillSection && skillSection.contains(button)) {

         const skillGroups = document.querySelectorAll("#KeySkills .fill-details-container");

         // Map through each skill group and collect data
         const skillsData = Array.from(skillGroups).map((group) => {
            const skill = group.querySelector('input[name="skills"]')?.value.trim() || "";
            return skill; // Return skill as a string
         });

         console.log("Collected Skills Data:", skillsData);

         // Store data in sessionStorage for later use
         sessionStorage.setItem("skillsData", JSON.stringify(skillsData));

      }
      
      // Example of dynamically changing content based on the template
      const templatePreview = document.querySelectorAll(".download-templates");


      templatePreview.forEach((templatePreview) => {
        

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
      `; attachPdfListeners(templatePreview);
            } else if (selectedTemplateId === "2") {
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
               attachPdfListeners(templatePreview);
} 
            else if (selectedTemplateId === "3") {
               
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
               attachPdfListeners(templatePreview);
}
         } else {
            console.log("No template selected. Showing default content.");
         }
      });
      
   }

   // Navigate to the previous section
   function navigateToPreviousSection(button) {
      const currentSection = button.closest("main");
      const currentIndex = Array.from(sections).indexOf(currentSection);

      const bioSectionIndex = 0;

      if (currentIndex === bioSectionIndex) {
         window.location.href = "/";
      } else if (currentIndex > 0) {
         showSection(currentIndex - 1);
      }
   }


   if (addMoreExperinces) {
      addMoreExperinces.addEventListener("click", () => {

         // Create a new container with the input fields
         const newFieldSet = document.createElement('div');
         newFieldSet.classList.add('input-container');
         newFieldSet.innerHTML = newExperinceField;


         const firstChild = inputContainerWrapper2.firstChild;

         inputContainerWrapper2.insertBefore(newFieldSet, firstChild);

         attachRemoveFunctionality();
      });
   }

   if (addProjects) {
      addProjects.addEventListener("click", () => {

         const newFieldSet1 = document.createElement('div');
         newFieldSet1.classList.add('input-container');
         newFieldSet1.innerHTML = newProjectField;

         const firstChild1 = inputContainerWrapper3.firstChild;

         inputContainerWrapper3.insertBefore(newFieldSet1, firstChild1);

         attachRemoveFunctionality();
      });
   }


   if (addMoreEducations) {
      addMoreEducations.addEventListener("click", () => {


         const newFieldSet2 = document.createElement('div');
         newFieldSet2.classList.add('input-container');
         newFieldSet2.innerHTML = newEducationField;

         const firstChild2 = inputContainerWrapper4.firstChild;

         inputContainerWrapper4.insertBefore(newFieldSet2, firstChild2);
         // Attach remove functionality to the newly added "Remove" button
         attachRemoveFunctionality();
      });
   }

   if (addMoreSkills) {
      addMoreSkills.addEventListener("click", () => {
         const newFieldSet3 = document.createElement('div');
         newFieldSet3.classList.add('input-container');
         newFieldSet3.innerHTML = newSkillField;

         const firstChild3 = inputContainerWrapper5.firstChild;

         inputContainerWrapper5.insertBefore(newFieldSet3, firstChild3);
         // Attach remove functionality to the newly added "Remove" button
         attachRemoveFunctionality();
      });
   }





   function attachRemoveFunctionality() {
      const removeButtons = document.querySelectorAll(".remove-btn");
      removeButtons.forEach(button => {
         button.addEventListener("click", () => {
            const container = button.closest('.input-container');
            if (container) {
               container.remove();
            }
         });
      });
   }
   attachRemoveFunctionality();


   
 
   // Image upload logic remains unchanged
   const changeImageBtn = document.getElementById("change-image-btn");
   const uploadImageInput = document.getElementById("upload-image-input");
   const profileImage = document.getElementById("profile-image");

   if (changeImageBtn) {
      changeImageBtn.addEventListener("click", () => {
         uploadImageInput.click();
      });
   }

   if (uploadImageInput) {
      uploadImageInput.addEventListener("change", (event) => {
         const file = event.target.files[0];
         if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
               profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
         }
      });
   }

   const saveImageBtn = document.getElementById("save-image-btn");
   if (saveImageBtn) {
      saveImageBtn.addEventListener("click", () => {
         alert("Image saved successfully!");

         const file = uploadImageInput.files[0];
         if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
               bioData.profileImage = e.target.result;
            };
         }
      });
   }

   
   
   let selectedTemplateId = sessionStorage.getItem("selectedTemplateId");

   const templates = document.querySelectorAll('.download-templates');

   templates.forEach((template) => {
      template.style.display = 'none';
   });



   if (selectedTemplateId) {
      templates.forEach((template, index) => {
         if (index + 1 == selectedTemplateId) {
            template.style.display = 'flex'; // Show the selected template
            attachPdfListeners(template);
// Attach event listeners for the buttons
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
      const exportPdfBtn = document.querySelector('.export-pdf-btn');
      const downloadPdfBtn = document.querySelectorAll('.downloadpdf-btn');
      const backToEditBtn = document.querySelectorAll(".backtoedit-btn");

      if (exportPdfBtn) {
         exportPdfBtn.addEventListener('click', () => {
            PdfdownloadFunc(template);

         });
      }

      if (backToEditBtn) {
         backToEditBtn.forEach(button => {
            button.addEventListener('click', function () {
               showSection(0);
            });
         });
      }

      if (downloadPdfBtn) {
         downloadPdfBtn.forEach(button => {
            button.addEventListener('click', function () {
               console.log('Download PDF button clicked!');
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



});





