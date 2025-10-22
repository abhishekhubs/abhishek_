// TiltedCard.js - Simple vanilla JS implementation for tilt effect
class TiltedCard {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      scaleOnHover: options.scaleOnHover || 1.1,
      rotateAmplitude: options.rotateAmplitude || 14,
      ...options
    };

    this.isHovered = false;
    this.mouseX = 0;
    this.mouseY = 0;

    this.init();
  }

  init() {
    // Create inner container for 3D transforms
    this.inner = document.createElement('div');
    this.inner.className = 'tilted-card-inner';
    this.inner.style.width = '100%';
    this.inner.style.height = '100%';
    this.inner.style.transformStyle = 'preserve-3d';
    this.inner.style.transition = 'transform 0.3s ease';
    this.inner.style.position = 'relative';

    // Move all children to inner container
    while (this.element.firstChild) {
      this.inner.appendChild(this.element.firstChild);
    }
    this.element.appendChild(this.inner);

    // Bind event handlers
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    // Add event listeners
    this.element.addEventListener('mousemove', this.handleMouseMove);
    this.element.addEventListener('mouseenter', this.handleMouseEnter);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
  }

  handleMouseMove(e) {
    if (!this.isHovered) return;

    // Check if hovering over text content
    const target = e.target;
    if (target.tagName === 'H3' || target.tagName === 'P' || target.classList.contains('edu-body') || target.classList.contains('edu-year')) {
      // Reset tilt when over text
      this.inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
      return;
    }

    const rect = this.element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    this.mouseX = (e.clientX - centerX) / (rect.width / 2);
    this.mouseY = (e.clientY - centerY) / (rect.height / 2);

    const rotateX = this.mouseY * -this.options.rotateAmplitude;
    const rotateY = this.mouseX * this.options.rotateAmplitude;

    this.inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  handleMouseEnter(e) {
    this.isHovered = true;
    this.element.style.transform = `scale(${this.options.scaleOnHover})`;
    this.element.style.transition = 'transform 0.3s ease';
  }

  handleMouseLeave(e) {
    this.isHovered = false;
    this.inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    this.element.style.transform = 'scale(1)';
  }
}

// Export for use in other files
window.TiltedCard = TiltedCard;
