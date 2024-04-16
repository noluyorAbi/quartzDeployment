---
tags:
  - DBS
  - Übungsblatt
fach: "[[DBS]]"
date created: Friday, 5. April 2024, 23:02
date modified: Monday, 8. April 2024, 12:23
---

# Aufgabe 11-1 [[Normalformen und Synthesealgorithmus#Synthesealgorithmus]]


>[!note] Aufgabenstellung
>Gegeben sei das folgende Relationenschema:
>**AssistentProfessorDiplomand (**
>- **PersNr**, ← Personalnummer des Assistenten
>- **Name**, ← Name des Assistenten
>- **Fachgebiet**, ← Fachgebiet des Assistenten
>- **ChefPersNr**, ← Personalnummer des Professors
>- **ChefName**, ← Name des Professors
>- **MatrNr**, ← Matrikelnummer des Studenten
>- **StudName**, ← Name des Studenten
>- **Semester**, ← Fachsemester des Studenten
>- **StudWohnOrt** ← Wohnort des Studenten
>**)**
>
>Die Relation **AssistentProfessorDiplomand** enthält die Daten von Studierenden, deren Diplomarbeit von einem Assistenten betreut wird, welcher wiederum bei einem bestimmten Professor angestellt ist.
>
>Gegeben seien folgende funktionale Abhängigkeiten:
>- **ChefPersNr** → **ChefName**
>- **PersNr** → **Name**, **Fachgebiet**, **ChefPersNr**, **ChefName**
>- **MatrNr** → **PersNr**, **Name**, **Fachgebiet**, **ChefPersNr**, **ChefName**, **StudName**, **Semester**, **StudWohnOrt**
## (a) Bestimmen Sie alle Schlüsselkandidaten.

- MatrNr ist der einzige Schlüsselkandidat da durch diesen alle anderen Attribute abhängig sind
- Weder ChefPersnr oder PersNr sind eindeutig
## (b) Überführen Sie das Relationenschema mit Hilfe des Synthesealgorithmus in die 3. Normalform.

>[!tip] Erinnerung
>Schritte des Synthesealgorithmus:
>- Linksreduktion
>- Rechtsreduktion
>- Entfernung von rechtsleeren Abhängigkeiten
>- Zusammenfassen von Abhängigkeiten mit gleicher linker Seite
>- Neues Relationsschema erzeugen 
>- Rekonstruktion eines Schlüsselkandidaten:
>- Elimination überflüssiger Relationen

### Linksreduktion

- ChefPersNr → ChefName
- PersNr → Name, Fachgebiet, ChefPersNr, ChefName
- MatrNr → PersNr, Name, Fachgebiet, ChefPersNr, ChefName, StudName, Semester, StudWohnOrt

Es gibt hier nichts zu ändern, da links jeweils nur ein Attribute steht

### Rechtsreduktion

- **ChefPersNr → ChefName**
	- bleibt unverändert

- **PersNr → Name, Fachgebiet, ChefPersNr, ChefName**
	- wird zu *PersNr → Name, Fachgebiet, ChefPersNr*
	- weil Chefname kommt in ChefPersNr schon vor 

- **MatrNr → PersNr, Name, Fachgebiet, ChefPersNr, ChefName, StudName, Semester, StudWohnOrt**
	- wird zu: *MatrNr → PersNr,, StudName, Semester, StudWohnOrt*
	- alles Andere kommts schon in PersNr und ChefPersNr vor

### Entfernung von rechtsleeren Abhängigkeiten

- gibt keine überflüssige Abhängigkeit

### Zusammenfassen von Abhängigkeiten mit gleicher linker Seite

- keine gleiche linke Seite

### Relationsschema erzeugen

$$R_1(\underline{ChefPersNr},ChefName)$$

$$~{R_2(\underline{PersNr},Name, Fachgebiet, ChefPersNr, ChefName)}$$

$$~{R_3(\underline{MatrNr},PersNr, Name, Fachgebiet, ChefPersNr, ChefName, StudName, Semester, StudWohnOrt)}$$

### Rekonstruktion eines Schlüsselkandidaten:

→ Diplomand enthält Schlüsselkandidaten (MatrNr)

### Elimination überflüssiger Relationen

→ nichts zu tun

---

# Aufgabe 11-2 **Kombinatorik von** [[Schedules]]

>[!note] Aufgabenstellung
>Gegeben sei eine Menge von n Transaktionen $\{T_1, ..., T_n\}$, wobei jede Transaktion $T_i$ aus vielen Einzeloperationen besteht:
>$T_i = \langle A_{i,1}, A_{i,2}, ..., A_{i,in} \rangle$
>
>**Beispiel:**
>- $T_1 = \langle A_{1,1}, A_{1,2}, A_{1,3}, A_{1,4} \rangle$
>- $T_2 = \langle A_{2,1}, A_{2,2}, A_{2,3} \rangle$
>- $T_3 = \langle A_{3,1}, A_{3,2}, A_{3,3} \rangle$
>
>Erläutern Sie für das Beispiel $\{T_1, T_2, T_3\}$ sowie für den allgemeinen Fall $\{T_1, ..., T_n\}$:

## (a) Wieviele beliebige Schedules gibt es?

Aktionen dürfen innerhalb der Transaktion nicht vertauscht werden -> sonst beliebig angeordnet

Im Beispiel:
- Es gibt 10 Aktionen -> 10 freie Plätze im Schedule
- Erste Transaktion bekommt 4 beliebige Plätze
- Zweite TA bekommt 3 beliebige aus den übrigen 10-4 = 6 Plätzen
- Dritte TA bekommt den Rest

$$
Für \ T_{1} \ gilt: \binom{10}{4} = \frac{10!}{(10-4)! \cdot4!} = 210
$$
$$
Für \ T_{2} \ gilt: \binom{6}{3} = \frac{6!}{(6-3)! \cdot3!} = 20
$$
$$
Für \ T_{3} \ gilt: \binom{3}{3} = \frac{3!}{(3-3)! \cdot3!} = 1
$$

$\Longrightarrow \ Insgesamte \ Anzahl \ Schedules: \ 210\cdot20\cdot1 =4200$

### Anzahl beliebiger Schedules im allgemeinen
$$
(\frac{(i_1 + i_2 + \dots + i_n)!}{i_1! \cdot i_2! \cdot \dots \cdot i_n!})
$$


## (b) Wieviele serielle Schedules gibt es?

Anzahl der Permutationen der Transaktionen
→ Jede Transaktion kann an einer beliebigen stelle stehen
$$
3!=6
$$
### Anzahl serieller Schedules im allgemeinen
$$
n!
$$
## (c) Wieviele serialisierbare Schedules gibt es?

- Kann man im allgemeinen nicht genau bestimmen, da die Anzahl von den Abhängigkeiten bestimmt wird. 
- Liegt aber zwischen der Anzahl beliebiger Schedules und der Anzahl der seriellen Schedules
$$
6 \leq \text{Anz. serialisierbarer Schedules} \leq 4200
$$

### Anzahl serialisierbarer Schedules im allgemeinen
$$
n! \leq \text{Anz. serialisierbarer Schedules} \leq (\frac{(i_1 + i_2 + \dots + i_n)!}{i_1! \cdot i_2! \cdot \dots \cdot i_n!})
$$

---
# Aufgabe 11-3 **Serialisierbarkeit von Schedules** [[Schedules#Serialisierungsgraph|(Serialisierungsgraph)]]

>[!note] Aufgabenstellung
>Geben Sie für die folgenden Beispiele jeweils den vollständigen Abhängigkeitsgraphen sowie ggf. einen äquivalenten seriellen Schedule an bzw. begründen Sie kurz, warum dieser nicht existiert.
## a)
$$
S_1 = (w_1(x), w_2(y), w_3(x), r_1(x), r_2(z), w_4(y), r_4(z), w_4(x), r_3(y), r_1(z))
$$
$$
\begin{array}{|c|c|c|}
\hline
x & y & z \\
\hline
w_1 & & \\

 & w_2 & \\

w_3 & & \\

