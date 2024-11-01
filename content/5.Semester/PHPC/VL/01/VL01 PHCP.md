---
date created: Friday, 1. November 2024, 18:00
date modified: Friday, 1. November 2024, 18:10
---

# Parallel Computing Study Guide

## Table of Contents

1. Introduction and Motivation
2. Historical Quotes
3. Development of Uniprocessor Performance
4. Drivers of Performance Growth
5. Moore’s Law
6. Process and Architecture Improvements
7. Semiconductor Manufacturing Challenges
8. SuperMUC vs. SuperMUC-NG
9. Units and Metrics
10. Current Compute Capabilities
11. The Top500 Project
12. Exascale Computing
13. Exponential Growth Examples
14. Limits of Sequential Computation
15. Power Density Limits of Serial Performance
16. The Multicore Revolution
17. Parallel Programming Today and Tomorrow
18. Applications for Parallel Computers
19. Principles of Parallel Computing
20. Automatic (Hidden) Parallelism
21. Summary
22. Course Plan
23. Additional Resources
24. Exercise
25. Formulas Summary

---

## Introduction and Motivation

- **Exponential Growth in Computing Power:**
  - Driven by advancements in semiconductor technology and architectural improvements.
  - Enabled new applications in AI, data analytics, and scientific simulations.
- **From Supercomputers to Gaming Consoles:**
  - Rapid transfer of high-performance technologies to consumer devices.
  - Example: NVIDIA GPUs used in both HPC and gaming.

---

## Historical Quotes

- **Thomas Watson (1943):** “I think there is a world market for maybe five computers.”
- **Ken Olson (1977):** “There is no reason for any individual to have a computer in their home.”
- **Bill Gates (1981):** “640KB of memory should be enough for anybody.”
- **Albert Bartlett:** “The greatest shortcoming of the human race is our inability to understand the exponential function.”

**Lesson:** Technology often evolves faster than initial predictions.

---

## Development of Uniprocessor Performance

- **Key Source:** _Computer Architecture: A Quantitative Approach_ by Hennessy & Patterson
- **Performance Growth:** Steady increase through architectural innovations and smaller transistor sizes.
- **Example:** Transition from single-core to multi-core processors.

---

## Drivers of Performance Growth

- **Moore’s Law:** Transistor count doubles every 18-24 months.
- **Process and Architecture Improvements:**
  - **Intel Tick-Tock Model:** Alternates between microarchitecture upgrades and process shrinks.
  - **Three-Step Model (since 2016):** Architecture, optimization, and process improvements.

**Challenge:** Increasing difficulty and cost of process shrinks emphasize the need for parallelism.

---

## Moore’s Law

- **Definition:** Number of transistors on a chip doubles approximately every 18-24 months.
- **Impact:** Continuous increase in computing power and reduction in cost per transistor.
- **Current Trends:** Transitioning to FinFETs, Gate-All-Around transistors, and 3D stacking.

---

## Process and Architecture Improvements

- **Intel Tick-Tock Model:**
  - **Tick:** New microarchitecture with existing process.
  - **Tock:** New process with existing microarchitecture.
- **Three-Step Model:**
  1. **Architecture:** New CPU designs.
  2. **Optimization:** Enhancements without changing the process.
  3. **Process Improvements:** Shrinking transistor sizes.

**Example:** Progression from Sandy Bridge to Haswell and Skylake.

---

## Semiconductor Manufacturing Challenges

- **Engineering Hurdles:** Extreme precision and advanced fabrication techniques required.
- **Key Manufacturers:** Intel, TSMC, Samsung, GlobalFoundries.
- **Process Naming:** Inconsistent "nm" naming across manufacturers complicates comparisons.

**Impact:** Increased complexity and costs drive the shift towards parallelism.

---

## SuperMUC vs. SuperMUC-NG

| Feature                    | SuperMUC Phase 1  | SuperMUC-NG Phase 2 |
| -------------------------- | ----------------- | ------------------- |
| DP Peak Performance (PF/s) | 3.19              | 3.58                |
| DP Peak per Node (GF/s)    | 345.6             | 1164.8              |
| DP Peak per Core (GF/s)    | 21.6              | 41.6                |
| SIMD Width                 | 4                 | 4                   |
| Memory per Node (GB)       | 32                | 64                  |
| Caches (L1D, L2, L3)       | 32KB, 256KB, 20MB | 32KB, 256KB, 18MB   |
| Cores per Node             | 16                | 28                  |
| Total Nodes                | 9216              | 3072                |
| **Overall Performance**    | -                 | 8.4x                |

**Note:** Enhanced core count and memory contribute to significant performance gains.

---

## Units and Metrics

### Prefixes

