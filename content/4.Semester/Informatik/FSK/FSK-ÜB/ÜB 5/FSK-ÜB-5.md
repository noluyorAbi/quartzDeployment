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
date modified: Monday, 10. June 2024, 14:48
---

# FSK5-1 Myhill und Nerode (2 Punkte)

## a) Sei $L = L(ab^*c)$ eine Sprache über dem Alphabet $\Sigma = \{a, b, c\}$. Geben Sie für jedes der folgenden Wörter $u_i, i \in \{1, 2, 3\}$, eine kompakte Beschreibung der Äquivalenzklasse $[u_i]$ der Nerode-Relation von $L$ an.

> [!note] Aufgabenstellung
>
> 1.  $u_1 = abb$
> 2.  $u_2 = \varepsilon$
> 3.  $u_3 = c$

> [!tip] Anleitung zum lösen der Aufgabe
>
> 1. **Suffix-Erweiterung:** Zunächst analysieren wir, um welchen Suffix das Wort erweitert werden muss, damit es in der gewünschten Sprache enthalten ist.
> 2. **Präfix-Analyse:** Im nächsten Schritt betrachten wir den identifizierten Suffix und überlegen, um welchen Präfix dieser erweitert werden muss, damit der Suffix in der Sprache enthalten ist.
> 3. **Äquivalenzklasse:** Der ermittelte Präfix bildet dann die entsprechende Äquivalenzklasse.
>
> Durch diese methodische Herangehensweise wird sichergestellt, dass das Wort korrekt erweitert und in die richtige Äquivalenzklasse eingeordnet wird.

### 1. $u_1 = abb$

> [!success] Musterlösung
> Präfix suchen was muss nach dem Wort stehen, damit es regulär ist
> Danach: Präfix damit das Wort gebildet werden kann
>
> $$
> [abb]=\{ab^*c\}
> $$

> [!fail]- Falscher Ansatz (aufklappbar)
>
> $$
> [abb] = \{ v \in \Sigma^* : vc \in L \text{ und kein anderes } vx \in L>
> \text{
> für } x \neq c \}
> $$
>
> $$
>  [abb] = \{ v \in \Sigma^* \mid \forall x \in \Sigma^* : vx \in
>   \leftrightarrow x = c \}
> $$

### 2. $u_2 = \epsilon$

> [!success] Musterlösung
>
> $$
> [\varepsilon]=\{\varepsilon\}
> $$

> [!fail]- Falscher Ansatz (aufklappbar)
>
> $$
> [\varepsilon] = \{ab^{*}c\}
> $$

### 3. $u_3 = c$

