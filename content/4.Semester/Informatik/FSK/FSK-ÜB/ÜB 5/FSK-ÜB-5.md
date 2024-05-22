---
tags:
  - 4semester
  - FSK
  - informatik
  - Übungsblatt
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema: 
Benötigte Zeit: 6h
date created: Tuesday, 21. May 2024, 16:56
date modified: Wednesday, 22. May 2024, 19:04
---

# FSK5-1 Myhill und Nerode (2 Punkte)

## a) Sei $L = L(ab^*c)$ eine Sprache über dem Alphabet $\Sigma = \{a, b, c\}$. Geben Sie für jedes der folgenden Wörter $u_i, i \in \{1, 2, 3\}$, eine kompakte Beschreibung der Äquivalenzklasse $[u_i]$ der Nerode-Relation von $L$ an.

>[!note] Aufgabenstellung
>1. $u_1 = abb$
>2. $u_2 = \varepsilon$
>3. $u_3 = c$

>[!tip]- Anleitung zum lösen der Aufgabe
> Um die Aufgabenstellung zu lösen, hier eine klare Anleitung, wie man die Äquivalenzklassen der Nerode-Relation für die Sprache $L = L(ab^*c)$ über das Alphabet $\Sigma = \{a, b, c\}$ bestimmt:
> ### Schritt 1: Verständnis der Sprache $L$
> Die Sprache $L$ umfasst alle Wörter, die mit dem Buchstaben 'a' beginnen, gefolgt von beliebig vielen 'b' (auch keinem) und einem abschließenden 'c'. Beispiele für Wörter in $L$ sind "ac", "abc", "abbc", usw.
>
> ### Schritt 2: Definition der Nerode-Relation
> Zwei Wörter $u$ und $v$ sind äquivalent bezüglich der Nerode-Relation einer Sprache $L$, wenn für jedes mögliche Anhängsel $x$ aus $\Sigma^*$ gilt:
> - $ux \in L$ genau dann, wenn $vx \in L$
>
> ### Schritt 3: Analyse der vorgegebenen Wörter
> Für jedes der vorgegebenen Wörter $u_i$ (in diesem Beispiel nur $u_1 = abb$), bestimmen wir die Äquivalenzklasse $[u_1]$, indem wir prüfen, welche Anhängsel $x$ das resultierende Wort $u_1x$ in $L$ liegen lassen.
>
> #### Beispiel $u_1 = abb$:
> - Wenn wir "c" an "abb" anhängen (d.h., $x = c$), erhalten wir "abbc", was in $L$ liegt.
> - Wenn wir irgendein anderes Symbol oder eine Kombination aus Symbolen, die nicht mit "c" enden, an "abb" anhängen, liegt das resultierende Wort nicht in $L$.
>
> Daher ist die Äquivalenzklasse von $u_1$ definiert durch alle Wörter $v$, für die $vc$ das einzige Wort in $L$ ist. Dazu gehört jedes Wort, das "abb" voranstellt und mit "c" endet.
>
> ### Schritt 4: Formulierung der Äquivalenzklassen
> Die Äquivalenzklasse für $u_1$ ist:
>$$
>[abb] = \{ v \in \Sigma^* : vc \in L \text{ und kein anderes } vx \in L \text{
>für } x \neq c \}
>$$
>
> ### Schritt 5: Generalisierung für weitere Wörter
> Diesen Prozess kann man für jedes andere Wort in ähnlicher Weise wiederholen, um die jeweilige Äquivalenzklasse bezüglich der Nerode-Relation der Sprache $L$ zu bestimmen.
>
> Dieser Ansatz nutzt das Prinzip, dass die Nerode-Relation eine Äquivalenzrelation ist und in Klassen einteilt, welche die Verhaltensmuster der Wörter gegenüber der Sprache $L$ abbilden. Durch das Verstehen, welche Anhängsel ein Wort in die Sprache einfügen oder ausschließen, kann man die Äquivalenzklassen strukturieren und definieren.
### 1. $u_1 = abb$