| Prefix | 10^n (Decimal) | 2^n (Binary) |
| ------ | -------------- | ------------ |
| Yotta  | Y (10^24)      | Yi (2^80)    |
| Zetta  | Z (10^21)      | Zi (2^70)    |
| Exa    | E (10^18)      | Ei (2^60)    |
| Peta   | P (10^15)      | Pi (2^50)    |
| Tera   | T (10^12)      | Ti (2^40)    |
| Giga   | G (10^9)       | Gi (2^30)    |
| Mega   | M (10^6)       | Mi (2^20)    |

### Metrics

- **FLOPs:** Floating Point Operations per Second
- **Bytes:**
  - Single Precision (SP): 4 bytes
  - Double Precision (DP): 8 bytes
- **Differences:**
  - Mega vs. Mebi: ~4.8%
  - Yotta vs. Yobi: ~20%

**Example:** Frontier supercomputer achieves ~1.2 EFLOPs.

---

## Current Compute Capabilities (~2022)

| System Type       | Performance       | Cores               | Architecture                 |
| ----------------- | ----------------- | ------------------- | ---------------------------- |
| Smartphone/Tablet | 1 - 4 GFLOPs      | 2-8                 | ARM-based                    |
| Desktop/Laptop    | 50 - 400 GFLOPs   | 4-16                | Intel Core, AMD Ryzen        |
| Server            | 600 - 4000 GFLOPs | 8-80 + Accelerators | Intel Xeon, AMD EPYC, NVIDIA |
| Supercomputer     | ~1.2 EFLOPs       | Millions            | Specialized Architectures    |

**Note:** Real-world applications typically achieve ~10% of peak performance.

---

## The Top500 Project

- **Purpose:** Lists the 500 most powerful supercomputers globally.
- **Frequency:** Updated twice a year (June and November).
- **Benchmark:** Linpack, solving dense linear equations using LU factorization.
- **Impact:** Tracks advancements in supercomputing technology.

