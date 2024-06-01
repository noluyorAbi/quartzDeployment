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
date modified: Wednesday, 29. May 2024, 19:36
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

Ein Kellerautomat $M$, der die Sprache $L = \{a^{2n}\$a^n \mid n \in \mathbb{N}_{\gt0}\}$ akzeptiert, wird wie folgt definiert:

### Definition des Kellerautomaten:

- **Zustände**: $Z = \{q_0, q_1, q_f\}$
- **Eingabealphabet**: $\Sigma = \{a, \$\}$
- **Kelleralphabet**: $\Gamma = \{a, \#\}$
- **Startzustand**: $z_0 = q_0$
- **Startkellersymbol**: $\#$
- **Akzeptierende Zustände**: $F = \{q_f\}$

### Übergangsfunktion $\delta$:

1. **Initiale Phase (Doppelte $a$'s auf den Keller legen)**:
   - $\delta(q_0, a, \#) = \{(q_0, a\#)\}$
   - $\delta(q_0, a, a) = \{(q_0, aa)\}$

2. **Dollarzeichen erkennen**:
   - $\delta(q_0, \$, a) = \{(q_1, a)\}$

3. **$a$'s nach dem Dollarzeichen verarbeiten**:
   - $\delta(q_1, a, a) = \{(q_1, \varepsilon)\}$

4. **Keller entleeren und akzeptieren**:
   - $\delta(q_1, \varepsilon, \#) = \{(q_f, \#)\}$

### Erklärung:

1. **Phase 1 (Initiale Phase)**:
   - Der Automat liest die $a$'s und legt sie auf den Keller, sodass die Anzahl der $a$'s im Keller doppelt so groß ist wie die Anzahl der $a$'s, die nach dem Dollarzeichen gelesen werden müssen.

2. **Phase 2 (Dollarzeichen erkennen)**:
   - Sobald das Dollarzeichen $\$$ gelesen wird, wechselt der Automat in den Zustand $q_1$.

3. **Phase 3 (Nachfolgende $a$'s verarbeiten)**:
   - Der Automat liest die $a$'s nach dem Dollarzeichen und entfernt ein $a$ vom Keller für jedes gelesene $a$.

4. **Phase 4 (Akzeptieren)**:
   - Wenn der Keller leer ist und das Startkellersymbol $\#$ erreicht wird, wechselt der Automat in den akzeptierenden Zustand $q_f$ und akzeptiert die Eingabe.

# FSK6-2 CYK-Algorithmus (2 Punkte)

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

## a) Prüfen Sie mit dem [[CYK-Algorithmus]], ob die folgenden Wörter $w_1$ und $w_2$ in $L(G)$ sind. Erstellen Sie dazu für jedes Wort die entsprechende Tabelle des Algorithmus und erklären Sie anhand der Tabelle, ob das Wort in $L(G)$ ist.

### i) $w_1 =  \$\#\$\#\#$

#### CYK-Algorithmus zur Überprüfung von $w_1 = \$\#\$\#\#$

**Gegebene Grammatik $G$:**
$$
\begin{aligned}
P = \{ & A_1 \rightarrow A_3 A_4 \mid A_3 A_2, \\
       & A_2 \rightarrow A_2 A_3 \mid A_4 A_4, \\
       & A_3 \rightarrow \$, \\
       & A_4 \rightarrow \# \mid A_3 A_4, \\
       & A_5 \rightarrow A_4 A_4 \mid \# \}
\end{aligned}
$$

**Eingabewort:** $w_1 = \$\#\$\#\#$

**Schritt 1: Initialisierung der Tabelle**

$$
\begin{array}{|c|c|c|c|c|}
\hline
1 & 2 & 3 & 4 & 5 \\
\hline
\$ & \# & \$ & \# & \# \\
\hline
A_3 & A_4, A_5 & A_3 & A_4, A_5 & A_4, A_5 \\
\hline
\end{array}
$$


**Schritt 2: Rekursion**

| $V_{i,j}$ |           1           |       2        |           3           |       4        |       5        |
| :-------: | :-------------------: | :------------: | :-------------------: | :------------: | :------------: |
|     1     |         $A_3$         | $A_{4}, A_{5}$ |         $A_3$         | $A_{4}, A_{5}$ | $A_{4}, A_{5}$ |
|     2     |      $A_1, A_4$       |                |    $A_{1}, A_{4}$     | $A_{2}, A_{5}$ |       -        |
|     3     |                       | $A_{2}, A_{5}$ | $A_{1}, A_{2}, A_{5}$ |       -        |       -        |
|     4     | $A_{1}, A_{2}, A_{5}$ |                |           -           |       -        |       -        |
|     5     |                       |       -        |           -           |       -        |       -        |

**Fazit:**
- Das Wort $w_1 = \$\#\$\#\#$ ist nicht in $L(G)$,  da Startsymbol $A_{1} \notin V_{1,5}$

### ii) $w_2 = \$\$\$\#\#$


**Gegebene Grammatik $G$:**
$$
\begin{aligned}
P = \{ & A_1 \rightarrow A_3 A_4 \mid A_3 A_2, \\
       & A_2 \rightarrow A_2 A_3 \mid A_4 A_4, \\
       & A_3 \rightarrow \$, \\
       & A_4 \rightarrow \# \mid A_3 A_4, \\
       & A_5 \rightarrow A_4 A_4 \mid \# \}
\end{aligned}
$$

**Eingabewort:** $w_2 = \$\$\$\#\#$

**Schritt 1: Initialisierung der Tabelle**

$$
\begin{array}{|c|c|c|c|c|}
\hline
1 & 2 & 3 & 4 & 5 \\
\hline
\$ & \$ & \$ & \# & \# \\
\hline
A_3 & A_3 & A_3 & A_4, A_5 & A_4, A_5 \\
\hline
\end{array}
$$


**Schritt 2: Rekursion**

| $V_{i,j}$ |          1          |          2          |          3          |       4        |       5        |
| :-------: | :-----------------: | :-----------------: | :-----------------: | :------------: | :------------: |
|     1     |        $A_3$        |        $A_3$        |        $A_3$        | $A_{4}, A_{5}$ | $A_{4}, A_{5}$ |
|     2     |                     |                     |    $A_{1},A_{4}$    | $A_{2},A_{5}$  |       -        |
|     3     |                     |    $A_{1},A_{4}$    | $A_{1},A_{2},A_{5}$ |       -        |       -        |
|     4     |    $A_{1},A_{4}$    | $A_{1},A_{2},A_{5}$ |          -          |       -        |       -        |
|     5     | $A_{1},A_{2},A_{5}$ |          -          |          -          |       -        |       -        |

**Zeile 2:**
- $V_{1,2}$ = $(V_{1,1} \times V_{2,1}) = A_{3}A_{3} \Longrightarrow \emptyset$ 
- $V_{2,2}$ = $(V_{2,1} \times V_{3,1}) = A_{3}A_{3} \Longrightarrow \emptyset$ 
- $V_{3,2}$ = $(V_{3,1} \times V_{4,1}) = A_{3}A_{4},A_{3}A_{5} \overset{A_{3}A_{4}}{\Longrightarrow} A_{1},A_{4}$ 
- $V_{4,2}$ = $(V_{4,1} \times V_{5,1}) = A_{4}A_{4},A_{4}A_{5},A_{5}A_{4},A_{5}A_{5} \overset{A_{4}A_{4}}{\Longrightarrow} A_{2},A_{5}$ 

**Zeile 3:**
- $V_{1,3} = \emptyset$ 
	- $V_{1,1}\times V_{2,2} = A_{3}\times \emptyset \Longrightarrow \emptyset$  
	- $V_{1,2}\times V_{3,2} = \emptyset \times A_{3} \Longrightarrow \emptyset$  

- $V_{2,3} = A_{1},A_{4}$ 
	- $V_{2,1}\times V_{3,2} = A_{3}\times A_{1},A_{4}  = A_{3}A_{1},A_{3}A_{4} \overset{A_{3}A_{4}}{\Longrightarrow} A_{1},A_{4}$ 
	- $V_{4,1}\times V_{2,2} = A_{4}A_{5}\times \emptyset   \Longrightarrow \emptyset$ 

- $V_{3,3} = A_{1},A_{2},A_{5}$ 
	- $V_{3,1}\times V_{4,2} = A_{3}\times A_{2},A_{5}  = A_{3}A_{2},A_{3}A_{5} \overset{A_{3}A_{2}}{\Longrightarrow} A_{1}$ 
	- $V_{5,1}\times V_{3,2} = A_{4}A_{5}\times A_{1},A_{4}  = A_{4}A_{1},A_{4}A_{4},A_{5}A_{1},A_{5}A_{4} \overset{A_{4}A_{4}}{\Longrightarrow} A_{2},A_{5}$ 

**Zeile 4:**
- $V_{1,4} = A_{1},A_{4}$ 
	- $V_{1,1}\times V_{2,3} = A_{3}\times A_{1},A_{4} = A_{3}A_{1},A_{3}A_{4} \overset{A_{3}A_{4}}{\Longrightarrow} A_{1},A_{4}$  
	- $V_{1,2}\times V_{3,2} = \emptyset \times A_{1},A_{4} \Longrightarrow \emptyset$  
	- $V_{1,3}\times V_{4,2} = \emptyset \times A_{4},A_{5} \Longrightarrow \emptyset$  

- $V_{2,4} = A_{1},A_{2},A_{5}$ 
	- $V_{2,1}\times V_{3,3} = A_{3}\times A_{1},A_{2},A_{5} = A_{3}A_{1},A_{3}A_{2},A_{3}A_{5} \overset{A_{3}A_{2}}{\Longrightarrow} A_{1}$  
	- $V_{2,2}\times V_{4,2} = \emptyset \times A_{2},A_{5} \Longrightarrow \emptyset$  
	- $V_{2,3}\times V_{5,1} = A_{1},A_{4}\times A_{4},A_{5} = A_{1}A_{4},A_{1}A_{5},A_{4}A_{4},A_{4}A_{5} \overset{A_{4}A_{4}}{\Longrightarrow} A_{2},A_{5}$  


**Zeile 5:**
- $V_{1,5} = A_{1},A_{2},A_{5}$ 
	- $V_{1,1}\times V_{2,4} = A_{3}\times A_{1},A_{2},A_{5} = A_{3}A_{1},A_{3}A_{2},A_{3}A_{5} \overset{A_{3}A_{2}}{\Longrightarrow} A_{1}$  
	- $V_{1,2}\times V_{3,3} = \emptyset \times A_{1},A_{2},A_{5} \Longrightarrow \emptyset$  
	- $V_{1,3}\times V_{4,2} = \emptyset \times A_{2},A_{5} \Longrightarrow \emptyset$  
	- $V_{1,4}\times V_{5,1} = A_{1},A_{4}\times A_{4},A_{5} = A_{1}A_{4},A_{1}A_{5},A_{4}A_{4},A_{4},A_{5} \overset{A_{4}A_{4}}{\Longrightarrow} A_{2},A_{5}$  

**Fazit:**
- Das Wort $w_1 = \$\#\$\#\#$ ist in $L(G)$, da Startsymbol $A_{1} \in V_{1,5}$



## b) Geben Sie alle weiteren Wörter $w$ an, für die sich aus den Tabellen ergibt, dass $w \in L(G)$ ist.  

### Identifikation weiterer Wörter $w$ in $L(G)$
Die Tabellen zeigen, dass die Grammatik die folgenden Kombinationen von \$ und \# zulässt:

2. **Länge 2:**
   - \$ \#

3. **Länge 3:**
   - \$ \# \#

4. **Länge 4 und mehr:**
   - \$ \# \$ \#
   - \$ \$ \# \#
   - \# \$ \$ \#
### Schlussfolgerung
Die Grammatik $G$ erlaubt Kombinationen von \$ und \#, die den Ableitungsregeln entsprechen. Insbesondere alle Wörter, die durch Kombinationen und Anwendungen der Produktionen von $A_3$, $A_4$, $A_5$, $A_1$ und $A_2$ entstehen, sind Teil der Sprache $L(G)$.

---

# FSK6-3 Begrenzter Keller

## a) Ein Kellerautomat mit $k$-begrenzt​em Keller ist ein Kellerautomat, bei dem maximal $k$ Symbole auf dem Keller liegen können. Wenn der Keller voll ist, können Übergänge, die ein Symbol auf den Keller legen würden, nicht gewählt werden.

Zeigen Sie, dass für jeden Kellerautomaten $K$ und $k \in \mathbb{N}_0$ gilt:

$$
L(K \text{ mit } k\text{-begrenzt​em Keller}) \subseteq L(K)
$$

Hierbei nehmen wir an, dass $K$ mit leerem Keller akzeptiert.

Die Sprache, die von einem Kellerautomaten $K$ mit einem auf $k$ Symbole begrenzten Keller akzeptiert wird, eine Teilmenge der Sprache ist, die von dem gleichen Kellerautomaten $K$ ohne diese Beschränkung akzeptiert wird.


1. **Definition der akzeptierten Sprache**:
 - Ein Kellerautomat $K$ akzeptiert ein Wort $w$, wenn durch Zustandsübergänge der Startzustand in einen akzeptierenden Zustand überführt wird und der Keller nach Verarbeitung von $w$ leer ist

2. **Eigenschaften des $k$-begrenzten Kellers**:
- Ein Kellerautomat mit $k$-begrenztem Keller kann höchstens $k$ Symbole im Keller haben. Bei vollem Keller sind Übergänge, die Symbole hinzufügen, nicht möglich

3. **Behauptung**:
   - Jedes Wort, das vom $k$-begrenzten Kellerautomaten akzeptiert wird, wird auch vom ursprünglichen Kellerautomaten ohne Begrenzung akzeptiert: 
$$
     L(K \text{ mit } k\text{-begrenztem Keller}) \subseteq L(K).
$$

4. **Simulation von $K$ mit $k$-begrenztem Keller**:
- Ein Wort $w$ wird vom $k$-begrenztem Kellerautomaten akzeptiert, wenn es eine Zustandsübergangsfolge $\delta$ gibt, die $w$ vollständig. verarbeitet und den Keller leer macht, ohne jemals mehr als $k$ Symbole im Keller zu haben
- Diese Zustandsübergänge $\delta$ können auch im ursprünglichen Kellerautomaten $K$ (ohne Begrenzung) ausgeführt werden, da $K$ keine Begrenzung der Symbolanzahl im Keller hat.

5. **Formalität des Beweises**:
   - Angenommen, $w \in L(K \text{ mit } k\text{-begrenztem Keller})$. Das bedeutet, dass es eine akzeptierende Berechnung des $k$-begrenzten Kellerautomaten für $w$ gibt, die den Keller nie mehr als $k$ Symbole enthalten lässt.
   - Da diese Berechnung auch im unbegrenzten Kellerautomaten $K$ möglich ist, akzeptiert $K$ ebenfalls $w$.

6. **Schlussfolgerung**:
   - Jede akzeptierende Berechnung des $k$-begrenzten Kellerautomaten ist auch eine akzeptierende Berechnung des unbegrenzten Kellerautomaten. Daher gilt:
     $$
     L(K \text{ mit } k\text{-begrenztem Keller}) \subseteq L(K).
     $$

## b) Zeigen Sie, dass für alle $k \in \mathbb{N}_{\gt0}$ die Kellerautomaten mit $k$-begrenztem Keller genau die regulären Sprachen beschreiben.

### Lösung (direkte Beweiskombination)

**1. Kellerautomaten mit $k$-begrenztem Keller akzeptieren reguläre Sprachen:**

- Jede reguläre Sprache $L$ kann durch einen deterministischen endlichen Automaten (DFA) akzeptiert werden.
- Ein Kellerautomat mit $k$-begrenztem Keller kann dieselbe Sprache akzeptieren, indem er den Keller nicht nutzt oder nur eine konstante Anzahl von Symbolen speichert (maximal $k$).

**2. Kellerautomaten mit $k$-begrenztem Keller akzeptieren nur reguläre Sprachen:**

- Der Keller ist auf $k$ Symbole begrenzt, daher gibt es nur endlich viele mögliche Kellerinhalte.
- Kombiniere die Zustände des Kellerautomaten und die möglichen Kellerinhalte, um eine endliche Zustandsmenge zu erhalten.
- Dadurch kann ein DFA konstruiert werden, der dieselbe Sprache akzeptiert wie der Kellerautomat mit $k$-begrenztem Keller.

**Schlussfolgerung:**

Kellerautomaten mit $k$-begrenztem Keller beschreiben genau die regulären Sprachen, da sie einerseits reguläre Sprachen akzeptieren können und andererseits nur reguläre Sprachen akzeptieren.

---

# FSK6-4 [[Homomorphismen]]

>[!note] Aufgabenstellung
> Gegeben Alphabete $\Sigma$ und $\Delta$ bezeichnen wir eine Abbildung $h : \Sigma^* \to \Delta^*$ als (Monoid-)Homomorphismus, wenn sie struktur­erhaltend ist, d.h. wenn gilt:
>
> $$
> \begin{aligned}
> h(\epsilon) &= \epsilon \\
> h(u \circ v) &= h(u) \circ h(v) \quad \forall u, v \in \Sigma^*
> \end{aligned}
> $$
>
> Für $L \subseteq \Sigma^*$ sei $h(L) = \{ h(u) \mid u \in L \}$.
>
> Man kann leicht zeigen, dass für alle Sprachen $L_1, L_2 \subseteq \Sigma^*$ und Homomorphismen $h$ gilt:
> $$
> \begin{aligned}
> h(\emptyset) &= \emptyset \\
> h(L_1 \cup L_2) &= h(L_1) \cup h(L_2) \\
> h(L_1 \cap L_2) &= h(L_1) \cap h(L_2)
> \end{aligned}
> $$

## a) Beweisen Sie für alle Sprachen $L_1, L_2 \subseteq \Sigma^*$ und Homomorphismen $h$:

$$
h(L_1 \circ L_2) = h(L_1) \circ h(L_2)
$$
$$
h(L_1^*) = (h(L_1))^*
$$

Um die Aussagen zu beweisen, dass für alle Sprachen $L_1, L_2 \subseteq \Sigma^*$ und Homomorphismen $h$ gilt:

$$
h(L_1 \circ L_2) = h(L_1) \circ h(L_2)
$$
$$
h(L_1^*) = (h(L_1))^*
$$

gehen wir schrittweise vor.

### Beweis für $h(L_1 \circ L_2) = h(L_1) \circ h(L_2)$

**Gegeben:**

- Zwei Sprachen $L_1, L_2 \subseteq \Sigma^*$
- Ein Homomorphismus $h: \Sigma^* \to \Delta^*$

**Behauptung:**

$$
 h(L_1 \circ L_2) = h(L_1) \circ h(L_2) 
$$

**Beweis:**

1. **Definition des Konkatens von Sprachen:**
$$
 L_1 \circ L_2 = \{ u \circ v \mid u \in L_1 \text{ und } v \in L_2 \} 
$$

2. **Bild der Konkatens zweier Sprachen unter $h$:**
$$
 h(L_1 \circ L_2) = \{ h(w) \mid w \in L_1 \circ L_2 \} 
$$
Da $w \in L_1 \circ L_2$, gibt es $u \in L_1$ und $v \in L_2$ mit $w = u \circ v$. Somit:
   $$
 h(w) = h(u \circ v) 
$$

3. **Eigenschaft des Homomorphismus:**
$$
 h(u \circ v) = h(u) \circ h(v) 
$$
   Also:
   $$
 h(w) = h(u) \circ h(v) 
$$

4. **Ersetzung in der Menge:**
$$
 h(L_1 \circ L_2) = \{ h(u) \circ h(v) \mid u \in L_1, v \in L_2 \} 
$$
   Dies ist per Definition:
$$
 h(L_1) \circ h(L_2) = \{ x \circ y \mid x \in h(L_1), y \in h(L_2) \} 
$$

5. **Folgerung:**
$$
 h(L_1 \circ L_2) = h(L_1) \circ h(L_2) 
$$

### Beweis für $h(L_1^*) = (h(L_1))^*$

**Gegeben:**

- Eine Sprache $L_1 \subseteq \Sigma^*$
- Ein Homomorphismus $h: \Sigma^* \to \Delta^*$

**Behauptung:**

$$
 h(L_1^*) = (h(L_1))^* 
$$

**Beweis:**

1. **Definition des Kleene-Sterns:**
$$
 L_1^* = \bigcup_{k=0}^\infty L_1^k 
$$
   wobei $L_1^0 = \{\epsilon\}$ und $L_1^{k+1} = L_1^k \circ L_1$.

2. **Bild unter $h$:**
 $$
 h(L_1^*) = h\left(\bigcup_{k=0}^\infty L_1^k\right) = \bigcup_{k=0}^\infty h(L_1^k) 
$$

3. **Eigenschaft des Homomorphismus für Konkatens:**
$$
 h(L_1^k) = (h(L_1))^k 
$$
   Beweis durch Induktion über \(k\):
   
   - **Induktionsanfang:**
$$
 k=0: \quad h(L_1^0) = h(\{\epsilon\}) = \{\epsilon\} = (h(L_1))^0 
$$
   
   - **Induktionsannahme:**
Angenommen, es gilt $h(L_1^k) = (h(L_1))^k$.
   
   - **Induktionsschritt:**
$$
 h(L_1^{k+1}) = h(L_1^k \circ L_1) = h(L_1^k) \circ h(L_1) = (h(L_1))^k \circ h(L_1) = (h(L_1))^{k+1} 
$$
   
Daher gilt $h(L_1^k) = (h(L_1))^k$ für alle $k$.

4. **Zusammensetzung der Kleene-Sterns:**
$$
 h(L_1^*) = \bigcup_{k=0}^\infty h(L_1^k) = \bigcup_{k=0}^\infty (h(L_1))^k = (h(L_1))^* 
$$

5. **Folgerung:**
$$
 h(L_1^*) = (h(L_1))^* 
$$

Damit sind beide Aussagen bewiesen:

$$
 h(L_1 \circ L_2) = h(L_1) \circ h(L_2) 
$$
$$
 h(L_1^*) = (h(L_1))^* 
$$


## b) Beweisen Sie für alle regulären Sprachen $L$ und Homomorphismen $h$: Wenn $L$ regulär ist, dann ist auch $h(L)$ regulär.

Um zu beweisen, dass für alle regulären Sprachen $L$ und Homomorphismen $h$ gilt: Wenn $L$ regulär ist, dann ist auch $h(L)$ regulär, gehen wir wie folgt vor:

### Beweis:

1. **Gegeben:**
   $L$ ist eine reguläre Sprache über dem Alphabet $\Sigma$.

2. **Eigenschaft regulärer Sprachen:**
   Da $L$ regulär ist, existiert ein deterministischer endlicher Automat (DFA) $A = (Q, \Sigma, \delta, q_0, F)$, der $L$ erkennt.

3. **Homomorphismus $h$:**
   Der Homomorphismus $h: \Sigma^* \to \Delta^*$ ist eine Abbildung, die struktur­erhaltend ist:
$$
h(u \circ v) = h(u) \circ h(v) \quad \forall u, v \in \Sigma^*
$$

4. **Transformation des Automaten:**
   Wir konstruieren einen neuen Automaten $A_h = (Q, \Delta, \delta_h, q_0, F)$, der $h(L)$ erkennt. Dabei wird die Übergangsfunktion $\delta$ so angepasst, dass sie auf die Bilder der Symbole unter $h$ angewendet wird.

5. **Konstruktion von $A_h$:**
   - Der neue Automat $A_h$ hat denselben Zustandsraum $Q$, Startzustand $q_0$, und Endzustände $F$ wie $A$.
   - Die Übergangsfunktion $\delta_h$ wird so definiert, dass sie den Übergängen von $A$ folgt, aber für die Symbole in $\Delta$, die durch $h$ abgebildet werden.

6. **Erkennung von $h(L)$:**
   Da $A_h$ durch die Anwendung von $h$ auf die Übergangsfunktion von $A$ konstruiert wird, erkennt $A_h$ die Sprache $h(L)$.

### Schlussfolgerung:
Da $A_h$ ein DFA ist und DFA's genau die regulären Sprachen erkennen, ist $h(L)$ ebenfalls regulär.

**Zusammenfassung:**
Wenn $L$ regulär ist, gibt es einen DFA, der $L$ erkennt. Durch Transformation dieses DFA unter dem Homomorphismus $h$ erhält man einen neuen DFA, der $h(L)$ erkennt. Daher ist $h(L)$ regulär.


## c) Zeigen Sie, dass über dem Alphabet $\Sigma = \{ a, b, c, d \}$ die Sprache
$$
L = \{ a^n b^i c^n d^j \mid n, i, j \in \mathbb{N} \}
$$
nicht regulär ist. Geben Sie zu diesem Zweck einen Homomorphismus $h$ an, so dass $h(L) = \{ a^n b^n \mid n \in \mathbb{N} \}$ ist. Da $h(L)$ bekanntlich nicht regulär ist, kann dann auch $L$ nicht regulär sein.

Um zu zeigen, dass die Sprache $L = \{ a^n b^i c^n d^j \mid n, i, j \in \mathbb{N} \}$ nicht regulär ist, verwenden wir einen Homomorphismus $h$, der $L$ auf eine bekannte nicht-reguläre Sprache abbildet.

### Schritt-für-Schritt Beweis:

1. **Definition der Sprache $L$:**
$$
 L = \{ a^n b^i c^n d^j \mid n, i, j \in \mathbb{N} \} 
$$

2. **Homomorphismus $h$:**
   Wir definieren $h: \Sigma^* \to \{a, b\}^*$ mit dem Alphabet $\Sigma = \{a, b, c, d\}$ wie folgt:

$$
 h(a) = a 
$$

$$
 h(b) = \epsilon 
$$

(das leere Wort)

$$
 h(c) = b 
$$


$$
 h(d) = \epsilon 
$$

3. **Bild der Sprache $L$ unter $h$:**
$$
 h(L) = \{ h(a^n b^i c^n d^j) \mid n, i, j \in \mathbb{N} \} 
$$

   Da $h(b) = \epsilon$ und $h(d) = \epsilon$, vereinfacht sich das zu:
$$
 h(a^n b^i c^n d^j) = h(a^n) h(b^i) h(c^n) h(d^j) = a^n \epsilon^i b^n \epsilon^j = a^n b^n 
$$

   Also:
$$
 h(L) = \{ a^n b^n \mid n \in \mathbb{N} \} 
$$

4. **Nicht-Regulärität von $h(L)$:**
   Es ist bekannt, dass die Sprache $\{ a^n b^n \mid n \in \mathbb{N} \}$ nicht regulär ist.

5. **Schlussfolgerung:**
   Da $h(L)$ nicht regulär ist und $h$ ein Homomorphismus ist, muss auch die ursprüngliche Sprache $L$ nicht regulär sein.

### Fazit:
Durch die Abbildung der Sprache $L$ auf die bekannte nicht-reguläre Sprache $\{ a^n b^n \mid n \in \mathbb{N} \}$ mittels des Homomorphismus $h$, haben wir gezeigt, dass $L$ nicht regulär ist.








<!-- DISQUS SCRIPT COMMENT START -->






<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://myuninotes.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>






<!-- DISQUS SCRIPT COMMENT END -->






