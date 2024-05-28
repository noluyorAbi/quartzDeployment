---
tags:
  - 4semester
  - FSK
  - informatik
  - Erklaerung
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema: "[[FSK-ÜB-6]]"
Benötigte Zeit: 
date created: Tuesday, 28. May 2024, 22:03
date modified: Tuesday, 28. May 2024, 22:26
---

# [Anwenden und Üben des CYK](https://www.cip.ifi.lmu.de/~lindebar/)
# CYK-Algorithmus

>[!info] Kurzerklärung
>Der CYK-Algorithmus (Cocke-Younger-Kasami-Algorithmus) ist ein Parsing-Algorithmus für kontextfreie Grammatiken, der zur Überprüfung verwendet wird, ob eine gegebene Zeichenkette zu einer bestimmten kontextfreien Sprache gehört. Er funktioniert durch dynamische Programmierung und arbeitet in der Chomsky-Normalform.

In der Theorie der formalen Sprachen wird der CYK-Algorithmus typischerweise wie folgt beschrieben:

## Voraussetzungen
Bevor der CYK-Algorithmus angewendet werden kann, muss die kontextfreie Grammatik in Chomsky-Normalform (CNF) vorliegen. Eine Grammatik ist in CNF, wenn jede Produktionsregel eine der folgenden Formen hat:

1. $A \rightarrow BC$ (wobei $A, B, C$ Nichtterminale sind)
2. $A \rightarrow a$ (wobei $A$ ein Nichtterminal und $a$ ein Terminal ist)
3. $S \rightarrow \epsilon$ (wobei $S$ das Startsymbol ist und $\epsilon$ das leere Wort)

## CYK-Algorithmus

Der CYK-Algorithmus wird in drei Hauptschritten durchgeführt:

1. **Initialisierung**:
   - Erstelle eine Tabelle $T$ der Größe $n \times n$, wobei $n$ die Länge der Eingabezeichenkette ist.
   - Fülle die Diagonale der Tabelle mit den Nichtterminalen, die die jeweiligen Terminale ableiten.

2. **Rekursion**:
   - Fülle die Tabelle von der unteren linken Ecke bis zur oberen rechten Ecke, indem du überprüfst, ob die Kombinationen der Einträge in den unteren Dreiecken der Tabelle durch die Produktionsregeln abgeleitet werden können.

3. **Akzeptanz**:
   - Überprüfe, ob das Startsymbol $S$ in der oberen rechten Ecke der Tabelle enthalten ist. Wenn ja, gehört die Eingabezeichenkette zur Sprache der Grammatik.

## Beispiel

Angenommen, wir haben die Grammatik in CNF:

$S \rightarrow AB \mid BC$  
$A \rightarrow BA \mid a$  
$B \rightarrow CC \mid b$  
$C \rightarrow AB \mid a$  

Und die Eingabezeichenkette ist $baaba$.

### Schritt-für-Schritt-Darstellung:

1. **Initialisierung**:
   - Erstelle die Tabelle $T$ und fülle die Diagonale basierend auf den Terminalen:

$$
\begin{array}{|c|c|c|c|c|}
\hline
\text{} & \text{} & \text{} & \text{} & \text{T} \\
\hline
\text{} & \text{} & \text{} & \text{} & \text{T} \\
\hline
\text{} & \text{} & \text{} & \text{T} & \text{T} \\
\hline
\text{} & \text{} & \text{T} & \text{T} & \text{T} \\
\hline
\text{} & \text{T} & \text{T} & \text{T} & \text{T} \\
\hline
\text{T} & \text{T} & \text{T} & \text{T} & \text{T} \\
\hline
\end{array}
$$

2. **Rekursion**:
   - Fülle die restlichen Zellen, indem du überprüfst, welche Kombinationen von Nichtterminalen in den Produktionsregeln vorkommen.

3. **Akzeptanz**:
   - Überprüfe, ob das Startsymbol $S$ in der oberen rechten Ecke der Tabelle enthalten ist.

### Beispiel-Tabelle (vereinfacht):

$$
\begin{array}{|c|c|c|c|c|}
\hline
S & \text{} & \text{} & \text{} & \text{} \\
\hline
\text{B} & \text{S} & \text{} & \text{} & \text{} \\
\hline
\text{A, C} & \text{B} & \text{S} & \text{} & \text{} \\
\hline
\text{B} & \text{A, C} & \text{B} & \text{S} & \text{} \\
\hline
a & b & a & a & b \\
\hline
\end{array}
$$

### Fazit

Der CYK-Algorithmus ist ein effizienter Parsing-Algorithmus für kontextfreie Grammatiken in Chomsky-Normalform. Durch die dynamische Programmierung kann er in $O(n^3 \cdot |G|)$-Zeit überprüft werden, ob eine Zeichenkette zu einer gegebenen kontextfreien Sprache gehört, wobei $n$ die Länge der Zeichenkette und $|G|$ die Anzahl der Produktionsregeln der Grammatik ist.


