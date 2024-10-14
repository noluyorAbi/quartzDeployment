---
date created: Monday, 14. October 2024, 21:42
date modified: Tuesday, 15. October 2024, 00:37
---

# Task 1: Fill in the Blanks

## Key Concepts and Terms

### 1. Natural Computing

Natural computing draws inspiration from **biology** to solve computational problems, such as using evolutionary processes to optimize solutions.

### 2. Game of Life (John Conway)

- **Garden of Eden**: A unique pattern in the Game of Life that has no previous state.
- **Turing-complete**: The Game of Life can simulate any computational algorithm, making it as powerful as any general-purpose computer.
- **Ash**: The state where no new patterns emerge on the Game of Life board.

### 3. No Free Lunch Theorem

This theorem states that all optimization algorithms perform equally well when averaged across all possible problems. No single algorithm works best for every problem.

### 4. Evolutionary Algorithms

- **Increasing Diversity**: Helps avoid **premature convergence**, where the population of solutions becomes too similar, reducing effectiveness.
- **Selection**: Choosing individuals based on their fitness scores to breed the next generation.
- **Crossover**: Combining the genetic information of two parents to create offspring.
- **Mutation**: Random changes introduced to maintain diversity in the population and explore new solutions.

### 5. Quantum Computing

- **Superposition**: A quantum bit (qubit) can exist in multiple states simultaneously before measurement.
- **Entanglement**: Two qubits become correlated so that the state of one affects the state of the other. If one is measured as 0, the other is also 0, and similarly for 1.

---

# Task 4: Optimization

## Part B: Global Optimum and Convergence

### Explanation:

We are asked to show whether **bright side search** always reaches the global optimum and whether it converges.

1. **Target Function**: The function $\tau^{\dagger}(x) = x$ has a global optimum at $x^* = 1$, where $\tau^{\dagger}(x^*) = 0$, and $\tau^{\dagger}(0) = \infty$.

2. **Reaching the Global Optimum**:

   - The **bright side search** algorithm halves the current state $x_t$ (via $\lfloor \frac{x_t}{2} \rfloor$) or moves in the opposite direction, depending on whether it minimizes the target function $\tau$.
   - Since the function $\tau^{\dagger}(x) = x$ is monotonic, the algorithm will eventually reach the optimum $x^* = 1$, as it consistently moves in the direction of improvement.

3. **Why It Doesn’t Converge**:
   - Once $x_t = 1$ is reached, the algorithm sets $x_{t+1} = 50$ due to $\tau^{\dagger}(0) = \infty$, causing the algorithm to jump back to a larger value.
   - This restart prevents the algorithm from converging, as it continually repeats this cycle instead of staying at the global optimum.

---

## Part C: Is Bright Side Search Elitist?

### Explanation:

An **elitist** algorithm ensures that the **best solution** found so far is carried over to the next iteration.

**Bright side search** is **not elitist** because:

- The algorithm depends on the neighboring states of the current solution.
- It may move to a worse solution, as it doesn't store the best found solution from the previous iterations.
- There's no mechanism to ensure that the best solution seen so far is kept.

---

## Part D: Is Bright Side Search Greedy?

### Explanation:

A **greedy** algorithm makes decisions based on the **locally optimal choice** at each step, without considering long-term consequences.

**Bright side search** is **greedy** because:

- It makes a locally optimal decision at each step by comparing the immediate values of $\tau(x_t - 1)$ and $\tau(x_t + 1)$.
- While the step taken might not always be globally optimal, the decision made at each point is the best within that immediate neighborhood.

---

# Task 5:

## 5b: What is $A(X^\dagger, R)$?

1. **What is $A(X^\dagger, R)$?**  
   $A(X^\dagger, R)$ gives all the possible reactions that can be applied to the elements in $X^\dagger$ based on the reaction rules $R$.

2. **Elements in $X^\dagger$:**

   - $(\text{Snail}, 1)$
   - $(\text{HermitCrab}, 2)$
   - $\text{Fish}$

3. **Applicable reaction rules:**

   - $(\text{Snail}, 1)$ → Rule $R_1$ and Rule $R_2$ (because of the presence of $\text{Fish}$).
   - $(\text{HermitCrab}, 2)$ → Rule $R_3$ and Rule $R_4$ (because of $\text{Fish}$).

