---
date created: Monday, 14. October 2024, 21:05
date modified: Tuesday, 15. October 2024, 00:27
tags:
  - 4semester
  - informatik
  - NaCo
fach: NaCo
Thema:
Benötigte Zeit:
---

# **Cheat Sheet: Greedy Algorithm**

- **Definition**: A greedy algorithm makes the _locally_ optimal choice at each step, hoping it will lead to a _globally_ optimal solution.
- **Advantage**: Simple and efficient, as it doesn't require backtracking.
- **Disadvantage**: Doesn't always result in the optimal solution since it only focuses on short-term gains.
- **Examples**:
  - **Coin change problem**: Always picks the largest possible coin to minimize the remaining amount.
  - **Activity selection problem**: Chooses the activity that finishes the earliest to maximize the number of activities.

---

# **Cheat Sheet: Elitist Algorithm**

- **Definition**: An algorithm, particularly in genetic algorithms, that _preserves the best solutions_ from one generation to the next without change.
- **Advantage**: Ensures that the best solutions are not lost, maintaining progress.
- **Disadvantage**: Can lead to _premature convergence_, where the algorithm settles on suboptimal solutions too quickly.
- **Examples**:
  - **Genetic algorithms**: The top-performing individuals are directly passed to the next generation, while the rest undergo mutation and crossover.

---

An algorithm can be both _greedy_ and _elitist_, particularly in the context of **genetic algorithms**. Here’s how:

- **Greedy component**: The algorithm can make local, short-term decisions, like selecting individuals for crossover or mutation based on their current fitness scores.
- **Elitist component**: At the same time, it can preserve the top-performing solutions from the current generation (elitism), ensuring that the best solutions are always carried forward to the next generation.

For example, in a **genetic algorithm with elitism**, the greedy aspect would come into play when selecting parents based on fitness (a greedy choice for reproduction), while the elitist aspect ensures that the very best solutions are never lost.

So, the algorithm can use greedy decisions to explore solutions while still safeguarding the best outcomes through elitism.

<!-- DISQUS SCRIPT COMMENT START -->

<!-- DISQUS RECOMMENDATION START -->

<div id="disqus_recommendations"></div>

<script> 
(function() { // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
var d = document, s = d.createElement('script'); // IMPORTANT: Replace EXAMPLE with your forum shortname!
s.src = 'https://myuninotes.disqus.com/recommendations.js'; s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>
Please enable JavaScript to view the 
<a href="https://disqus.com/?ref_noscript" rel="nofollow">
comments powered by Disqus.
</a>
</noscript>

<!-- DISQUS RECOMMENDATION END -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
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