$$
[abb] = \{ v \in \Sigma^* : vc \in L \text{ und kein anderes } vx \in L \text{
für } x \neq c \}
$$
$$
 [abb] = \{ v \in \Sigma^* \mid \forall x \in \Sigma^* : vx \in L \leftrightarrow x = c \} 
$$

### 2. $u_2 = \epsilon$

$$
[\varepsilon] = \{ab^{*}c\}
$$
### 3. $u_3 = c$

$$
[c] = \emptyset
$$

## b) Bestimmen Sie den Nerode-Index folgender Sprachen $L_i, i \in \{1, 2, 3\}$, über Alphabeten $\Sigma_i$ und entscheiden Sie mit dem Satz von Myhill und Nerode, welche der Sprachen regulär sind. Geben Sie für jede Sprache mit endlichem Nerode-Index alle paarweise verschiedenen Äquivalenzklassen an (1 Repräsentant pro Klasse).

>[!note] Aufgabenstellung
>1. $L_1 = \{aaab, aabb, abab, abbb, baab, bbab, bbbb\}$ mit $\Sigma_1 = \{a, b\}$
>2. $L_2 = \{w\overline{w}w \mid w \in \Sigma_2^*\}$ mit $\Sigma_2 = \{a, b\}$
>3. $L_3 = \{a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und } i = 2, \text{ dann } j < k\}$ mit $\Sigma_3 = \{a, b, c\}$


### 1. $L_1 = \{aaab, aabb, abab, abbb, baab, bbab, bbbb\}$ mit $\Sigma_1 = \{a, b\}$

### Lösung für Sprache L_1$

**Sprache**: $L_1 = \{aaab, aabb, abab, abbb, baab, bbab, bbbb\}$
**Alphabet**: $\Sigma_1 = \{a, b\}$
#### Nerode-Index und Ä quivalenzklassen

**Bestimmung**: Der Nerode-Index von $L_1$ wird durch Analyse der rechtsinvarianten Äquivalenzrelation bestimmt, bei der zwei Wörter $x$ und $y$ äquivalent sind, wenn für alle $z$ gilt, dass $xz \in L_1$ genau dann, wenn $yz \in L_1$.

**Äquivalenzklassen**:
1. **Klasse 1**: Alle Wörter in $L_1$. Anhängen von Zeichen führt aus $L_1$ heraus.
2. **Klasse 2**: Alle Wörter, die nicht in $L_1$ sind. Anhängen von Zeichen führt nicht in $L_1$ hinein.

**Anzahl der Äquivalenzklassen**: 2 (endlich)

#### Regulärität der Sprache

Nach dem Satz von Myhill-Nerode ist eine Sprache regulär, wenn die Anzahl ihrer Äquivalenzklassen endlich ist. Da $L_1$ genau zwei Äquivalenzklassen hat, ist $L_1$ regulär.

**Fazit**: $L_1$ ist eine reguläre Sprache und kann durch einen endlichen Automaten mit zwei Zuständen dargestellt werden.

### 2. $L_2 = \{w\overline{w}w \mid w \in \Sigma_2^*\}$ mit $\Sigma_2 = \{a, b\}$

