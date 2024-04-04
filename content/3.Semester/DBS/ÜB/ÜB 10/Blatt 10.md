---
tags:
  - DBS
  - Übungsblatt
fach: "[[DBS]]"
date created: Thursday, 4. April 2024, 15:04
date modified: Thursday, 4. April 2024, 19:08
Thema:
  - "[[Normalformen]]"
  - "[[Anomalien in Datenbanksystemen]]"
---

# Datenbank Schema für Gebrauchtwagen

Der Autohändler Huber möchte seinen Bestand gebrauchter Wagen in einem relationalen Datenbanksystem organisieren. Die Anforderungsanalyse ergibt eine ganze Liste zu speichernder Informationen für jedes Fahrzeug, die Huber direkt in ein relationales Schema umsetzt. Sofort beginnt er mit der Erfassung seiner Daten und erhält die folgende Relation `Auto`:

| <u>mnr</u> | hnr | hersteller | typ    | ps  | <u>fznr</u> | baujahr | km-stand | n-preis | h-preis | ek-preis |
| ---------- | --- | ---------- | ------ | --- | ---- | ------- | -------- | ------- | ------- | -------- |
| 1          | 1   | Opel       | Kadett | 60  | K674 | 1990    | 10000    | 18000   | 13000   | 12000    |
| 1          | 1   | Opel       | Kadett | 60  | K634 | 1988    | 34000    | 18000   | 12000   | 9000     |
| 2          | 1   | Opel       | Vectra | 90  | V459 | 1990    | 15000    | 25000   | 18000   | 17000    |
| 3          | 1   | Opel       | Omega  | 110 | O634 | 1987    | 45000    | 30000   | 22000   | 15000    |
| 4          | 2   | VW         | Golf   | 90  | G789 | 1991    | 11000    | 25000   | 21000   | 16000    |
| 4          | 2   | VW         | Golf   | 90  | G713 | 1991    | 31000    | 25000   | 16000   | 13000    |
| 5          | 2   | VW         | Golf   | 105 | G762 | 1992    | 28000    | 28000   | 19000   | 17000    |
| 6          | 2   | VW         | Käfer  | 60  | K634 | 1986    | 71000    | 19000   | 10000   | 8000     |

Die verschiedenen Modelle werden von Huber fortlaufend nummeriert (`mnr`). Ein bestimmtes Model ist charakterisiert durch Hersteller, Typ und Motorleistung (`ps`). Für jedes Model ist ferner die Fahrzeugnummer (`fznr`) eindeutig. Beide Attribute zusammen werden daher also Primärschlüssel gewählt. Nach kurzer Zeit stellt Huber fest, dass ihm seine neue Datenbank nicht so recht Freude machen will, die Datenmodellierung scheint nicht gut durchdacht.


# Aufgabe 10-1 **Problem bei nicht normalisierten DB**

>[!note] Aufgabenstellung
>Beschreiben Sie die Problem (Redundanzen, Anomalien), die bei Nutzung des o.g. Relationenschemas in der Datenbank des Autohandlers auftreten können.

