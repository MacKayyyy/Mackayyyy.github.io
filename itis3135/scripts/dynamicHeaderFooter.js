document.addEventListener("DOMContentLoaded", function() {
    // Load the header dynamically
    fetch("components/mainmenu.json")
    .then((response) => response.json())
    .then((data) => {
        const container = document.getElementById("menu-container");

        data.menus.forEach((menu) => {
            const nav = document.createElement("nav");
            nav.classList.add("navbar");

            // Only create a section title if it exists
            if (menu.section) {
                const sectionTitle = document.createElement("h3");
                sectionTitle.textContent = menu.section;
                nav.appendChild(sectionTitle);
            }

            menu.links.forEach((linkData) => {
                const link = document.createElement("a");
                link.href = linkData.url;
                link.textContent = linkData.name;
                nav.appendChild(link);
            });

            container.appendChild(nav);
        });
    })
    .catch((error) => console.error("Error loading menus:", error));

    // Load the footer dynamically
    fetch("components/footermenu.json")
    .then((response) => response.json())
    .then((data) => {
        const footerContainer = document.querySelector("footer");

        // Create the "Useful Links" section
        const usefulLinksText = document.createElement("p");
        usefulLinksText.textContent = "Useful links will go here";
        footerContainer.appendChild(usefulLinksText);

        const usefulLinksNav = document.createElement("nav");
        usefulLinksNav.classList.add("footer-section");  // Add the class for styling

        data.footer.usefulLinks.links.forEach((linkData) => {
            const link = document.createElement("a");
            link.href = linkData.url;
            link.textContent = linkData.name;
            link.target = linkData.target || "_self";
            link.classList.add("link");  // Add 'link' class for footer link styling
            usefulLinksNav.appendChild(link);
        });

        footerContainer.appendChild(usefulLinksNav);

        // Create the footer section links
        const footerLinksSection = document.createElement("section");

        data.footer.footerLinks.forEach((footerLink, index) => {
            const footerLinkElement = document.createElement("a");
            footerLinkElement.href = footerLink.url;
            footerLinkElement.textContent = footerLink.name;
            footerLinkElement.id = footerLink.id;
            footerLinkElement.classList.add("footer-section");  // Add 'footer-section' class

            footerLinksSection.appendChild(footerLinkElement);

            // Add a comma and space after each link except the last one
            if (index < data.footer.footerLinks.length - 1) {
                const comma = document.createElement("span");
                comma.textContent = ", ";
                footerLinksSection.appendChild(comma);
            }
        });

        footerContainer.appendChild(footerLinksSection);
    })
    .catch((error) => console.error("Error loading footer:", error));
});