> [!success] Lösung
>
> ### Erklärung
>
> Das gegebene Problem bezieht sich auf die Bestimmung der Äquivalenzklasse $[u_3]$ mit $u_3 = c$.
>
> **Problemstellung:**
>
> $u_3 = c$
>
> **Lösungsvorschlag:**
>
> Es gibt kein $w$ sodass $cw \in L$ ist. Somit ist $[c]$ die Menge der Wörter $v \in \Sigma^*$, für die mit jedem $w$ gilt: $vw \notin L$. Das ist der Fall für $v \in L(b\Sigma^*)$, $v \in L(c\Sigma^*)$, $v \in L(aa\Sigma^*)$, $v \in L(ab^*a\Sigma^*)$ und $v \in L(ab^*c\Sigma\Sigma^*)$, wobei $\Sigma$ der reguläre Ausdruck $(a|b|c)$ ist. Somit ist
>
> $$
> [c] = L((b|c|aa)\Sigma^* \mid ab^*a\Sigma^* \mid ab^*c\Sigma\Sigma^*)
> $$
>
> ### Detaillierte Erklärung des Beweises
>
> Um die Äquivalenzklasse $[c]$ zu bestimmen, folgt man diesen Schritten:
>
> 1. **Definition der Sprache $L$:**
>    - Die Sprache $L$ ist nicht explizit gegeben, aber wir müssen feststellen, dass für $u_3 = c$ kein Wort $w$ existiert, sodass $cw \in L$.
> 2. **Bestimmung von $[c]$:**
>    - $[c]$ umfasst alle Wörter $v \in \Sigma^*$, für die gilt: $vw \notin L$ für jedes $w \in \Sigma^*$. Dies bedeutet, dass das Wort $v$ nie zu einem Wort führt, das in $L$ liegt, egal welches $w$ hinzugefügt wird.
> 3. **Analyse von $v$:**
>    - Wenn $v$ aus der Sprache $L(b\Sigma^*)$ stammt, bedeutet das, dass $v$ mit $b$ beginnt und beliebige Zeichen aus $\Sigma$ folgen können.
>    - Wenn $v$ aus der Sprache $L(c\Sigma^*)$ stammt, bedeutet das, dass $v$ mit $c$ beginnt und beliebige Zeichen aus $\Sigma$ folgen können.
>    - Wenn $v$ aus der Sprache $L(aa\Sigma^*)$ stammt, bedeutet das, dass $v$ mit zwei $a$ beginnt und beliebige Zeichen aus $\Sigma$ folgen können.
>    - Wenn $v$ aus der Sprache $L(ab^*a\Sigma^*)$ stammt, bedeutet das, dass $v$ mit einem $a$, gefolgt von beliebig vielen $b$ und einem weiteren $a$ beginnt, gefolgt von beliebigen Zeichen aus $\Sigma$.
>    - Wenn $v$ aus der Sprache $L(ab^*c\Sigma\Sigma^*)$ stammt, bedeutet das, dass $v$ mit einem $a$, gefolgt von beliebig vielen $b$ und einem $c$ beginnt, gefolgt von zwei Zeichen aus $\Sigma$.
> 4. **Regulärer Ausdruck für $[c]$:**
>    - Der reguläre Ausdruck, der diese Bedingungen zusammenfasst, ist $(b|c|aa)\Sigma^* \mid ab^*a\Sigma^* \mid ab^*c\Sigma\Sigma^*$.
>
> **Schlussfolgerung:**
>
> Die Äquivalenzklasse $[c]$ besteht aus Wörtern, die nie zu einem Wort in $L$ führen, unabhängig von dem angehängten $w$.

Suffix

$$
[c] = \emptyset
$$

Präfix
ist trickier

> [!success] Musterlösung
>
> $$
> [c]=\{ L((c\mid b\mid aa) \Sigma^{*})\mid (ab^{*}a\Sigma^{*})\mid ab^{*}c\Sigma \Sigma^*) \}
> $$

## b) Bestimmen Sie den Nerode-Index folgender Sprachen $L_i, i \in \{1, 2, 3\}$, über Alphabeten $\Sigma_i$ und entscheiden Sie mit dem Satz von Myhill und Nerode, welche der Sprachen regulär sind. Geben Sie für jede Sprache mit endlichem Nerode-Index alle paarweise verschiedenen Äquivalenzklassen an (1 Repräsentant pro Klasse).

> [!note] Aufgabenstellung
>
> 1.  $L_1 = \{aaab, aabb, abab, abbb, baab, bbab, bbbb\}$ mit $\Sigma_1 = \{a, b\}$
> 2.  $L_2 = \{w\overline{w}w \mid w \in \Sigma_2^*\}$ mit $\Sigma_2 = \{a, b\}$
> 3.  $L_3 = \{a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und } i = 2, \text{ dann } j < k\}$ mit $\Sigma_3 = \{a, b, c\}$

### 1. $L_1 = \{aaab, aabb, abab, abbb, baab, bbab, bbbb\}$ mit $\Sigma_1 = \{a, b\}$

