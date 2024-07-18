---
tags:
  - 4semester
  - i2ml
  - statistik
  - vorlesung
fach: "[[I2ML]]"
Thema:
date created: Monday, 22. April 2024, 17:51
date modified: Wednesday, 3. July 2024, 12:38
---

# https://slds-lmu.github.io/i2ml/

# What is Machine Learning?

Welcome to the first video of our series titled "What is Machine Learning". This video aims to introduce several key terms such as Machine Learning (ML), Artificial Intelligence (AI), Deep Learning, and Statistics, and to explore their interrelations and applications in modern technology.

## Overview of Key Terms

Machine Learning is now ubiquitous, significantly impacting various aspects of society from search engines and recommender systems to more critical applications like autonomous driving and algorithmic trading. Let's break down these terms and their relationships:

### Artificial Intelligence (AI)

AI is a broad and rapidly evolving field that lacks a strict, universally accepted definition. Generally, it encompasses any machine capability that mimics human cognitive functions such as learning, reasoning, and problem-solving. Historically, AI has included tasks thought to require human-like intelligence, but once these tasks are algorithmically mastered, they are often perceived as not requiring true intelligence.

AI includes various subfields such as:

- Natural Language Processing
- Computer Vision
- Robotics
- Planning and Search
- Game Playing
- Intelligent Agents

AI might be informally defined as the creation of intelligent agents operating in complex environments.

### Machine Learning (ML)

ML is a well-defined subset of AI focused on developing algorithms that improve automatically through experience. ML models are not explicitly programmed but are trained using large amounts of data. A well-known definition by Tom Mitchell is:

> A computer program is said to learn from experience $E$ with respect to some task $T$ and performance measure $P$, if its performance on $T$, as measured by $P$, improves with experience $E$.

ML can be subdivided into:

- **Supervised Learning**: Focuses on predicting outputs from labeled data, including classification and regression tasks.
- **Unsupervised Learning**: Deals with finding patterns in unlabeled data, such as clustering and dimensionality reduction.
- **Reinforcement Learning**: Involves learning to make sequences of decisions.

### Deep Learning

Deep Learning is a specialized area of ML that utilizes artificial neural networks with many layers (hence "deep"). These networks, while inspired by the biological neural networks of the human brain, function quite differently. Deep learning has been crucial in enabling computers to perform tasks that mimic or even surpass human capabilities in specific domains, such as playing the game Go.

### Statistics

Traditionally, Statistics and Machine Learning have developed along separate but increasingly convergent paths. ML typically emphasizes prediction accuracy, while Statistics focuses more on understanding underlying patterns and making inferences.

- **Parametric and Non-parametric Models**: Both fields utilize these models, although their applications and emphasis might differ.
- **Predictive Modeling**: Machine Learning and Statistical methodologies are often applied interchangeably in this context.

## Interactions Between Fields

The interaction between Machine Learning and Statistics is highlighted by their shared methods and mathematical foundations. The distinction between them is becoming less relevant as both fields address similar problems with overlapping techniques.

## Course Focus

This video sets the stage for a deeper exploration of Machine Learning, particularly through supervised learning. We will start with basic models like K-nearest neighbors and linear/logistic regression and gradually progress to more complex structures.

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

<!-- DISQUS SCRIPT COMMENT START -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://myuninotes.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<!-- DISQUS SCRIPT COMMENT END -->