## Algorithmus zur Worterkennung in einer kontextfreien Grammatik

### Eingabe
- Kontextfreie Grammatik $G = (V, \Sigma, P, S)$ in CNF
- Wort $w = a_1, …, a_n \in \Sigma^*$
### Ausgabe
- Ja, wenn $w \in L(G)$
- Nein, wenn $w \notin L(G)$
### Beginn
- Für $i = 1$ bis $n$ tue
  - $V_{i} = \{ A \in V \mid A \rightarrow a_i \in P \}$
- Ende
- Für $j = 2$ bis $n$ tue
  - Für $i = 1$ bis $n + 1 - j$ tue
    - Für $k = 1$ bis $j - 1$ tue
      - $V_{i,j} = V_{i,j} \cup \{ A \in V \mid A \rightarrow BC \in P, B \in V_{i,k}, C \in V_{i+k,j-k} \}$
    - Ende
  - Ende
- Ende
- Wenn $S \in V_{1,n}$ dann Rückgabe Ja;
- Sonst Rückgabe Nein;
### Ende



---

# CYK-Algorithmus anwenden

>[!tip] Ablauf zur Anwendung des CYK-Algorithmus
>
> 1. **Konvertieren Sie die Grammatik in Chomsky-Normalform (CNF)**: Stellen Sie sicher, dass die gegebene Grammatik in CNF vorliegt.
> 
> 2. **Initialisierung der Tabelle**: Erstellen Sie eine Tabelle $T$ mit der Größe $n \times n$, wobei $n$ die Länge der Eingabezeichenkette ist.
> 
> 3. **Füllen der Diagonale**: Füllen Sie die Diagonale der Tabelle mit den Nichtterminalen, die die entsprechenden Terminale ableiten.
> 
> 4. **Füllen der restlichen Tabelle**: Verwenden Sie die Produktionsregeln, um die restlichen Zellen der Tabelle zu füllen. Kombinieren Sie die Einträge gemäß der Produktionsregeln.
> 
> 5. **Überprüfung**: Überprüfen Sie, ob das Startsymbol in der oberen rechten Ecke der Tabelle enthalten ist. Wenn ja, gehört das Wort zur Sprache.


## Beispiel zur Anwendung des CYK-Algorithmus auf $w_1 = \$\#\$\#\#$ [[FSK-ÜB-6#FSK6-2 CYK-Algorithmus (2 Punkte)]]

>[!note] Aufgabenstellung
>Sei $G$ die Grammatik $({A_1, A_2, A_3, A_4, A_5}, \{\$, \#\}, P, A_1)$ mit
>
>$$
>\begin{aligned}
>P = \{&A_1 \rightarrow A_3 A_4 \mid A_3 A_2, \\
>&A_2 \rightarrow A_2 A_3 \mid A_4 A_4, \\
>&A_3 \rightarrow \$, \\
>&A_4 \rightarrow \# \mid A_3 A_4, \\
>&A_5 \rightarrow A_4 A_4 \mid \# \}
>\end{aligned}
>$$

1. **Gegebene Grammatik in CNF überprüfen**:
   Die Grammatik $G$ ist bereits in Chomsky-Normalform.

2. **Initialisierung der Tabelle**:
   Erstellen Sie eine Tabelle $T$ der Größe $5 \times 5$, da das Wort $w_1$ fünf Zeichen enthält.

3. **Füllen der Diagonale**:

$$
\begin{array}{|c|c|c|c|c|}
\hline
\$ & \# & \$ & \# & \# \\
\hline
A_3 & A_4, A_5 & A_3 & A_4, A_5 & A_4, A_5 \\
\hline
\end{array}
$$

4. **Füllen der restlichen Tabelle**:

$$
\begin{array}{|c|c|c|c|c|}
\hline
 &  &  &  & A_1 \\
\hline
 &  &  & A_1 & \\
\hline
 &  & A_1 &  & \\
\hline
 & A_1 &  &  & \\
\hline
A_3 & A_4, A_5 & A_3 & A_4, A_5 & A_4, A_5 \\
\hline
\end{array}
$$

Erklärung der Befüllung:
- Für Zelle (1,2) prüfen wir Kombinationen der Diagonalen $A_3$ und $A_4, A_5$, was zu $A_3 A_4$ und $A_3 A_5$ führt, was mit den Regeln von $P$ übereinstimmt und $A_1$ ergibt.
- Wiederholen Sie dies für alle Zellen, indem Sie Kombinationen und Regeln von $P$ anwenden.

5. **Überprüfung**:
   - Überprüfen Sie die obere rechte Ecke der Tabelle.
   - Wenn das Startsymbol $A_1$ enthalten ist, gehört das Wort zur Sprache $L(G)$.

In diesem Fall:
- Das Startsymbol $A_1$ befindet sich in der oberen rechten Ecke der Tabelle.
- Daraus folgt, dass das Wort $w_1 = \$\#\$\#\#$ in der Sprache $L(G)$ enthalten ist.