> [!success] Lösung
>
> ### Erklärung
>
> Das gegebene Problem bezieht sich auf die Bestimmung der Regularität der Sprache $L_1$ über dem Alphabet $\Sigma_1 = \{a, b\}$.
>
> **Sprache $L_1$:**
>
> $L_1 = \{ aaab, aabb, abab, abbb, baab, babb, bbab, bbbb \}$
>
> **Lösungsvorschlag:**
>
> Die Lösung beinhaltet das Finden der verschiedenen Äquivalenzklassen der Myhill-Nerode-Relation für die gegebene Sprache. Äquivalenzklassen gruppieren Zeichenketten, die von der Sprache $L_1$ nicht unterschieden werden können.
>
> **Identifizierte Äquivalenzklassen:**
>
> 1. $[\varepsilon]$ - Die Klasse, die die leere Zeichenkette enthält.
> 2. $[a]$ - Die Klasse, die die Zeichenkette "a" enthält.
> 3. $[aa]$ - Die Klasse, die die Zeichenkette "aa" enthält.
> 4. $[aaa]$ - Die Klasse, die die Zeichenkette "aaa" enthält.
> 5. $[aaab]$ - Die Klasse, die die Zeichenkette "aaab" enthält.
> 6. $[aaaa]$ - Die Klasse, die die Zeichenkette "aaaa" enthält.
>
> Der Nerode-Index, also die Anzahl dieser Äquivalenzklassen, beträgt 6.
>
> ### Detaillierte Erklärung zur Bestimmung der Äquivalenzklassen
>
> Um die Äquivalenzklassen der Myhill-Nerode-Relation zu bestimmen, folgt man diesen Schritten:
>
> 1. **Initiale Identifizierung:** Beginne mit der leeren Zeichenkette $\varepsilon$ und prüfe, welche Zeichenketten durch Anhängen von Symbolen aus $\Sigma_1$ entstehen können.
> 2. **Prüfung der Verlängerungen:** Betrachte, wie verschiedene Präfixe von Zeichenketten in $L_1$ erweitert werden können, um entweder gültige Zeichenketten in $L_1$ oder andere Zeichenketten zu bilden, die von $L_1$ unterschieden werden können.
> 3. **Äquivalenzklassen-Bildung:** Gruppiere Zeichenketten, die durch dieselben Erweiterungen in $L_1$ zu denselben Ergebnissen führen.
>
> **Beispiel für die Bestimmung:**
>
> - $\varepsilon$ (leere Zeichenkette) ist eine eigene Klasse: $[\varepsilon]$.
> - "a" ist ein Präfix, das durch Anhängen von "a" oder "b" zu unterschiedlichen Ergebnissen führt, daher eine eigene Klasse: $[a]$.
> - "aa" ist ein Präfix, das zu "aaab" führen kann, daher eine eigene Klasse: $[aa]$.
> - "aaa" ist ein Präfix, das nur zu "aaab" erweitert werden kann, eine eigene Klasse: $[aaa]$.
> - "aaab" ist eine vollständige Zeichenkette in $L_1$, eine eigene Klasse: $[aaab]$.
> - "aaaa" ist eine weitere mögliche Erweiterung, eine eigene Klasse: $[aaaa]$.
>
> Jede dieser Klassen ist distinkt, weil Zeichenketten in verschiedenen Klassen zu unterschiedlichen Ergebnissen führen, wenn man weitere Symbole anhängt.
>
> **Schlussfolgerung:**
>
> Da die Anzahl der Äquivalenzklassen endlich ist, ist die Sprache $L_1$ regulär. Die Anmerkung besagt, dass jede endliche Sprache regulär sein muss, weil sie nur eine endliche Anzahl von Äquivalenzklassen haben kann.
>
> Diese Lösung bestätigt, dass $L_1$ eine reguläre Sprache mit einem Nerode-Index von 6 ist.

Wir brauchen die Äquivalenzklasse von b nicht, da sie schon in a enthalten ist. Die Äquivalenzklasse von a = b

