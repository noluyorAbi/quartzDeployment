---
date created: Friday, 1. November 2024, 18:00
date modified: Friday, 1. November 2024, 18:15
---

# Parallel Computing Study Guide

## Table of Contents

1. Introduction and Motivation
2. Matrix-Matrix Multiplication Experiment
3. Peak Performance
4. Performance Analysis
5. Instruction Set Architecture (ISA)
6. Parallelism in Single-Core Processors
7. Memory System and Caches
8. Case Study: Matrix Multiplication Performance
9. Summary
10. Course Plan
11. Additional Resources
12. Exercise
13. Formulas Summary

---

## Introduction and Motivation

- **Matrix-Matrix Multiplication:**

  - Operation: $C = A \times B$, where $A$, $B$, and $C$ are $n \times n$ matrices.
  - Naive implementation uses three nested loops.

- **Experimental Testbed (SuperMUC Phase I):**

  - **Hardware Specifications:**
    - Intel Xeon E5-2680, 2.3 GHz, 20 MB L3 cache
    - 2 sockets with 8 cores each (16 total)
    - 32 GB DDR3 RAM
    - Sequential execution using one core

- **Question:**  
  What performance can we expect for the naive matrix multiplication application?

---

## Matrix-Matrix Multiplication Experiment

- **Performance Evaluation:**
  - Compare naive implementation to optimized library (e.g., MKL's DGEMM).
- **Findings:**

  - Naive implementation achieves a small fraction of peak performance.
  - Optimized libraries significantly bridge the performance gap.

- **Key Insight:**  
  Theoretical peak performance serves as a benchmark to assess actual implementation efficiency.

---

## Peak Performance

- **Definition:**  
  Theoretical maximum performance under ideal conditions based on hardware specifications.

- **Calculation Example for SuperMUC Phase I:**
  - **AVX Registers:** 256-bit (4 double-precision numbers)
  - **FMA Operations:** 8 FLOPs per cycle
  - **Peak Performance per Core:** $2.3 \, \text{GHz} \times 8 \, \text{FLOPs} = 18.4 \, \text{GFLOPs/sec}$
  - **Node Peak Performance:** $18.4 \, \text{GFLOPs/sec} \times 16 \, \text{cores} = 294.4 \, \text{GFLOPs/sec}$

---

## Performance Analysis

- **Optimized vs. Naive Implementation:**

  - **Optimized (DGEMM):** Approaches peak performance.
  - **Naive:** Significantly lower due to inefficiencies in memory access and lack of optimization.

- **Conclusion:**  
  Optimized algorithms and libraries are essential to harness the full potential of hardware.

---

## Instruction Set Architecture (ISA)

- **Role of ISA:**  
  Defines the hardware-software interface, ensuring portability and longevity.

- **Key Properties of a Good ISA:**

  - Longevity across generations
  - Generality and expressivity
  - Convenience for higher-level functionalities
  - Efficient low-level implementation

- **RISC vs. CISC:**
  - **RISC:** Simplified instructions, optimized for performance.
  - **CISC:** Complex instructions, potentially higher expressivity.

---

## Parallelism in Single-Core Processors

- **Types of Parallelism:**

  - **Instruction Level Parallelism (ILP):** Execute multiple instructions simultaneously.
    - Techniques: Pipelining, superscalar execution, out-of-order (OOO) execution.
  - **Data Level Parallelism (DLP):** Perform the same operation on multiple data points.
    - Techniques: SIMD instructions, vector processing.
  - **Thread Level Parallelism (TLP):** Execute multiple threads concurrently.
    - Techniques: Simultaneous Multi-Threading (SMT), Hyper-Threading.

- **ILP Techniques:**
  - **Pipelining:** Overlapping instruction execution stages.
  - **Superscalar:** Multiple instructions per cycle.
  - **OOO Execution:** Reordering instructions to avoid stalls.
  - **VLIW/EPIC:** Compiler-managed parallelism.

---

## Memory System and Caches

- **Memory Hierarchy:**

  - **Registers:** Fastest, smallest.
  - **L1 Cache:** Fast, limited size.
  - **L2 Cache:** Slower than L1, larger.
  - **Main Memory (DRAM):** Slower, much larger.
  - **Secondary Storage:** Very slow, very large.

- **Memory Wall:**

  - Gap between CPU speed and memory access speed.
  - **Implications:** Memory latency becomes a significant performance bottleneck.

- **Locality:**

  - **Temporal Locality:** Reuse of recently accessed data.
  - **Spatial Locality:** Access to data near recently accessed data.

- **Cache Miss Types:**
  - **Compulsory Miss:** First access to data.
  - **Capacity Miss:** Data not in cache due to limited size.
  - **Conflict Miss:** Multiple data mapped to the same cache line.

---

## Case Study: Matrix Multiplication Performance

- **Naive Matrix-Multiply:**

  - **Flops:** $O(n^3)$
  - **Memory Accesses:** $m = n^3 + 3n^2$
  - **Computational Intensity:** $q = \frac{2n^3}{n^3 + 3n^2} \approx 2$ for large $n$

- **Blocked (Tiled) Matrix-Multiply:**

  - **Approach:** Divide matrices into sub-blocks to fit into cache.
  - **Flops:** $2n^3$
  - **Memory Accesses:** $m = (2N + 2)n^2$
  - **Computational Intensity:** $q \approx \frac{n}{N}$
  - **Benefit:** Higher $q$ leads to better performance by reducing memory latency impact.

- **Optimization Goal:**  
  Maximize computational intensity $q$ while fitting data into fast memory (cache).

---

## Summary

- **Parallelism Forms:**

  - Exists within single-core CPUs and across multiple cores.
  - Includes ILP, DLP, and TLP.

- **Performance Factors:**

  - Instruction count, CPI (cycles per instruction), and clock rate.
  - Memory hierarchy and cache performance critically impact real-world performance.

- **Optimization Techniques:**

  - Utilize optimized libraries (e.g., MKL) for critical operations.
  - Implement algorithms with high computational intensity and good cache locality.

- **Future Directions:**
  - Enhanced parallel programming models.
  - Continued hardware advancements to bridge memory and compute performance gaps.

---

## Course Plan

### Topics and Schedule

- **17 Oct 2024:** Introduction and Motivation
- **24 Oct 2024:** Overview of Computer Architecture and Basics of Parallel Computing
- **Feb 2025:** Q&A / Review Session
- **Future Topics:**
  - Parallel Algorithms
  - Parallel Architectures
  - Parallel Programming Techniques
  - Shared Memory Systems, Threading, Parallel Linear Algebra
  - Distributed Memory Systems, Message Passing, FFT (Fast Fourier Transform)
  - Data Parallelism, GPUs (Graphics Processing Units), Map-Reduce, Parallel Sorting

### Exams

- **Written Exam:**  
  Details to be announced. Comprehensive coverage of all course topics, including theoretical concepts and practical applications in parallel computing.

### Important Milestones

- **Introduction and Motivation:** Understanding the significance and impact of parallel computing.
- **Computer Architecture:** Grasping hardware components and their roles in parallel processing.
- **Parallel Programming:** Gaining practical experience with parallel programming models and techniques.
- **Application Projects:** Applying concepts to real-world problems to reinforce learning.

---

## Additional Resources

### Articles and Websites

- **IEEE Spectrum:** Next Generation Supercomputers
- **Top500 Project:** www.top500.org
- **ExascaleDay:** exascaleday.ornl.gov
- **Parallel Programming Article:** Computerworld

### Books

- **Computer Architecture: A Quantitative Approach** by John L. Hennessy and David A. Patterson
- **Parallel Programming in C with MPI and OpenMP** by Quinn

### Online Courses

- **Coursera:** Parallel, Concurrent, and Distributed Programming in Java
- **edX:** Introduction to Parallel Programming
- **YouTube:** Parallel Computing Tutorials

### Tools and Software

- **MPI (Message Passing Interface):** MPI Forum
- **OpenMP:** OpenMP Official Website
- **CUDA:** NVIDIA CUDA Toolkit
- **Profiling Tools:** Valgrind, Intel VTune, GNU gprof

---

## Exercise

### Question

**Why does the performance of supercomputers grow faster than predicted by Moore’s Law?**

### Answer

Supercomputer performance surpasses Moore’s Law predictions primarily due to extensive use of parallelism. While Moore’s Law focuses on the doubling of transistors, parallel processing leverages multiple cores and processors to perform simultaneous computations, resulting in a more substantial overall performance increase.

**Detailed Explanation:**

- **Parallelism:** Supercomputers utilize millions of cores working concurrently, multiplying the effective computing power beyond single-core improvements.
- **Efficient Algorithms:** Advanced parallel algorithms and optimized software ensure that multiple cores are effectively utilized, maximizing performance gains.
- **Specialized Hardware:** Incorporation of GPUs and other accelerators enhances computational capabilities, handling specific parallel tasks more efficiently.
- **Scalable Architectures:** Modern supercomputers are designed to scale seamlessly, allowing performance to increase exponentially as more cores and nodes are added

.

**Summary:**  
Parallelism complements transistor scaling, enabling supercomputers to achieve performance growth that outpaces Moore’s Law by effectively utilizing multiple processing units simultaneously.

---

## Formulas Summary

### 1. Dynamic Power Consumption

$$
P = V^2 \times f \times C
$$

- **P:** Power consumption
- **V:** Supply voltage
- **f:** Clock frequency
- **C:** Capacitance (proportional to the number of transistors switching)

**Explanation:**  
Power consumption increases with the square of the voltage, directly with frequency, and linearly with capacitance. This highlights the inefficiency of simply increasing clock speeds.

### 2. Amdahl’s Law

$$
\text{Speedup} = \frac{1}{(1 - P) + \frac{P}{N}}
$$

- **P:** Fraction of the program that can be parallelized
- **N:** Number of processors
- **Speedup:** Theoretical maximum speedup achieved by parallelizing the program

**Explanation:**  
Amdahl’s Law calculates the maximum possible speedup for a program based on the proportion that can be parallelized. It shows that the speedup is limited by the serial portion of the program.

### 3. Computational Intensity (q)

$$
q = \frac{f}{m}
$$

- **f:** Number of floating-point operations
- **m:** Number of memory accesses

**Explanation:**  
Computational intensity measures the ratio of computations to memory operations. Higher $q$ indicates better performance by reducing the impact of memory latency.

### 4. Performance Equation

$$
\text{CPU Time} = \text{Instructions} \times \text{CPI} \times \text{Cycle Time}
$$

- **Instructions:** Total number of instructions executed
- **CPI:** Cycles per instruction
- **Cycle Time:** Time per clock cycle

**Explanation:**  
This equation relates the CPU time to the number of instructions, their execution efficiency, and the clock speed of the processor.

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