>[!tip] Erklärung
> 
> 
> #### Was ist $L_2$?
> 
> Die Sprache $L_2$ besteht aus Wörtern der Form $w\overline{w}w$, wobei $w$ irgendein Wort über dem Alphabet $\{a, b\}$ ist, und $\overline{w}$ das „komplementäre Wort“ zu $w$ darstellt. Das heißt, in $\overline{w}$ ist jedes 'a' zu einem 'b' geändert und jedes 'b' zu einem 'a'.
> 
> #### Warum ist $L_2$ keine reguläre Sprache?
> 
> Reguläre Sprachen sind dadurch gekennzeichnet, dass sie eine endliche Anzahl von „Mustern“ oder Regeln haben, die durch einfache Automaten (endliche Automaten) verarbeitet werden können. Diese Automaten haben nur eine begrenzte Anzahl von Zuständen.
> 
> #### Das Problem mit unendlich vielen Mustern:
> In $L_2$ kann das Wort $w$ beliebig lang und komplex sein, was bedeutet, dass die Möglichkeiten für $w$ und somit für die Kombinationen von $w\overline{w}w$ unbegrenzt sind. 
> 
> #### Beispiel zur Verdeutlichung:
> - Wenn $w = a$, dann ist $w\overline{w}w = abaa$.
> - Wenn $w = ab$, dann ist $w\overline{w}w = abbaab$.
> 
> Jedes unterschiedliche $w$ führt zu einem einzigartigen Muster von $w\overline{w}w$, das spezifisch nur für dieses $w$ gültig ist. Jedes Mal, wenn $w$ sich ändert, ändert sich das ganze Muster, was bedeutet, dass theoretisch unendlich viele unterschiedliche Muster möglich sind.
> 
> #### Myhill-Nerode Theorem:
> Nach diesem Theorem ist eine Sprache genau dann regulär, wenn es eine endliche Anzahl von Äquivalenzklassen gibt, die beschreiben, wie man Wörter der Sprache durch das Anhängen von Suffixen unterscheiden kann. In $L_2$ führt jedoch jedes unterschiedliche $w$ zu einer neuen Äquivalenzklasse, da keine zwei verschiedenen $w$ das gleiche Muster von $w\overline{w}w$ ergeben können. Das bedeutet, dass es unendlich viele solcher Klassen gibt.
> 
> ### Fazit:
> Da $L_2$ durch jede Variation von $w$ eine neue Äquivalenzklasse benötigt und da es unendlich viele mögliche $w$ gibt, gibt es auch unendlich viele Äquivalenzklassen. Ein endlicher Automat könnte nicht unendlich viele Zustände haben, um jedes mögliche Muster zu speichern oder zu verarbeiten. Deshalb ist $L_2$ keine reguläre Sprache.

### 3. $L_3 = \{a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und } i = 2, \text{ dann } j < k\}$ mit $\Sigma_3 = \{a, b, c\}$

**Sprache**: $L_3 = \{a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und wenn } i = 2, \text{ dann } j < k\}$

**Regulärität**: $L_3$ ist nicht regulär.

**Begründung**: Die Sprache $L_3$ enthält eine kontextabhängige Bedingung, die verlangt, dass $j < k$, wenn $i = 2$. Diese Bedingung führt zu einer unendlichen Anzahl von Äquivalenzklassen, da für jedes $j$ ein $k$ existieren muss, das größer als $j$ ist. Ein endlicher Automat kann diese kontextabhängige Beziehung nicht verarbeiten, da er nur eine feste Anzahl von Zuständen und Übergängen hat, die keine unendlichen, von den Werten anderer Teile des Wortes abhängigen Bedingungen ausdrücken können.

### Schlussfolgerung:
Die unendliche Anzahl und die Art der Äquivalenzklassen, die durch die Bedingung $j < k$ entstehen, überschreiten die Möglichkeiten eines endlichen Automaten, was gemäß dem Myhill-Nerode Theorem zur Nicht-Regulärität der Sprache führt.

---

# FSK5-2 Pumping-Lemma für kontextfreie Sprachen (2 Punkte)

>[!note] Aufgabenstellung
>Zeigen Sie mit dem Pumping-Lemma für kontextfreie Sprachen, dass die Sprache $L_2 = \{w\overline{w}w \mid w \in \Sigma^*\}$ über dem Alphabet $\Sigma = \{a, b\}$ nicht kontextfrei ist.

**Sprache**: $L_2$ über $\Sigma = \{a, b\}$.

