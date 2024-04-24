---
tags:
  - RNVS
  - 4semester
  - informatik
  - Übungsblatt
fach: "[[RNVS]]"
Thema:
date created: Friday, 19. April 2024, 01:50
date modified: Wednesday, 24. April 2024, 15:35
---

# Aufgabe 1: Anforderungen des Internets (H)

>[!note]
>Im Internet macht es den Anschein, also wären alle Geräte unmittelbar miteinander verbunden.
## (a) Angenommen Sie müssen ein Netz entwerfen, in dem jedes Endgerät mit jedem anderen verkabelt ist, d. h. _komplett vermascht_

>[!tip] Formel zur Berechnung der Anzahl von Verbindungen
>$$
\frac{n \cdot (n-1)}{2}
>$$
>$$
>oder
>$$
>$$
\underset{n=1}{\overset{n-1}{\Sigma}}n
>$$
>- $n \cdot (n-1):$ alle möglichen Richtungen der verbindung zwischen den Geräten (jedes Gerät) kann mit jedem anderem verbunden werden
>- $\div 2:$ Jede Verbindung zwischen zwei Geräten soll nur einmal gezählt werden statt 2 mal von A zu B ist gleiche Verbindung wie B zu A



- 8 Teilnehmer?
	- 28 Verbindungen
- 300 Teilnehmer?
	- 44850 Verbindungen
- $N$ Teilnehmer?
	- $\underset{n=1}{\overset{n-1}{\Sigma}}n$ **oder** $\frac{n \cdot (n-1)}{2}$
	
## (b) Statt dessen sollen jetzt immer maximal fünf Geräte direkt mit einem _Knoten_, aber nicht untereinander, verbunden sein. Maximal fünf dieser Knoten sind wiederum mit einem Knoten verbunden, usw.

**Wie viele Verbindungen benötigt man hier für:**

- 8 Teilnehmer?
- 300 Teilnehmer?
- $N$ Teilnehmer? Gehen Sie von $N = 5^a$ mit $a \in \mathbb{N}$ aus.

--- 

# Aufgabe 2: Das Stellenwertsystem (H)

>[!note]
>Zahlensysteme bestehen aus einem Alphabet (Ziffern) und einer Menge von Regeln, wie Wörter (Zahlen) gebildet werden. Bei dem in Europa gängigen Stellenwertsystem werden Zahlen von links nach rechts mit den Koeffizienten der Zerlegung in eine Summe von Potenzen einer gewählten Basis, meist 10, aufgeschrieben. Die erste Ziffer ist demnach der Koeffizient der höchsten verwendeten Potenz und mit jeder weiteren Ziffer wird der Exponent um 1 verringert. Ein Komma (,) markiert den Vorzeichenwechsel des Exponenten. Wird kein Vorzeichenwechsel benötigt, so ist der Exponent des letzten Summanden, der Ziffer ganz rechts, stets 0. Die folgende Tabelle zeigt gängige Stellenwertzahlensysteme in der Informatik.

$$
\begin{array}{|l|l|l|l|l|l|l|l|l|l|l|}
\hline
\textbf{Bezeichnung} & \textbf{Basis} & {\textbf{Ziffern (→ aufsteigende Wertigkeit)}} \\
\hline
\text{Dezimalsystem} & \text{zehn} & 0 \ | \ 1 \ | \ 2 \ | \ 3 \ | \ 4 \ | \ 5 \ | \ 6 \ | \ 7 \ | \ 8 \ | \ 9 \\
\text{Oktalsystem} & \text{acht} & 0 \ | \ 1 \ | \ 2 \ | \ 3 \ | \ 4 \ | \ 5 \ | \ 6 \ | \ 7 \ | \ - \ | \ - \\
\text{Dualsystem/Binärsystem} & \text{zwei} & 0 \ | \ 1 \ | \ - \ | \ - \ | \ - \ | \ - \ | \ - \ | \ - \ | \ - \ | \ - \\
\hline
\end{array}
$$

>Table 1: Zahlensysteme werden häufig entsprechend der Mächtigkeit ihres Alphabets benannt.
>
>Beim Arbeiten mit verschiedenen Zahlensystemen ist es wichtig stets sicherzustellen, dass klar ist, mit welchem Zahlensystem eine Zahl dargestellt wird. Die allgemeine Notation ist die Zahl in runden Klammern und die Basis in Dezimalschreibweise also Index der abschließenden Klammer. Um zum Beispiel zu verdeutlichen, dass man das Dezimalsystem benutzt, schreibt man \(7_{10}\).

## (a) Welche Ziffern werden normalerweise für das Hexadezimalsystem verwendet? Schreiben Sie alle mit aufsteigender Wertigkeit auf!

## (b) Schreiben Sie die Zahlen 2, 4, 8, 10 je im Hexadezimal-, Oktal- und Binärsystem auf!

## (c) Konvertieren Sie die folgenden Zahlen je in das Binärsystem und das Hexadezimalsystem!
- 16
- 127
- 168
- 172
- 192
- 255

## (d) Wieviele Stellen hat die Zahl $2^{32} - 1$ in Binärdarstellung? Wieviele davon sind 1 wieviele 0?

--- 

# 3. Rechnen in unterschiedlichen Zahlensystemen

Die größte Herausforderung beim Arbeiten mit Binärzahlen ist, dass es kaum ein Zahlensystem gibt, bei dem die Anzahl der gültigen Ziffern schneller wächst. Zum Beispiel ist $(100)_{10}$ die kleinste dreistellige (natürliche) Zahl im Dezimalsystem, während ihre Binärdarstellung bereits sieben Stellen benötigt.

| Zahlensystem      | Zahl   | multipliziert mit Faktor |            |            |             |             |
| ----------------- | ------ | ------------------------ | ---------- | ---------- | ----------- | ----------- |
|                   |        | $(1)_{10}$               | $(2)_{10}$ | $(8)_{10}$ | $(10)_{10}$ | $(16)_{10}$ |
| **Dezimalsystem** | *zwei* | 2                        | 4          | 16         | 20          | 32          |
|                   | *acht* | 8                        | 16         | 64         | 80          | 128         |
| **Oktalsystem**   | *zwei* | 2                        | 4          | 20         | 24          | 40          |
|                   | *acht* | 10                       | 20         | 100        | 120         | 200         |

*Tabelle 2: Multiplikation (Zahl) \* (Faktor)*


### **(a)** Tabelle 2 zeigt die Ergebnisse für die Berechnungen $(1, 2, 8, 10, 16) \cdot (2, 8)$ im Dezimal und Oktalsystem. Führen Sie die selbe Rechnung für das Binär- und Hexadezimalsystem durch!

### **(b)** Ergebnisse der folgenden Terme im angegebenen Zahlensystem auf…

#### I. Als Binärzahl: $2^2$, $2^3$, $2^4$, $2^5$, $2^6$, $2^7$

#### Ii. Als Oktalzahl: $8^2$, $8^3$, $8^4$, $8^5$, $8^6$, $8^7$

#### Iii. Als Dezimalzahl: $10^2$, $10^3$, $10^4$, $10^5$, $10^6$, $10^7$

#### Iv. Als Hexadezimalzahl: $16^2$, $16^3$, $16^4$, $16^5$, $16^6$, $16^7$