**Website:** [www.top500.org](http://www.top500.org)

---

## Exascale Computing

- **Definition:** Systems capable of at least $10^{18}$ FLOPs (ExaFLOPs).
- **Example:** Frontier (ORNL, USA) with ~1.2 EFLOPs.
- **Challenges:**
  1. **Energy Efficiency:** Managing power consumption and cooling.
  2. **Parallelism:** Utilizing millions of cores effectively.
  3. **Fault Tolerance:** Handling increased hardware failures.
  4. **Memory and Data Management:** Efficient data handling at scale.
  5. **Software Development:** Creating scalable parallel algorithms.

**Event:** ExascaleDay 2024

---

## Exponential Growth Examples

### TOP500 Performance Growth

| Timeframe | Performance Growth | TOP500 #1 Increase |
| --------- | ------------------ | ------------------ |
| 12 months | 2x                 | ~32x               |
| 18 months | 1.57x              | 1.024x Moore’s Law |
| 24 months | 1.41x              | 181x TOP500 Sum    |
| 36 months | 1.3x               | 32x TOP500 Sum     |

**Reason:** Enhanced parallelism drives faster performance growth than Moore’s Law alone.

---

## Limits of Sequential Computation

- **Physical Limits:**
  - **Speed of Light:** ~300,000 km/s. At 1 GHz, light travels ~30 cm per clock tick.
  - **Storage Density:** Minimum of one atom per bit.

**Conclusion:** Parallelism is essential to overcome these physical constraints and continue performance scaling.

---

## Power Density Limits of Serial Performance

- **Dynamic Power Consumption Formula:**

  $$
  P = V^2 \times f \times C
  $$

  - **P:** Power consumption
  - **V:** Supply voltage
  - **f:** Clock frequency
  - **C:** Capacitance (proportional to the number of transistors switching)

- **Effects:**
  - **Increasing Frequency (f):** Cubic increase in power.
  - **Increasing Cores:** Linear increase in power.

**Solution:** Utilize multicore and manycore architectures to enhance performance without disproportionately increasing power consumption.

---

## The Multicore Revolution

- \*\*Continuation

of Moore’s Law:\*\* Achieved by increasing the number of cores instead of clock speeds.

- **Challenges:**
  1. **Limited Instruction-Level Parallelism (ILP):** Fewer opportunities for hidden parallelism.
  2. **Software Adaptation:** Need for explicit parallel programming to leverage multiple cores.

**Impact on Software Development:**

- Adoption of parallel programming models like threading, MPI, and OpenMP to utilize multicore architectures effectively.

---

## Parallel Programming Today and Tomorrow

### Current State

- **Necessity:** Most modern systems are parallel; parallel programming is essential.
- **Programming Models:**
  1. **Shared Memory (Threading):** Easier data sharing but requires careful synchronization.
  2. **Message Passing (MPI):** Scalable for large systems but involves higher communication overhead.
  3. **Combined Models:** Utilizing MPI with OpenMP and vectorization for optimal performance.

### Future Trends

- **New Software Models:** Higher abstraction levels to simplify parallel programming.
- **Research and Development:** Focus on improving parallel algorithms and tools.
- **Education:** Integrating parallel programming concepts into curricula.

**Challenges:**

- **Programming Complexity:** Managing concurrency and synchronization.
- **Debugging:** Identifying and resolving parallel execution issues.
- **Portability and Scalability:** Ensuring programs run efficiently across different architectures.

---

## Applications for Parallel Computers

### Categories of Parallel Systems

1. **Parallel Systems:** Tightly coupled processors working on a common task (e.g., supercomputers).
2. **Distributed Systems:** Loosely coupled processors communicating over a network (e.g., cloud computing).
3. **Concurrent Systems:** Handling multiple tasks simultaneously without necessarily parallel execution (e.g., operating systems).

### Application Areas

- **Computational Science and Engineering (CSE):** Simulations, numerical methods, optimizations.
- **Data Analytics and Machine Learning:** Big data processing, training neural networks.
- **Scientific Simulation:** Climate modeling, molecular dynamics, physics simulations.

---

## Principles of Parallel Computing

1. **Finding Parallelism:** Identify tasks that can run concurrently, considering Amdahl’s Law.
2. **Granularity:** Determine the size of parallel tasks (fine vs. coarse-grained).
3. **Dependencies:** Manage task dependencies to maintain correct execution order.
4. **Coordination and Synchronization:** Ensure tasks work together without conflicts.
5. **Locality and Load Balance:** Optimize data access and evenly distribute tasks.
6. **Performance Measurement and Modeling:** Assess and optimize parallel performance.

**Challenge:** Balancing these principles to achieve efficient parallel execution adds complexity compared to sequential programming.

---

## Automatic (Hidden) Parallelism

### Types of Hidden Parallelism

1. **Bit-Level Parallelism:** Processing multiple bits within data words simultaneously (e.g., SIMD instructions).
2. **Instruction-Level Parallelism (ILP):** Hardware executes multiple instructions concurrently (e.g., superscalar processors).
3. **Memory System Parallelism:** Overlapping memory operations with computations to reduce latency.
4. **Parallelizing Compilers:** Automatically identifying and parallelizing code segments.
5. **OS Parallelism:** Running multiple independent processes concurrently through multitasking.

### Limitations

- **Performance Ceiling:** Only explicitly exposed parallelism can fully exploit hardware capabilities.
- **Programmer Responsibility:** Developers must often implement parallelism manually for optimal results.

---

## Summary

- **High-Performance Computing (HPC):** Relies heavily on parallelism, utilizing millions of cores for maximum performance.
- **Parallel Programming:** Essential for leveraging modern parallel architectures through shared memory, message passing, and combined models.
- **Applications:** Span traditional scientific computing to modern data-intensive fields like AI and machine learning.
- **Future Outlook:** Focus on developing higher-level abstractions, improving parallel programming techniques, and evolving hardware architectures to sustain performance growth.

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

- **Written Exam:** Details to be announced. Comprehensive coverage of all course topics, including theoretical concepts and practical applications in parallel computing.

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

Supercomputer performance surpasses Moore’s Law predictions primarily due to the extensive use of parallelism. While Moore’s Law focuses on the doubling of transistors, parallel processing leverages multiple cores and processors to perform simultaneous computations, resulting in a more substantial overall performance increase.

**Detailed Explanation:**

- **Parallelism:** Supercomputers utilize millions of cores working concurrently, multiplying the effective computing power beyond single-core improvements.
- **Efficient Algorithms:** Advanced parallel algorithms and optimized software ensure that multiple cores are effectively utilized, maximizing performance gains.
- **Specialized Hardware:** Incorporation of GPUs and other accelerators enhances computational capabilities, handling specific parallel tasks more efficiently.
- **Scalable Architectures:** Modern supercomputers are designed to scale seamlessly, allowing performance to increase exponentially as more cores and nodes are added.

**Summary:** Parallelism complements transistor scaling, enabling supercomputers to achieve performance growth that outpaces Moore’s Law by effectively utilizing multiple processing units simultaneously.

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

**Explanation:** Power consumption increases with the square of the voltage, directly with frequency, and linearly with capacitance. This highlights the inefficiency of simply increasing clock speeds.

### 2. Amdahl’s Law

$$
\text{Speedup} = \frac{1}{(1 - P) + \frac{P}{N}}
$$

- **P:** Fraction of the program that can be parallelized
- **N:** Number of processors
- **Speedup:** Theoretical maximum speedup achieved by parallelizing the program

**Explanation:** Amdahl’s Law calculates the maximum possible speedup for a program based on the proportion that can be parallelized. It shows that the speedup is limited by the serial portion of the program.

---

**End of Study Guide**

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