r_1 & & \\

 & & r_2 \\

 & w_4 & \\

 & & r_4 \\

w_4 & & \\

 & r_3 & \\

 & & r_1 \\
\hline
\end{array}
$$
### Abhängigkeiten

• Auf Object $x$: $ww_{1,3} \ x$, $ww_{1,4} \ x$, $wr_{3,1} \ x$, $ww_{3,4} \ x$, $rw_{1,4} \ x$
• Auf Object $y$: $ww_{2,4} \ y$, $wr_{2,3} \ y$, $wr_{4,3}(y)$
• Auf Object 𝑧: wird nur gelesen → keine Abhängigkeiten


## b)
$$
S2 = (w_1(x), r_4(x), r_1(y), r_1(z), w_1(z), w_3(x), r_4(z), w_3(y), w_2(y), w_2(z))
$$
$$
\begin{array}{|c|c|c|}
\hline
x & y & z \\
\hline
w_1 & & \\

r_4 & & \\

 & r_1 & \\

 & & r_1 \\

& & w_1 \\

w_3 & & \\

 & & r_4 \\
& w_3 & \\
& w_2 & \\
 & & w_2 \\
\hline
\end{array}
$$

### Abhängigkeiten

- Auf Object x: $w_{1,4}(x)$, $ww_{1,3}(x)$, $rw_{4,3}(x)$
- Auf Object y: $rw_{1,3}(y)$, $rw_{1,2}(y)$, $ww_{3,2}(y)$
- Auf Object z: $rw_{1,2}(z)$, $w_{1,4}(z)$, $ww_{1,2}(z)$, $rw_{4,2}(z)$

---
# Aufgabe 11-4 [[Transaktionen#Anomalien]]

>[!note] Aufgabenstellung
>Welche Anomalien treten in den folgenden Schedules auf? Begründen Sie Ihre Antwort.
Hier sind die gegebenen Schedules entsprechend dem gegebenen Vorlagenformat umgeschrieben:

## (a)
$$
S_1 = (r_1(x), r_2(y), w_2(x), r_1(z), r_1(x), w_2(y), w_1(z))
$$
$$
\begin{array}{|c|c|c|}
\hline
x & y & z \\
\hline
r_1 & & \\
 & r_2 & \\
w_2 & & \\
 & & r_1 \\
r_1 & & \\
 & w_2 & \\
 & & w_1 \\
\hline
\end{array}
$$
→ [[Transaktionen#Anomalien – Non-Repeatable Read|Non-Repeatable Read]]
- In diesem Fall ist das nur für $𝑥$ der Fall
- Muster: $r_1(x),w_2(x),r_1(x)$
- Verstoß gegen Isolation
## (b)
$$
S_2 = (r_2(y), r_1(x), w_2(x), w_2(y), w_1(x))
$$
$$
\begin{array}{|c|c|c|}
\hline
x & y & z \\
\hline
 & r_2 & \\
r_1 & & \\
w_2 & & \\
 & w_2 & \\
w_1 & & \\
\hline
\end{array}

$$
→ [[Transaktionen#Anomalien – Lost Update|Lost Update]] bezüglich $x$ 
- Muster: $r_1(x),w_2(x),w_1(x)$
<div style="width: 480px; height: 360px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:480px; height:360px" src="https://lucid.app/documents/embedded/7354a80c-a294-4e93-b051-4149fac864e6" id="Zx4qgDoS.MZ~"></iframe></div>
## (c)
$$
S_3 = (r_1(x), r_2(z), w_1(y), r_2(y), w_1(x), w_2(z), w_1(y))
$$
$$
\begin{array}{|c|c|c|}
\hline
x & y & z \\
\hline
r_1 & & \\
 & & r_2 \\
 & w_1 & \\
 & r_2 & \\
w_1 & & \\
 & & w_2 \\
 & w_1 & \\
\hline
\end{array}

$$
→ [[Transaktionen#Anomalien – Dirty Read / Dirty Write|Dirty Read]] bezüglich $y$
- Muster: $w_1(x),r_2(y),w_1(y)$

