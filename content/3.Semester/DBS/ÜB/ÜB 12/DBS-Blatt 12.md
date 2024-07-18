---
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
date created: Monday, 8. April 2024, 12:24
date modified: Monday, 8. April 2024, 22:41
---

# Aufgabe 12-1 [[ER-Modell]]

> [!note] Aufgabenstellung
> In einer relationalen Datenbank sollen Informationen über die XXIII. Olympischen Winterspiele in Pyeongchang gespeichert werden.
>
> Die einzelnen Wettkämpfe besitzen eine Wettkampfnummer, den Namen der Sportart, einen Termin und eine Wettkampfstätte. An jedem Wettkampf nehmen beliebig viele Sportler teil, die durch eine Startnummer identifiziert werden. Jeder Wettkampf wird von genau einem Schiedsrichter geleitet, der eine eindeutige Schiedsrichternummer besitzt. Es sollen die Nationen mit eindeutigem Kürzel und dem vollen Namen abgespeichert werden. Jede Person besitzt einen Namen und gehört zu einer Nation.

## (a) Entwerfen Sie zu diesem Zweck ein E/R-Modell.

_Scrollen und zoomen mit STRG gedrückt_

<iframe frameborder="0" style="width:100%;height:599px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=ER.drawio#R7V1bc5s4GP0t%2B%2BCZ7YM9SNwfc2m6M512O5PddrtvCii2GgxeIefSX78SSBgJEl8agx2T6YxBCCE%2BnfPpfLrQkX0xf%2FxA0WL2KYtxMoJW%2FDiyL0cQAs8O%2BI9IeSpTXOiVCVNKYplplXBNfmKZaMnUJYlxrmVkWZYwstAToyxNccS0NERp9qBnu80S%2FakLNMWNhOsIJc3UbyRmszI1cK1V%2Bh%2BYTGfqycCSV%2BZIZZYJ%2BQzF2YOWhB%2FZVZYyWcUvmM5RilPGr3xC9A7Tkft%2Bxph407MRvOL%2FbkXuyTTLpglGC5JPomzOk6OcZ7m6RXOSCDPXCjqXBfHH2e9H9gXNMlYezR8vcCLaSjVDWaerZ65WdqCi3A1ucD59%2FfxEv5x9jZ7%2B%2BnF%2B93dMEBq7sCzmHiVLaWBpHPakLE5n2fxmyV%2Fo%2FGFGGL5eoEhceeD44mkzNk%2F4GRCHKJotKf4g0i8dniCsc6WMcEYjcXvErQutS7TkTcTtUGa6zpa0KLS0LnSFfV1hYfc5G7ullXlWZWd%2BqD3Ehee1x9xjygiH0VlCpil%2F0pzEsXjDc5ot0xjH8h3yO8yimTyJlvQeXxHGSDqVST%2FIdFoYhrffubQdLxk%2FPtsqoGprzkmczTGjvK6WvMEGfnmLpKNtu%2BX5wwrcoWTorIZrTyIWSaxOq5JXEOAHEgXbIMJrQYSXMGGbBUo1aHj%2FLQV6z6MsyWjBCYtOb37nVePPttTPu8JSlmjGsaKEyMrvR3MBIVlKO0CMTLWy8sI3iZIAWDzWL5QVFFfSjDMvqV27R5Qg%2FstRgBgHa74mX4QWz2V5kM0hLjr8bYsrCWa81mNuqqgAjXlnRhczlMoiSwxZHD1sjEpciuSIY6fArLpGOEBT%2BSRLvWpxhVFe2C0vXz0pxeVVDp%2FC1dYe85DRWK9YVRZ%2Fl5s7wosTZeaMZnd4LAGo5SscQFFGZV%2FpBvjxDYrupgWbxgYgoOuWWKgfvKu9RoyjjCJGsnTMZiS6S3Eu605Swogynpm31tAv5qtVR8sXk3yRoCd1JSHcetD6jcwXGWUoZbKxkwwxw74K%2BfxoKn6neDa6sEfnHhWdxc%2BlogynYMmaMlvDt4qarnesh%2BRHe3aXtuEuVb9fc5e23XSX9r7cpfLDL3WgOI3PhPLhZ1GC8pxEevPqJj3oXpQ3E336R9a0OPnOT6wJdNX5pWgpqzp7kmcFNmJ5sgNqcNyQhWsxU8OEgkkdEyqN4oS7iXu9%2BDagyCd8yUghCRUkPbu9B1dF5EWzyLvqAs0syNKxDX1f2FUriyE6xaxRFocXeqplW4gM%2BUt1tvQ6W5p25AdliSteVGb9BaqAragife2R88SauHWmgDU0wY%2BE1W7jZ99rV1Y3iRN1z17YxDvRAmprY4f%2BaOdqEHZgsCPtfJ0LjmX0FVtzTutQXoM4Q5DWr%2BoIDG%2FZd4ymepwhRhtitCFGG2K0w4rRqhHXg4nRnNOM0Sp5efIxGlCTHL8ao4Eg6CpGA9CIKzuJ0dwhRttHjLZ%2Fam0QsHm9BmwA6tTZOWADtk6MTQO2V%2BOI3%2BDI50LDNIMyjQzHHJh1riECf6LH97BFRQDYAtf9RV3Bs1HXUonHj4XCvKA%2Fxax7JS%2BXz2pL%2FliyyPF6dKB8Uc6m35JHgahjcrSdg8cY0QFeEzovObrXR07Y4jHmeEBDF2iArulKeseDwuegsjZRWX7vQ%2BG5MtM6SbBegoV9SjDbjMzNkHvjMXNXL6gaIe1IgvnDVNIWBIJviUBBnwSCZvhvis1NCQRDPYapViB2RaDmlNL1ImNJuTJxCGJeRXl4pvBwbDhpTh11G8X4zbmja24wHOeUROVszgCA11qtZB0kAtqGw404VkCCkvFnOkSxfYHHMWadHdh31NIcGx6i2N7QEPSNhrZ14m9ego%2B0GbV1E2pKgoOJBcO6Bp94XMe%2BpMPFyRdMCW8rUYNepw0U79eK%2BFJa9KXNXWNNo%2BPvqM09Wy%2FI7Xh%2BwW%2FOLwzMeo5ZGquqQPewFkoqwXXgBHJCY4JuVwK5vh7cOk7HBGoOtzcFLq8DG%2FRtj4pmbM4Hg54VjVJUg749BDT4faPhFIeYjV09m%2FbC6ri8yz%2FMXljRe30vDPvshSv5p4igFntvvUxGAVYVFHbbCwfNIeaBQBsR6FBlbHgcBDJHSuwd15mZG4zMydJ986dtk4c5ND%2Fs%2BtmfJAmNYQDgT%2FyeN%2F4EzaH7lMznArQMk6SBj2HrwnZNDoDR5jZsa3OvxXvtbfdCcEoDra394cvd4UEsrVbOem3fGDp99o3A16MsV3mvrcWlow%2FxuMGKKF31j23Lcd8oLzSMv4G95Wtpovi0XpT2qjWBY%2FQX5jKejfmk9qipgnxDtO6bTG1DpoPY7E552CA0loocgt4Mm0OiCeZ2ZW9Oacqt3ZfVvu4evmxkAuAAxGd4SqOgrXOKxyA%2BNx2Y6Vd8mp863Fl8OsYEvQfDrsVneEKDm6cnPsNNxWe%2F8%2FXQ4JNaRL81n4DR8XQ8Xx82R7W%2BYcbu0Hxx21Shw2rkHRVGc0%2BtGzYnWbtdiwxAm8Aw1mp8%2Bzgs1OgTN8bHM7zAmoCgAZxOZ%2BcBaHbA18UXgWgzNhlQ0Yk38Vq8SVuwskdnssGU2VtRZc8JsZX0WifExGBwPdIJg%2BNZk1zx%2F8BjHhDovtO37cp3br3pNtD55ntWo6w9KzUAtvuU1okzzHJdnWEhPCKGbRou9cyw0J%2FYdrj6g3qn5PJmqP0Z5W%2FMPWN5om%2F1wL3mRPC%2FmAxyp6OviJjj817oTrymDO5Y8ZzkXpFd%2FXHdG4MXPXF%2FXtc7Cq8L1fLoys06FRm2Hn5y9XEs33MngVvz6B272ea6gj%2BHoLIbL1t9l%2FOgfOwGc%2BODj23OnR2qhw2OwsPage4VPcfwgxvvxvPgZI%2BBIz9d%2FR92ZfbVfzxov%2F8f"></iframe>

