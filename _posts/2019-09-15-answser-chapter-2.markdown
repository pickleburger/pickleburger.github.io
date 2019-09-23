---
layout: post
title:  "Exercises Chapter 2"
date:   2019-09-15 00:00:00 -0700
categories: 作业
---

1. Investigate for each of the following λ-terms whether they can be typed with a simple type. If so, give a type for the term and the corresponding types for x and y. If not, explain why.
    1. xxy \\
    KO
    2. xyy \\
    OK $x:\sigma \to \sigma \to \tau, y:\sigma \vdash xyy:\sigma$
    3. xyx \\
    KO?
    4. x(xy) \\
    OK $x:\sigma \to \sigma, y:\sigma \vdash x(xy):\sigma$
    5. x(yx) \\
    OK $x:\sigma \to \sigma, y: (\sigma \to \sigma) \to \sigma \vdash x(yx): \sigma$
2. Find types for zero, one and two.
    1. zero \\
    zero: $\lambda f:\sigma\to\sigma .\lambda x:\sigma . x : (\sigma\to\sigma)\to\sigma\to\sigma$ \\
    one: $\lambda f:\sigma\to\sigma .\lambda x:\sigma . fx : (\sigma\to\sigma)\to\sigma\to\sigma$ \\
    two: $\lambda f:\sigma\to\sigma .\lambda x:\sigma . f(fx) : (\sigma\to\sigma)\to\sigma\to\sigma$
3. Find types for K and S.