$$
\begin{aligned}
[\varepsilon ]_{~L} &=\{\varepsilon\} \\
[a]_{\sim L} &=\{a,b\} \\
[aa]_{\sim L} &=\{aa,ab,ba,bb\} \\
...
\end{aligned}
$$

> [!fail]- Falscher Ansatz (aufklappbar)
>
> ### Lösung für Sprache $L_1$
>
> **Sprache**: $L_1 = \{aaab, aabb, abab, abbb, baab, bbab, bbbb\}$ > **Alphabet**: $\Sigma_1 = \{a, b\}$
>
> #### Nerode-Index und Äquivalenzklassen
>
> **Bestimmung**: Der Nerode-Index von $L_1$ wird durch Analyse der rechtsinvarianten Äquivalenzrelation bestimmt, bei der zwei Wörter $x$ und $y$ äquivalent sind, wenn für alle $z$ gilt, dass $xz \in L_1$ genau dann, wenn $yz \in L_1$.
>
> **Äquivalenzklassen**:
>
> 1. **Klasse 1**: Alle Wörter in $L_1$. Anhängen von Zeichen führt aus $L_1$ heraus.
> 2. **Klasse 2**: Alle Wörter, die nicht in $L_1$ sind. Anhängen von Zeichen führt nicht in $L_1$ hinein.
>
> **Anzahl der Äquivalenzklassen**: 2 (endlich)
>
> #### Regulärität der Sprache
>
> Nach dem Satz von Myhill-Nerode ist eine Sprache regulär, wenn die Anzahl ihrer Äquivalenzklassen endlich ist. Da $L_1$ genau zwei Äquivalenzklassen hat, ist $L_1$ regulär.
>
> **Fazit**: $L_1$ ist eine reguläre Sprache und kann durch einen endlichen Automaten mit zwei Zuständen dargestellt werden.

### 2. $L_2 = \{w\overline{w}w \mid w \in \Sigma_2^*\}$ mit $\Sigma_2 = \{a, b\}$

> [!success] Lösung
>
> ### Erklärung
>
> Das gegebene Problem bezieht sich auf die Bestimmung der Regularität der Sprache $L_2$ über dem Alphabet $\Sigma_2 = \{a, b\}$.
>
> **Sprache $L_2$:**
>
> $L_2 = \{ w \overline{w} w \overline{w} \mid w \in \Sigma_2^* \}$ mit $\Sigma_2 = \{a, b\}$
>
> **Lösungsvorschlag:**
>
> Der Nerode-Index ist unendlich. Betrachte für jedes $i \in \mathbb{N}$ die Wörter $u_i = a^i b$ und $w_i = ba^{2i}b$. Es ist $u_i w_i = a^i bba^{i}a^i b \in L_2$, aber $u_j w_i = a^j bba^{i}a^i b \notin L_2$ für jedes $j \ne i$. Somit ist $[u_i] \ne [u_j]$ für alle $i \ne j$ und es gibt unendlich viele verschiedene Äquivalenzklassen, d.h. $Index(\sim_{L_2}) = \infty$.
>
> ### Detaillierte Erklärung zur Bestimmung der Äquivalenzklassen
>
> Um zu zeigen, dass der Nerode-Index unendlich ist, betrachte man die folgenden Schritte:
>
> 1. **Definition der Wörter:** Wir definieren für jedes $i \in \mathbb{N}$ die Wörter $u_i = a^i b$ und $w_i = ba^{2i}b$.
> 2. **Konstruktion von $u_i w_i$:** Das Produkt $u_i w_i$ ergibt $a^i bba^{i}a^i b$, welches in der Sprache $L_2$ liegt, da es die Form $w \overline{w} w \overline{w}$ hat.
> 3. **Prüfung von $u_j w_i$:**
>    - Wenn $j \ne i$, dann ist $u_j w_i = a^j bba^{i}a^i b$.
>    - Dieses Wort liegt nicht in $L_2$, da die Struktur $w \overline{w} w \overline{w}$ nicht erfüllt ist.
> 4. **Unterschiedlichkeit der Äquivalenzklassen:** Da $u_i w_i$ in $L_2$ liegt und $u_j w_i$ nicht in $L_2$ liegt für $j \ne i$, sind die Äquivalenzklassen $[u_i]$ und $[u_j]$ verschieden für alle $i \ne j$.
> 5. **Unendlichkeit der Äquivalenzklassen:** Da es für jedes $i \in \mathbb{N}$ eine eigene Äquivalenzklasse gibt, gibt es unendlich viele Äquivalenzklassen.
>
> **Schlussfolgerung:**
>
> Da die Anzahl der Äquivalenzklassen unendlich ist, ist die Sprache $L_2$ nicht regulär. Dies bestätigt, dass der Nerode-Index von $L_2$ unendlich ist und somit $L_2$ keine reguläre Sprache ist.

