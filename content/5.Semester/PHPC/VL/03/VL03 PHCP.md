---
date created: Friday, 1. November 2024, 18:00
date modified: Friday, 1. November 2024, 18:19
---

Your document with LaTeX expressions converted as requested:

---

# Parallel Computing Study Guide

**Instructor:** Dr. Karl Fürlinger  
**Department:** Chair of Communication Systems and System Programming  
**Semester:** WS24/25

---

## Table of Contents

1. Definitions and Terminology
   - Distributed, Concurrent, and Parallel Computing
   - Speedup and Efficiency
2. Concepts
   - Weak Scaling
   - Strong Scaling
3. Parallel Algorithms
   - Task Decomposition
   - Decomposition Techniques
4. Platforms
   - Shared Memory
   - Distributed Memory
   - Threading vs. Message Passing
5. Summary
6. Exercise
7. Formulas Summary

---

## Definitions and Terminology

### Distributed, Concurrent, and Parallel Computing

- **Concurrent Computing:**

  - Involves multiple interacting threads of execution.
  - **Use Cases:**
    - Graphical User Interfaces (GUIs) or event-driven reactive code.
    - Online Transaction Processing (OLTP) systems.
  - **Purpose:** Enhances design clarity and responsiveness, even on single-core systems.

- **Distributed Computing:**

  - Applications run on geographically separated systems.
  - **Use Cases:**
    - Client/Server models, Web services, Grid computing, Cloud computing.
  - **Purpose:** Facilitates collaboration across multiple locations and scales.

- **Parallel Computing:**
  - Utilizes multiple computing cores or processors to perform computations simultaneously.
  - **Focus of the Course:**
    - Leveraging multicore systems across various platforms (handheld devices, servers, supercomputers).
    - Writing explicit parallel programs to utilize multiple cores effectively.

---

## Concepts

### Speedup and Efficiency

- **Execution Times:**

  - $T_1$: Execution time on a single core (sequential execution).
  - $T_n$: Execution time on $n$ cores.

- **Speedup ($S_n$):**
  \[
  S_n = \frac{T_1}{T_n}
  \]

  - Typically, $1 \leq S_n \leq n$.
  - **Superlinear Speedup:** $S_n > n$ (rare, often due to cache effects).

- **Efficiency ($E_n$):**
  \[
  E_n = \frac{S_n}{n}
  \]
  - Ranges from $\frac{1}{n}$ to 1.
  - Indicates how effectively parallel resources are utilized.

### Amdahl’s Law

- **Definition:**  
  The maximum achievable speedup of a program using parallel processing is limited by the serial portion of the program.

- **Formula:**  
  \[
  S_n = \frac{1}{(1 - P) + \frac{P}{n}}
  \]

  - $P$: Fraction of the program that can be parallelized.
  - $n$: Number of processors.

- **Implications:**  
  As $n$ increases, the speedup $S_n$ is bounded by the serial portion $(1 - P)$.

### Weak Scaling vs. Strong Scaling

- **Strong Scaling:**

  - **Definition:** Keeping the problem size constant while increasing the number of processors.
  - **Goal:** Achieve a linear decrease in execution time with more cores.
  - **Challenge:** Overcome limitations imposed by the serial portion of the application.

- **Weak Scaling:**
  - **Definition:** Increasing the problem size proportionally with the number of processors.
  - **Goal:** Maintain constant execution time despite growing problem size.
  - **Advantage:** More achievable as it aligns workload with available resources.

---

## Parallel Algorithms

### Task Decomposition

- **Definition:**  
  Dividing the main computation into smaller, independent tasks that can be executed in parallel.

- **Granularity:**

  - **Fine-Grained:** Large number of small tasks (high parallelism, higher overhead).
  - **Coarse-Grained:** Small number of large tasks (lower parallelism, lower overhead).

- **Considerations:**
  - Balance between the number of tasks and the overhead of managing them.
  - Identify inherently parallelizable components of the problem.

### Decomposition Techniques

- **Data Decomposition (Domain Decomposition):**  
  Splitting data into distinct segments, each processed independently.

- **Recursive Decomposition:**

  - **Approach:** Divide and conquer.
  - **Example:** Quicksort.

- **Functional Decomposition:**

  - **Approach:** Dividing the program into separate functions or modules that can run in parallel.
  - **Example:** Pipelining different stages of a data processing pipeline.

- **Exploratory Decomposition:**

  - **Approach:** Decomposing the search space, often used in search algorithms and tree traversals.
  - **Example:** Parallel search in the 15-puzzle problem.

- **Speculative Decomposition:**
  - **Approach:** Precomputing multiple potential outcomes to anticipate future computation needs.

---

## Platforms

### Shared Memory

- **Characteristics:**

  - All processors have direct access to a common shared memory space.
  - Suitable for systems with Uniform Memory Access (UMA) or Non-Uniform Memory Access (NUMA).

- **Advantages:**

  - Easier data sharing and communication between threads.
  - Lower communication overhead compared to distributed memory systems.

- **Challenges:**
  - Synchronization issues (e.g., data races).
  - Scalability limited by memory bandwidth and contention.

### Distributed Memory

