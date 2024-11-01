---
date created: Friday, 1. November 2024, 16:14
date modified: Friday, 1. November 2024, 16:35
---

# Computational Intelligence WS24/25

**Exercise Sheet 1 — October 31st, 2024**

# 1 Simple Grid Environment

Consider the simple grid world example below, where an agent can move on _tiles_ but is not allowed to stand still, starting from the initial position (S) with the purpose of reaching the goal tile (G). The agent can move between all numbered tiles that are not walls (outside the grid) or blocked (⊗). Execution is stopped on reaching the goal tile.

![[Pasted image 20241101161648.png]]

## (i) Task

> _Consider the small grid-world shown in Example 1a. Define a set of possible observations $\mathcal{O}$ and a set of possible actions $\mathcal{A}$ in accordance to the definition given in the lecture. For your definition, what are $|\mathcal{A}|$ and $|\mathcal{O}|$? _
>
> _*Note*: Recall that for any finite set $X = \{x_0, \dots, x_n\}$ we write $|X| = n$ for the number of elements in $X$. For infinite sets, we also write $|X| = \infty$._

## (ii)

> _Similarly, for the grid world in Example 1a, define a goal predicate $\gamma_1$ that accepts a policy that (a) finds the way from the start tile (S) to the goal tile (G) in the optimal amount of steps and (b) only steps on tile-numbers which are strictly bigger than any of the tile-numbers visited before. Then provide a solution path, i.e., $\pi_a$, for which $\gamma_1(\pi_a) = \text{True}$. Which of the goal classes we have covered in the lecture could $\gamma_1$ fall under?_

## (iii)

> _Now consider the grid world shown in Example 1b. For the given solution trajectory $\pi_b$ (red line) give $\langle a_t \rangle_{t \in \mathbb{Z}}$ and $\langle o_t \rangle_{t \in \mathbb{Z}}$. What is the response from $\gamma_1(\pi_b)$ in this case?\_

## (iv)

> Recall that in the lecture we are covering simple (policy) search approaches, one of them being random search (see Algorithm 1 below) with $n$ attempts, i.e., $\rho(n)$. Let us assume that random sampling $\pi \sim \Pi$ can only produce policies that always execute valid actions, i.e., never produce sequences of actions that would lead the agent to run into a wall or blocked field. What is the probability of the policy $\pi_b$ being found by $\rho(8)$ in the grid world Example 1b? Briefly explain your answer.
>
> **Algorithm 1** (random search (policy)). Let $A$ be a set of actions. Let $O$ be a set of observations. Let $\Gamma \subseteq (O \rightarrow A) \rightarrow \mathbb{B}$ be a space of goal predicates on policy functions. Let $\gamma \in \Gamma$ be a goal predicate. We assume that the policy space $\Pi \subseteq O \rightarrow A$ can be sampled from, i.e., $\pi \sim \Pi$ returns a random element from $\Pi$. Random search for $n$ samples is given via the function

$$
\rho(n) = \begin{cases}
\emptyset & \text{if } n = 0, \\
\pi & \text{if } n > 0 \text{ and } \gamma(\pi) \text{ where } \pi \sim \Pi, \\
\rho(n - 1) & \text{otherwise}.
\end{cases}
$$

_Hint_: You can assume that the probability that a random policy $\pi \sim \Pi$ will execute valid action $a$ at time step $t$ from the set of valid actions $A_t$ at time step $t$ is given via $\Pr(\pi(o_t) = a \mid \pi \sim \Pi) = \frac{1}{|A_t|}$.

## (v)

> Finally, provide a tile-numbering and goal-position in the Template 1c such that $\gamma_1(\rho(4))$ is guaranteed to be $\text{True}$ and explain why. You may set one blocking tile ⊗ (on any tile except the initial position (S)) that cannot be traversed.

---

# 2 Squirrel Environment