## (b) Setzen Sie das E/R-Diagramm in ein relationales Datenbankschema um.

$$
Wettkampf(\underline{WK-Nr},Sportart,Zeit,Ort)
$$

$$
Sportler(\underline{Start-Nr},\overline{Nation},Name)
$$

$$
Schiedsrichter(\underline{Schiri-Nr},\overline{Nation},Name)
$$

$$
Nation(\underline{Kürzel},Name)
$$

$$
nimmt\_teil(\overline{Start-Nr},\overline{WK-Nr})
$$

---

# Aufgabe 12-2 [[Relationale Algebra#Relationale Algebra]]

> [!note] Aufgabenstellung
> Gegeben seien folgende Relationen R und S.
>
> $$
> \begin{array}{|c|c|c|c|}
> \hline
> \textbf{A} & \textbf{B} & \textbf{C} & \textbf{D} \\
> \hline
> 1 & 2 & 3 & 4 \\
> 4 & 3 & 2 & 1 \\
> 1 & 2 & 2 & 5 \\
> 4 & 3 & 3 & 4 \\
> 1 & 2 & 2 & 4 \\
> 4 & 3 & 3 & 5 \\
> \hline
> \end{array}
> $$
>
> $$
> \begin{array}{|c|c|c|}
> \hline
> \textbf{C} & \textbf{D} & \textbf{E} \\
> \hline
> 3 & 4 & 1 \\
> 2 & 5 & 2 \\
> 2 & 4 & 3 \\
> \hline
> \end{array}
> $$
>
> Geben Sie die Ergebnisrelationen folgender Ausdrücke der relationalen Algebra also Tabellen an. Wenn nötig, ist die Duplikat-Elimination durchzuführen.

