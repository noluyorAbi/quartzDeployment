---
tags:
  - 4semester
  - informatik
  - RNVS
  - Übungsblatt
fach: "[[RNVS]]"
Thema: 
Benötigte Zeit:
date created: Friday, 3. May 2024, 20:08
date modified: Friday, 3. May 2024, 21:14
---

# 1. Der Pizzadienst (H)

>[!note] Aufgabenstellung
>Ein Protokoll ist eine Spezifikation von Vorschriften zum Informationsaustausch. Beschreiben Sie im Folgenden ein Protokoll zur Bestellung einer Pizza (Pizzaprotokoll), beim Pizza-Service Ihres Vertrauens! Indem Sie auf die Technologie „Telefon“ zurückgreifen, haben Sie eine Möglichkeit gefunden Nachrichten mit Ihrem Pizza-Service auszutauschen.

## (a) Ohne ein Bestellprotokoll herrscht Stille im Hörer. Damit Ihre Bestellung erfolgreich abgeschlossen werden kann, müssen Sie dem Pizza-Service Ihren Namen, Ihre Adresse und Ihre Wunschpizza mitteilen.

>[!note] Aufgabenstellung
Zeichnen Sie ein Sequenzdiagramm, das einen vollständigen Bestellvorgang am Telefon darstellt! Beachten Sie dabei:
> - Markieren Sie das Ende jeder Phase der Kommunikation!
> - Der Kunde übermittelt bestimmte Informationen genau dann, wenn er danach gefragt wird!

Welche der beiden Optionen ist "korrekter" bzw. wären beide Korrekt in der Klausur?

### Erste Option:
```mermaid
sequenceDiagram
    actor Kunde
    actor Pizzaria
    Kunde--)Pizzaria: Kunde ruft an
    Pizzaria--)Kunde: Pizzeria geht ran
    Pizzaria->>Kunde: Hallo Luigi's Pizzaria, Ihre Bestellung bitte?
    Kunde->>Pizzaria: Hallo eine Pizza Tonno
    Pizzaria->>Kunde: Auf welchen Namen?
    Kunde->>Pizzaria: Auf Mario
    Pizzaria->>Kunde: Wie lautet Ihre Adresse?
    Kunde->>Pizzaria: Schlossstr. 38
    Pizzaria->>Kunde: Ok, vielen Dank. Ihre Bestellung kommt bald.
    Kunde->>Pizzaria: Danke
    Kunde--)Pizzaria: Kunde legt auf
```

### Zweite Option:

```mermaid
sequenceDiagram
	autonumber
    Actor Kunde
    participant Telefonnetzwerk
    Actor PizzaService

    rect rgb(235, 235, 235)
    Kunde->>Telefonnetzwerk: (1) Anruf tätigen
    Telefonnetzwerk->>PizzaService: (1) Anruf weiterleiten
    end

    rect rgb(255, 230, 230)
    PizzaService->>Telefonnetzwerk: (2) Begrüßung und Bestellung anfordern
    Telefonnetzwerk->>Kunde: (2) Begrüßung empfangen
    end

    rect rgb(230, 255, 230)
    Kunde->>Telefonnetzwerk: (3) Wunschpizza nennen
    Telefonnetzwerk->>PizzaService: (3) Pizza weiterleiten
    end

    rect rgb(255, 255, 200)
    PizzaService->>Telefonnetzwerk: (4) Adresse anfordern
    Telefonnetzwerk->>Kunde: (4) Aufforderung empfangen
    Kunde->>Telefonnetzwerk: (5) Adresse nennen
    Telefonnetzwerk->>PizzaService: (5) Adresse weiterleiten
    end

    rect rgb(200, 220, 255)
    PizzaService->>Telefonnetzwerk: (6) Namen anfordern
    Telefonnetzwerk->>Kunde: (6) Aufforderung empfangen
    Kunde->>Telefonnetzwerk: (7) Namen nennen
    Telefonnetzwerk->>PizzaService: (7) Namen weiterleiten
    end

    rect rgb(255, 240, 230)
    PizzaService->>Telefonnetzwerk: (8) Bestellung bestätigen und Lieferzeit mitteilen
    Telefonnetzwerk->>Kunde: (8) Bestätigung empfangen
    end

    rect rgb(240, 240, 240)
    Kunde->>Telefonnetzwerk: (9) Verabschiedung
    Telefonnetzwerk->>PizzaService: (9) Verabschiedung weiterleiten
    PizzaService->>Telefonnetzwerk: (10) Gespräch beenden
    Telefonnetzwerk->>Kunde: (10) Gesprächsende
    end

```


## (b) Leider kommt die Pizza nicht durch die Telefonleitung. Erweitern Sie das Modell um einen zugrunde liegenden Dienst, mit dem der Lieferprozess realisiert wird. Berücksichtigen Sie hierbei das aus der Vorlesung bekannte Prinzip der Schichtung.

```mermaid
sequenceDiagram
	autonumber
 rect rgb(191, 223, 255)
    Actor Kunde
	note right of Kunde: Bestellaufnahme
    participant Telefonnetzwerk
    Actor PizzaService
    Actor Lieferant

    rect rgb(235, 235, 235)
    Kunde->>Telefonnetzwerk: (1) Anruf tätigen
    Telefonnetzwerk->>PizzaService: (1) Anruf weiterleiten
    end

    rect rgb(255, 230, 230)
    PizzaService->>Telefonnetzwerk: (2) Begrüßung und Bestellung anfordern
    Telefonnetzwerk->>Kunde: (2) Begrüßung und Aufforderung empfangen
    end

    rect rgb(230, 255, 230)
    Kunde->>Telefonnetzwerk: (3) Wunschpizza nennen
    Telefonnetzwerk->>PizzaService: (3) Pizza weiterleiten
    end

    rect rgb(255, 255, 200)
    PizzaService->>Telefonnetzwerk: (4) Adresse anfordern
    Telefonnetzwerk->>Kunde: (4) Aufforderung empfangen
    Kunde->>Telefonnetzwerk: (5) Adresse nennen
    Telefonnetzwerk->>PizzaService: (5) Adresse weiterleiten
    end

    rect rgb(200, 220, 255)
    PizzaService->>Telefonnetzwerk: (6) Namen anfordern
    Telefonnetzwerk->>Kunde: (6) Aufforderung empfangen
    Kunde->>Telefonnetzwerk: (7) Namen nennen
    Telefonnetzwerk->>PizzaService: (7) Namen weiterleiten
    end

    rect rgb(255, 240, 230)
    PizzaService->>Telefonnetzwerk: (8) Bestellung bestätigen und Lieferzeit mitteilen
    Telefonnetzwerk->>Kunde: (8) Bestätigung empfangen
    end

    rect rgb(240, 240, 240)
    Kunde->>Telefonnetzwerk: (9) Verabschiedung
    Telefonnetzwerk->>PizzaService: (9) Verabschiedung weiterleiten
    PizzaService->>Telefonnetzwerk: (10) Gespräch beenden
    Telefonnetzwerk->>Kunde: (10) Gesprächsende
    end
end
 rect rgb(229, 204, 255)
 	note right of Kunde: Liefererung
	PizzaService->>Lieferant: (11) Lieferung anfragen mit allen Infos
	Lieferant->>PizzaService: (11) Lieferung annehmen
	PizzaService->>Lieferant: (12) Lieferung Übergeben
	Lieferant->>Kunde: (13) Lieferung ausliefern
end
```

## (c) In der Vorlesung wurde die Unterscheidung in Steuerdaten und Nutzdaten diskutiert. Finden Sie hierzu Beispiele im Pizza-Service-Modell.

**Nutzdaten**: Pizza
**Steuerdaten:** Name und Adresse
## (d) Wie wirkt es sich auf die anderen Schichten aus, wenn Sie über einen Messengerdienst wie Signal oder WhatsApp statt einem Telefonanruf bestellen? Erläutern Sie außerdem kurz, inwiefern die Schichtentrennung hiervon betroffen ist.

**Anwendungsschicht:** Keine  a