### 3. $L_3 = \{a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und } i = 2, \text{ dann } j < k\}$ mit $\Sigma_3 = \{a, b, c\}$

> [!fail]- Falscher Ansatz (aufklappbar)
> **Sprache**: $L_3 = \{a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und wenn } i = 2, \text{ dann } j < k\}$
>
> **Regulärität**: $L_3$ ist nicht regulär.
>
> **Begründung**: Die Sprache $L_3$ enthält eine kontextabhängige Bedingung, die verlangt, dass $j < k$, wenn $i = 2$. Diese Bedingung führt zu einer unendlichen Anzahl von Äquivalenzklassen, da für jedes $j$ ein $k$ existieren muss, das größer als $j$ ist. Ein endlicher Automat kann diese kontextabhängige Beziehung nicht verarbeiten, da er nur eine feste Anzahl von Zuständen und Übergängen hat, die keine unendlichen, von den Werten anderer Teile des Wortes abhängigen Bedingungen ausdrücken können.
>
> ### Schlussfolgerung:
>
> Die unendliche Anzahl und die Art der Äquivalenzklassen, die durch die Bedingung $j < k$ entstehen, überschreiten die Möglichkeiten eines endlichen Automaten, was gemäß dem Myhill-Nerode Theorem zur Nicht-Regulärität der Sprache führt.

---

# FSK5-2 Pumping-Lemma für kontextfreie Sprachen (2 Punkte)

> [!note] Aufgabenstellung
> Zeigen Sie mit dem Pumping-Lemma für kontextfreie Sprachen, dass die Sprache $L_2 = \{w\overline{w}w \mid w \in \Sigma^*\}$ über dem Alphabet $\Sigma = \{a, b\}$ nicht kontextfrei ist.