## (a) [[Relationale Algebra#Vereinigung]]

$$
\pi_{A,B,D}(R) \underset{D<E}{\bowtie} \pi_{C,E}(\sigma_{D<5}(S))
$$

### Lösung

$$
\begin{array}{|c|c|c|c|}
\hline
\textbf{A} & \textbf{B} & \textbf{} & \textbf{D} \\
\hline
1 & 2 &  & 4 \\
4 & 3 &  & 1 \\
1 & 2 &  & 5 \\
4 & 3 &  & 4 \\
1 & 2 &  & 4 \\
4 & 3 &  & 5 \\
\hline
\end{array}
$$

$$
\underset{D\  \lt \ E}{\bowtie}
$$

$$
\begin{array}{|c|c|c|}
\hline
\textbf{C} & \textbf{} & \textbf{E} \\
\hline
3 &  & 1 \\
 &  &  \\
2 &  & 3 \\
\hline
\end{array}
$$

$$
\Downarrow
$$

$$
\begin{array}{|c|c|c|c|c|}
\hline
\textbf{A} & \textbf{B} & \textbf{D} & \textbf{C} & \textbf{E} \\
\hline
4 & 3 & 1 & 2 & 3 \\
\hline
\end{array}
$$

## (b) [[Relationale Algebra#Quotient]]

$$
R \div \pi_{C,D}(S)
$$

### Lösung

$$
\begin{array}{|c|c|c|c|}
\hline
\textbf{A} & \textbf{B} & \textbf{C} & \textbf{D} \\
\hline
*1* & *2* & **3** & **4** \\
4 & 3 & 2 & 1 \\
*1* & *2* & **2** & **5** \\
4 & 3 & **3** & **4** \\
*1* & *2* & **2** & **4** \\
4 & 3 & 3 & 5 \\
\hline
\end{array}
$$

