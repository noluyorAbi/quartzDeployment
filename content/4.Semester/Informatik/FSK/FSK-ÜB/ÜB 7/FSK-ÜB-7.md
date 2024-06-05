---
tags:
  - 4semester
  - FSK
  - informatik
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema:
Benötigte Zeit:
date created: Tuesday, 4. June 2024, 10:21
date modified: Wednesday, 5. June 2024, 23:36
---

# FSK7-1 Sprachen einordnen (2 Punkte)

> [!note] Aufgabenstellung
> Die formalen Sprachen $L_i$, $i \in \{0, \ldots, 3\}$, seien definiert als
>
> $$
> \begin{aligned}
> L_0 & := \{ab^i \mid i \in \mathbb{N}\} \cup \{c^{i}a \mid i \in \mathbb{N}\}
> \subseteq \{a,b,c\}^* \\
> L_1 & := \{w\$ \mid \#_a(w) < \#_b(w) + \#_c(w)\} \subseteq \{a,b,c,\$\}^* \\
> L_2 & := \{(ab)^j\$c^i \mid i, j \in \mathbb{N}\} \subseteq \{a,b,c,\$\}^* \\
> L_3 & := \{(ab)^i\$\ c^j\$(ab)^{i} \mid j < i \ und \ i, j \in \mathbb{N}\} \subseteq \{a,b,c,\$\}^*
> \end{aligned}
> $$
>
> Für die $i$-fache Wiederholung des Worts $w$ schreiben wir manchmal $(w)^i$ statt nur $w^i$, um Anfang und Ende von $w$ zu markieren. Die Klammern sind daher **nicht** Teil des Alphabets der jeweiligen Sprachen.
>
> Bearbeiten Sie die folgenden Arbeitsaufträge für jede der Sprachen $L_i$.

## a) Beweisen oder widerlegen Sie, dass $L_i$ regulär ist.

Aus dem Bauchgefühl raus:
Nicht regulär L1 wegen der #

### $L_0$

- Regulär, da man es in einem [[Reguläre Ausdrücke|RegEx]] darstellen kann
  $$
  L_0=L(ab^{*}\mid c^{*}a)
  $$

### $L_1$

[[Pumping-Lemma]]

#### Gegeben:

$$
L_1  := \{w\$ \mid \#_a(w) \lt \#_b(w) + \#_{c(w)\}}\subseteq \{a,b,c,\$\}^*
$$

#### Gesucht:

- Wort in der Sprache $L_1$, dass das Pumping Lemma verletzt

#### Lösungsweg

- Angenommen, $L_1$ sei regulär. Dann existier eine Pumping-Länge $p$

$$
\text{Wort w} \in L_{1}, \ |w| \geq p
$$

$$
w = a^{p}b^{p+1}\$
$$

- Das Wort ist in der Sprache enthalten, da $b$ genau einmal öfter drankommt als $a$. Das $c$ kann außenvor gelassen werden, da $b^{p+1}$ alleine schon die Bedingung für die Sprache erfüllt

$$
\begin{aligned}
\#_{a}(w)&=p\\
\#_{b}(w)&=p+1\\
\#_{c}(w)&=0\\
\#_{a}(w) \lt \#_{b}(w) + \#_{c}(w) &\Rightarrow p \lt (p+1) + 0
\end{aligned}
$$

**Pumping - xyz bestimmen**

$$
w =xyz : |xy|\leq p \ , \ |y| \gt0
$$

- Für $y$ wähle $a^p$,da gilt $|xy| \leq p$ sodass gilt:
  $$
  y=a^{k}: k \gt 0
  $$
- Der $x$ Teil besteht dann aus den restlichen $a$'s vor $y$
  $$
  x = a^{p-k}
  $$
- sodass:
  $$
  xy=a^{p-k}a^{k}
  $$
- $z$ ist nun der ganze Rest
  $$
  b^{p+1}\$
  $$

**Pumping - y aufpumpen**

$$
\begin{aligned}
w' &=xy^{2}z \\
&= (a^{p-k})(a^{k})^{2}(b^{p+1}\$) \\
&= (a^{p-k})(a^{k}a^{k})(b^{p+1}\$) \\
&= (a^{p-k})(a^{k}a^{k})(b^{p+1}\$) \\
&=(\frac{a^{p}}{a^{k}})(a^{k}a^{k})(b^{p+1}\$) \\
&=(a^{p})(a^{k})(b^{p+1}\$) \\
&=(a^{p+k})(b^{p+1}\$) \\
\end{aligned}
$$

$$
\begin{aligned}
\#_{a}(w)&=p+k\\
\#_{b}(w)&=p+1\\
\#_{c}(w)&=0\\
\#_{a}(w) \lt \#_{b}(w) + \#_{c}(w) &\Rightarrow p \lt (p+1) + 0
\end{aligned}
$$

- Da $k\gt 0$ ist $p+k \geq p+1$, was bedeutet, dass die Bedingung
  $$
  \#_{a}(w) \lt \#_{b}(w) + \#_{c}(w) \Rightarrow p \lt (p+1) + 0
  $$
  nicht erfüllt ist.

**$\Longrightarrow$ Daher liegt das gepumpte Wort $w'$ nicht in der Sprache $L_1$ und es ist gezeigt, dass die Sprache nicht regulär ist, da sie nicht die Bedingung des Pumping Lemmas erfüllt**

### $L_2$

- Regulär, da man es in einem [[Reguläre Ausdrücke|RegEx]] darstellen kann
  $$
  L_{2}=((ab)^*\$c^{*})
  $$

### $L_3$

- Regulär, da man es in einem [[Reguläre Ausdrücke|RegEx]] darstellen kann
  $$
  L_{3}=(ab)^*\$(c^{*})\$(ab)^*
  $$

## b) Beweisen oder widerlegen Sie, dass $L_i$ deterministisch kontextfrei ist.

## c) Beweisen oder widerlegen Sie, dass $L_i$ kontextfrei ist.

> [!info] Hinweis:
> N Nutzen Sie, dass manche Aussagen direkt aus anderen Aussagen folgen. Um zu beweisen, dass $L_i$ regulär/deterministisch kontextfrei/kontextfrei ist, genügt es, ein geeignetes Konstrukt $K_i$ (Grammatik, Automat oder regulärer Ausdruck) anzugeben und kurz zu begründen, warum $L(K_i) = L_i$ gilt.
