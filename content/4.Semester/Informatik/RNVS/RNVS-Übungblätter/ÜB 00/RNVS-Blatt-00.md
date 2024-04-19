---
tags:
  - RNVS
  - 4semester
  - informatik
  - Übungsblatt
fach: "[[RNVS]]"
Thema:
date created: Friday, 19. April 2024, 01:50
date modified: Friday, 19. April 2024, 02:47
---

# Aufgabe 1: Anforderungen des Internets (H)

>[!note]
>Im Internet macht es den Anschein, also wären alle Geräte unmittelbar miteinander verbunden.
## (a) Angenommen Sie müssen ein Netz entwerfen, in dem jedes Endgerät mit jedem anderen verkabelt ist, d.h. _komplett vermascht_

- 8 Teilnehmer?
- 300 Teilnehmer?
- $N$ Teilnehmer?

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

## (d) Wieviele Stellen hat die Zahl \(2^{32} - 1\) in Binärdarstellung? Wieviele davon sind 1 wieviele 0?