- **Characteristics:**

  - Each processor has its own private memory.
  - Communication between processors is done explicitly through message passing.

- **Advantages:**

  - Highly scalable to large numbers of processors.
  - Suitable for geographically dispersed systems.

- **Challenges:**
  - Higher communication overhead.
  - More complex programming model (e.g., MPI).

### Threading vs. Message Passing

- **Threading (Shared Memory):**

  - **Description:** Multiple threads within the same process share the same memory space.
  - **Advantages:**
    - Efficient data sharing.
    - Lower overhead for communication.
  - **Disadvantages:**
    - Requires careful synchronization.
    - Potential for concurrency bugs.

- **Message Passing (Distributed Memory):**
  - **Description:** Processes communicate by sending and receiving messages.
  - **Advantages:**
    - Better suited for distributed systems.
    - Avoids shared state issues.
  - **Disadvantages:**
    - Higher communication overhead.
    - More complex to implement.

---

## Summary

- **Types of Computing:**

  - **Concurrent Computing:** Enhances design clarity and responsiveness through multiple interacting threads, even on single-core systems.
  - **Distributed Computing:** Enables collaboration across geographically separated systems using client/server models, web services, grid, and cloud computing.
  - **Parallel Computing:** Achieves performance and scalability by utilizing multiple cores or processors to perform computations simultaneously.

- **Performance Metrics:**

  - **Speedup ($S_n$)** and **Efficiency ($E_n$)** are crucial indicators of parallel program performance.
  - **Amdahl’s Law** highlights the limitations imposed by the serial portion of programs on achievable speedup.

- **Scaling:**

  - **Strong Scaling:** Focuses on reducing execution time with a fixed problem size as more processors are added.
  - **Weak Scaling:** Maintains constant execution time by increasing the problem size in proportion to the number of processors.

- **Algorithm Design:**

  - Effective **task decomposition** and appropriate **decomposition techniques** are essential for maximizing parallel performance.

- **Platforms:**
  - **Shared Memory** systems offer easier data sharing but face scalability challenges.
  - **Distributed Memory** systems provide high scalability but require more complex communication mechanisms.
  - Choosing between **threading** and **message passing** depends on the system architecture and application requirements.

---

## Exercise

### Question

**Why does the performance of supercomputers grow faster than predicted by Moore’s Law?**

### Answer

Supercomputer performance surpasses Moore’s Law predictions primarily due to the extensive use of parallelism. While Moore’s Law focuses on the doubling of transistors, parallel processing leverages multiple cores and processors to perform simultaneous computations, resulting in a more substantial overall performance increase.

**Detailed Explanation:**

- **Parallelism:**  
  Supercomputers utilize millions of cores working concurrently, multiplying the effective computing power beyond single-core improvements.

- **Efficient Algorithms:**  
  Advanced parallel algorithms and optimized software ensure that multiple cores are effectively utilized, maximizing performance gains.

- **Specialized Hardware:**  
  Incorporation of GPUs and other accelerators enhances computational capabilities, handling specific parallel tasks more efficiently.

- **Scalable Architectures:**  
  Modern supercomputers are designed to scale seamlessly, allowing performance to increase exponentially as more cores and nodes are added.

**Summary:**  
Parallelism complements transistor scaling, enabling supercomputers to achieve performance growth that outpaces Moore’s Law by effectively utilizing multiple processing units simultaneously.

---

## Formulas Summary

### 1. Speedup

$$
S_n = \frac{T_1}{T_n}
$$

- **$S_n$:** Speedup with $n$ processors
- **$T_1$:** Execution time on a single processor
- **$T_n$:** Execution time on $n$ processors

**Explanation:**  
Speedup measures how much faster a program runs on $n$ processors compared to a single processor.

### 2. Efficiency

$$
E_n = \frac{S_n}{n}
$$

- **$E_n$:** Efficiency with $n$ processors
- **$S_n$:** Speedup
- **$n$:** Number of processors

**Explanation:**  
Efficiency indicates how effectively the parallel resources are utilized, with $E_n = 1$ being perfectly efficient.

###

3. Amdahl’s Law

$$
S_n = \frac{1}{(1 - P) + \frac{P}{n}}
$$

- **$S_n$:** Speedup with $n$ processors
- **$P$:** Fraction of the program that can be parallelized
- **$n$:** Number of processors

**Explanation:**  
Amdahl’s Law calculates the maximum achievable speedup based on the parallelizable portion of the program.

### 4. Computational Intensity ($q$)

$$
q = \frac{f}{m}
$$

- **$q$:** Computational intensity
- **$f$:** Number of floating-point operations
- **$m$:** Number of memory accesses

**Explanation:**  
Computational intensity measures the ratio of computations to memory operations. Higher $q$ indicates better performance by reducing the impact of memory latency.

### 5. Performance Equation

$$
\text{CPU Time} = \text{Instructions} \times \text{CPI} \times \text{Cycle Time}
$$

- **Instructions:** Total number of instructions executed
- **CPI:** Cycles per instruction
- **Cycle Time:** Time per clock cycle

**Explanation:**  
This equation relates the CPU time to the number of instructions, their execution efficiency, and the clock speed of the processor.

--

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
