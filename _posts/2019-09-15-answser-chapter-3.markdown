---
layout: post
title:  "Exercises Chapter 3"
date:   2019-09-15 00:00:00 -0700
categories: homework
---

1. How many λ2-contexts are there consisting of the four declarations α : ∗, β : ∗, f : α → β, x : α?

    1. $\alpha :\*$

    2. $\beta :\*$

    3. $\alpha :\*, \beta :\*$

    4. $\alpha :\*, \beta :\*, \alpha \to \beta$

    5. $\alpha :\*, x:\alpha$

    6. $\alpha :\*, \beta :\*, x:\alpha$

    7. $\alpha :\*, \beta :\*, \alpha \to \beta, x:\alpha$

2. Give a full (i.e. not-shortened) derivation in λ2 to show that the following term is legal; use the flag format. (Cf. Example 3.1.1 (3).)

    M ≡ λα, β, γ : ∗ . λf : α → β . λg : β → γ . λx : α. g(f x).

    <div id="ch3-2.pdf" class="pdfViewer singlePageView"></div>

3. Take M as in Exercise 3.2. Assume nat : ∗, bool : ∗, suc : nat → nat and even : nat → bool.

    1. Prove that M nat nat bool suc even is legal.

        $$
        \lambda \alpha, \beta, \gamma : * . \lambda f: \alpha \to \beta. \lambda g:\beta \to \gamma .\lambda x:\alpha.g(fx) :\Pi \alpha,\beta,\gamma:*.(\alpha \to \beta) \to (\beta \to \gamma) \to \alpha \to \gamma nat:* nat:* bool:* suc even
        = \lambda f: nat \to nat. \lambda g:nat \to bool .\lambda x:nat.g(fx) (suc: nat \to nat) (even:nat \to bool)
        = \lambda x:nat.bool (suc x)
        $$

    2. TBF

4. TBF

5. TBF

6. Find terms in ΛT2 that are inhabitants of the following λ2-types, each in the given context Γ:

    1. Πα, β : ∗ . (nat → α) → (α → nat → β) → nat → β, where Γ ≡ nat : ∗.

        <div id="ch3-6-1.pdf" class="pdfViewer singlePageView"></div>

    2. Πδ : ∗ . ((α → γ) → δ) → (α → β) → (β → γ) → δ, where Γ ≡ α : ∗, β : ∗, γ : ∗.

        <div id="ch3-6-2.pdf" class="pdfViewer singlePageView"></div>

    3. Πα, β, γ : ∗ . (α → (β → α) → γ) → α → γ, in the empty context.

        <div id="ch3-6-3.pdf" class="pdfViewer singlePageView"></div>
