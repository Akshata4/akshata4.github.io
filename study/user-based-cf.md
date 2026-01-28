---
title: "User-Based Collaborative Filtering (Dummy Data)"
description: "Building a recommender system that suggests items based on similar users' preferences - the foundation of 'users who liked this also liked' features."
date: "2026-01-26"
---

User-based collaborative filtering powers recommendations like "users who liked this also liked..." on Netflix or Amazon. Today, I built a simple version using dummy movie data after finishing content-based filtering earlier.

## Core Concept
- This method assumes similar users share tastes
- Finds "neighbors" for a target user
- Suggests items those neighbors rated highly but the target hasn't seen

## Implementation Steps
- Gathered dummy user-movie ratings data
![alt text](image.png)


- Created a user-item matrix (rows=users, columns=movies, cells=ratings 1-5)
![alt text](image-1.png)


- Computed user-user similarity matrix using cosine similarity
![alt text](image-2.png)


- Identified top similar users (neighbors) for the target user
- Recommended unseen movies from neighbors' high-rated lists, weighted by similarity

**Check my code:** [simple-recommender.ipynb](https://github.com/Akshata4/how-recommenders-work/blob/main/user-based-CF(simple).ipynb)

## Quick Example

User | Movie1 | Movie2 | Movie3
-----|--------|--------|-------
A    | 5      | ?      | 4     
B    | 4      | 5      | 4     
C    | 1      | 2      | 1     



User A is similar to B (both love Movie1/3), so recommend Movie2 (B's 5-star pick).

## Why It Excites Me
- Bridges to real-world systems like Netflix/Amazon
- Next up: matrix factorization, handling sparsity
- Hands-on dummy data clarified "wisdom of the crowd" magic!


Feeling pumped to keep exploring recommender systems!