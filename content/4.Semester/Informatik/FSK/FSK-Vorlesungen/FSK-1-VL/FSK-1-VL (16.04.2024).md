---
tags:
  - 4semester
  - informatik
  - FSK
fach: "[[FSK]]"
date created: Tuesday, 16. April 2024, 11:25
date modified: Tuesday, 16. April 2024, 13:06
---

# Geplanter Inhalt dieser VL

- [Vorlesung 1a: Begrüßung, Organisatorisches, Inhaltsübersicht und Grundlagen](https://www.tcs.ifi.lmu.de/lehre/ss-2024/fsk_de/vl-01a-ft-begruessung-organisatorisches-inhaltsuebersicht-und-grundlagen.pdf)
- [Vorlesung 1b: Grammatiken und die Chomsky-Hierarchie](https://www.tcs.ifi.lmu.de/lehre/ss-2024/fsk_de/vl-01b-ft-grammatiken-und-die-chomsky-hierarchie.pdf)
- [Vorlesung 1c: Weitere Grammatikbegriffe sowie Eigenschaften von Sprachen](https://www.tcs.ifi.lmu.de/lehre/ss-2024/fsk_de/vl-01c-ft-weitere-grammatikbegriffe-sowie-eigenschaften-von-sprachen.pdf)

# Organisatorisches:

- Zentralübung alle 2 Wochen Mittwochs um 12-14 Uhr in A240
- **BONUSPUNKTE!!** Immer eine Woche Zeit für 
- **Klausur:** 5. August 2024 ab 15:00 
- Das Datum der Nachholklausur ist noch nicht bekannt.

# Ziel des Moduls

## Ziel der Veranstaltung
Das Ziel dieses Moduls ist es, sowohl Theorie also auch Fähigkeiten zu vermitteln:

### Theorie
- **Was Computer können und was nicht:** Die Theorie erklärt, wie schnell und effizient bestimmte Problem durch Computer gelöst werden können und welche Problem außerhalb ihrer Reichweite liegen.
- **Praktische Anwendungen:** Viele theoretische Konzepte finden Anwendung in der Praxis.
- **Ästhetik der Theorie:** Theoretische Informatik ist nicht nur nützlich, sondern auch in gewisser Weise ästhetisch ansprechend.

### Fähigkeiten
- **Umgang mit abstrakten Konzepten:** Sie werden lernen, abstrakte Theorien zu verstehen und anzuwenden.
- **Sorgfältige und präzise Arbeit:** Das Module lehrt Sie, präzise und detailorientiert zu arbeiten.
- **Entwicklung von Beweisführungskompetenzen:** Sie werden Fähigkeiten entwickeln, um wissenschaftliche Beweise zu führen und zu verstehen.

## Inhalte der Veranstaltung
Die theoretische Informatik umfasst drei große Themenbereiche:

1. **Formale Sprachen und Automatentheorie**
   - **Darstellung von Entscheidungsproblemen:** Wie können Problem formal und verständlich für Automaten ausgedrückt werden?
   - **Erkennung von Programmiersprachen:** Methods zur Erkennung und Analyse von Programmiersprachen und anderen formalen Sprachen.

2. **Berechenbarkeitstheorie**
   - **Algorithmische Lösbarkeit:** Untersuchung, welche Problem grundsätzlich mit Algorithmen oder Computern gelöst werden können.

3. **Komplexitätstheorie**
   - **Lösbarkeit in annehmbarer Zeit:** Erforschung, welche Problem effizient, also in praktisch annehmbarer Zeit, gelöst werden können.

# Themen

- **Formale Sprachen und Automatentheorie**
  - Darstellung von Entscheidungsproblemen
  - Erkennung von Programmiersprachen und ähnlichen Strukturen
  - Schlüsselkonzepte:
    - Formale Sprachen und Entscheidungsprobleme
    - Reguläre Ausdrücke (z.B. für Lexer)
    - Grammatiken (z.B. für Parser)
    - Automaten
- **Berechenbarkeitstheorie**
  - Welche Problem können algorithmisch gelöst werden?
  - Schlüsselkonzepte:
    - Intuitive Berechenbarkeit
    - Turing-Berechenbarkeit
    - Imperative Programme (LOOP, WHILE, GOTO)
    - Recursive Funktionen
    - Unentscheidbarkeit
- **Komplexitätstheorie**
  - Welche Problem können in akzeptabler Zeit gelöst werden?
  - Schlüsselkonzepte:
    - Die Klassen $P$ und $NP$
    - $NP$-Schwere, $NP$-Vollständigkeit
    - Konkrete $NP$-vollständige Problem

# Grundlagen: [[Wörter]]

>[!note] Definition
> Ein **Alphabet** $\Sigma$ ist eine endliche *nicht leere* Menge von **Zeichen** (oder **Symbolen**).

> Z.B $\Sigma = \{a,b,c,d,e\}$

>[!note] Definition
>Ein **Wort** w über $\Sigma$ ist eine endliche Folge von Zeichen aus $\Sigma$.

> Beispiele: 
> - *bade* ist ein Wort über {a,b,c,d,e}
> - *baden* ist **kein** Wort über {a,b,c,d,e} (n fehlt in Menge)


**Weitere Notationen zu Wörtern:**

- Das *leere Wort* wird also $\epsilon$ notiert.
- Für $w = a_1 \ldots a_n$ ist $|w| = n$ die *Länge* des Wortes.
- Für $1 \leq i \leq |w|$ ist $w[i]$ das Zeichen an der *$i$-ten Position* in $w$.
- Für $a \in \Sigma$ und $w$ ein Wort über $\Sigma$ sei $\#_a(w) \in \mathbb{N}$ die Anzahl an Vorkommen des Zeichens $a$ im Wort $w$.
- **Beispiele:**
	- Es gilt $|\epsilon| = 0$ und $\#_a(\epsilon) = 0$ für alle $a \in \Sigma$.
	- Für $\Sigma = \{a, b, c\}$ ist
	  - $|abbccc| = 6$
	  - $|aabbbccc| = 8$
	  - $\#_a(abbccc) = 1$
	  - $\#_c(aabbbccc) = 3$.
	- Für $w = abbcd$ ist $w[1] = a$, $w[5] = c$ und $w[7]$ undefiniert.



# [[Konkatenation und Kleene-Stern]] (REFRACTOR)

>[!note] Definition
>Das Wort $u \cdot v$ (alternativ $uv$) entsteht, indem Wort $v$ hinten an Wort $u$ angehängt wird.

> Die Konkatenation hilft folgende Mengen von Wörtern über zu definieren:

>[!note] Definition
> 
> Sei $\Sigma$ ein Alphabet, dann definieren wir:
>$$
> \begin{aligned}
> \Sigma^0 &:= \{\epsilon\} \\
> \Sigma^i &:= \{aw \mid a \in \Sigma, w \in \Sigma^{i-1}\} \text{ für } i > 0 \\
> \Sigma^* &:= \bigcup_{i\in\mathbb{N}} \Sigma^i \\
> \Sigma^+ &:= \bigcup_{i\in\mathbb{N}_{>0}} \Sigma^i
> \end{aligned}
>$$
> Beachte: $\mathbb{N} = \{0, 1, 2, \ldots\}$ und $\mathbb{N}_{>0} = \{1, 2, \ldots\}$.

**Beispiele für Konkatenation und Kleene-Stern:**
### $\Sigma^0$
- $\Sigma^0$ ist definiert also die Menge, die nur das leere Wort $\epsilon$ enthält. Da das leere Wort kein Zeichen enthält, ist es das "neutrale Element" der Wortkonkatenation. Für $\Sigma = \{a, b\}$ erhalten wir $\Sigma^0 = \{\epsilon\}$.
### $\Sigma^i$
- $\Sigma^i$, für ein gegebenes $i > 0$, enthält alle Wörter der Länge $i$. Das bedeutet, dass wir jede Kombination von Zeichen aus $\Sigma$ nehmen und diese zu Wörtern der Länge $i$ zusammensetzen. Zum Beispiel:

  - Für $\Sigma^1 = \{a, b\}$, weil wir jedes Zeichen aus $\Sigma$ nehmen, das ein Wort der Länge 1 bildet.
  - Für $\Sigma^2$ bilden wir alle möglichen Kombinationen von zwei Zeichen: $\Sigma^2 = \{aa, ab, ba, bb\}$.
### $\Sigma^*$
- $\Sigma^*$ ist die Kleene-Stern-Operation und umfasst alle Wörter beliebiger Länge, einschließlich des leeren Wortes $\epsilon$. Es ist die Vereinigung aller $\Sigma^i$ für $i \geq 0$. Für $\Sigma = \{a, b\}$ enthält $\Sigma^*$ also alle möglichen Wörter, die mit 'a' und 'b' gebildet werden können, wie $\{\epsilon, a, b, aa, ab, ba, bb, aaa, ...\}$.
### $\Sigma^+$
- $\Sigma^+$ ist ähnlich wie $\Sigma^*$, enthält jedoch nicht das leere Wort $\epsilon$. Es umfasst alle nicht-leeren Wörter, die aus dem Alphabet $\Sigma$ gebildet werden können. Für $\Sigma = \{a, b\}$ beinhaltet $\Sigma^+$ die Mengen $\Sigma^i$ für alle $i \geq 1$. Das bedeutet, wir haben alle Wörter wie $\{a, b, aa, ab, ba, bb, aaa, ...\}$, aber nicht $\epsilon$.

Beachten Sie, dass beim Übergang von $\Sigma^i$ zu $\Sigma^{i+1}$, jedes Wort aus $\Sigma^i$ mit jedem Zeichen aus $\Sigma$ konkateniert wird, um die Wörter der Länge $i+1$ zu bilden.


# Sprechweisen: Präfix, Suffix, Teilwort

Seien $u, v$ Wörter über einem Alphabet $\Sigma$.

- $u$ ist ein **Präfix** von $v$, wenn es ein Wort $w$ gibt mit $uw = v$.
- $u$ ist ein **Suffix** von $v$, wenn es ein Wort $w$ gibt mit $wu = v$.
- $u$ ist ein **Teilwort** von $v$, wenn es Wörter $w_1, w_2$ gibt mit $w_1uw_2 = v$.

![[Pasted image 20240416124604.png|center]]


**Beispiel:** Sei $w = ababbaba$.

- $w$ ist ein Präfix, Suffix und Teilwort von $w$.
- $aba$ ist ein Präfix, Suffix und Teilwort von $w$.
- $ababb$ ist ein Präfix und Teilwort von $w$, aber kein Suffix von $w$.
- $bab$ ist ein Teilwort von $w$, aber weder ein Präfix noch ein Suffix.

- <span style="color:cyan">w</span> ist ein Präfix, Suffix und Teilwort von w.
- <span style="color:cyan">aba</span> ist ein Präfix, Suffix und **Teilwort** von w. **(WARUM TEILWORT??)** !!!
- <span style="color:cyan">ababb</span> ist ein Präfix und Teilwort von w, aber kein Suffix von w.
- <span style="color:green">bab</span> ist ein Teilwort von w, aber weder ein Präfix noch ein Suffix.

- Das ganze Wort <span style="color:cyan">ababbaba</span> ist ein Präfix, Suffix und Teilwort von w.
- <span style="color:cyan">aba</span>bb<span style="color:red">aba</span> ist ein Präfix, Suffix und Teilwort von w, gefunden am Anfang, am End und in der Mitte des Wortes.
- <span style="color:cyan">ababb</span>aba ist ein Präfix und Teilwort von w, gefunden am Anfang und in der Mitte des Wortes, aber kein Suffix.
- aba<span style="color:green">bab</span>baba ist ein Teilwort von w, gefunden in der Mitte des Wortes, aber weder ein Präfix noch ein Suffix.

# Grundlagen: Formale Sprache

>[!note] Definition
>Eine (*formale*) **Sprache** $L$ über dem Alphabet $\Sigma$ ist eine Teilmenge von $\Sigma^*$
>d.h $L \subseteq \Sigma^*$

>Beachte: L steht für "Language" 

>[!note] Definition
>Seien $L$, $L_1$, $L_2$ formale **Sprachen** über dem Alphabet $\Sigma$. Dann sind folgende Operationen definiert:
>
>- **Vereinigung**: 
>	- Die Vereinigung von $L_1$ und $L_2$ ist definiert also 
>	- $L_1 \cup L_2 = \{w | w \in L_1$ oder $w \in L_2\}$
>- **Schnitt**: 
>	- Der Schnitt von $L_1$ und $L_2$ ist definiert also 
>	- $L_1 \cap L_2 = \{w | w \in L_1$ und $w \in L_2\}$
>- **Komplement**: 
>	- Das Komplement zu $L$ ist definiert also 
>	- $\overline{L} = \Sigma^* \setminus L$
>- **Product**: 
>	- Das Product von $L_1$ und $L_2$ ist definiert also 
>	- $L_1 \cdot L_2 = L_1L_2 = \{uv | u \in L_1$ und $v \in L_2\}$
>
>Eine (*formale*) **Sprache** $L$ über dem Alphabet $\Sigma$ ist eine Teilmenge von $\Sigma^*$, d.h. $L \subseteq \Sigma^*$.


