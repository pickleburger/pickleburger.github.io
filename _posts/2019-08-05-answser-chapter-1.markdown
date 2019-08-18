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
    1. $ \lambda z.z(\lambda z.y) =_\alpha \lambda x.(z(\lambda z.y))^{z\to x} = _\alpha \lambda x.x(\lambda z.y) $ \\
    According to reflexivity, $ \lambda x.x(\lambda z.y) = _\alpha \lambda z.z(\lambda z.y) $

- Question 4. Consider the following $\lambda \text{-term}$: \\
$ U:=(\lambda z.zxz)((\lambda y.xy)x) $
    1. Give a list of all subterms of $U$. \\
    Using BFS we can get multiset, $ \\{ (\lambda z.zxz)((\lambda y.xy)x), \lambda z.zxz, (\lambda y.xy)x, zxz, \lambda y.xy, x, zx, z, xy, z, x, x, y \\} $
    2. Draw the tree representation of $U$
    3. Find the set of all free variables of $U$ by a calculation \\
    $$
    \begin{align}
    FV((\lambda z.zxz)((\lambda y.xy)x)) & = FV(\lambda z.zxz) \cup FV((\lambda y.xy)x) \\
     & = FV(zxz) \setminus \{ x \} \cup FV((\lambda y.xy)) \cup FV(x) \\
     & = ((FV(zx) \cup FV(z)) \setminus \{ x \} ) \cup (FV(xy) \setminus \{ y \} ) \cup FV(x) \\
     & = (\{z, x\} \setminus \{ x \} ) \cup (FV(xy) \setminus \{ y \} ) \cup FV(x) \\
     & = \{ z \} \cup \{ x \} \cup \{ x \} \\
     & = \{ x, z \}
    \end{align}
    $$
    4. Find out which of the following $\lambda \text{-term}$s are $\alpha \text{-equivalent}$ to $U$ and give a motivation why; also check which of them satisfies the Barendregt convention:
