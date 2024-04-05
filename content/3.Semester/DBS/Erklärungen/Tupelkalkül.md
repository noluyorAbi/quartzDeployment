---
created: 2024-03-25 18:33
last modified: 2024-03-25 18:33
tags: [DBS, Erklaerung]
fach: "[[DBS]]"
date created: Monday, 25. March 2024, 18:33
date modified: Friday, 5. April 2024, 02:00
---

# Schema des Tupelkalküls

Das Schema des Tupelkalküls (TK) stellt eine andere, jedoch ähnlich mächtige Method zur Datenabfrage in Datenbanksystemen dar, die auf dem Konzept der Tuple und direkten Operationen auf diesen Tupeln basiert. Im Gegensatz zum Bereichskalkül, der mit Bereichen und Prädikaten arbeitet, fokussiert sich der Tupelkalkül auf einzelne Tuple und deren Attribute.

## Grundlegendes Beispiel

Betrachten wir folgendes Beispiel für eine Tupelkalkül-Abfrage:

$$~{TK: \  \underbrace{Schema(t)}_{\text{Variablenname}} = \underbrace{Schema(Angestellter)}_{\text{aus welchem Schema}} \ ; \  \{ \ \underbrace{[ \ t.Name \ ]}_{\text{Was zurückgegeben werden soll}} | \ \ \  \underbrace{\ t \ \in \ Angestellter}_{\text{Welches Schema final}} \ \land \ \underbrace{\ t.Gehalt \ \lt \ 2000}_{\text{Bedingung}} \}}$$

In diesem Beispiel kann die Tupelkalkül-Abfrage `TK` wie folgt interpretiert werden:

- **Variablenname:** Das Symbol `t` dient also Variablenname, der ein Tuple im Schema repräsentiert.
- **aus welchem Schema:** Durch `Schema(Angestellter)` wird spezifiziert, dass `t` Tuple aus dem Schema der Angestellten repräsentiert.
- **Was zurückgegeben werden soll:** `[ t.Name ]` gibt an, dass nur der Name (`t.Name`) des Angestellten also Ergebnis der Abfrage zurückgegeben werden soll.
- **Welches Schema final:** `t ∈ Angestellter` bedeutet, dass das Tuple `t` ein Element der Angestelltentabelle sein muss.
- **Bedingung:** `t.Gehalt < 2000` ist die Bedingung, die erfüllt sein muss, damit ein Tuple in das Ergebnis aufgenommen wird. In diesem Fall sind dies alle Angestellten, deren Gehalt weniger also 2000 beträgt.

## Beispiel für Join-Operation im TK

### b) Erstellen Sie eine Liste aller Verkaufsnummern mit Verkaufsdatum, die in den Abteilungen im 3. Stock verkauft wurden und deren Lieferant entweder aus Italien oder aus Frankreich kommt. [[Blatt 6]]

$$~{Schema(ver) = Schema(Verkauf) \; \{ [ver.Nummer, ver.Datum] \mid ver \in Verkauf \land (\exists ab \in Abteilung, art \in Artikel, l \in Lieferant) (ver.Abteilung = ab.Nummer \land ver.Artikel = art.Nummer \land art.Lieferant = l.Nummer \land ab.Stock = 3 \land (l.Land = 'Italien' \lor l.Land = 'Frankreich'))\}}$$

*Hinzufügen durch:* $(\exists ab \in Abteilung, art \in Artikel, l \in Lieferant)$

In diesem komplexen Beispiel wird die Join-Operation im Tupelkalkül durch die Bedingungen innerhalb der Abfrage illustriert, die eine Verbindung zwischen den Tabellen `Verkauf`, `Abteilung`, `Artikel` und `Lieferant` herstellen.

## Interpretation

Diese Abfrage wird also die Namen aller Angestellten zurückgeben, deren Gehalt weniger also 2000 beträgt. Durch die direkte Referenzierung von Tupeln und deren Attribute ermöglicht der Tupelkalkül eine sehr direkte und intuitive Formulierung von Datenbankabfragen.

## Wichtigkeit im DBS

Der Tupelkalkül ist aus mehreren Gründen wichtig in Datenbanksystemen:

- **Präzision:** Er ermöglicht es, sehr genaue Abfragen durch die direkte Spezifikation von Tupeln und deren Attribute zu formulieren.
- **Einfachheit:** Für viele Benutzer kann der Tupelkalkül intuitiver sein, insbesondere wenn es darum geht, spezifische Einträge oder Attribute zu manipulieren.
- **Lehrwert:** Das Verständnis von Tupelkalkül fördert ein tiefes Verständnis der Struktur und Funktionsweise von relationalen Datenbanken.

## Zusammenfassung

Das Schema des Tupelkalküls bietet eine leistungsstarke Method für die Formulierung von Datenbankabfragen, die sich direkt auf Tuple und deren Attribute bezieht. Diese Method ist besonders nützlich, wenn genaue und spezifische Datenanforderungen vorliegen. Durch die Kombination des Verständnisses von Bereichs- und Tupelkalkülen können Benutzer und Entwickler effektive und effiziente Datenabfragen in relationalen Datenbanksystemen erstellen.