- [[Anomalien in Datenbanksystemen#Redundanz]]: 
    - `Hersteller` und `hnr` geben beide die gleiche Information wieder und sind somit redundant.
    - `mnr` und `typ` geben auch die gleichen Daten wieder.
    - `ps` ist redundant, da es für jede `mnr` und `typ` die gleiche Information speichert.
- [[Anomalien in Datenbanksystemen#Einfügeanomalie]]: 
    - Man kann beispielsweise keinen Hersteller hinzufügen, ohne dass diesem ein Typ vom Auto zugewiesen wird (partielle Einfügung nicht möglich).
- [[Anomalien in Datenbanksystemen#Entfernungsanomalie]]: 
    - Man kann keinen Typ vom Auto löschen, ohne auch Informationen über den Hersteller zu verlieren.
- [[Anomalien in Datenbanksystemen#Änderungsanomalie]]: 
    - Änderungen der PS eines Modells müssen in allen Tupeln eingetragen werden, oder bei Änderungen des Namens des Herstellers müssen alle Tuple geändert werden.

---
# Aufgabe 10-2 [[Normalformen#2. Normalform (2NF)]]

>[!note] Aufgabenstellung
> Die Menge der vollen und nicht-trivialen funktionalen Abhängigkeiten sei im Folgenden gegeben durch:
> - mnr → hnr, hersteller, typ, ps
> - hnr → hersteller
> - mnr, fznr → baujahr, km-stand, n-preis, h-preis, ek-preis

### a) Erläutern Sie, warum das gegebene Schema nicht der 2. Normalform (2.NF) genügt. \[[[Normalformen#2. Normalform (2NF)]]]

**2. NF besagt:**
	- Für jedes Attribute A gilt:
		- *A ist primär* oder
		- *A ist voll funktional abhängig von jedem Schlüsselkandidaten.*

- Schlüsselkandidaten sind $SK = \{mnr,fznr\}$
- Voll funktionale Attribute, die von jedem Schlüsselkandidaten abhängig sind, sind $A=\{baujahr, km-stand, n-preis, h-preis, ek-preis\}$

→ Attribute die keine Schlüsselkandidaten sind, sind also $R=\{hnr,hersteller,typ,ps\}$
	  Da es also Attribute gibt die nicht prim oder voll funktional abhängig von jedem Schlüsselkandidaten sind und $|R| \neq 0$, ist die **2.NF nicht erfüllt**

### b) Überführen Sie die Relation in die 2.NF und geben Sie die so entstehenden Relationen an.

1. Relation: `Modell` 
	- Erstelle eine neue Relation für jeden partiellen Schlüssel mit seinen abhängigen Attribute
	- **mnr → hnr, hersteller, typ, ps**
	- **hnr → hersteller**
$$Modell(\underline{mnr},hnr,hersteller, typ, ps)$$
2. Relation: `Fahrzeug`
	- Attribute, die voll funktional vom (ursprünglichen) Schlüssel abhängig sidn, bleiben in der ursprünglichen Relation
	- **mnr, fznr → baujahr, km-stand, n-preis, h-preis, ek-preis**
$$Fahrzeug(\underline{mnr},\underline{fznr},baujahr,km-stand, n-preis, h-preis, ek-preis)$$

--- 

# Aufgabe 10-3 **[[Normalformen#3. Normalform (3NF)]]**

>[!note] Aufgabenstellung
>Falls das in Aufgabe 10-2 entstandene Relationenschema noch nicht der **3. Normalform (3.NF)** genügt, führen Sie dieses in die 3.NF über und geben Sie die so entstehenden Relationen an. Andernfalls begründen Sie, warum das Relationenschema aus Aufgabe 10-2 bereits der 3.NF genügt.
> - mnr → hnr, hersteller, typ, ps
> - hnr → hersteller
> - mnr, fznr → baujahr, km-stand, n-preis, h-preis, ek-preis

**3.NF besagt:**
- *2.NF ist erfüllt.*
- *Für alle nicht-trivialen funktionalen Abhängigkeiten 𝑋 → 𝑌 muss 𝑋 einen Schlüsselkandidaten enthalten*, oder
- *𝑌 muss ein Primärattribut sein.*

Basierend auf der Musterlösung und der Analyse der Relationen aus Aufgabe 10-2 erkennen wir, dass die Relation **Fahrzeug** bereits der 3. Normalform entspricht. Die Relation **Model** hingegen erfüllt die 3. Normalform nicht, da die funktionale Abhängigkeit `hnr → hersteller` eine transitive Abhängigkeit darstellt, die in 3NF nicht zulässig ist. Um das Schema vollständig in die 3. Normalform zu überführen, wird folgende Anpassung vorgenommen:

### Korrigierte und ergänzte Relationen für 3NF:

1. **Relation Fahrzeug** bleibt unverändert, da sie bereits die 3NF Kriterien erfüllt:$$Fahrzeug(\underline{mnr}, \underline{fznr}, baujahr, km-stand, n-preis, h-preis, ek-preis)$$
$$\underbrace{\underbrace{mnr,fznr}_{Schlüsselkandidaten}→ baujahr, km-stand, n-preis, h-preis, ek-preis}_{Erfüllt \ 3.NF}$$


2. **Relation Model** wird angepasst, um die transitive Abhängigkeit zu entfernen. Dazu wird die Abhängigkeit `hnr → hersteller` in eine eigene Relation extrahiert:
$$   Modell(\underline{mnr}, hnr, typ, ps)$$
$$\underbrace{hnr → hersteller}_{\text{Erfüllt nicht 3. NF, da linke Seite kein Schlüsselkandidat bzw. rechts kein primäres Attribut}}$$

3. **Neue Relation Hersteller** wird eingeführt, um die transitive Abhängigkeit aufzulösen:
$$   Hersteller(\underline{hnr}, hersteller)$$

Durch diese Änderung wird sichergestellt, dass:
- Jedes Attribute in **Fahrzeug** und **Model** entweder ein Primärattribut ist oder voll funktional von dem Primärschlüssel abhängt, ohne transitive Abhängigkeiten.
- Die neue Relation **HerstellerInfo** speichert die Zuordnung zwischen `hnr` und `hersteller`, wobei `hersteller` direkt von `hnr` abhängig ist und somit die 3NF erfüllt.

### Fazit:
Das überarbeitete Schema erfüllt nun die Kriterien der 3. Normalform. Es wurden alle transitiven Abhängigkeiten entfernt, indem die Informationen in separate Relationen aufgeteilt wurden, wodurch die Datenintegrität und die Reduktion von Redundanzen verbessert werden.******
**
**