**Lemma**: Das Pumping-Lemma für kontextfreie Sprachen besagt, dass für jede kontextfreie Sprache $L$ eine Pumping-Länge $p$ existiert, sodass jedes Wort $z$ in $L$ mit einer Länge von mindestens $p$ in fünf Teile $uvwxy$ zerlegt werden kann, wobei $|vwx| \leq p$, $|vx| > 0$ und $uv^iwx^iy$ für alle $i \geq 0$ in $L$ bleibt.

**Anwendung des Lemmas**:
1. **Wahl des Wortes**: Wähle $w = (ab)^p$ und damit $z = w\overline{w}w = (ab)^p(ba)^p(ab)^p$, wobei $z$ eine Länge von $6p$ hat.
2. **Zerlegung**: $z$ wird gemäß dem Lemma in $uvwxy$ zerlegt, wobei $|vwx| \leq p$ und $|vx| > 0$.
3. **Pumpen**: Betrachte $uv^2wx^2y$.

**Widerspruch**:
- Das Pumpen von $v$ und $x$ zerstört die spezifische Struktur $w\overline{w}w$ von $L_2$. Beispielsweise führt das Erhöhen der $ab$-Paare im ersten Segment, ohne die entsprechenden Änderungen in den $(ba)^p$ und $(ab)^p$ Segmenten, dazu, dass das gepumpte Wort nicht mehr die Form $w\overline{w}w$ hat und somit nicht in $L_2$ sein kann.

**Schlussfolgerung**:
Da das Pumpen von $v$ und $x$ dazu führt, dass das Wort $uv^2wx^2y$ nicht mehr in $L_2$ liegt, widerspricht dies dem Pumping-Lemma für kontextfreie Sprachen. Daher ist $L_2$ nicht kontextfrei.

---

# FSK5-3 Reguläre und nicht-reguläre Sprachen (0 Punkte)

## a)Zeigen Sie, dass die Sprache $a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und wenn } i = 2, \text{ dann } j < k$ über dem Alphabet $\Sigma = \{a, b, c\}$ die Pumping-Eigenschaft erfüllt.

Um zu zeigen, dass die Sprache $L = \{a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und } i = 2 \Rightarrow j < k\}$ die Pumping-Eigenschaft erfüllt, nutzen wir das Pumping-Lemma für reguläre Sprachen. Dieses besagt, dass es eine Pumping-Länge $p$ gibt, so dass jedes Wort $s$ in $L$ mit einer Länge $\geq p$ so in drei Teile $x, y, z$ zerlegt werden kann, dass gilt:

1. $xy^mz$ ist ein Wort in $L$ für alle $m \geq 0$,
2. $|xy| \leq p$,
3. $|y| > 0$.

**Beispiel:**

Wähle $i = 2, j = 1, k = 2$, dann ist $s = a^2 b^1 c^2$ ein gültiges Wort in $L$, da $i = 2$ und $j < k$.

Teile $s$ in $x = a^2$, $y = b$, $z = c^2$:

- $xy = a^2b$ und $|xy| = 3 \leq p$ (angenommen $p \geq 3$),
- $|y| = 1 > 0$.

Für $m \geq 0$, das Wort $xy^mz = a^2b^mc^2$ bleibt gültig in $L$ solange $m < 2$, weil wenn $i = 2$, dann $j = m < k = 2$ erfüllt sein muss.

**Fazit:**

Dieses Beispiel zeigt, dass die Sprache die Pumping-Eigenschaft erfüllt, solange das gepumpte Wort $y$ die Bedingung $i = 2 \Rightarrow j < k$ nicht verletzt. Da das Pumping-Lemma für reguläre Sprachen nur fordert, dass es möglich sein muss, ein Wort zu pumpen und in der Sprache zu bleiben, reicht ein Beispiel, um die Erfüllung der Pumping-Eigenschaft zu demonstrieren.

