---
tags:
  - 4semester
  - i2ml
  - statistik
  - vorlesung
fach: "[[I2ML]]"
Thema: 
date created: Monday, 22. April 2024, 17:51
date modified: Monday, 22. April 2024, 23:05
---

# https://slds-lmu.github.io/i2ml/
# Introduction to Machine Learning

Welcome to this video on the basics of machine learning. In this session, we'll cover fundamental concepts essential for understanding supervised machine learning.

## What is Machine Learning?

Machine learning is defined more precisely than the broader concept of artificial intelligence. To encapsulate this, we use Tom Mitchell's definition:

>A computer program is said to learn from experience **E** with respect to some task **T** and some performance measure **P**, if its performance on **T**, as measured by **P**, improves with experience **E**.

This definition will guide our exploration of what tasks, experience, and performance measures mean in machine learning, particularly within the context of supervised learning.

## Supervised Learning Overview

### The Training Process

Supervised learning involves a training phase where the model learns from labeled data. For example, consider a dataset of images labeled as either cats or dogs:

- **Training Data**: Images of cats and dogs, where each image is labeled with the correct category ('cat' or 'dog').
- **Learning Process**: The "magic box" of algorithms that processes this data to create a predictive model.

### The Prediction Process

Once trained, the model can predict labels for new, unlabeled images:

- **Prediction Data**: New images of cats and dogs without labels.
- **Output**: Predictions made by the model, such as labeling an image as 'cat' or 'dog'.

## Machine Learning Tasks

In supervised learning, we often distinguish between two types of tasks:

- **Regression**: Predicts a continuous numerical output. The goal is to find a function that best fits the data, expressed as:
  
  $$
  y = f(x)
  $$
  
  where $x$ are features and $y$ is the target variable.

- **Classification**: Predicts categorical outputs. Here, the objective is to determine a decision boundary that best separates different classes.

## Models and Hypotheses

A model in machine learning is a function that maps features ($x$) to targets ($y$), formulated as:

$$
\hat{y} = f(x)
$$

To find the best model, we define a hypothesis space, which is a set of possible models we consider. For example, in regression, this might include all linear functions of the form:

$$
y = \theta_0 + \theta_1 \times x
$$

where $\theta_0$ is the intercept and $\theta_1$ is the slope.

## Learning the Best Model

The learning process involves selecting the best hypothesis from the hypothesis space based on the training data. This process is typically performed by a learner, which automatically adjusts model parameters to minimize errors.

## Loss and Risk

To evaluate models, we use:

- **Loss Function**: Quantifies how well the model's prediction for a single data point matches the actual target. For example, squared error loss:

  $$
  \text{Loss} = (y - f(x))^2
  $$

- **Empirical Risk**: Sum of loss functions over all data points in the dataset, representing the model's average error across all observations.

The learner's goal is to minimize this empirical risk, effectively tuning the model parameters to find the optimal solution.

## Conclusion

This video introduced the basic concepts of supervised machine learning, covering the definition, learning processes, tasks, and model evaluation techniques. These foundational elements set the stage for deeper exploration into machine learning methodologies and their applications.
