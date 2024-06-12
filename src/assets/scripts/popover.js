class Popover {
  constructor(button) {
    this.button = button;
    this.popover = document.querySelector(
      "#" + button.getAttribute("popovertarget")
    );
    this.isMouseOverPopover = false;
    this.listenersAdded = false;
    this.init();
  }

  init() {
    this.button.addEventListener("mouseenter", () =>
      this.handleButtonMouseEnter()
    );
  }

  addPopoverListeners() {
    this.button.addEventListener("mouseleave", () =>
      this.handleButtonMouseLeave()
    );
    this.popover.addEventListener("mouseenter", () =>
      this.handlePopoverMouseEnter()
    );
    this.popover.addEventListener("mouseleave", () =>
      this.handlePopoverMouseLeave()
    );
  }

  removePopoverListeners() {
    this.button.removeEventListener("mouseleave", () =>
      this.handleButtonMouseLeave()
    );
    this.popover.removeEventListener("mouseenter", () =>
      this.handlePopoverMouseEnter()
    );
    this.popover.removeEventListener("mouseleave", () =>
      this.handlePopoverMouseLeave()
    );
  }

  handleButtonMouseEnter() {
    if (window.getComputedStyle(this.popover).display !== "none") {
      return;
    }
    setTimeout(() => {
      if (this.button.matches(":hover")) {
        this.popover.showPopover();
        if (!this.listenersAdded) {
          this.addPopoverListeners();
          this.listenersAdded = true;
        }
      }
    }, 350);
  }

  handleButtonMouseLeave() {
    setTimeout(() => {
      if (!this.button.matches(":hover") && !this.isMouseOverPopover) {
        this.popover.hidePopover();
        this.removePopoverListeners();
        this.listenersAdded = false;
      }
    }, 500);
  }

  handlePopoverMouseEnter() {
    this.isMouseOverPopover = true;
  }

  handlePopoverMouseLeave() {
    this.isMouseOverPopover = false;
    setTimeout(() => {
      if (!this.button.matches(":hover") && !this.isMouseOverPopover) {
        this.popover.hidePopover();
        this.removePopoverListeners();
        this.listenersAdded = false;
      }
    }, 500);
  }
}

document
  .querySelectorAll("button[popovertarget]")
  .forEach((button) => new Popover(button));