## b) Sind die folgenden Sprachen $L_i$, $i \in \{1, 2, 3\}$, über den Alphabeten $\Sigma_i$ regulär? Wenn ja, geben Sie einen regulären Ausdruck an, der $L_i$ erkennt. (Sie müssen nicht beweisen, dass der reguläre Ausdruck $L_i$ erkennt.) Wenn nein, zeigen Sie die Nichtregularität mit dem Pumping-Lemma für reguläre Sprachen.

1. $L_1 = \{ac^{i} ba^{j}b \mid i, j \in \mathbb{N}\}$ mit $\Sigma_1 = \{a, b, c\}$

   **Lösung:** $L_1$ ist regulär. Ein regulärer Ausdruck, der $L_1$ erkennt, ist: 
   $$
 a c^* b a^* b 
$$

2. $L_2 = \{a^p b^p \mid p \in \mathbb{N} \text{ ist prim}\}$ mit $\Sigma_2 = \{a, b\}$

   **Lösung:** $L_2$ ist nicht regulär. Wir zeigen dies mit dem Pumping-Lemma:
   - Angenommen, $L_2$ sei regulär. Dann gibt es eine Pumping-Länge $p$.
   - Wähle $s = a^p b^p$, wobei $p$ eine Primzahl ist und $|s| \geq p$.
   - Zerlege $s$ in $xyz$, wobei $|xy| \leq p$ und $|y| > 0$.
   - Da $|xy| \leq p$, enthält $xy$ nur $a$'s. Also besteht $y$ nur aus $a$'s.
   - Pumpen von $y$: $xy^2z$ ergibt mehr $a$'s als $b$'s, was nicht in $L_2$ liegt. Widerspruch.

   Also ist $L_2$ nicht regulär.

3. $L_3 = \{a^{2n+1} \mid n \in \mathbb{N}\}$ mit $\Sigma_3 = \{a\}$.

   **Lösung:** $L_3$ ist regulär. Ein regulärer Ausdruck, der $L_3$ erkennt, ist:
   $$
 a (aa)^* 
$$

---

# FSK5-4 Konservative Erweiterungen regulärer Ausdrücke (0 Punkte)

>[!note] Aufgabenstellung
>In der Praxis werden reguläre Ausdrücke häufig mit weiteren Operatoren erweitert. Eine solche Erweiterung ist konservativ, wenn die erweiterten regulären Ausdrücke nur reguläre Sprachen beschreiben. Geben Sie in jeder Teilaufgabe an, ob die beschriebene Erweiterung konservativ ist, und beweisen Sie Ihre Antwort. Dabei sei $\alpha$ ein regulärer Ausdruck über einem beliebigen Alphabet.

## a) $\alpha?$: Teilwörter, die von $\alpha$ erkannt werden, dürfen vorkommen, müssen aber nicht. Die Semantik von $\alpha?$ ist also $L(\alpha?) = \{\epsilon\} \cup L(\alpha)$.

**Lösung:**

Die Erweiterung $\alpha?$ ist konservativ. Dies lässt sich wie folgt begründen:

Ein regulärer Ausdruck $\alpha?$ erkennt entweder das leere Wort $\epsilon$ oder jedes Wort, das von $\alpha$ erkannt wird. Da $\alpha$ ein regulärer Ausdruck ist, beschreibt $L(\alpha)$ eine reguläre Sprache. Das leere Wort $\epsilon$ gehört immer zur Menge der regulären Sprachen. Die Vereinigung einer regulären Sprache mit dem leeren Wort ist ebenfalls eine reguläre Sprache.

Daher beschreibt $\alpha?$ immer eine reguläre Sprache, und die Erweiterung ist konservativ.

## b) $\alpha^+$: wie $\alpha^*$, aber $\alpha$ muss mindestens einmal vorkommen.