For scientific purposes, we want to deploy a SquirrelBot, i.e., a small robotic agent that is able to drive across soil and dig for nuts. It can observe its exact location $p \in C$ with $C = [0, 100] \times [0, 100] \subset \mathbb{R}^2$ on a continuous 2D plane representing the accessible soil. In the same plane it can also observe a marked target location $g \in L$ that it wants to navigate to. The value of $g$ is provided by a MemoryAgent that tries to remember all locations where nuts are buried, but to the SquirrelBot that location $g$ (like its own location $p$) is just part of its observation. The SquirrelBot can execute an action $a$ of the form $a = (\delta x, \delta y, \text{dig}) \in \mathbb{R} \times \mathbb{R} \times \mathbb{B}$ once per time step. The action is resolved by the environment by updating the robot’s own location by $\delta x, \delta y$ and then digging at the new location if $\text{dig} = \text{True}$. However, all actions that attempt to drive a distance greater than 1 (i.e., $\sqrt{(\delta x)^2 + (\delta y)^2} > 1$) per time step are completely ignored by the environment.

## (i)

Assume that the complete state of the system is given by the position of the SquirrelBot at time step $t$, the position of the marked target location $g_t$, and a flag $\text{dug}_t$ marking if the SquirrelBot attempted to dig (after driving) at time step $t$, i.e., the whole system generates a sequence of states $(s_t)_{0 \leq t \leq T}$ for some fixed maximum episode length $T \in \mathbb{N}$ and $s_t \in L \times C \times \mathbb{B}$. Give a goal predicate $\gamma_1 : (L \times C \times \mathbb{B}) \rightarrow \mathbb{B}$ so that $\gamma_1((p_t, g, \text{dug}_t)_{0 \leq t \leq T})$ holds if the agent has at one point in time attempted to dig at a location nearer than 1 to the target location $g$.

_Note_: The state reflects all information contained in both the agent and the environment, as opposed to the observations which may only contain parts of it. Since there is nothing more we could know about the policy, we can thus also define goal predicates to be evaluated on that system state.  
_Hint_: You can use the function $\text{dist} : L \times L \rightarrow \mathbb{R}$ to compute the Euclidean distance between two points in $L$, i.e., $\text{dist}((x_1, y_1), (x_2, y_2)) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$.

## (ii)

Given a SquirrelBot with the same information $(p_t, g_t, \text{dug}_t)$, now also give a goal predicate $\gamma_2 : (L \times C \times \mathbb{B}) \rightarrow \mathbb{B}$ so that $\gamma_2((p_t, g_t, \text{dug}_t)_{0 \leq t \leq T})$ holds if the agent has, presumably running out of robot patience, attempted to dig at every second step for exactly 10 steps, coming closer to the goal each time and reaching the goal by digging (within a distance of less than 0.01) on the final, 10th of these steps, thus completing the trajectory.

## (iii)

Assume that the whole plane of soil is without obstacles and thus easily navigable for the SquirrelBot. Give a policy $\pi$ that always fulfills the goal predicate $\gamma_1$ eventually regardless of the initial state. Also give $\pi$'s type signature.  
_Hint_: You do not need to construct the fastest such policy.

---

# 3 Running Example: Vacuum World

For the various classes of the goal hierarchy it may be intuitively helpful to code the running examples along as we develop them formally.

(i) Implement in Python a simple Vacuum World as we have seen it in the lecture. The implementation should adequately model the concepts of observations and actions, which a policy $\pi$ should be able to exert. A randomly acting policy will suffice initially.

(ii) In the lecture we have discussed the following goal predicate $\gamma$:

$\gamma$ should hold iff the agent does not execute the same action for all observations,

or more formally:

$$
\gamma(\pi) \iff \neg \exists a \in A : \forall o \in O : \pi(o) = a.
$$

In your Python implementation, collect a number of actions and observations for a policy of your choice, then implement and verify the goal predicate $\gamma$.

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
