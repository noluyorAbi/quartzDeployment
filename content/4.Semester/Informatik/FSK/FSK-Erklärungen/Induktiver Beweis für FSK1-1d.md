---
tags:
  - 4semester
  - FSK
  - informatik
  - Übungsblatt
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema: 
date created: Wednesday, 24. April 2024, 00:14
date modified: Friday, 26. April 2024, 02:05
---

# Beweis der Eigenschaft $L^* \subseteq L$

Gegeben sei das Alphabet $\Sigma = \{a, b, c\}$ und die Sprache $L$ definiert als:

$$
L = \{ w \in \Sigma^* \mid \#_a(w) + \#_b(w) = \#_c(w) \}
$$

Die Sprache $L$ besteht also aus allen Wörtern über $\Sigma$, in denen die Summe der Anzahlen der Buchstaben 'a' und 'b' gleich der Anzahl der Buchstaben 'c' ist.

**Zu zeigen (Z.Z.):** $L^* \subseteq L$

**Beweis:**

1. Wir nehmen zwei beliebige Wörter $w_1, w_2 \in L$. Nach Definition von $L$ gilt:

   $$
   \#_a(w_1) + \#_b(w_1) = \#_c(w_1)
   $$

   und

   $$
   \#_a(w_2) + \#_b(w_2) = \#_c(w_2)
   $$

2. Betrachten wir das Wort $w = w_1w_2$, die Konkatenation von $w_1$ und $w_2$. Es gilt für die Anzahlen der Buchstaben in $w$:

   $$
   \#_a(w) = \#_a(w_1) + \#_a(w_2)
   $$

   $$
   \#_b(w) = \#_b(w_1) + \#_b(w_2)
   $$

   $$
   \#_c(w) = \#_c(w_1) + \#_c(w_2)
   $$

3. Durch Addition der entsprechenden Gleichungen für $w_1$ und $w_2$ erhalten wir:

   $$
   \#_a(w) + \#_b(w) = (\#_a(w_1) + \#_b(w_1)) + (\#_a(w_2) + \#_b(w_2))
   $$

   Da $\#_a(w_1) + \#_b(w_1) = \#_c(w_1)$ und $\#_a(w_2) + \#_b(w_2) = \#_c(w_2)$, kann dies umgeschrieben werden zu:

   $$
   \#_a(w) + \#_b(w) = \#_c(w_1) + \#_c(w_2)
   $$

   Dies entspricht der Anzahl der 'c's in $w$:

   $$
   \#_a(w) + \#_b(w) = \#_c(w)
   $$

4. Also erfüllt jedes Wort $w$, das durch Konkatenation von Wörtern aus $L$ gebildet wird, die Bedingung für die Zugehörigkeit zu $L$. Daher ist jedes Wort in $L^*$ auch in $L$ enthalten.

5. Zusätzlich ist das leere Wort $\epsilon$, das durch die Anwendung des Kleene-Sterns eingeschlossen ist, trivialerweise in $L$, da keine Buchstaben vorhanden sind und somit die Bedingung $\#_a(\epsilon) + \#_b(\epsilon) = \#_c(\epsilon)$ erfüllt ist, da alle Zählungen null sind.

**Fazit:**

Da sowohl das leere Wort als auch jede Konkatenation von Wörtern aus $L$ die definierende Eigenschaft von $L$ erfüllen, haben wir gezeigt, dass $L^* \subseteq L$.
