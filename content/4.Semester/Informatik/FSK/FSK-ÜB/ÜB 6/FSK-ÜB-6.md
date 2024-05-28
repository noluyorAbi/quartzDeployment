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
date modified: Tuesday, 28. May 2024, 22:30
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

$$
\begin{array}{|c|c|c|c|c|}
\hline
A_1 & A_1 & A_1, A_2, A_5 & A_1 & A_1 \\
\hline
 & A_1, A_2, A_5 & A_1 & A_1 & A_1 \\
\hline
 &  & A_1 & A_1 & A_1 \\
\hline
 &  &  & A_1 & A_1 \\
\hline
A_3 & A_4, A_5 & A_3 & A_4, A_5 & A_4, A_5 \\
\hline
\end{array}
$$

**Erklärung der Tabelle:**
- **Diagonale:** Terminale werden den entsprechenden Nichtterminalen zugeordnet.
- **Zellen (i, j):** Kombinationen von Nichtterminalen werden überprüft und gemäß Produktionsregeln ergänzt.

**Schritt 3: Überprüfung**
- Das Startsymbol $A_1$ ist in der oberen rechten Ecke der Tabelle enthalten.

**Fazit:**
- Das Wort $w_1 = \$\#\$\#\#$ ist in $L(G)$.

### ii) $w_2 = \$\$\$\#\#$