$$
\div
$$

$$
\begin{array}{|c|c|c|}
\hline
\textbf{C} & \textbf{D} & \textbf{} \\
\hline
3 & 4 &  \\
2 & 5 &  \\
2 & 4 &  \\
\hline
\end{array}
$$

$$
\Downarrow
$$

$$
\begin{array}{|c|c|}
\hline
\textbf{A} & \textbf{B} \\
\hline
1 & 2 \\
\hline
\end{array}
$$

## (c) [[Relationale Algebra#Quotient]]

$$
R \div \pi_{D}(S)
$$

### Lösung

$$
\begin{array}{|c|c|c|c|}
\hline
\textbf{A} & \textbf{B} & \textbf{C} & \textbf{D} \\
\hline
1 & 2 & 3 & 4 \\
4 & 3 & 2 & 1 \\
1 & 2 & 2 & 5 \\
4 & 3 & 3 & 4 \\
1 & 2 & 2 & 4 \\
4 & 3 & 3 & 5 \\
\hline
\end{array}
$$

$$
\div
$$

$$
\begin{array}{|c|c|c|}
\hline
\textbf{} & \textbf{D} & \textbf{} \\
\hline
 & 4 &  \\
 & 5 &  \\
 &  & \\
\hline
\end{array}
$$

$$
\Downarrow
$$

$$
\begin{array}{|c|c|c|}
\hline
\textbf{A} & \textbf{B} & \textbf{C} \\
\hline
1 & 2 & 2 \\
4 & 3 & 3 \\
\hline
\end{array}
$$

---

# Aufgabe 12-3 [[Relationale Algebra]] | [[Tupelkalkül]] | [[Bereichskalkül]]

> [!note] Aufgabenstellung
> Gegeben sei das folgende Relationenschema. Dabei sind die Schlüsselattribute jeweils unterstrichen.
>
> $$
> \text{Produkt} (\underline{\text{PNR}}, \text{Name}, \text{Gewicht}, \text{Farbe})
> $$
>
> $$
> \text{Filiale} (\underline{\text{FNR}}, \text{Name}, \text{Ort})
> $$
>
> $$
> \text{Angestellter} (\underline{\text{PersNr}}, \text{Name}, \text{Gehalt},
> \text{FNR})
> $$
>
> $$
> \text{Verkauf} (\underline{\text{PNR}}, \underline{\text{PersNr}},
> \underline{\text{Datum}}, \text{VKPreis})
> $$
>
> Geben Sie für die folgende verbal formulierte Anfrage einen äquivalenten Ausdruck in **Relationaler Algebra** und **wahlweise in relationalem Tupel- oder Bereichskalkül** an. Für Anfragen im Tupelkalkül soll darüber hinaus das Schema aller freien Variable angegeben werden. Sie können an passender Stelle auch den Join-Operator benutzen.
>
> - Bestimmen Sie Name und Verkaufspreis aller Produkte, die der Angestellte Peter Müller am 04.02.2017 verkauft hat.

## [[Relationale Algebra]]

**Bedingung vor Join**

$$
\Pi_{Angestellter.Name,Verkauf.VKPreis}(\sigma_{Angestellter.Name='Peter Müller' \  \land \ Verkauf.Datum=04.02.2017}(Produkt \underset{Produkt.PNR = Verkauf.PNR}{\bowtie} Verkauf \underset{Verkauf.PersNr = Angestellter.PersNr}{\bowtie} Angestellter))
$$

**Bedingung nach Join**

$$
\Pi_{\text{Produkt.Name, VKPreis}} \left(
    \text{Produkt}
    \bowtie_{\text{Produkt.PNR} = \text{Verkauf.PNR}}
    \left(
        \sigma_{\text{Name} = 'Peter Müller'} (\text{Angestellter})
        \bowtie
        \sigma_{\text{Datum} = '04.01.2017'} (\text{Verkauf})
    \right)
\right)
$$