$$
L(\alpha^+) = \bigcup_{i \in \mathbb{N} > 0} L(\alpha)^i = L(\alpha) \cup L(\alpha)^2 \cup L(\alpha)^3 \cup \ldots
$$

**Lösung:**

Die Erweiterung $\alpha^+$ ist konservativ. Dies lässt sich wie folgt begründen:

Ein regulärer Ausdruck $\alpha^+$ erkennt alle Wörter, die mindestens einmal aus $\alpha$ bestehen. Das bedeutet, $L(\alpha^+)$ ist die Vereinigung der Sprachen $L(\alpha)$, $L(\alpha)^2$, $L(\alpha)^3$, usw. Da die Konkatenation und Vereinigung regulärer Sprachen wieder reguläre Sprachen ergeben, ist $L(\alpha^+)$ regulär.

Daher beschreibt $\alpha^+$ immer eine reguläre Sprache, und die Erweiterung ist konservativ.

## c) $\alpha^{\{i,j\}}$ mit $i, j \in \mathbb{N}$ und $i \leq j$: wie $\alpha^*$, aber $\alpha$ muss mindestens $i$-mal und darf höchstens $j$-mal wiederholt werden.

$$
L(\alpha^{\{i,j\}}) = \bigcup_{k=i}^j L(\alpha)^k = L(\alpha)^i \cup L(\alpha)^{i+1} \cup L(\alpha)^{i+2} \cup \ldots \cup L(\alpha)^j
$$

**Lösung:**

Die Erweiterung $\alpha^{\{i,j\}}$ ist konservativ. Dies lässt sich wie folgt begründen:

Ein regulärer Ausdruck $\alpha^{\{i,j\}}$ erkennt alle Wörter, die aus $\alpha$ bestehen und mindestens $i$-mal und höchstens $j$-mal vorkommen. Das bedeutet, $L(\alpha^{\{i,j\}})$ ist die Vereinigung der Sprachen $L(\alpha)^i$, $L(\alpha)^{i+1}$, $L(\alpha)^{i+2}$, usw., bis $L(\alpha)^j$. Da die Konkatenation und Vereinigung regulärer Sprachen wieder reguläre Sprachen ergeben, ist $L(\alpha^{\{i,j\}})$ regulär.

Daher beschreibt $\alpha^{\{i,j\}}$ immer eine reguläre Sprache, und die Erweiterung ist konservativ.

## d) $\backslash n$ mit $n \in \mathbb{N}$. In einem regulären Ausdruck $\alpha$ bezeichnen wir den $n$-ten Teilausdruck der Form $(\alpha_0)$ (wobei $\alpha_0$ ein regulärer Ausdruck ist) als die $n$-te Capturing Group. Ein Teilausdruck $\backslash n$ in $\alpha$ wird dann als Backreference bezeichnet und erkennt genau die Zeichenkette, die von $\alpha_0$ erkannt wurde. Beispielsweise erkennt $(a|b)\backslash 1$ die Wörter aa und ab, aber nicht ab oder ba.

**Lösung:**

Die Erweiterung $\backslash n$ ist nicht konservativ. Dies lässt sich wie folgt begründen:

Backreferences sind nicht durch endliche Automaten erkennbar, da sie sich auf vorherige Teile des Eingabewortes beziehen und somit eine Art Gedächtnis erfordern, das endliche Automaten nicht haben. Daher können sie kontextfreie oder sogar kontextsensitive Sprachen beschreiben, die nicht notwendigerweise regulär sind.

Ein Beispiel dafür ist der reguläre Ausdruck $(a|b)\backslash 1$, der die Sprache $\{aa, bb, ab\}$ beschreibt. Diese Sprache kann nicht durch einen endlichen Automaten erkannt werden, da der Automat das erste Symbol speichern und mit dem zweiten Symbol vergleichen müsste.

Daher beschreibt $\backslash n$ nicht immer eine reguläre Sprache, und die Erweiterung ist nicht konservativ.
