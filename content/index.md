---
Thema:
tags:
  - informatik
  - statistik
fach:
title: Studying made easy.
description: Explore MyUniNotes for comprehensive study guides, summaries, and academic resources tailored for students across Computer Science. Elevate your learning, ace your exams, and connect with peers for collaborative study. Your go-to for academic success!
date created: Thursday, 21. March 2024, 01:39
date modified: Monday, 24. June 2024, 14:44
---

<!-- Scroll Indicator-->
<div class="container">
<div class="chevron"></div>
<div class="chevron"></div>
<div class="chevron"></div>
<span class="text">Scroll down</span>
</div>
<!-- Scroll Indicator END -->

# ℹ️ About This Site

This website serves as a centralized archive, offering you structured access to a wealth of study materials that I’ve gathered and written in the language of the module (mostly German). It’s designed to provide a clear, organized, and comprehensive resource for anyone interested in the intricacies of computer science, as seen through my personal academic lens. If necessary, the website can be translated into any required language using a browser’s built-in translator.

# 💬 Comments

- Each chapter ends with a comment section for open, [[Comment Policy|respectful discussions]].
- Readers are encouraged to share thoughts, feedback, and questions to enhance the content and community.
- **Guest commenting:**
  - Click `Name` next to the Google icon.
  - Click `I'd rather post as a guest` to comment without an account.
  - Use a guest name and a gibberish email (e.g., `abc@def.com`) for posting.
- Image upload function available for sharing complex equations, diagrams, and visual aids.

(<a href="#guestbook">Leave a comment on the Guestbook!</a>)

# 📚 Modules

| Bereich        | Kurse                                                   | Status |
| -------------- | ------------------------------------------------------- | ------ |
| **Informatik** | [[Datenbanksysteme (DBS)]]                              | done   |
|                | [Softwaretechnik (SWT)](https://hustle-swt.vercel.app/) | done   |
|                | [[Formale Sprachen und Komplexität (FSK)]]              | active |
|                | [[Rechnernetze und Verteilte Systeme (RNVS)]]           | active |
|                | [[Bachelorseminar-Software Security]]                   | active |
| **Statistik**  | [[LiMo]]                                                |        |
|                | [[BaySta]]                                              | active |
|                | [[I2ML]]                                                |        |
| **Semester**   | [[3.Semester]]                                          | done   |
|                | [[4.Semester]]                                          | active |

# 🔄 Website Update Graph

This graph shows the fluctuating activity on the website over time. It reflects my ongoing efforts to update and improve content, ensuring it remains relevant and informative in the field of computer science.

<!-- IMPORT SVG HERE -->

<!-- IMPORT SVG HERE END -->

<center>
<h1 id="guestbook" style="font-family: 'Arial', sans-serif; font-size: 36px; font-weight: bold; margin-top: 40px;">↓ 📖 Guestbook ↓</h1>
</center>



<!-- <script>
  // JavaScript to slide down the banner on page load
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      const banner = document.getElementById('slidingBanner');
      if (banner) {
        banner.classList.add('show');
      }
    }, 500); // Adjust the delay as needed

    const closeBanner = document.getElementById('closeBanner');
    if (closeBanner) {
      closeBanner.addEventListener('click', function() {
        const banner = document.getElementById('slidingBanner');
        if (banner) {
          banner.classList.remove('show');
          banner.style.visibility = 'hidden';
        }
      });
    }
  });
</script> -->


<!-- Sliding Banner -->

<div id="slidingBanner" class="banner">
  <p class="banner-text">
    Explore MyUniNotes for comprehensive study guides and academic resources tailored for Computer Science students!
  </p>
  <svg id="closeBanner" class="arrows">
    <path d="M0 20 L20 42 L40 20"></path>
    <path d="M0 40 L20 62 L40 40"></path>
  </svg>
</div>

<script>
  // JavaScript to slide down the banner on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 5
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const banner = document.getElementById('slidingBanner');
        if (banner) {
          banner.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeBanner = document.getElementById('closeBanner');
      if (closeBanner) {
        closeBanner.addEventListener('click', function() {
          const banner = document.getElementById('slidingBanner');
          if (banner) {
            banner.classList.remove('show');
            banner.style.visibility = 'hidden';
          }
        });
      }
    } else {
      // Remove the banner from the DOM if the random number is not 1
      const banner = document.getElementById('slidingBanner');
      if (banner) {
        banner.remove();
      }
    }
  });
</script>

<!-- Sliding Banner END -->
