class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, closeBtn) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.closeBtn = document.querySelector(closeBtn);
      this.activeClass = "active";
      this.closingClass = "closing";
  
      this.handleClick = this.handleClick.bind(this);
      this.handleLinkClick = this.handleLinkClick.bind(this);
      this.handleCloseClick = this.handleCloseClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    handleLinkClick() {
      this.navList.classList.add(this.closingClass);
      this.mobileMenu.classList.remove(this.activeClass);
      setTimeout(() => {
        this.navList.classList.remove(this.activeClass, this.closingClass);
      }, 500);
    }
  
    handleCloseClick() {
      this.navList.classList.add(this.closingClass);
      this.mobileMenu.classList.remove(this.activeClass);
      setTimeout(() => {
        this.navList.classList.remove(this.activeClass, this.closingClass);
      }, 500);
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      this.navLinks.forEach((link) => {
        link.addEventListener("click", this.handleLinkClick);
      });
      if (this.closeBtn) {
        this.closeBtn.addEventListener("click", this.handleCloseClick);
      }
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".menu_mobile",
    ".nav_lista",
    ".nav_lista li",
    ".menu_fechar"
  );
  mobileNavbar.init();