> [!success] Lösung
>
> ### Erklärung
>
> Das gegebene Problem bezieht sich auf die Bestimmung, ob die Sprache $L_2 = \{w\overline{w}w \mid w \in \Sigma^*\}$ über dem Alphabet $\Sigma = \{a, b\}$ kontextfrei ist.
>
> **Sprache $L_2$:**
>
> $L_2 = \{w\overline{w}w \mid w \in \Sigma^* \}$
>
> **Lösungsvorschlag:**
>
> Beweis mit dem Pumping-Lemma.
>
> Sei $n \in \mathbb{N}_{>0}$ beliebig.
>
> Wir wählen $z \in L_2$ als $z = a^n b^{2n} a^{2n} b^n$ mit $|z| \ge n$.
>
> Sei $z = uvwxy$ eine beliebige Zerlegung von $z$, sodass $|vx| \ge 1$, $|vwx| \le n$ und $uv^i wx^i y \in L$ für jedes $i \in \mathbb{N}$. Wir wählen $i = 0$. Sei $z' = u v^0 w x^0 y$. Sei $k = |vx|$.
>
> Wegen $|vwx| \le n$ sind nur folgende Fälle möglich:
>
> - $z' = a^{n-k_1} b^{2n-k_2} a^{2n} b^n$ mit $k_1 + k_2 = k \ge 1$. Da $z' \in L$ ist, gibt es ein $w$, sodass $z' = w\overline{w}w$ ist. Dieses $w$ muss von der Form $a^*b^*$ sein. Somit muss sowohl $2(n - k_1) = 2n$ gelten als auch $2n - k_2 = 2n$. Diese Aussagen können aber nicht beide wahr sein. Widerspruch.
> - $z' = a^n b^{2n-k_1} a^{2n-k_2} b^n$ mit $k_1 + k_2 = k \ge 1$. Dann ist (mit der gleichen Begründung wie oben) $z' \in L$ nur wenn sowohl $2n = 2n - k_1$ als auch $2n = 2n - k_2$ gilt, aber diese Aussagen können nicht beide wahr sein. Widerspruch.
> - $z' = a^n b^{2n} a^{2n-k_1} b^{n-k_2}$ mit $k_1 + k_2 = k \ge 1$. Dann ist $z' \in L$ nur wenn sowohl $2n = 2n - k_1$ als auch $2n = 2(n - k_2)$ gilt, aber diese Aussagen können nicht beide wahr sein. Widerspruch.
>
> ### Detaillierte Erklärung des Beweises
>
> Um zu zeigen, dass die Sprache $L_2$ nicht kontextfrei ist, benutzen wir das Pumping-Lemma für kontextfreie Sprachen. Das Pumping-Lemma besagt, dass für jede kontextfreie Sprache $L$ eine Konstante $n \in \mathbb{N}$ existiert, sodass jede Zeichenkette $z \in L$ mit $|z| \ge n$ in fünf Teile $z = uvwxy$ zerlegt werden kann, wobei:
>
> 1. $|vx| \ge 1$
> 2. $|vwx| \le n$
> 3. $uv^i wx^i y \in L$ für jedes $i \in \mathbb{N}$
>
> **Beweis:**
>
> 1. **Wahl der Zeichenkette $z$:** Wir wählen $z = a^n b^{2n} a^{2n} b^n$ mit $|z| \ge n$. Diese Wahl von $z$ liegt in $L_2$ und erfüllt die Bedingungen des Pumping-Lemmas.
> 2. **Zerlegung von $z$:**
>    - Sei $z = uvwxy$ eine beliebige Zerlegung von $z$, sodass $|vx| \ge 1$ und $|vwx| \le n$.
>    - Da $|vwx| \le n$, kann $vx$ nur innerhalb eines Blocks von $a$s oder $b$s liegen oder an der Grenze zwischen zwei Blöcken, aber niemals den gesamten Block überschreiten.
> 3. **Pumping und Widersprüche:**
>    - **Fall 1:** $z' = a^{n-k_1} b^{2n-k_2} a^{2n} b^n$. Da $z' \in L$ sein soll, müsste $z'$ die Form $w\overline{w}w$ haben, was nicht möglich ist, da $2(n - k_1) = 2n$ und $2n - k_2 = 2n$ nicht gleichzeitig wahr sein können. Widerspruch.
>    - **Fall 2:** $z' = a^n b^{2n-k_1} a^{2n-k_2} b^n$. Ähnlich wie oben, können $2n = 2n - k_1$ und $2n = 2n - k_2$ nicht gleichzeitig wahr sein. Widerspruch.
>    - **Fall 3:** $z' = a^n b^{2n} a^{2n-k_1} b^{n-k_2}$. Auch hier können $2n = 2n - k_1$ und $2n = 2(n - k_2)$ nicht beide gleichzeitig wahr sein. Widerspruch.
>
> **Schlussfolgerung:**
>
> Da in allen möglichen Fällen ein Widerspruch entsteht, ist die Sprache $L_2$ nicht kontextfrei.