## [[Tupelkalkül]]

$$
Schema(pro) = Schema(Produkt);
$$

$$
{\{ \ [pro.Name,ver.VKPreis] \ \} \ | \ pro \in Produkt \ \land \ (\exists \ ver \in Verkauf, ang \in Angestellter
) }
$$

$$
ang.Name = 'Peter Müller' \ \land \ ver.Datum = '04.02.2017'
$$

## [[Bereichskalkül]]

$$
\{ \ proname,vkpreis \ | \ \exists ProNr,PersNr \ :
$$

$$
Produkt(ProNr,proname,\_,\_) \ \land
$$

$$
Verkauf(ProNr,PersNr,'04.02.2017',vkpreis) \ \land
$$

$$
Angestellter(PersNr,'Peter Müller',\_,\_) \ \}
$$

---

# Aufgabe 12-4 **SQL**

> [!note] Aufgabenstellung
> Gegeben sei das folgende Relationenschema zur Fußball-Weltmeisterschaft.
>
> - $Mannschaft (\underline{Land}, Trainer)$ ><br/>
> - $Spieler (\underline{SpielerNr}, Name,\underline{Mannschaft}, Geburtsdatum, Position)$ ><br/>
> - $Austragungsort (\underline{Stadion}, Platze)$ ><br/>
> - $Schiedsrichter (\underline{SID}, Name, Nationalitat)$ ><br/>
> - $Spiel (\underline{SpielID}, Tag, MannschaftA, MannschaftB, Austragungsort, Zuschauer)$ ><br/>
> - $Tor (\underline{Spieler}, \underline{Mannschaft}, \underline{Spiel}, \underline{Minute})$ ><br/>
> - $leitet (\underline{Spiel}, \underline{Schiedsrichter})$ ><br/> > _Formulieren Sie die folgenden Anfragen in SQL._

## a) Bestimmen Sie für jeden Austragungsort die Anzahl der Spiele, die dort stattgefunden haben. Beachten Sie, dass auch Austragungsorte gespeichert wurden, an denen dann kein Spiel stattgefunden hat.

```sql
SELECT Stadion, COUNT(SpielID) FROM Austragungsort
LEFT JOIN Spiel ON Spiel.Austragungsort = Austragungsort.Stadion
GROUP BY Austragungsort.Stadion
```

## b) Bestimmen Sie die Anzahl der Spiele, die Spanien im Laufe der WM gespielt hat, in denen mindestens ein Tor fiel.

```sql
SELECT COUNT(DISTINCT Spiel.SpielID) AS Anzahl_Spiele FROM Spiel
JOIN Tor ON Spiel.SpielID = Tor.Spiel
WHERE (Spiel.MannschaftA = 'Spanien' OR Spiel.MannschaftB = 'Spanien');
```

1. **SELECT COUNT(DISTINCT Spiel.SpielID) AS Anzahl_Spiele**: Diese Zeile zählt die einzigartigen Spiel-IDs. Mit `COUNT(DISTINCT ...)` wird sichergestellt, dass jedes Spiel, unabhängig davon, wie viele Tore darin gefallen sind, nur einmal gezählt wird.

2. **FROM Spiel JOIN Tor ON Spiel.SpielID = Tor.Spiel**: Diese Zeile verknüpft die Tabellen `Spiel` und `Tor` über die Spiel-ID. Das bedeutet, dass nur Spiele berücksichtigt werden, in denen mindestens ein Tor gefallen ist (da nur solche Spiele in der `Tor`-Tabelle aufgeführt werden).

3. **WHERE (Spiel.MannschaftA = 'Spanien' OR Spiel.MannschaftB = 'Spanien')**: Diese Bedingung filtert die Spiele, in denen Spanien entweder also Mannschaft A oder also Mannschaft B beteiligt war.

