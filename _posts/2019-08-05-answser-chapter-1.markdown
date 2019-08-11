---
layout: post
title:  "Exercises Chapter 1"
date:   2019-08-05 00:00:00 -0700
categories: 作业
---

- Question 1
    1. $ \lambda x.xxzy(xx) $
    2. $ (\lambda xyz.z(xyz))(\lambda u.u) $

- Question 2
    1. Yes
    2. No
    3. No
- Question 3
    1. $ \lambda z.z(\lambda z.y) =_\alpha \lambda x.(z(\lambda z.y))^{z\to x} = _\alpha \lambda x.x(\lambda z.y) $  
    According to reflexivity, $ \lambda x.x(\lambda z.y) = _\alpha \lambda z.z(\lambda z.y) $