> [!fail]- Falscher Ansatz (aufklappbar)
> **Sprache**: $L_2$ über $\Sigma = \{a, b\}$.
>
> **Lemma**: Das Pumping-Lemma für kontextfreie Sprachen besagt, dass für jede kontextfreie Sprache $L$ eine Pumping-Länge $p$ existiert, sodass jedes Wort $z$ in $L$ mit einer Länge von mindestens $p$ in fünf Teile $uvwxy$ zerlegt werden kann, wobei $|vwx| \leq p$, $|vx| > 0$ und $uv^iwx^iy$ für alle $i \geq 0$ in $L$ bleibt.
>
> **Anwendung des Lemmas**:
>
> 1. **Wahl des Wortes**: Wähle $w = (ab)^p$ und damit $z = w\overline{w}w = (ab)^p(ba)^p(ab)^p$, wobei $z$ eine Länge von $6p$ hat.
> 2. **Zerlegung**: $z$ wird gemäß dem Lemma in $uvwxy$ zerlegt, wobei $|vwx| \leq p$ und $|vx| > 0$.
> 3. **Pumpen**: Betrachte $uv^2wx^2y$.
>
> **Widerspruch**:
>
> - Das Pumpen von $v$ und $x$ zerstört die spezifische Struktur $w\overline{w}w$ von $L_2$. Beispielsweise führt das Erhöhen der $ab$-Paare im ersten Segment, ohne die entsprechenden Änderungen in den $(ba)^p$ und $(ab)^p$ Segmenten, dazu, dass das gepumpte Wort nicht mehr die Form $w\overline{w}w$ hat und somit nicht in $L_2$ sein kann.
>
> **Schlussfolgerung**:
> Da das Pumpen von $v$ und $x$ dazu führt, dass das Wort $uv^2wx^2y$ nicht mehr in $L_2$ liegt, widerspricht dies dem Pumping-Lemma für kontextfreie Sprachen. Daher ist $L_2$ nicht kontextfrei.

---

# FSK5-3 Reguläre und nicht-reguläre Sprachen (0 Punkte)

## a)Zeigen Sie, dass die Sprache $a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und wenn } i = 2, \text{ dann } j < k$ über dem Alphabet $\Sigma = \{a, b, c\}$ die Pumping-Eigenschaft erfüllt.

> [!success] Lösung
>
> ### Erklärung
>
> Das gegebene Problem bezieht sich auf die Überprüfung, ob die Sprache $\{a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und wenn } i = 2, \text{ dann } j < k \}$ über dem Alphabet $\Sigma = \{a, b, c\}$ die Pumping-Eigenschaft für reguläre Sprachen erfüllt.
>
> **Sprache:**
>
> $\{a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und wenn } i = 2, \text{ dann } j < k \}$
>
> **Lösungsvorschlag:**
>
> Wir wählen $n = 4$.
>
> Sei $z = a^i b^j c^k \in L$ mit $|z| \ge n$.
>
> Wir müssen für jedes solche $z$ eine Zerlegung $z = uvwxy$ angeben mit $|uvw| \le n$, $|vwx| \ge 1$ und $uv^iwx^iy \in L$ für alle $i \in \mathbb{N}$.
>
> **Vollständige Fallunterscheidung:**
>
> - **Fall 1:** $i < 4$ und $i \ne 2$. Wegen $|z| \ge 4$ ist $j \ge 1$ oder $k \ge 1$.
>
>   - **Unterfall 1.1:** $j \ge 1$: Wähle die Zerlegung $u = a^i$, $v = b$, $w = b^{j-1}c^k$ mit $|uv| \le 4$ und $|v| \ge 1$. Es ist $uv^iwx^i \in L$ für jedes $i \in \mathbb{N}$, da die Anzahl der $a$'s in $uv^iwx^i$ immer $i \ne 2$ bleibt und somit die Anzahl der $b$'s und $c$'s irrelevant ist.
>   - **Unterfall 1.2:** $j = 0$: Wähle die Zerlegung $u = a^i$, $v = c$, $w = c^{k-1}$. Diese Zerlegung erfüllt mit analoger Begründung alle Bedingungen.
>
> - **Fall 2:** $i \ge 4$: Wähle die Zerlegung $u = a^3$, $v = a$, $w = a^{i-4}bjc^k$ mit $|uv| \le 4$ und $|v| \ge 1$. Es ist $uv^iwx^i \in L$ für jedes $i \in \mathbb{N}$, da die Anzahl der $a$'s in $uv^iwx^i$ immer mindestens 3 ist und somit die Anzahl der $b$'s und $c$'s irrelevant ist.
> - **Fall 3:** $i = 2$: Wähle die Zerlegung $u = \varepsilon$, $v = aa$, $w = bjc^k$. Es ist $uv^iwx^i \in L$ für jedes $i \in \mathbb{N}$, denn:
>
>   - Für $i = 1$ ist $uv^1wx^1 = z \in L$.
>   - Für $i \ne 1$ enthält $uv^iwx^i$ nicht genau 2 $a$'s und somit ist die Anzahl der $b$'s und $c$'s wieder irrelevant.
>
> **Schlussfolgerung:**
>
> Die Sprache erfüllt die Pumping-Eigenschaft für reguläre Sprachen, da in allen möglichen Fällen eine geeignete Zerlegung gefunden werden kann, sodass die Bedingungen des Pumping-Lemmas erfüllt sind.