Die Kombination dieser Elemente führt dazu, dass die Abfrage die Anzahl der unterschiedlichen Spiele liefert, in denen Spanien gespielt hat und in denen mindestens ein Tor erzielt wurde, wobei jedes Spiel nur einmal gezählt wird, auch wenn mehrere Tore fielen.

#### Weitere Lösungen

```sql
SELECT COUNT(SpielID) FROM spiel s JOIN Tor t ON s.SpiellD = t.spiel
WHERE MannschaftA = 'Spanien' OR MannschaftB = 'Spanien'
GROUP BY SpielID;
```

```sql
SELECT COUNT(SpiellD) FROM Spiel
WHERE (MannschaftA= 'Spanien' OR MannschaftB = 'Spanien') AND
EXISTS (SELECT * FROM Tor WHERE Tor.Spiel = Spiel.SpiellD);
```

---

# Aufgabe 12-5 **Funktionale Abhängigkeiten**

> [!note] Aufgabenstellung a)
> Gegeben sei das Relationenschema $R_1(A, B, C, D, E, F)$, sowie die Menge der zugehörigen nicht-trivialen funktionalen Abhängigkeiten:
>
> $$
> \{A, B → D \ \ \ \ \ \ \ \ B, C → E \ \ \ \ \ \ \ \ B → F \}
> $$

## a) Bestimmen Sie die Menge der Schlüsselkandidaten von R1. Geben Sie dazu alle Schlüsselkandidaten an und erläutern Sie, warum es keine weiteren Schlüsselkandidaten gibt

$$
Schlüsselkandidaten \ S = \{A,B,C\}
$$

- $A,B \rightarrow D$
  → $R_1(\cancel{A}, \cancel{B}, C, \cancel{D}, E, F)$
  → $R_1(C, E, F)$

- $B,C \rightarrow E$
  → $R_1(\cancel{C}, \cancel{E}, F)$
  → $R_1(F)$
- $B \rightarrow F$
  → $R_1(F)$
  → $R_1(\cancel{F})$

$\Longrightarrow$ Mithilfe von $\{A,B,C\}$ kann man alle Attribute herleiten. Zudem ist diese Menge $S$ _eindeutig_ und _minimal_

## b) Bestimmen Sie die kanonische Überdeckung $F_C$ zu $F$. Geben Sie dazu die kanonische Überdeckung an und erläutern Sie, wie sie erreicht wird. [[Normalformen und Synthesealgorithmus#Synthesealgorithmus]]

> [!note] Aufgabenstellung b)
> Gegeben sei das Relationenschema $R_2(A, B, C, D, E, F)$, sowie die Menge der zugehörigen nicht-trivialen funktionalen Abhängigkeiten:
>
> $$
> \{A, B, C \rightarrow D, \ \ \ \ \ \ D \rightarrow E, \ \ \ \ \ \ B, C \rightarrow D, E, F, \ \ \ \ \ \ E \rightarrow F\}
> $$

> [!tip] Erinnerung
> **Schritte des Synthesealgorithmus:**
>
> - Linksreduktion
> - Rechtsreduktion
> - Entfernung von rechtsleeren Abhängigkeiten
> - Zusammenfassen von Abhängigkeiten mit gleicher linker Seite
> - Neues Relationsschema erzeugen
> - Rekonstruktion eines Schlüsselkandidaten:
> - Elimination überflüssiger Relationen

$$
R_2(A, B, C, D, E, F)
$$

$$
F = \{A, B, C \rightarrow D, \ \ \ \ \ \ D \rightarrow E, \ \ \ \ \ \ B, C \rightarrow D, E, F, \ \ \ \ \ \ E \rightarrow F\}
$$

### Linksreduktion

- $A, B, C \rightarrow D$
  → $\cancel{A}, B, C \rightarrow D$
  → $B, C \rightarrow D$

  - Da gilt $D \in (F,\{A,B,C\}-A)=D$
  - Wir können $A$ in der funktionalen Abhängigkeit $A, B, C \rightarrow D$ weglassen, weil $D$ bereits durch $B$ und $C$ alleine hergeleitet werden kann.

