---
layout: post
title:  "Exercises Chapter 1"
date:   2019-08-05 00:00:00 -0700
categories: homework
---

1.  Question 1

    1.  $ \lambda x.xxzy(xx) $

    2.  $ (\lambda xyz.z(xyz))(\lambda u.u) $

2.  Question 2

    1.  Yes

    2.  No

    3.  No

3.  Question 3

    1.  $ \lambda z.z(\lambda z.y) =_\alpha \lambda x.(z(\lambda z.y))^{z\to x} = _\alpha \lambda x.x(\lambda z.y) $

        According to reflexivity, $ \lambda x.x(\lambda z.y) = _\alpha \lambda z.z(\lambda z.y) $

4.  Question 4. Consider the following $\lambda \text{-term}$:

    $ U:=(\lambda z.zxz)((\lambda y.xy)x) $

    1.  Give a list of all subterms of $U$.

        Using BFS we can get multiset, $ \\{ (\lambda z.zxz)((\lambda y.xy)x), \lambda z.zxz, (\lambda y.xy)x, zxz, \lambda y.xy, x, zx, z, xy, z, x, x, y \\} $

    2.  Draw the tree representation of $U$

    3.  Find the set of all free variables of $U$ by a calculation

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

    4.  Find out which of the following $\lambda \text{-term}$s are $\alpha \text{-equivalent}$ to $U$ and give a motivation why; also check which of them satisfies the Barendregt convention:

        1. OK, also convention abiding

        2. KO: FV x is changed to y

        3. OK

        4. KO: new FV v is introduced. Order of the second abstraction term is wrong

5.  Given the results of the following substitutions:

    1.  $(\lambda x.y(\lambda y.xy))[y:=\lambda z.zx]$

        $$
        \begin{align}
        (\lambda x.y(\lambda y.xy))[y:=\lambda z.zx] & = \lambda z.(((y(\lambda y.xy))^{x \to z})[y:=\lambda z.zx]) \\
        & = \lambda z.((y(\lambda y.zy))[y:=\lambda z.zx]) \\
        & = \lambda z.(y[y:=\lambda z.zx](\lambda y.(zy[y:=\lambda z.zx]))) \\
        & = \lambda z.(\lambda z.zx)(\lambda y(z\lambda z.zx))
        \end{align}
        $$

    2.  $((xyz)[x:=y])[y:=z]$

        $$
        \begin{align}
        ((xyz)[x:=y])[y:=z] & = (yyz)[y:=z] \\
        & = zzz
        \end{align}
        $$

    3.  $((\lambda x.xyz)[x:=y])[y:=z]$

        $$
        \begin{align}
        ((\lambda x.xyz)[x:=y])[y:=z] &= (\lambda u.((uyz)[x:=y]))[y:=z] \\
        &= (\lambda u.uyz)[y:=z] \\
        &= \lambda x.((xyz)[y:=z]) \\
        &= \lambda x.xzz
        \end{align}
        $$

    4.  $(\lambda y.yyx)[x:=yz]$

        $$
        \begin{align}
        (\lambda y.yyx)[x:=yz] &= \lambda u.((uux)[x:=yz]) \\
        &= \lambda u.uu(yz)
        \end{align}
        $$

6.  Show that the following proposition is _not_ always true:

    $M[x:=N,y=L] \equiv M[x:=N][y:=L]$

    e.g. $ M \equiv x, N \equiv y, L \equiv z $, $M[x:=N,y=L] \equiv N \equiv y$, whereas $M[x:=N][y:=L] \equiv  L \equiv z$

7.  Consider the $\lambda \text{-term}$ $U$ of Exercise 1.4, again.

    1.  Mark all redexes in U

        $\\{ (\lambda z.zxz)((\lambda y.xy)x), (\lambda y.xy)x\\}$

    2.  Find all reduction paths from U and the $\beta \text{-normal}$ form of U (if it exists).

        To be continued.

8.  Show that the terms $(\lambda x.xx)y$ and $(\lambda xy.yx)xx$ are _not_ $\beta \text{-convertible}$.

    $(\lambda x.xx)y = yy$, whereas $(\lambda xy.yx)xx = (\lambda y.yx)x = xx$

9.  Consider the following $\lambda \text{-term}$s:

    $K:= \lambda xy.x$,

    $S:= \lambda xyz.xz(yz)$. (Combinatory logic)

    1.  Check that $KPQ\to_{\beta}P$ and $SPQR\to_{\beta}PR(QR)$, for arbitrary $\lambda \text{-term}$s P, Q and R.

        $EASY$

    2.  Let $I:=\lambda x.x$. Prove that $SKK\to_{\beta}I$.

        $SKK=(\lambda xyz.xz(yz))KK=(\lambda yz.Kz(yz))K=(\lambda yz.z)K=(\lambda z.z)=I$

    3.  Let $B:=S(KS)K$. Prove that $BUVW\to_{\beta}U(VW)$

        $BUVW = S(KS)KUVW = (KSU)(KU)VW = S(KU)VW = KUW(VW) = U(VW)$

    4.  Prove that $SSSKK=_{\beta}SKKK$

        $SSSKK = SK(SK)K = KK(SKK) = K = IK = SKKK$

10. Church numerals

    1.  Show that $add\;one\;one\to_{\beta}two$

        $$
        \begin{align}
        add\;one\;one &= \lambda nmfx.mf(nfx)(\lambda fx.fx)(\lambda fx.fx) \\
        &\to_{\beta} \lambda mfx.mf((\lambda gy.gy)fx)(\lambda fx.fx) \\
        &\to_{\beta} \lambda mfx.mf(fx)(\lambda fx.fx) \\
        &\to_{\beta} \lambda fx.((\lambda gy.gy)f(fx)) \\
        &\to_{\beta} \lambda fx.f(fx) \\
        &= two \\
        \end{align}
        $$