4. **Result:**
   The possible reactions are:
   - $(\text{Snail}, 1)$, Rule $R_1$
   - $(\text{Snail}, 1) + \text{Fish}$, Rule $R_2$
   - $(\text{HermitCrab}, 2)$, Rule $R_3$
   - $(\text{HermitCrab}, 2) + \text{Fish}$, Rule $R_4$

That's all! $A(X^\dagger, R)$ simply lists these reactions that can be applied to the elements in $X^\dagger$.

---

# Task 6: Evolutionary Computing

## Problem Description

We are given an evolutionary algorithm that minimizes a fitness function $\phi$ over the search space $X = Q^2$, where $Q = [-5, +5] \subset \mathbb{R}$. The goal of the evolutionary algorithm is to find values of $x_0$ and $x_1$ within this range that minimize the function $\phi$, which is defined as:

```python
def fitness_phi(x):
    return max(x[0]**2 + x[1]**2, 50 - x[0]**2 - x[1]**2)
```

This fitness function takes the maximum value between two expressions:

1. $f_1(x) = x[0]^2 + x[1]^2$, which is a parabolic function (opens upwards) and is minimized at the origin, $(0, 0)$.
2. $f_2(x) = 50 - x[0]^2 - x[1]^2$, which is an inverted parabola (opens downwards) and is maximized at the origin, $(0, 0)$.

The task asks us to find two different global optima for this fitness function and suggest a technique to help the evolutionary algorithm find multiple global optima in a single run.

### Part (a): Finding Two Global Optima

#### What Does the Question Mean?

The fitness function $\phi(x)$ has multiple global optima, meaning there are several points in the search space where the function achieves its smallest possible value. In this case, you are asked to identify two different points (optima) where $\phi(x)$ is minimized.

#### Explanation:

The fitness function compares two competing terms:

- $f_1(x)$ increases as $x[0]$ and $x[1]$ move away from the origin.
- $f_2(x)$ decreases as $x[0]$ and $x[1]$ move away from the origin, but is bounded by 50.

The global optima are the points where the function achieves its minimum, meaning where both $f_1(x)$ and $f_2(x)$ are minimized simultaneously. These occur when the function values are equal at certain points in the search space.

#### Solution:

Two examples of global optima that minimize $\phi(x)$ are:

- **Optimum 1**: $(5, 0)$, where the fitness function evaluates to $\phi(5, 0) = 25$.
- **Optimum 2**: $(0, 5)$, where the fitness function also evaluates to $\phi(0, 5) = 25$.

These are points where the function reaches its lowest value of 25, and thus they are two different global optima.

### Part (b): Technique to Find Multiple Optima

#### What Does the Question Mean?

In evolutionary algorithms, the population of solutions tends to converge to a single solution over time, which may prevent the discovery of multiple global optima. The task here is to propose a technique that would allow the algorithm to discover multiple different optima in a single run.

#### Explanation:

To avoid convergence to a single solution, we can promote diversity within the population. This ensures that the algorithm explores various regions of the solution space, increasing the likelihood of finding multiple global optima.

#### Solution:

One effective technique is to use diversity-based selection:

- **Diversity-based selection**: During the selection process, prioritize individuals that are different from others, either in terms of their fitness values or their positions in the search space. This encourages a wider exploration of the solution space.

By promoting diversity, the algorithm is less likely to converge prematurely to a single solution, and instead it will explore different areas of the solution space, increasing the chance of discovering multiple global optima.

This approach ensures that the evolutionary algorithm explores the solution space more thoroughly and finds multiple global optima in a single run.

# Task 6: Evolutionary Computing

## Problem Description

We are given an evolutionary algorithm that minimizes a fitness function $\phi$ over the search space $X = Q^2$, where $Q = [-5, +5] \subset \mathbb{R}$. The goal of the evolutionary algorithm is to find values of $x_0$ and $x_1$ within this range that minimize the function $\phi$, which is defined as:

```python
def fitness_phi(x):
    return max(x[0]**2 + x[1]**2, 50 - x[0]**2 - x[1]**2)
```

### Why Does `fitness_phi(x)` Have Poor Fitness Values at the Center?

The reason why the fitness function `fitness_phi(x)` has poor fitness values near the center of the search space is due to its structure:

- The function compares two terms:
  1. **$f_1(x) = x[0]^2 + x[1]^2$**: This is an upward-opening parabola (a "bowl"-shaped graph) that reaches its minimum at $(0, 0)$. At the origin, $f_1(0, 0) = 0$, but as you move away from the origin, the values of $f_1(x)$ increase.
  2. **$f_2(x) = 50 - x[0]^2 - x[1]^2$**: This is a downward-opening parabola (a "dome"-shaped graph) that reaches its maximum at $(0, 0)$. At the origin, $f_2(0, 0) = 50$, but as you move away from the origin, the values of $f_2(x)$ decrease.

The fitness function $\phi(x)$ takes the maximum value of $f_1(x)$ and $f_2(x)$:

- **At the center $(0, 0)$**:
  - $f_1(0, 0) = 0$
  - $f_2(0, 0) = 50$
  - So, $\phi(0, 0) = 50$, which is the highest value of the fitness function (and since the goal is to minimize, a high value is bad).
- **Farther from the center**:
  - As you move away from $(0, 0)$, $f_1(x)$ increases, and $f_2(x)$ decreases. At some point, when $f_1(x)$ becomes larger than $f_2(x)$, $f_1(x)$ dominates the value of $\phi(x)$.
  - The global minima of the function are therefore not near the center but farther from $(0, 0)$, where the two functions $f_1(x)$ and $f_2(x)$ are better "balanced."

### Part (a): Finding Two Global Optima

The fitness function $\phi(x)$ has multiple global optima, meaning there are several points in the search space where the function achieves its smallest possible value. Two examples of global optima that minimize $\phi(x)$ are:

- **Optimum 1**: $(5, 0)$, where the fitness function evaluates to $\phi(5, 0) = 25$.
- **Optimum 2**: $(0, 5)$, where the fitness function also evaluates to $\phi(0, 5) = 25$.

These are points where the function reaches its lowest value of 25, and thus they are two different global optima.

### Part (b): Technique to Find Multiple Optima

In evolutionary algorithms, the population of solutions tends to converge to a single solution over time, which may prevent the discovery of multiple global optima. One effective technique to address this is using **diversity-based selection**. This approach encourages the selection of individuals that are different from others in terms of their fitness values or positions in the search space, leading to a wider exploration and helping the algorithm find multiple global optima.

---

### Part (c): Recombination Functions

Consider the following two recombination functions given in Python. Note that the Python function `random.random()` returns a random floating point number $n$ between 0.0 (inclusive) and 1.0 (exclusive), i.e., $n \sim [0.0, 1.0)$.

```python
import random

def recombine_avg(parent_a, parent_b):
    child = [0.0, 0.0]
    child[0] = (parent_a[0] + parent_b[0]) / 2.0
    child[1] = (parent_a[1] + parent_b[1]) / 2.0
    return child

def recombine_xover(parent_a, parent_b):
    if random.random() < 0.5:
        return [parent_a[0], parent_b[1]]
    else:
        return [parent_b[0], parent_a[1]]
```

**Which of the two recombination functions `recombine_avg` and `recombine_xover` is better suited for the optimization problem given by `fitness_phi`?**

#### Explanation:

The fitness function `fitness_phi` has poor fitness values near the center of the search space (around $(0, 0)$), while the global optima are located closer to the edges of the space (e.g., $(5, 0)$, $(0, 5)$).

- **`recombine_avg`**: This function averages the values of the parents, which means it tends to create offspring closer to the midpoint between the parents. If the parents are from different parts of the search space (e.g., $(5, 0)$ and $(-5, 0)$), the offspring will be drawn toward the center (near $(0, 0)$), where the fitness is poor. Over multiple generations, this leads to a concentration of offspring near the center, which is not ideal for this problem.
- **`recombine_xover`**: This function randomly selects components from the parents, allowing for a wider distribution of offspring across the search space. This prevents the population from converging too quickly near the center and increases the likelihood of finding global optima near the edges.

#### Conclusion:

- **`recombine_xover`** is better suited for the optimization problem because it spreads offspring more evenly across the search space, avoiding the center where fitness is poor.
- **`recombine_avg`** is less ideal because it tends to pull offspring toward the center, potentially leading to suboptimal solutions.

---

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
