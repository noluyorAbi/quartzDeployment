---
tags:
  - DBS
  - Klausuraufgabe
fach: "[[DBS]]"
date created: Tuesday, 9. April 2024, 14:00
date modified: Wednesday, 10. April 2024, 12:53
---

# Aufgabe 1: **Gemischte Fragen**

>[!note] Aufgabenstellung
>Gegeben sei das Relationenschema $R = (\underline A, B, C, D)$. Wir wissen, dass $A$ der einzige Schlüsselkandidat ist. Über weitere funktionale Abhängigkeiten gibt es keine Informationen, es kann aber weitere funktionale Abhängigkeiten geben. Nehmen Sie an, dass $R$ die erste Normalform erfüllt. 
>
## (a) Können wir mit Sicherheit davon ausgehen, dass $R$ auch die zweite und dritte Normalform erfüllt? Begründen Sie Ihre Aussage jeweils in ein bis zwei Sätzen.


>[!success]- Lösung (klicken zum aufklappen)
> ### 2.NF
> Für die [[Normalformen und Synthesealgorithmus#2. Normalform (2NF)]] muss gellten: 
> - jedes Nicht-Schlüssel-Attribut (NSA) ist voll funktional abhängig von jedem Schlüsselkandidaten
> 
> Diese Bedingung ist erfüllt, da $A$ der einzige Schlüssel ist und alle Attribute die vom Schlüsselkandidaten $A$ abhängig sind automatisch von allen Schlüsselkandidaten (`also nur A`) abhängig sind. Es kann also garkeinen Fall geben, dass ein Attribute *nicht* von allen Schlüsselattributen abhängig sind.
> 
> In der 2.NF sind zudem [[Normalformen und Synthesealgorithmus#2. Normalform (2NF)|transitive Abhängigkeiten]] erlaubt wie z.B $B→C$
>
> ### 3.NF
> Für die [[Normalformen und Synthesealgorithmus#3. Normalform (3NF)]] muss gellten: 
> - Keine transitiven Abhängigkeiten (Kein Nichtschlüssel zu anderem Nichtschlüssel) wobei der eine Nichtschlüssel wiederum von einem Schlüsselkandidaten abhängt
> - *"Vermittler"* hängt also von Schlüsselkandidat ab ist aber selber keiner und hat eine Abhängigkeit zu einem Nichtschlüsselkandidaten
> - Reicht wenn ein Nichtschlüssel Attribute von *irgendeinem* Schlüsselkandidaten abhängig ist 
> 
> Die 3.NF ist hier nicht gegeben, da es eine Abhängigkeit $A→B$ geben kann, und dann wiederum eine Abhängigkeit $B→C$ wo $B$ also der *Vermittler* dient


## (b) Gegeben seien die Relationen $R = (A, B, C)$ und $S = (B, C, D)$. Relation $R$ enthält 50 Tuple und Relation $S$ enthält 10 Tuple. Gegeben seien außerdem folgende Anfragen:

$A_1$:
```sql
SELECT DISTINCT * 
FROM R, S;
```

$A_2$:
```sql
SELECT * 
FROM R NATURAL JOIN S;
```

- $A_1$ ist das Kreuzprodukt von $R$ und $S$ $(R \times S)$ [[CrossJoin in SQL|(CrossJoin in SQL)]]

- Minimale Anzahl von Ergebnistupel für Anfrage $A_1$:
>[!success]- Lösung (klicken zum Aufklappen)
> #### Berechnung und Erklärung:
> Die minimale Anzahl der Ergebnistupel ist das Product der Anzahl der Tuple in den beiden beteiligten Relationen. Dies ergibt:
> $$
> 50 \text{ Tupel in } R \times 10 \text{ Tupel in } S = 500 \text{ Ergebnistupel}
> $$
  
- Maximale Anzahl von Ergebnistupel für Anfrage $A_1$:
>[!success]- Lösung (klicken zum Aufklappen)
> #### Berechnung und Erklärung:
> Die maximale Anzahl der Ergebnistupel ist identisch zur minimalen, da es sich um eine Kreuzprodukt-Operation handelt, die alle Kombinationen der Tuple aus beiden Relationen erzeugt:
> $$
> 50 \text{ Tupel in } R \times 10 \text{ Tupel in } S = 500 \text{ Ergebnistupel}
> $$

- Anzahl der Attribute in der Ergebnisrelation von Anfrage $A_1$:
>[!success]- Lösung (klicken zum Aufklappen)
> - **Ergebnis**: 6 Attribute.

- Minimale Anzahl von Ergebnistupel für Anfrage $A_2$:
>[!success]- Lösung (klicken zum Aufklappen)
> - **Ergebnis**: Mindestens 0 Ergebnistupel, da es möglich ist, dass keine Übereinstimmungen in den gemeinsamen Spalten existieren.

- Maximale Anzahl von Ergebnistupel für Anfrage $A_2$
>[!success]- Lösung (klicken zum Aufklappen)
> #### Berechnung:
> Im schlimmsten Fall stimmt jedes Tuple in $R$ mit jedem Tuple in $S$ bezüglich der Werte in den Spalten $B$ und $C$ überein. Daher ist die Anzahl der Ergebnistupel das Product der Anzahl der Tuple in beiden Relationen:
> $$50 \text{ Tupel in } R \times 10 \text{ Tupel in } S = 500$$

- Anzahl der Attribute in der Ergebnisrelation von Anfrage $A_2$
>[!success]- Lösung (klicken zum Aufklappen)
>- **Ergebnis**: 4 Attribute.


## (c) Gegeben seien die Transaktionen $T_1$, $T_2$ und $T_3$, wobei Transaktion $T_1$ aus 5 Einzelaktionen, Transaktion $T_2$ aus 7 Einzelaktionen und Transaktion $T_3$ aus 8 Einzelaktionen besteht. Wie viele mögliche verschiedene serielle Schedules gibt es?

- $T_{1}$ hat 5 Einzelaktionen
- $T_2$ hat 7 Einzelaktionen
- $T_3$ hat 8 Einzelaktionen

>[!success]- Lösung (klicken zum Aufklappen)
>$$
>serielle \ Schedules \ Anzahl: 3! = 6
>$$

## (d) Was unterscheidet eine materialisierte View von einer gewöhnlichen View?

>[!success]- Lösung (klicken zum Aufklappen)
>- materialisierte Views kann man abspeichern und wie eine Art eigene Schema benutzen, die Ergebnisse der materialisierten View werden physisch in eienr Tabelle gespeichert
>- Eine gewöhnliche View speichert keine Daten physisch. Stattdessen handelt es sich um eine Abfrage, die bei Bedarf ausgeführt wird, um die aktuellen Daten aus den zugrunde liegenden Tabellen zu generieren 

### Was ist der wesentliche Vorteil einer materialisierten View?

>[!success]- Lösung (klicken zum Aufklappen)
>- Verbesserte Abfrageleistung durch physische Speicherung der Abfrageergebnisse
>- Schnellerer Zugriff auf Daten, da Abfrage nicht bei jedem Zugriff erneut ausgeführt werden muss
>- Kürzere Antwortzeiten insbesondere bei komplexen Abfragen oder großen Datenmengen
>- Möglichkeit zur Speicherung vorausberechneter Daten, was die Leistung weiter verbessert
>- Effizientere Datenverarbeitung und -abfrage, besonders in Umgebungen mit großen Datenmengen oder komplexen Abfragen

## (e) Was ist die maximale und minimale Anzahl von Schlüsseln, die ein innerer Knoten in einem B-Baum der Ordnung 10 haben kann?

>[!success]- Lösung (klicken zum Aufklappen)
> **Minimal:** 10
> **Maximal:** 20


--- 

# Aufgabe 2 **SQL & Kalküle** [[Tupelkalkül]] |[[Bereichskalkül]] | [[Erweiterte Abfragen in SQL]]


>[!note] Aufgabenstellung
>Gegeben sei das folgende Datenbankschema, das für die Speicherung der Daten eines Geheimdienstes verwendet wird. Zusätzlich ist ein Teil seiner Ausprägung gegeben. Die Primärschlüsselattribute sind jeweils unterstrichen. Die Attributnamen sind global eindeutig, d.h. Fremdschlüsselbeziehungen sind anhand des Attributnamens erkennbar.
>
>In der Relation `Agenten` werden alle Agenten mit einer eindeutigen Nummer und ihrem Namen gespeichert. Die Relation `Einsätze` beschreibt Einsätze, die jeweils mit einem eindeutigen Namen beschrieben werden. Einsätze finden an einem bestimmten Datum und Ort statt und werden aufgrund einer Zielperson durchgeführt. Die Agenten tragen Decknamen (Relation `Decknamen`). Dabei ist einem Decknamen jeweils ein Agent eindeutig zuzuordnen. Ein Agent kann aber mehrere Decknamen haben. Agenten nehmen gegen Bezahlung an Einsätzen teil (Relation `nimmt-teil`). Außerdem kann ein Agent auch under mehreren Decknamen an einem Einsatz teilnehmen.

- $Agenten (\underline{ANr}, Name)$
- $Einsätze (\underline{EName}, Datum, Ort,Zielperson)$
- $Decknamen (\underline{Deckname}, ANr)$
- $nimmt-teil (\underline{EName}, \underline{Deckname},Bezahlung)$

## (a) Geben Sie die Anweisung in [[Data Definition Language (DDL)|SQL-DDL]] an, die notwendig ist, um die Relation "nimmt-teil" wie beschrieben zu erzeugen. Achten Sie dabei auf Fremdschlüsselbeziehungen und wählen Sie anhand der gegebenen Ausprägungen sinnvolle Datentypen. Die Bezahlung ist ganzzahlig und darf niemals negative sein. Gehen Sie davon aus, dass alle Zeichenketten eine maximale Länge von 20 haben.


>[!success]- Lösung (klicken zum Aufklappen)
>- **Kurzform:**
>   ```sql
>   CREATE TABLE nimmt-teil
>   (
>       EName VARCHAR(20) REFERENCES Einsätze,
>       Deckname VARCHAR(20) REFERENCES Decknamen,
>       Bezahlung INTEGER CHECK (Bezahlung >= 0),
>       PRIMARY KEY (EName,Deckname)
>   )
>   ```
>- **Längere Form:**
>   ```sql
>   CREATE TABLE nimmt-teil
>   (
>       EName VARCHAR(20) REFERENCES Einsätze(EName),
>       Deckname VARCHAR(20) REFERENCES Decknamen(Deckname),
>       Bezahlung INTEGER CHECK (Bezahlung >= 0),
>       PRIMARY KEY (EName,Deckname)
>   )
>   ```
>- **Ausführliche Form:**
>   ```sql
>   CREATE TABLE `nimmt-teil`
>   (
>       EName VARCHAR(20),
>       Deckname VARCHAR(20),
>       Bezahlung INTEGER CHECK (Bezahlung >= 0),
>       PRIMARY KEY (`EName`, `Deckname`),
>       FOREIGN KEY (`EName`) REFERENCES `Einsätze`(`EName`),
>       FOREIGN KEY (`Deckname`) REFERENCES `Decknamen`(`Deckname`)
>   )
>   ```
>
>Alle drei Formen sind korrekt, aber die kürzeste Form ist am prägnantesten.



## (b) Erstellen Sie eine Liste aller Einsätze, an denen der Agent under dem Decknamen 007 beteiligt war. Die Liste soll den Einsatznamen, das Datum, den Ort und die Zielperson enthalten. Sortieren Sie die Liste absteigend nach dem Namen der Zielperson und bei gleicher Zielperson aufsteigend nach dem Datum.

- $Agenten (\underline{ANr}, Name)$
- $Einsätze (\underline{EName}, Datum, Ort,Zielperson)$
- $Decknamen (\underline{Deckname}, ANr)$
- $nimmt-teil (\underline{EName}, \underline{Deckname},Bezahlung)$

>[!success]- Lösung (klicken zum Aufklappen)
>
>```sql
>SELECT EName,Datum,Ort,Zielperson FROM Einsätze
>JOIN nimmt-teil ON Einsätze.EName = nimmt-teil.EName
>WHERE Deckname = "007"
>ORDER BY Zielperson DESC, Datum ASC
>```

## (c) Geben Sie zu jedem Agenten den Realnamen und dessen Einsatzorte an. Nehmen Sie jedoch nur diejenigen Orte auf, an denen noch kein anderer Agent einen Einsatz hatte.

- $Agenten (\underline{ANr}, Name)$
- $Einsätze (\underline{EName}, Datum, Ort,Zielperson)$
- $Decknamen (\underline{Deckname}, ANr)$
- $nimmt-teil (\underline{EName}, \underline{Deckname},Bezahlung)$

>[!success]- Lösung (klicken zum Aufklappen)
>```sql
>SELECT Name, Ort 
>FROM Agenten A1 
>JOIN Decknamen D1 ON D1.ANr = A1.ANr 
>JOIN nimmt-teil NT1 ON NT1.Deckname = D1.Deckname 
>JOIN Einsätze E1 ON NT1.EName = E1.EName 
>WHERE NOT EXISTS ( SELECT * FROM Agenten A2 
> 				   JOIN Decknamen D2 ON D2.ANr = A2.ANr 
> 				   JOIN nimmt-teil NT2 ON NT2.Deckname = D2.Deckname 
> 				   JOIN Einsätze E2 ON NT2.EName = E2.EName 
> 				   WHERE E1.Ort = E2.Ort AND NOT(A1.Name = A2.Name)
>				 )
>```

## (d) Geben Sie für jeden Einsatz den Einsatznamen sowie die Gesamtkosten aller Bezahlungen für die Agenten aus. Jedoch sollen dabei nur die Bezahlung der Agenten mitgezählt werden, die schon an mehr also zwei <u>unterschiedlichen</u> Einsätzen beteiligt waren.

- $Agenten (\underline{ANr}, Name)$
- $Einsätze (\underline{EName}, Datum, Ort,Zielperson)$
- $Decknamen (\underline{Deckname}, ANr)$
- $nimmt-teil (\underline{EName}, \underline{Deckname},Bezahlung)$


>[!success]- Lösung (klicken zum Aufklappen)
>```sql
>SELECT E.EName, SUM(NT.Bezahlung) AS Gesamtkosten FROM Einsätze E
>JOIN nimmt-teil NT ON E.EName = NT.EName
>JOIN Decknamen D ON NT.Deckname = D.Deckname
>WHERE D.ANr IN (SELECT D2.ANr FROM Decknamen D2
>                JOIN nimmt-teil NT2 ON D2.Deckname = NT2.Deckname
>                GROUP BY D2.ANr
>                HAVING COUNT(DISTINCT NT2.EName) > 2)
>GROUP BY E.EName;
>```
>### Schritte zur Erstellung der SQL-Abfrage
>- **Verknüpfung der Tabellen**: Verbinde die `Einsätze`-, `nimmt-teil`- und `Decknamen`-Tabellen, um Einsätze mit den zugehörigen Bezahlungen und Agenten zu assoziieren.
>   - `FROM Einsätze E JOIN nimmt-teil NT ON E.EName = NT.EName`: Jeder Einsatz wird mit den Details seiner Teilnahme verknüpft.
>   - `JOIN Decknamen D ON NT.Deckname = D.Deckname`: Die Teilnahmeinformationen werden über Decknamen mit den Agenten verbunden.
>- **Filtern von Agenten**: Wähle nur die Agenten aus, die an mehr also zwei verschiedenen Einsätzen beteiligt waren.
>   - `WHERE D.ANr IN (...)`: Es wird eine Unterabfrage verwendet, die die Agenten filtert.
>   - `SELECT D2.ANr FROM Decknamen D2 JOIN nimmt-teil NT2 ON D2.Deckname = NT2.Deckname`: Diese Unterabfrage sammelt alle Agenten und deren Einsätze.
>   - `GROUP BY D2.ANr`: Gruppierung der Agenten, um die Einsätze je Agent zu zählen.
>   - `HAVING COUNT(DISTINCT NT2.EName) > 2`: Agenten, die an mehr also zwei unterschiedlichen Einsätzen teilgenommen haben, werden ausgewählt.
>- **Aggregieren der Kosten**: Berechne die Gesamtkosten der Bezahlungen für jeden Einsatz.
>   - `SUM(NT.Bezahlung) AS Gesamtkosten`: Summiert alle Bezahlungen, die den oben genannten Kriterien entsprechen.
>   - `GROUP BY E.EName`: Die Ergebnisse werden nach Einsatzname gruppiert, um die Kosten pro Einsatz auszugeben.
>### Ziel der Abfrage
>- Die Abfrage liefert den Namen jedes Einsatzes zusammen mit den Gesamtkosten der Zahlungen an Agenten, die intensiv (mehr also zwei verschiedene Einsätze) involviert waren.

## (e) Geben Sie die Namen der Zielpersonen an, gegen die under dem Decknamen 007 im Jahr 1956 (zwischen dem 01.01.1956 und 31.12.1956 einschließlich) ermittelt wurde. Hinweis: Datumsangaben können mit Hilfe der Operatoren `<`, `<=`, `>`, `>=` und = verglichen werden.

>[!note] Aufgabenstellung
>Formulieren Sie die folgende Anfrage im [[Tupelkalkül]]. Zusätzlich soll das Schema aller freien Variable angegeben werden.

$Agenten (\underline{ANr}, Name)$
$Einsätze (\underline{EName}, Datum, Ort,Zielperson)$
$Decknamen (\underline{Deckname}, ANr)$
$nimmt-teil (\underline{EName}, \underline{Deckname},Bezahlung)$

>[!success]- Lösung (klicken zum Aufklappen)
>$$
>Schema(ein) = Schema(Einsätze)
>$$
>$$
>\{ [\ ein.Zielperson \ ] \ | \ ein \in Einsätze \ , (\exists \ nt \in \text{nimmt
>teil}) :
>$$
>$$
>nt.Deckname = \text{"007"} \ \land
>$$
>$$
>01.01.1956 \leq ein.Datum \ \land \ ein.Datum \leq 31.12.1956
>$$

---

# Aufgabe 3 [[Relationale Algebra]]

## (a) Gegeben seien die zwei Relationen R und S. Bilden Sie die folgenden Operationen durch Verwendung der fünf relationalen Grundoperationen (Vereinigung. Differenz, Kartesisches Product. Selektion, Projektion) nach

### 1. [[Relationale Algebra#Durchschnitt]]

>[!success]- Lösung (klicken zum Aufklappen)
>$$
>R \  \cap \ S = \{\ t \ | \ t \in \ R \ und \ t \ \in \ S \}
>$$
>$$
>oder
>$$
>$$
>R∩S=R−(R−S)
>$$
>$$
>oder
>$$
>$$
>R∩S=(R∪S)−((R−S)∪(S−R))
>$$
### 2. Join mit Bedingung $\phi$

>[!success]- Lösung (klicken zum Aufklappen)
>$$
>R \underset{\phi}{\bowtie} S = \sigma_\phi(R\times S)
>$$

### 3. [[Relationale Algebra#Quotient]]

>[!success]- Lösung (klicken zum Aufklappen)
>$$
>R \div S = \pi_{R\ '} \ (R) - \pi_{R\ '} \ ((\pi_{R\ '} \ (R) \times S) - R)
>$$


## (b) Gegeben sind nun folgende Relationen

>[!note] Aufgabenstellung
>- $Personen(\underline{PersId},Name,Vermögen)$
>- $Wohnung(\underline{WhgId},ort,Wohnfläche,Besitzer)$
>
>Hierbei verweist das Attribute `Besitzer` in Wohnung auf das Attribute `Persld` in Personen.
>Formulieren Sie die folgenden Anfragen in der relationalen Algebra.

### 1. Ermitteln Sie die Namen und das Vermögen aller Personen, die eine Wohnung in Hamburg und in München besitzen.

>[!success]- Lösung (klicken zum Aufklappen)
>$$
>P_{München}=\Pi_{Name,Vermögen}(\sigma_{\text{ort="München"}}(Personen\underset{Besitzer = PersId}{\bowtie} Wohnung)
>$$
>$$
>P_{Hamburg}=\Pi_{Name,Vermögen}(\sigma_{\text{ort="Hamburg"}}(Personen\underset{Besitzer = PersId}{\bowtie} Wohnung)
>$$
>$$
>P_{München \ \cap \ Hamburg} = P_{München} \ \cap \ P_{Hamburg}
>$$

### 2. Bestimmen Sie die Ids aller Personen, die keine Wohnung besitzen

>[!success]- Lösung (klicken zum Aufklappen)
>$$
>\Pi_{PersId}(Personen) \ \backslash \ \Pi_{PersId}(Personen\underset{Besitzer = PersId}{\bowtie} Wohnung)
>$$

--- 

# Aufgabe 4 [[ER-Modell]]

>[!note]
> ER-Modellierung (8 Punkte)
> Stadt, Land, Fluss einmal anders: Die relationale Datenbank eines geographischen Informationssystems beinhaltet Städte, Länder und Flüsse mit folgenden Einzelheiten:
>
> - Eine **Stadt** wird durch ihren `Namen` und das `Land` gekennzeichnet, in dem sie liegt. Außerdem hat jede Stadt eine `Einwohnerzahl`.
> - Ein **Land** hat einen eindeutigen `Namen`, eine `Fläche` und ebenfalls eine `Einwohnerzahl`. Ein Land kann an mehrere Länder angrenzen. In einem Land liegt mindestens eine Stadt, wobei jede Stadt nur in genau einem Land liegt. Außerdem hat jedes Land eine Hauptstadt.
> - Ein **Fluss** wird durch seinen `Namen` bestimmt und hat eine gewisse `Länge`. Jeder Fluss kann durch mehrere Städte und auch durch mehrere Länder fließen. Hierbei wird gespeichert, wie viele `Kilometer` ein Fluss ein Land durchfließt. Des Weiteren kann ein Fluss in einen anderen Fluss `münden`, in den auch weitere Flüsse `münden` können. Eine Stadt kann an mehreren Flüssen liegen und durch ein Land können mehrere Flüsse fließen.
>
> Erstellen Sie ein Entity-Relationship-Diagramm für die oben beschriebene Datenbank. Markieren Sie die Funktionalitäten der Relationships und unterstreichen Sie den Primärschlüssel jeder Entität. Vermeiden Sie es, zusätzliche, nicht geforderte Attribute einzuführen. 
> 
> Nutzen Sie also Grundlage für das Entity-Relationship-Diagramm nur die unten aufgeführten Entitäten.

>[!info]
>*Scrollen und zoomen mit STRG gedrückt*
>*Auf das 3. Icon von links klicken falls Skizze nicht zu sehen ist*

>[!success]- Lösung (klicken zum Aufklappen)
><br/>
><iframe frameborder="0" style="width:100%;height:603px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#R7V1bj5s4GP01kXYfEoHN9XGurbTbVaXZ7baPDHgSOgSyQGYy%2FfVrB0zwJQESLpkJo0oFQzDY53z%2BrjCBN8vNp9hZLb5EHgomQPE2E3g7AUDVTIj%2FIy1vWYummFnDPPa9%2FKRdw4P%2FC%2BWNSt669j2UMCemURSk%2FoptdKMwRG7KtDlxHL2ypz1FAdvrypkjoeHBdQKx9V%2FfSxdZq6Uru%2FbPyJ8vaM%2Bqkh9ZOvTkvCFZOF70yjShTXofhWl%2Bi19RvHRCFKb4yBcnfkbxRL9bpCl50qsJuMf%2FnsjZs3kUzQPkrPxk5kZL3Owm%2BJT7J2fpB2SYSxe6zi%2BEu4N3E3gTR1GabS03Nyggc0WnIbun%2Bz1Hi3GIyXVr%2FED78u2vt%2Fjr1Tf37e%2Bf18%2F%2FeL7jTA2QXebFCdb5AOeDk77REY8X0fJxjR%2Fo%2BnXhp%2Bhh5bjkyCvGF25bpMsA76lk03EX6xh9Iu23Gm4go3NPB%2BEqdsnPXTy6QLl11niK8DhkJz1E63h70Wx0gU7GVycjrO8bYz0bZXwqHWe8yXSig%2BtSNy8oTn0Mo6vAn4e4p6XveeQJr%2BNoHXrIy58heUapu8h33HX8gu79NPXDed7005%2FPtwMDyK37QXATBVG8HSj4ZLnIdclF0jh6RqUjj5auYYTCa3HS8nkkt4c2paZ8Ej%2BhaInSGD%2BdQo8acKZnP8opDCnEX3eEsI2saVHigpGf5uT4nhfX3sEGb%2BTIaYIiKEGREaRkKFZOyMDJ%2BG9NEL%2Bd9mmyFS94rhVVXW2246PgYUinTjZL5IiLh2o7g%2FRYBjxyKIxyEOLtR8d9nm%2FncupmA0%2FOiOePvwEdDxd%2BMKW88fv2V%2FRm8Nac%2FD9Hi8kNnFwbMeH8rzV9Cjwq2YNkpwkUIfdVzY9zosMJqHdiN18WWoO0xQFa1QVAQygCGnYGaK1aLKLQuyLrGd5zAydJfJedbXaEz1o24pmL377jLhS684PsYDGT795uygdv3%2FK9LVK8fKcRhtDGT7%2FnB8h2qT%2B8t%2BuO7NDe9gINeZzKkDrxHKUH5pcqQQkd28ProwjcEjCp5lEGJm2LUeCk%2Fgt7dzK05j18jfyttpHzAmgGywubA3x2%2F%2Fmvyms%2FdyGomPyaAXX2UtmYCZfCEHfeSqetyAmJQLBiaE7gnN6Ic2EUog9AuJmiqxzpIKig3THkOYGqpG%2Bswfp4gsnNH%2BZiJfWoximQtpKL5qBcVIHFEEij%2B025qNKVrDDAOFI3ZuKefqjFRhmvMfYB3siu2CqJTdGeeEgdLxWNCoas79mwOMVi8BxkPUktBsO10ONTO%2BrV1OSQAER7QQUS6nRmMJiiwfCnE3ojSgZECdTPDiWiFn4fEPvsSnMXSFQOgsBfJagaKE6yyjxTT%2F6GgOs9aQ6NcNQCKnTAoqJYTmuuuu2DQqYmZlb6mtrnfzlLVDLd13vt9hEyXUAGcoLEGBoyxiVaFs1M%2BcKmmCnAZuwKw7AOWhZkhzcP2oFctUUAaxodVGhwRsdQtoRusAzRzCPteoOjml7TlmhN3TdHZtVmFsMqcNhcPzsCaWdFIM3mjPFjCaSbnDGu9UsgSxm1mfPWZqaqzakz9sDqjKVKMPPRhS7vJK0pdBVG6JrnIXRBTaFLhcOZCN1itaeykoZ9G3tAKWDphfiwRkse0CnHXC0PK3bqAbXsanaOGRVnlVEBFZ0DtiSfQhN5ZXUl4W1RK3gKfJQkBNwentiFAKn3noGQJ3zcFtkefa%2FzkBdKlpiDYEiEa2c5CPYlLfN0uS6imD%2FKC3TLEc3jl24qBaqXbvuslm6osku3TtPDmi7dGudwMIA9M%2BtlErS1wNrgcnjBYFzugCgU4ypNeKbhSS9rwwrW31pTh2VewON5RulTO5HnTHimAY5nhnkkz1RWJdFr%2BiX6S9exZcG5dZKIyu4Yw%2B0thqtafJ6XLvFW9BvFVVWZIiPxcYWjk2soJxfglnVTklHeq49LVcVV%2Fs8s9B%2FOx9B%2FPxaRkDRqSISJzCbqUJbIKg0%2BqPJXShIt3J2FWdQw4ES3B3V81raeCvafiVqnWmwetgnhTD0y%2FRNytQ6moQjX6tiCUtVm5Q0XzaJS1OA9EkleIjEYkWxzBqG9%2B2N9boaOrdLSH3f92hTjUrWxNtMhxTzw8F%2F4Db4py9RXoXX3R%2Fz9y1Qk2J0fvkaLEMW%2FnEUwKjA12SFoKxLCHAjdWqxaWxQxl9BuSdDehmNfCotLLHE5NnLbwBV8BLCE8pOKWpZDLD%2FXyhWKer7Uq36lCl8z1lGclrM%2Bqf3QVpxWOndiTugooXuX0EW%2BYj7zqiS7vFcBfZH5jDMFmKyQNq2hpfSBqsNWRLdRV3TDIfVlTbFnJW3Z1vfUyTfPG9Y41w6wT60H3vMEhs33BNrNwpFOb40knI%2FC4z0xQtbarYoSHlW8j%2FtQ2KxmRbcPioD9UcI6pC6TVTrrsHb9%2FzAKWWGXtJT%2Br3HFWcL7ATq2cut4Y8dct7Zz3U7SuDS%2B9KTHXDc5hkRXyRw%2FzC8Cc%2FLGHQ5OY57bqQDgs3h7zHOTA%2BASnSLUq1x3fT79TTvKzNbYxZoU0TRdrPFE3PtkftteuulSUjPjZ7BEOs6jWKzAjZdu7p0MdQuPmurfOt%2BPqRy8ryLRiLuvTrV19YIKdPep66CRPJDXt7Re3nJJ1AZQ4zSjI41raBynlXeSuyefEdHN9YcfRJmgLyoMFOkrWUY%2FaAdKGeSktD60H5SGSy9BIreQIWBqjBw27RbTBE7zmVQ6QqksqJmTPZh0ttiYvsG%2F6aB%2BBQNb8W2o3SheGhfaoG9F6VSRotroxb23dKZyYWbbNivo24ZJpVkWQ3z7cEWFNKjRsU8U1M0Vyrw%2BQ%2FHbZpUvUzlS%2BeLMl9PrJvaExrmXpZn8y9eFxCeubsruQxpcUAUha1aVAhQmG6AwzIMMPXll3vOWmApZdHl85xJqj6X7FPTEd76fXvhbI013DK%2FsY6eL78zxw4KZg4RbONgU7%2BsaLNoiBsaX2y8e3OBh3oZcHgWIXXbIhYdRC6CAbATG0AeOwIAa7tdRzpxVGFf8CIxqSkRLRx%2BBkaOomcvoA9meimqzxqdiGj0YnzZgcu9mukGPN4nnnZRmV62NGjW10YF9%2F%2Fwb0nk18mjfP0%2B3lvRRyCkWvaRMg2ZZdR%2BI4bahcQwH3X8bh6TTsdarXvHW0EH8S7UZDoZkuLBeArVIgW1cFyF%2BgQ3q%2FMXaMjw5NzLoIx5PNc13%2Fz23z856lSbZB0iUlyi8lO%2B5cZ9oK6uouZevDR2UWzRVSSZZV19tO5j%2BO9ox78aO4dQYDYoQ6tU%2FAoEAofHNi50nP7AYGNodQmXWxYVNjtRSISxnP0xJCX9FGPRg3GRmZz%2FfKduGVmjf%2B1Ix2jNja79w4cAS1LuSW%2BRy28dptHxFSpF%2F1EPKGt7dfQQ7O3335XJ49z8%3D"></iframe>
><br/>
>

---

# Aufgabe 5 [[Transaktionen]]

>[!note] Aufgabenstellung
> Gegeben sei der folgende Schedule:
>$$
>S_1 = (w_1(c), w_4(a), r_3(b), r_1(d), w_2(e), r_2(c), r_3(e), w_4(d), r_2(a), w_3(e), r_4(b))
>$$

## (a) Geben Sie den Abhängigkeitsgraphen von $S_1$ an. Nutzen Sie hierzu die unten dargestellte Vorlage.

>[!success] **Lösung (klicken zum Aufklappen)**  
>**Tabelle anfertigen zur leichteren Skizze**  
>$$  
>\begin{array}{|c|c|c|c|c|}  
>\hline  
>a & b & c & d & e \\  
>\hline  
> & & w_1 & & \\ % w_1(c)  
>w_4 & & & & \\ % w_4(a)  
> & r_3 & & & \\ % r_3(b)  
> & & & r_1 & \\ % r_1(d)  
> & & & & w_2 \\ % w_2(e)  
> & & r_2 & & \\ % r_2(c)  
> & & & & r_3 \\ % r_3(e)  
> & & & w_4 & \\ % w_4(d)  
>r_2 & & & & \\ % r_2(a)  
> & & & & w_3 \\ % w_3(e)  
> & r_4 & & & \\ % r_4(b)  
>\hline  
>\end{array}  
>$$  
>  
>>[!info]  
>>Scrollen und zoomen mit STRG gedrückt
>>Auf das 3. Icon von links klicken falls Skizze nicht zu sehen ist
><iframe frameborder="0" style="width:100%;height:450px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#R7Zldb%2BI4FIZ%2FTaTpxaDETgJcllJmpVWl0bDadi49iUm8E2LGMV%2F76%2FeY2PkwTaHqpszOIiFhHx8fOz6vn9jg4Lvl7pMgq%2FSBxzRzkBvvHDx1EPIQDuBLWfalZRRoQyJYrJ1qw5z9TbXR1dY1i2nRcpScZ5Kt2saI5zmNZMtGhODbttuCZ%2B1RVyShR4Z5RLJj6yOLZWqewq3tv1GWpGZkz9UtS2KctaFIScy3LRPdyRnPpZ7iZyqWJKe5hJYHIr5T4QT3qZTqSW8dNIPPQnkPEs6TjJIVKwYRX4I5KsBltiBLlqllbgSa6EAwHL538J3gXJal5e6OZipXJg3lnGYdrdU6CBX3jA4xmv%2FI%2F8R7dymZh0f3v4unh484LMNsSLbWC%2BygMIOAE%2FVoapXkXi99%2BGPNTcPH4iAMWAUXoRWIa1K3QylR3394JpReKNOgl78KjGCiIB%2BoTLYpk3S%2BIpFq2YKCwZbKZQY1D4rFdyqjVFdSEqVrQT8pp6kPhr9YkhxCwtpOorXY0BmTkuWJ7qDmMDM5uRWRGiuCZCN3StagGEhL6TTna3GYQZlsFKgHDVTCg66UB2XSwdWkHYqtQQI0sYcpN5eSgl6TDRWS7joT7FWyge1N%2BZJKAeO41d7WKtY72wt1fVvvk8onbeyRkbYRrfukCl3LCQpaUa9R17BHdaGrut5TXUH406lr1KO6%2FKu6Lsku37%2B4usY9qgtf1XVJdl1eXb53pK4vjx%2Fim2MB5PGtOjVDLcpIUbConXfB13lM1VDuL6UCumPyST%2BVKn9V5UGga9Ndo2m6N5UcUvPUrHxtVupOh1rdy9xy0AiqkoiESjixM8g0FWrHlSvkdmqTxkdXFkuZkFKzZKdO4uX4J197x1pvaDl4RsrGJmhGJNu0J%2FycvvUInzk70E5vJWSBuroXmhDlg%2BpezeuIHWjYcZ4wgXQi7ECwG8i%2B4bZSDkX3hEfWfH33xWlZs8L2pcpyH1tgcVvuUCinW4OiStgb2IE630wx27zpxfT45UN0Y4J9E2%2BK1XjFHabV9Yb7vwNuMETDFuRcd3wm5gbYHbZQN3DD0SncQaiKbtrWyTy%2FzcfARLMD%2FBRcHF6Si9jmon10OJeL2FxrdKAAo164aIPRO0E6g7bK333ZP7B%2FjfDeA424TzSSKxrfG41h2Eajb1B5Eo0uxm00DgP0q6Fx9J9AI%2FLG7UOSHeJcNIYGhVWgfo6MaNweB4%2FeA13%2BEboAOfTmX%2BPXYyPYFTwnwBM0sOOdi5zAecW18zVg6ZMhw3MZMn6eIdVxwLF%2FUekTKdYPOoFNgrOR4rW3OhqHvSAltE5DePwCUureJjxfLAoqrR4nsAPV%2Bs%2FF0r3%2BRxjf%2FwM%3D"></iframe>

## (b) Ist der Schedule S, serialisierbar? Falls ja, geben Sie alle möglichen seriellen Schedules an. Falls der Schedule nicht serialisierbar ist, begründen Sie Ihre Antwort.

>[!success]- Lösung (klicken zum Aufklappen)
>Der Schedule ist serialisierbar, da er zyklenfrei ist
>$$
>T_{1}→T_4→T_2→T_3
>$$

## (c) Welche Anomalien treten im Schedule $S_2$ auf? Geben Sie für jede [[Transaktionen#Anomalien]] an, ob diese auftritt und falls ja, bezüglich welchen Objekten. Jede Anomalie kann entweder keinmal, einmal oder mehrmals auftreten.

>[!note] Aufgabenstellung
>Betrachten Sie nun folgenden Schedule:
>$$
>S_2 = (r_2(b), r_2(c), w_1(c), r_1(c), w_1(b), r_2(a), w_2(c), r_1(c), r_2(b), w_2(b), w_2(a), w_2(a))
>$$
>**Anomalien**:
>- Dirty Read
>- Lost-Update
>- Non-repeatable Read

>[!tip]-  Ultimative Anomalien Zusammenfassung --- Erklärung der Transaktionsanomalien: Lost Update, Dirty Read, Non-Repeatable Read
>
>**Lost Update RWW**
>
>Bei einem "Lost Update" wird eine Änderung von einer anderen Transaktion überschrieben, ohne dass diese Änderungen wahrgenommen wurden:
>
>$$
>x = 100
>$$
>$$
>\begin{array}{|c|c|}
>\hline
>T_1& T_2\\  
>\hline 
>r(x) & \\
>x=x+10& \\
>& r(x) \\
>& x=x-20\\
>w(x)& \\
>& w(x) \\
>\hline
>\end{array}
>$$
>- T1 und T2 lesen x (100).
>- T1 erhöht x auf 110, aber bevor es schreibt, liest T2 den alten Wert (100) und verringert ihn auf 80.
>- T1 schreibt 110, aber T2 überschreibt es mit 80.
>- Das führt dazu, dass die Änderung von T1 verloren geht.
>
>$$
>Merkhilfe:
>$$
>$$
>\begin{array}{|c|c|}
>\hline
>T_1& T_2\\  
>\hline 
>r & \\
>& r \\
>w& \\
>& w \\
>\hline
>\end{array}
>$$
>
>**Dirty Read WRW**
>
>Ein "Dirty Read" beschreibt das Lesen von Daten, die von einer anderen Transaktion geändert wurden, aber noch nicht festgeschrieben sind:
>
>$$
>x = 100
>$$
>$$
>\begin{array}{|c|c|}
>\hline
>T_1& T_2\\  
>\hline 
>r(x) & \\
>x=x+10& \\
>w(x)& \\
>& r(x) \\
>& x=x-20\\
>& w(x) \\
>FAIL & \\
>\hline
>\end{array}
>$$
>- T1 erhöht x auf 110 und schreibt.
>- T2 liest den neuen Wert 110, verringert ihn auf 90 und schreibt.
>- T1 scheitert und macht seine Änderungen rückgängig.
>- T2 hat Daten basierend auf einem noch nicht festgeschriebenen Wert geändert.
>
>$$
>Merkhilfe:
>$$
>$$
>\begin{array}{|c|c|}
>\hline
>T_1& T_2\\  
>\hline 
>r & \\
>w \\
>& r \\
>& w\\
>FAIL \\
>\hline
>\end{array}
>$$
>
>**Non-Repeatable Read RWR**
>
>Ein "Non-Repeatable Read" tritt auf, wenn eine Transaktion denselben Datensatz mehrmals liest und unterschiedliche Werte feststellt:
>
>$$
>x = 100
>$$
>$$
>\begin{array}{|c|c|}
>\hline
>T_1& T_2\\  
>\hline 
>r(x) & \\
>& w(x) \\
>& x=x+10\\
>r(x) & \\
>\hline
>\end{array}
>$$
>- T1 liest x, welches 100 ist.
>- T2 ändert x auf 110 und schreibt.
>- T1 liest x erneut und findet den Wert 110, anders als beim ersten Mal.
>
>$$
>Merkhilfe:
>$$
>$$
>\begin{array}{|c|c|}
>\hline
>T_1& T_2\\  
>\hline 
>r & \\
>& w \\
>r & \\
>\hline
>\end{array}
>$$
>
>Diese Anomalien verdeutlichen unterschiedliche Risiken und Herausforderungen im Umgang mit Transaktionen in Datenbanksystemen, die es durch geeignete Isolationslevel und Sperrmechanismen zu managen gilt.

>[!success]- Lösung (klicken zum Aufklappen)
>>[!note] Merkhile
>>DR: WRW
>>LU: RWW
>>NRR: RWR
>
>![img](C:\Users\alper\OneDrive\Desktop\LMU\Uni\Uni2\Semester\3.Semester\DBS\Klausuraufgaben\WS23_24\DR-NRR-LU.png.png)

---

# Aufgabe 6 [[Normalformen und Synthesealgorithmus]]


## (a) Gegeben sind die folgenden Relationen, deren funktionale Abhängigkeiten und ihre Schlüsselkandidaten.

### 1. $R_1(A, B, C, D)$

>[!note] Aufgabenstellung
>Funktionale Abhängigkeiten:
> - $(F1)\  A, C \rightarrow B$
>- $(F2)\ B \rightarrow D$
>  - $(F3)\  D \rightarrow A$
>- Schlüsselkandidaten: $(A, C), (B, C), (C, D)$
>
>Entscheiden Sie, ob das Relationenschema die 3. Normalform erfüllt und begründen Sie Ihre Antwort.

>[!success]- Lösung (klicken zum Aufklappen)
→ Das Relationenschema $R_1(A, B, C, D)$ erfüllt die 3. Normalform. Es existieren keine transitiven Abhängigkeiten zwischen Nicht-Schlüsselattributen. Alle funktionalen Abhängigkeiten, in denen ein Attribut von anderen abhängt, betreffen entweder Schlüsselkandidaten oder sind zwischen Attributen, die Teil von Schlüsselkandidaten sind. Daher gibt es keine Verletzungen der Bedingungen der 3. Normalform.

### 2. $R_2(A, B, C, D, E)$

>[!note] Aufgabenstellung
>Funktionale Abhängigkeiten:
> - $(F1)\  A, C \rightarrow B$
> - $(F2)\  C \rightarrow D$
>  - $(F3)\  D, E \rightarrow B$
>- Schlüsselkandidaten: $(A, C, E)$
>
>Entscheiden Sie, ob das Relationenschema die 3. Normalform erfüllt und begründen Sie Ihre Antwort.

>[!success]- Lösung (klicken zum Aufklappen)
>→ $F_2$  $D$ ist abhängig von partiellem Schlüsselkandidaten und nicht von allen. Dadurch ist die 2.NF nicht gegeben und somit auch nicht die 3.NF

## (b) Gegeben sei das Relationenschema $R_3​(U,V,W,X,Y,Z)$ sowie die Menge $F$ der zugehörigen nicht-trivialen funktionalen Abhängigkeiten:

>[!note] Aufgabenstellung
>Funktionale Abhängigkeiten:
>- $W,X \rightarrow Y$
>- $V,X,Y \rightarrow Z$
>- $U,V \rightarrow W$
>- $X \rightarrow U$
>- $Z \rightarrow V,X$
>
>Bestimmen Sie alle Schlüsselkandidaten der Relation $R_3$ und begründen Sie jeweils, warum es sich um einen Schlüsselkandidaten handelt. Begründen Sie auch, weshalb es keine weiteren Schlüsselkandidaten gibt.

>[!success] **Schlüsselkandidaten für die Relation $R_3$** (klicken zum Aufklappen)
>#### Schlüsselkandidat: $\{Z\}$
>
>- **Funktionale Abhängigkeiten:**
>  - $W,X \rightarrow Y$
>  - $V,X,Y \rightarrow Z$
>  - $U,V \rightarrow W$
>  - $X \rightarrow U$
>  - $Z \rightarrow V,X$
>
>**Begründung:**
>
>- **$Z \rightarrow V, X$** deckt $V$ und $X$ ab.
>- **$X \rightarrow U$** ermöglicht, dass $Z$ auch $U$ abdeckt, da $X$ durch $Z$ bestimmt wird.
>- **$U, V \rightarrow W$** und da sowohl $U$ als auch $V$ durch $Z$ bestimmt sind, wird auch $W$ abgedeckt.
>- **$W, X \rightarrow Y$** ermöglicht, dass $Z$ auch $Y$ abdeckt, indem $W$ und $X$ (bereits durch $Z$ bestimmt) verwendet werden.
>- **$V, X, Y \rightarrow Z$** ist redundant, da $Z$ selbst verwendet wird, um alles abzudecken.
>
>**Vollständigkeit der Abdeckung:** $\{Z\}^{+} = \{U, V, W, X, Y, Z\}$
>
>**Minimalität:** Keine echte Teilmenge von $\{Z\}$ kann die gesamte Relation abdecken.
>
>#### Schlüsselkandidat: $\{V, X\}$
>
>- **Funktionale Abhängigkeiten:**
>  - $W,X \rightarrow Y$
>  - $V,X,Y \rightarrow Z$
>  - $U,V \rightarrow W$
>  - $X \rightarrow U$
>  - $Z \rightarrow V,X$
>
>**Begründung:**
>
>- **$X \rightarrow U$** deckt $U$ ab.
>- **$U, V \rightarrow W$** deckt $W$ ab, da sowohl $U$ (bereits durch $X$ abgedeckt) als auch $V$ in der Attributmenge enthalten sind.
>- **$W, X \rightarrow Y$** deckt $Y$ ab, da sowohl $W$ (über $U, V$ abgedeckt) als auch $X$ in der Attributmenge enthalten sind.
>- **$V, X, Y \rightarrow Z$** deckt $Z$ ab, sobald $Y$ bestimmt ist.
>
>**Vollständigkeit der Abdeckung:** $\{V, X\}^{+} = \{U, V, W, X, Y, Z\}$
>
>**Minimalität:** Keine echte Teilmenge von $\{V, X\}$ kann die gesamte Relation abdecken.
>
>## Fazit
>
>Die Analyse zeigt, dass sowohl $\{Z\}$ als auch $\{V, X\}$ minimale Schlüsselkandidaten für die Relation $R_3$ sind. Beide Attributmengen decken die gesamte Relation funktional ab und erfüllen die Kriterien der Minimalität für Schlüsselkandidaten.
>
>### Warum keine weiteren Kandidaten?
>
>- **Attribute allein oder in anderen Kombinationen:** Kein einzelnes Attribut außer $Z$ und keine andere Kombination außer $\{V, X\}$ können alle anderen Attribute bestimmen. Beispielsweise reicht $X$ allein nicht aus, um $V$, $W$, $Y$ und $Z$ zu bestimmen. Ebenso kann eine Kombination wie $\{U, V\}$ oder $\{W, X\}$ nicht $Z$ und somit nicht alle Attribute abdecken.
>- **Redundanzfreie Kombinationen:** Alle anderen Kombinationen, die die gesamte Relation abdecken könnten, würden zusätzliche, unnötige Attribute enthalten und somit nicht minimal sein.