- $D \rightarrow E$

  - minimal gibt nix zu ändern

- $B, C \rightarrow D, E, F$

  - gibt nix zu ändern

- $E \rightarrow F$
  - minimal gibt nix zu ändern

### Rechtsreduktion

> [!Danger] Falsche Anwendung der Rechtsreduktion zum vorbeugen von Fehlern
>
> - $B, C \rightarrow D$
>   - $B, C \rightarrow \emptyset$
>   - $D$ wird abgedeckt durch $B, C \rightarrow D, E, F$
> - $D \rightarrow E$
>   - $D \rightarrow \emptyset$
>   - $E$ wird abgedeckt durch $B, C \rightarrow D, E, F$
> - $B, C \rightarrow D, E, F$
>   - bleibt unverändert
> - $E \rightarrow F$
>   - $E \rightarrow \emptyset$
>   - $F$ wird abgedeckt durch $B, C \rightarrow D, E, F$
>
> nicht korrekt, weil das Entfernen von $E$ und $F$ aus diesen Abhängigkeiten bedeuten würde, dass sie aus der Überdeckung komplett verschwinden. Das ist nicht das Ziel der Rechtsreduktion. Das Ziel ist es, Redundanzen zu entfernen, nicht aber die komplette Abhängigkeit.

> [!Success] Richtige Anwendung der Rechtsreduktion
>
> - $B, C \rightarrow D$
>   - $B, C \rightarrow \emptyset$
>   - $D$ wird abgedeckt durch $B, C \rightarrow D, E, F$
> - $D \rightarrow E$
>   - bleibt unverändert
> - $B, C \rightarrow D, E, F$
>   - $B, C \rightarrow D, \cancel{E}, \cancel{F}$
>   - $E$ und $F$ werden abgedeckt durch $D \rightarrow E$ und $E \rightarrow F$
> - $E \rightarrow F$
>   - bleibt unverändert
>
> Wir behalten $D \rightarrow E$ und $E \rightarrow F$ in der kanonischen Überdeckung, da diese direkten funktionalen Abhängigkeiten eine klare und eigenständige Beziehung zwischen den Attribute definieren, die nicht implizit durch $B, C \rightarrow D, E, F$ abgedeckt sind.

### c) Entfernung von rechtsleeren Abhängigkeiten

$$
F = \{B, C \rightarrow \emptyset, \ \ \ \ \ \ D \rightarrow E, \ \ \ \ \ \ B, C \rightarrow D \ \ \ \ \ \ E \rightarrow F\}
$$

$$
wird \ zu
$$

$$
F = \{ D \rightarrow E, \ \ \ \ \ \ B, C \rightarrow D \ \ \ \ \ \ E \rightarrow F\}
$$

### d) Zusammenfassen von Abhängigkeiten mit gleicher linker Seite

<center>
Gibt keine gleiche linke Seite
</center>

$$
\Longrightarrow \ \ \ \  F_c = \{ D \rightarrow E, \ \ \ \ \ \ B, C \rightarrow D \ \ \ \ \ \ E \rightarrow F\}
$$

### e) Neues Relationsschema erzeugen

- $R_1(\underline D,E) → F_1=\{D→E\}$

- $R_2(\underline B,\underline{C},D) → F_2=\{B,C→D\}$

- $R_3(\underline E,F) → F_3=\{E→F\}$

### f) Rekonstruktion eines Schlüsselkandidaten:

> [!unsure]
> Unsicher ob dies nötig, da in $R_2$ schon $B$ und $C$ enthalten

Neue Relation für Schlüsselkandidaten $\{B,C\}$

$$
\Longrightarrow \ \ R_4(\underline{B},\underline C) → F_{4}= \emptyset
$$

### g) Elimination überflüssiger Relationen

<center>In diesem Schritt nix zu tun </center>

### **Finale Relationen:**

- $R_1(\underline D,E)$

- $R_2(\underline B,\underline{C},D)$

- $R_3(\underline E,F)$

- $Unsicher:(R_4(\underline{B},\underline C)$

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
