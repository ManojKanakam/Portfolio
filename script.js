// your code goes here
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
  
  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")
  
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })
  
  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar")
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
  
  // Active navigation link highlighting
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")
  
  window.addEventListener("scroll", () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })
  
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })
  
  // Typing animation for hero title
  function typeWriter(element, text, speed = 100) {
    let i = 0
    element.innerHTML = ""
  
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }
  
    type()
  }
  
  // Initialize typing animation when page loads
  window.addEventListener("load", () => {
    const typingElement = document.querySelector(".typing-text")
    if (typingElement) {
      typeWriter(typingElement, "Hi, I'm Manoj Kanakam", 80)
    }
  })
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)
  
  // Add animation classes and observe elements
  window.addEventListener("load", () => {
    // Fade in animations
    document.querySelectorAll(".skill-category, .project-card, .cert-card, .achievement-card").forEach((el) => {
      el.classList.add("fade-in")
      observer.observe(el)
    })
  
    // Slide in animations
    document.querySelectorAll(".timeline-item:nth-child(odd)").forEach((el) => {
      el.classList.add("slide-in-left")
      observer.observe(el)
    })
  
    document.querySelectorAll(".timeline-item:nth-child(even)").forEach((el) => {
      el.classList.add("slide-in-right")
      observer.observe(el)
    })
  
    // Scale in animations
    document.querySelectorAll(".stat-item, .education-card, .research-card").forEach((el) => {
      el.classList.add("scale-in")
      observer.observe(el)
    })
  })
  
  // Contact form handling
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault()
  
    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")
  
    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields")
      return
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address")
      return
    }
  
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent
  
    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true
  
    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon.")
      this.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })
  
  // Parallax effect for hero background
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector(".hero")
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })
  
  // Add hover effects to cards
  document.querySelectorAll(".project-card, .skill-category, .cert-card, .achievement-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })
  
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
  
  // Smooth reveal animation for sections
  const revealSections = document.querySelectorAll("section")
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.15,
    },
  )
  
  revealSections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "all 0.6s ease-out"
    revealObserver.observe(section)
  })
  
  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")
  })
  
  // Preloader styles (add to CSS if needed)
  const style = document.createElement("style")
  style.textContent = `
      body:not(.loaded) {
          overflow: hidden;
      }
      
      body:not(.loaded)::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
      }
      
      body:not(.loaded)::after {
          content: 'Loading...';
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          z-index: 10000;
          animation: pulse 1.5s ease-in-out infinite;
      }
      
      @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
      }
  `
  document.head.appendChild(style)
  
  // Add click to call and email functionality
  document.addEventListener("DOMContentLoaded", () => {
    // Make phone number clickable
    const phoneElements = document.querySelectorAll(
      ".contact-item:first-child span, .hero-buttons + div .bg-white\\/10:nth-child(2) span",
    )
    phoneElements.forEach((el) => {
      if (el.textContent.includes("+91")) {
        el.style.cursor = "pointer"
        el.addEventListener("click", () => {
          window.location.href = "tel:+917981419024"
        })
      }
    })
  
    // Make email clickable
    const emailElements = document.querySelectorAll(".contact-item:nth-child(2) span")
    emailElements.forEach((el) => {
      if (el.textContent.includes("@")) {
        el.style.cursor = "pointer"
        el.addEventListener("click", () => {
          window.location.href = "mailto:manojkanakam9@gmail.com"
        })
      }
    })
  })
  
  // Add smooth scrolling to all internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerOffset = 70
        const elementPosition = target.offsetTop
        const offsetPosition = elementPosition - headerOffset
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })
  