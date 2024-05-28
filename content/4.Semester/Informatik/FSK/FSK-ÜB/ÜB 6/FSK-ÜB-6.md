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
date modified: Tuesday, 28. May 2024, 21:20
---


# FSK6-1 Kontextfreie Grammatiken und Kellerautomaten (2 Punkte)

>[!note] Aufgabenstellung
>Sei $L = \{a^{2n}\$a^n \mid n \in \mathbb{N}_{\gt0}\}$ eine Sprache über dem Alphabet $\Sigma = \{a, $\}$.

## a) Geben Sie eine kontextfreie Grammatik an, die $L$ erkennt.

$$
G = (N, \Sigma, P, S)
$$
$$
G = \{ \ \{S\},  \{a, \$\}, \\ \{S \rightarrow aaSa \mid \$\ \} \, \\S \ \}
$$
*Gedankengang:*
- Links vom $ müssen doppelt so viele a's stehen wie auf der rechten Seite
- $S→ aaSa$ bildet den Basisfall für diese Anforderung 
- $S→\$$ ist da um das $ zwischen der linken und der rechten Seite zu setzen 
- Bei rekursivem benutzen von $S$ werden links immer doppelt so viele a's hinzugefügt wie rechts
- nach $n$ Rekursionen ist das Wort gebildet un dann mithilfe von $S→\$$ getrennt werden
$\Longrightarrow$ Dadurch erkennt diese Grammatik die Sprache $L$
## b) Geben Sie einen [[Kellerautomaten]] an, der $L$ akzeptiert (mit leerem Keller oder mit Endzuständen). Erklären Sie kurz, warum Ihr Automat genau $L$ akzeptiert.


