---
tags:
  - 4semester
  - FSK
  - informatik
  - Übungsblatt
fach: "[[FSK]]"
Thema: 
Benötigte Zeit:
---
> [!info] 
> Wenn Sie Automaten angeben, tun Sie dies immer in Form eines Zustandsgraphen. Andere Formen der Darstellung (z.B. als Liste von Übergängen) werden nicht gewertet, da sie sehr viel aufwändiger zu korrigieren sind. Vergessen Sie nicht, im Zustandsgraph Start- und Endzustände zu markieren.
# FSK2-1 Grammatik und Elimination von ε-Produktionen (2 Punkte)

## a) Geben Sie kontextfreie Grammatiken (ggf. mit ε-Produktionen) an, die folgende Sprachen über dem Alphabet Σ = {a, b} erkennen:

i) $L_1 = \{a^n w \ | \ c \in \Sigma^*, w \in \Sigma^*\}$

ii) $L_2 = \{a^n w b^n \ | \ w \in \Sigma^*\}$

## b) Betrachten Sie die Grammatik $G = (\{A, B, C\}, \{a, b\}, P, A)$ mit Produktionen $P = \{A \rightarrow abBc, A \rightarrow AaA, B \rightarrow \varepsilon, B \rightarrow CC, C \rightarrow BB\}$

Geben Sie eine zu $G$ äquivalente Grammatik $G'$ ohne ε-Produktionen an. Verwenden Sie den Algorithmus zur Elimination von ε-Produktionen aus der Vorlesung und geben Sie die Zwischenschritte Ihrer Berechnung an. (Das ermöglicht uns, Ihnen bei kleinen Fehlern noch Teilpunkte zu geben.)

# FSK2-2 DFAs und Minimierung (2 Punkte)

## a) Geben Sie DFAs an, die folgende Sprachen über dem Alphabet Σ = {a, b} erkennen:

### i) $L_1 = \{a^n w \ | \ c \in \Sigma^*, w \in \Sigma^*\}$

### ii) $L_2 = \{a^n w b^n \ | \ w \in \Sigma^*\}$

(Das sind die gleichen Sprachen wie in Aufgabe FSK2-1.)

## b) Minimieren Sie die folgenden DFAs. Verwenden Sie die tabellarische Variante des Algorithmus zur Minimierung von DFAs aus der Vorlesung (nicht die grafische Variante und nicht den Algorithmus von letztem Jahr!). Geben Sie die Partitionstabelle und den minimalen DFA an.

