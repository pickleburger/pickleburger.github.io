---
layout: post
title:  "Exercises Chapter 4"
date:   2019-10-12 00:00:00 -0700
categories: 作业
---

1. How many λ2-contexts are there consisting of the four declarations α : ∗, β : ∗, f : α → β, x : α?
    1. $\alpha :\*$
    2. $\beta :\*$
    3. $\alpha :\*, \beta :\*$
    4. $\alpha :\*, \beta :\*, \alpha \to \beta$
    5. $\alpha :\*, x:\alpha$
    6. $\alpha :\*, \beta :\*, x:\alpha$
    7. $\alpha :\*, \beta :\*, \alpha \to \beta, x:\alpha$
2. Give a full (i.e. not-shortened) derivation in λ2 to show that the following term is legal; use the flag format. (Cf. Example 3.1.1 (3).) \\
   M ≡ λα, β, γ : ∗ . λf : α → β . λg : β → γ . λx : α. g(f x).
   $$ \\
   \alpha : * \\
   | \beta : * \\
   | | \gamma : * \\
   | | | f : \alpha \to \beta \\
   | | | | \lambda g:\beta \to \gamma \\
   | | | | | \lambda x:\alpha \\
   | | | | | | f : \alpha \to \beta (var) \\
   | | | | | | x : \alpha (var) \\
   | | | | | | fx:\beta (appl) \\
   | | | | | | g : \beta \to \gamma (var) \\
   | | | | | | g(fx): \gamma (appl) \\
   | | | | | \lambda x:\alpha.g(fx) :\alpha \to \gamma (abst) \\
   | | | | \lambda g:\beta \to \gamma .\lambda x:\alpha.g(fx) : (\beta \to \gamma) \to \alpha \to \gamma (abst) \\
   | | | \lambda f: \alpha \to \beta. \lambda g:\beta \to \gamma .\lambda x:\alpha.g(fx) : (\alpha \to \beta) \to (\beta \to \gamma) \to \alpha \to \gamma (abst) \\
   | | \lambda \gamma : * . \lambda f: \alpha \to \beta. \lambda g:\beta \to \gamma .\lambda x:\alpha.g(fx) : \Pi \gamma:*.(\alpha \to \beta) \to (\beta \to \gamma) \to \alpha \to \gamma (abst2) \\
   | \lambda \beta, \gamma : * . \lambda f: \alpha \to \beta. \lambda g:\beta \to \gamma .\lambda x:\alpha.g(fx) : \Pi \beta,\gamma:*.(\alpha \to \beta) \to (\beta \to \gamma) \to \alpha \to \gamma (abst2) \\
   \lambda \alpha, \beta, \gamma : * . \lambda f: \alpha \to \beta. \lambda g:\beta \to \gamma .\lambda x:\alpha.g(fx) :\Pi \alpha,\beta,\gamma:*.(\alpha \to \beta) \to (\beta \to \gamma) \to \alpha \to \gamma (abst2) \\
   $$
3. Take M as in Exercise 3.2. Assume nat : ∗, bool : ∗, suc : nat → nat and even : nat → bool.
    1. Prove that M nat nat bool suc even is legal. \\
    $$ \\
    \lambda \alpha, \beta, \gamma : * . \lambda f: \alpha \to \beta. \lambda g:\beta \to \gamma .\lambda x:\alpha.g(fx) :\Pi \alpha,\beta,\gamma:*.(\alpha \to \beta) \to (\beta \to \gamma) \to \alpha \to \gamma nat:* nat:* bool:* suc even
    = \lambda f: nat \to nat. \lambda g:nat \to bool .\lambda x:nat.g(fx) (suc: nat \to nat) (even:nat \to bool)
    = \lambda x:nat.bool (suc x)
    $$
4. aa
5. aa
6. Find terms in ΛT2 that are inhabitants of the following λ2-types, each in the given context Γ:
    1. Πα, β : ∗ . (nat → α) → (α → nat → β) → nat → β, where Γ ≡ nat : ∗. \\
    $$ \\
    nat : ∗ \\
    | \alpha : * \\
    | | \beta : * \\
    | | | x : nat \to \alpha \\
    | | | | y : \alpha \to nat \to \beta \\
    | | | | | z : nat \\
    | | | | | | xz : alpha \\
    | | | | | | y(xz)z : beta \\
    | | | | | \lambda z : nat \to \beta \\
    | | | | ? (\alpha \to nat \to \beta) \to nat \to \beta \\
    | | | ? : (nat \to \alpha) \to (\alpha \to nat \to \beta) \to nat \to \beta \\
    | \\
    $$
    2. Πδ : ∗ . ((α → γ) → δ) → (α → β) → (β → γ) → δ, where Γ ≡ α : ∗, β : ∗, γ : ∗. \\
    $$ \\
    \alpha:* \\
    | \beta:* \\
    | | \ gamma:* \\
    | | | \delta : * \\
    | | | | x : (\alpha \to \gamma)\to \delta \\
    | | | | | y : \alpha \to \beta \\
    | | | | | | z : \beta \to \gamma \\
    | | | | | | | u : \alpha \\
    | | | | | | | | yu : \beta \\
    | | | | | | | | z(yu): \gamma \\
    | | | | | | | \lambda u: \alpha. z(yu) : \alpha \to \gamma \\
    | | | | | | | x(\lambda u: \alpha. z(yu)) : \delta \\
    | | | | | | \lambda z:\beta \to \gamma.x(\lambda u: \alpha. z(yu)) : (\beta \to \gamma) \to \delta \\
    | | | | | \lambda y:\alpha \to \beta.\lambda z:\beta \to \gamma.x(\lambda u: \alpha. z(yu)) : (\alpha \to \beta) \to (\beta \to \gamma) \to \delta \\
    | | | | \lambda x:(\alpha \to \gamma)\to \delta.\lambda y:\alpha \to \beta.\lambda z:\beta \to \gamma.x(\lambda u: \alpha. z(yu)) : ((\alpha \to \gamma)\to \delta) \to (\alpha \to \beta) \to (\beta \to \gamma) \to \delta \\
    | | | \lambda \delta:*.\lambda x:(\alpha \to \gamma)\to \delta.\lambda y:\alpha \to \beta.\lambda z:\beta \to \gamma.x(\lambda u: \alpha. z(yu)) : \Pi \delta : * . ((\alpha \to \gamma)\to \delta) \to (\alpha \to \beta) \to (\beta \to \gamma) \to \delta
    $$
    3. Πα, β, γ : ∗ . (α → (β → α) → γ) → α → γ, in the empty context. \\
    $$ \\
    \alpha:* \\
    | \beta:* \\
    | | \gamma:* \\
    | | | x : \alpha \to (\beta \to \alpha) \to \gamma \\
    | | | | y : \alpha \\
    | | | | | z : \beta \\
    | | | | | \lambda z:\beta.y : \beta \to \alpha \\
    | | | | | xy(\lambda z:\beta.y) : \gamma \\
    | | | | \lambda y:\alpha.xy(\lambda z:\beta.y) : \alpha \to \gamma \\
    | | | \lambda x:\alpha \to (\beta \to \alpha) \to \gamma.\lambda y:\alpha.xy(\lambda z:\beta.y)  : (\alpha \to (\beta \to \alpha) \to \gamma) \to \alpha \to \gamma \\
    $$