> [!fail]- Falscher Ansatz (aufklappbar)
> Um zu zeigen, dass die Sprache $L = \{a^i b^j c^k \mid i, j, k \in \mathbb{N} \text{ und } i = 2 \Rightarrow j < k\}$ die Pumping-Eigenschaft erfüllt, nutzen wir das Pumping-Lemma für reguläre Sprachen. Dieses besagt, dass es eine Pumping-Länge $p$ gibt, so dass jedes Wort $s$ in $L$ mit einer Länge $\geq p$ so in drei Teile $x, y, z$ zerlegt werden kann, dass gilt:
>
> 1. $xy^mz$ ist ein Wort in $L$ für alle $m \geq 0$,
> 2. $|xy| \leq p$,
> 3. $|y| > 0$.
>
> **Beispiel:**
>
> Wähle $i = 2, j = 1, k = 2$, dann ist $s = a^2 b^1 c^2$ ein gültiges Wort in $L$, da $i = 2$ und $j < k$.
>
> Teile $s$ in $x = a^2$, $y = b$, $z = c^2$:
>
> - $xy = a^2b$ und $|xy| = 3 \leq p$ (angenommen $p \geq 3$),
> - $|y| = 1 > 0$.
>
> Für $m \geq 0$, das Wort $xy^mz = a^2b^mc^2$ bleibt gültig in $L$ solange $m < 2$, weil wenn $i = 2$, dann $j = m < k = 2$ erfüllt sein muss.
>
> **Fazit:**
>
> Dieses Beispiel zeigt, dass die Sprache die Pumping-Eigenschaft erfüllt, solange das gepumpte Wort $y$ die Bedingung $i = 2 \Rightarrow j < k$ nicht verletzt. Da das Pumping-Lemma für reguläre Sprachen nur fordert, dass es möglich sein muss, ein Wort zu pumpen und in der Sprache zu bleiben, reicht ein Beispiel, um die Erfüllung der Pumping-Eigenschaft zu demonstrieren.

---

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

> [!note] Aufgabenstellung
> In der Praxis werden reguläre Ausdrücke häufig mit weiteren Operatoren erweitert. Eine solche Erweiterung ist konservativ, wenn die erweiterten regulären Ausdrücke nur reguläre Sprachen beschreiben. Geben Sie in jeder Teilaufgabe an, ob die beschriebene Erweiterung konservativ ist, und beweisen Sie Ihre Antwort. Dabei sei $\alpha$ ein regulärer Ausdruck über einem beliebigen Alphabet.

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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->
