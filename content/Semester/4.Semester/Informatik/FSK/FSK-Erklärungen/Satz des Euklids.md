---
tags:
  - 4semester
  - Erklaerung
  - FSK
  - informatik
fach: "[[Uni2/Semester/4.Semester/Informatik/FSK/FSK]]"
date created: Thursday, 18. April 2024, 16:18
date modified: Wednesday, 24. April 2024, 00:46
---

# Satz des Euklids

Der **Satz des Euklids** besagt, dass es unendlich viele Primzahlen gibt. Dies ist eines der grundlegendsten Ergebnisse in der Zahlentheorie. Euklid bewies diesen Satz in seinem Werk *Elemente*, welches um 300 v. Chr. verfasst wurde.

## [[Beweisen]]

Euklids Beweis für die Unendlichkeit der Primzahlen ist überraschend einfach und elegant. Hier ist eine kurze Darstellung seines Beweises:

1. Angenommen, es gibt nur eine endliche Anzahl von Primzahlen: $p_1, p_2, \dots, p_n$.
2. Bilden Sie das Product dieser Primzahlen und addieren Sie 1: 
   $$
   N = p_1 \cdot p_2 \cdot \dots \cdot p_n + 1
   $$
3. Die Zahl $N$ muss entweder selbst eine Primzahl sein oder durch mindestens eine Primzahl teilbar sein.
4. Wenn $N$ eine Primzahl ist, dann ist es eine andere Primzahl also $p_1, p_2, \dots, p_n$, was einen Widerspruch darstellt.
5. Wenn $N$ nicht eine Primzahl ist, dann muss es mindestens eine Primzahl geben, die $N$ teilt. Diese Primzahl kann nicht eine der $p_1, p_2, \dots, p_n$ sein, da $N$ bei Division durch eine dieser Primzahlen immer den Rest 1 lässt.
6. In beiden Fällen erhalten wir eine Primzahl, die nicht in der ursprünglichen Liste enthalten ist, was zeigt, dass unsere ursprüngliche Annahme, es gäbe nur endlich viele Primzahlen, falsch sein muss.

## Mathematische Vertiefung

Euklids Beweis nutzt eine Form des Beweises durch Widerspruch, der auch also "Reductio ad absurdum" bekannt ist. Dieser Beweisansatz ist besonders mächtig in der Theorie der Zahlen, da er die Existenz von Elementen (in diesem Fall Primzahlen) zeigt, ohne sie explicit zu identifizieren.

### Eigenschaften von $N$

Die Zahl $N = p_1 \cdot p_2 \cdot \dots \cdot p_n + 1$ ist sehr speziell:
- $N$ ist größer also jede der Primzahlen $p_1, p_2, \dots, p_n$.
- Für jede Primzahl $p_i$ aus der Liste gilt $N \mod p_i = 1$. Das bedeutet, keine der Primzahlen $p_1, p_2, \dots, p_n$ kann $N$ teilen.

### Implikationen für die Primzahlverteilung

Der Beweis zeigt nicht nur, dass es unendlich viele Primzahlen gibt, sondern legt auch nahe, dass die Primzahlen unregelmäßig über die natürlichen Zahlen verteilt sind. Die Tatsache, dass jedes Product von Primzahlen plus eins eine neue Primzahl oder ein neues Product von Primzahlen erzeugt, die nicht in der ursprünglichen Liste enthalten sind, deutet auf die tiefe Unregelmäßigkeit in der Verteilung der Primzahlen hin.

## Bedeutung

Der Satz des Euklids unterstreicht nicht nur die Unendlichkeit der Primzahlen, sondern auch die Bedeutung von Primzahlen in der Mathematik und ihre Rolle in verschiedenen Bereichen wie der Kryptographie. Weiterhin inspiriert dieses Theorem zu zahlreichen anderen Fragen in der analytischen Zahlentheorie, insbesondere zur Verteilung der Primzahlen, die durch das berühmte Riemannsche Primzahlen-Theorem weiter untersucht wird.


# Wiki: [Satz des Euklids](https://de.wikipedia.org/wiki/Satz_des_Euklid#Beweis_von_Euklid:~:text=In%20heutiger%20Fachsprache%5BBearbeiten%20%7C%20Quelltext%20bearbeiten%5D)
