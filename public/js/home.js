window.onload = () => {
   const menuButton = document.getElementById("menuButton");
   const dropdownMenu = document.getElementById("dropdownMenu");
   const closeDropdown = document.getElementById("closeDropdown");
   const cardContainer = document.querySelector(".card-container");
   const body = document.body;
   const switchDarkOrLight = document.querySelector(".toggle-switch");
   const switchDiv = document.querySelector(".switch");
   
   
   const isDarkOrLight = localStorage.getItem("darkorwhitemode") === "true";

   if (isDarkOrLight) {
      body.classList.add("light-container");
      switchDarkOrLight.checked = true;
   }

   switchDarkOrLight.addEventListener("change", () => {
      
      
      if (switchDarkOrLight.checked) {
         body.classList.add("light-container");
         localStorage.setItem("darkorwhitemode", "true");
      }
      else {
         body.classList.remove("light-container");
         localStorage.setItem("darkorwhitemode", "false");
      }

   })
   
   const isDropdownOpen = localStorage.getItem('dropdownOpen') === 'true';
   const fillContainer = document.querySelector(".fill-container");
   const aboutContainer = document.querySelector(".about-container");
   if (isDropdownOpen) {
      dropdownMenu.classList.remove('hidden');
      if (cardContainer) {
         cardContainer.style.marginTop = "250px";
      }
      if (aboutContainer) {
         aboutContainer.style.marginTop = "250px";
      }
      if (fillContainer) {
         fillContainer.style.marginTop = "290px";
      }
      
   }
   // Open dropdown menu
   menuButton.addEventListener("click", (event) => {
      
      
      dropdownMenu.classList.toggle("hidden");
      
   
      
      const isOpen = !dropdownMenu.classList.contains('hidden');
      localStorage.setItem('dropdownOpen', isOpen.toString());
      
      if (isOpen) {
         if (cardContainer) {
            cardContainer.style.marginTop = "250px";
         }
         if (aboutContainer) {
            aboutContainer.style.marginTop = "250px";
         }
         
         if (fillContainer) {
            fillContainer.style.marginTop = "290px";
         }
         
      } else {
         if (cardContainer) {
            cardContainer.style.marginTop = "0px";
         }
         if (fillContainer) {
            fillContainer.style.marginTop = "0px";
         }
         if (aboutContainer) {
            aboutContainer.style.marginTop = "0px";
         }
      }
   
      event.stopPropagation();
   });

   // Close dropdown menu
   closeDropdown.addEventListener("click", () => {
      dropdownMenu.classList.add("hidden");
      localStorage.setItem('dropdownOpen', 'false');
      if (cardContainer) {
         cardContainer.style.marginTop = "0px";
      }
      if (fillContainer) {
         fillContainer.style.marginTop = "0px";
      }
      if (aboutContainer) {
         aboutContainer.style.marginTop = "0px";
      }
      
      else {
         return
      }
   });

   document.addEventListener('click', (event) => {
      if (!dropdownMenu.contains(event.target) && event.target !== menuButton) {
         dropdownMenu.classList.add('hidden');
         localStorage.setItem('dropdownOpen', 'false');
         if (cardContainer) {
            cardContainer.style.marginTop = "0px";
         }
         if (fillContainer) {
            fillContainer.style.marginTop = "0px";
         }
         if (aboutContainer) {
            aboutContainer.style.marginTop = "0px";
         }
         else {
            return
         }
      }
   });
   
   
   // JavaScript to add 'active' class on click
   const navLinks = document.querySelectorAll('.button');

  
   
   navLinks.forEach(button => {
      button.addEventListener('click', () => {
         navLinks.forEach(btn => btn.classList.remove('clicked'));
         button.classList.add('clicked');
      });
   });
   
   
   const currentPath = window.location.pathname;
   navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
         link.classList.add('clicked');
      }
   });
   
}

const templateMapping = {
   0: 1, 
   1: 2,
   2: 3, 
};


const cardInfos = document.querySelectorAll(".card-info");

cardInfos.forEach((cardInfo,index) => {
   cardInfo.addEventListener("click", (event) => {
    
      const templateId = templateMapping[index]; 
      
      console.log("Selected Template:", templateId);
      
      sessionStorage.setItem("selectedTemplateId", templateId);
      
      window.location.href = "/fillDetails";
      event.stopPropagation();
   });
});







