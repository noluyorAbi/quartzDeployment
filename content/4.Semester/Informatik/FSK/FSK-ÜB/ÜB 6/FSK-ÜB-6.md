---
tags:
  - 4semester
  - FSK
  - informatik
  - Übungsblatt
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema: 
Benötigte Zeit:
date created: Tuesday, 28. May 2024, 18:03
date modified: Tuesday, 28. May 2024, 18:55
---


# FSK6-1 Kontextfreie Grammatiken und Kellerautomaten (2 Punkte)

>[!note] Aufgabenstellung
>Sei $L = \{a^{2n}\$a^n \mid n \in \mathbb{N}_{\gt0}\}$ eine Sprache über dem Alphabet $\Sigma = \{a, $\}$.

## a) Geben Sie eine kontextfreie Grammatik an, die $L$ erkennt.

$$
G = (N, \Sigma, P, S)
$$
$$
\begin{align*}
G = \{ & \{S,T\},  \{a, \$\}, \\
       & \{S \rightarrow aaSa \mid \$, \\
       & S \}
\end{align*}
$$

## b) Geben Sie einen Kellerautomaten an, der $L$ akzeptiert (mit leerem Keller oder mit Endzuständen). Erklären Sie kurz, warum Ihr Automat genau $L$ akzeptiert.

