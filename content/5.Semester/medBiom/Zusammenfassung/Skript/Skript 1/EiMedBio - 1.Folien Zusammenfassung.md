---
tags:
  - 5semester
  - medBiom
  - statistik
fach: "[[Einführung medizinische Biometrie]]"
Thema:
Benötigte Zeit:
date created: Tuesday, 22. October 2024, 12:30
date modified: Wednesday, 23. October 2024, 12:53
---

# Einführung in die medizinische Biometrie

## Veranstaltungsüberblick

1. Einführung
2. Studiendesign
3. Präklinische und klinische Studien
4. Diagnostische Studien
5. Confounding
6. Statistisches Testen
7. Assoziationsmaße
8. Statistische Modellierung
9. Matching
10. Infektionsepidemiologie
11. Gute wissenschaftliche Praxis

---

# Grundlagen medizinischer Studien

## Warum Epidemiologie?

### Definition

- Wissenschaftliche Disziplin, die sich mit der **Verbreitung**, den **Ursachen** und **Folgen** von gesundheitsbezogenen Zuständen und Ereignissen in Bevölkerungen beschäftigt.

### Ziele

- Erforschung der Verbreitung von Krankheiten
- Erkennung von Ursachen und Risikofaktoren
- Untersuchung des natürlichen Krankheitsverlaufs
- Evaluation präventiver, diagnostischer und therapeutischer Maßnahmen

### Historische Beispiele

- **Ignaz Semmelweis (1846-1847)**: Reduzierte Kindbettfieber durch Händedesinfektion.
- **Joseph Lister (1865)**: Einführung von Antiseptika nach Pasteurs Arbeiten.
- **John Snow (1855)**: Untersuchte Cholera-Ausbrüche in London.
- **Florence Nightingale**: Verbesserte Hygienestandards in Krankenhäusern; statistische Analysen.

## Herausforderungen

### Confounding

- **Problem**: Schwierigkeit, von Assoziationen auf Kausalzusammenhänge zu schließen.
- **Störgrößen**: Faktoren, die sowohl die Exposition als auch das Outcome beeinflussen können.

### Korrelation vs. Kausalität

- **Beispiel**: Anzahl der Filme mit Nicolas Cage korreliert mit Schwimmbad-Ertrinkungsfällen.
- **Interpretation**: Nicht jede Korrelation impliziert Kausalität.

### Modellierungswahl

- **Überlegungen**:
  - Wie wird Krankheitsauftreten modelliert? (Binär, Zeit bis Ereignis, Anzahl der Ereignisse)
  - Wahl der **Bezugsgröße** ist entscheidend für Interpretation.

### Messfehler und fehlende Daten

- **Informationsbias**: Fehler durch ungenaue Messungen oder Daten.
- **Auswirkungen**: Können Ergebnisse verzerren und zu falschen Schlussfolgerungen führen.

---

# Grundbegriffe

## Populationen

- **Zielpopulation**: Gesamtheit, für die eine Aussage gemacht werden soll.
- **Studienpopulation**: Teilgruppe, die in die Studie einbezogen wird.
- **Stichprobe**: Teilmenge, an der die Daten erhoben werden.

## Exposition

- **Definition**: Einflussfaktor, der untersucht wird.
- **Arten**:
  - Erblich, umweltbedingt, sozial, verhaltensbedingt, experimentell.
- **Merkmale**:
  - Kann positiv oder negativ sein.
  - Zeitpunkt oder Zeitraum der Einwirkung.

## Outcome

- **Objektiv messbar**: Tod, Tumorgröße, BMI, Blutwerte.
- **Subjektiv messbar**: Lebensqualität, Schmerzempfinden.

## Studienarten

- **Monozentrisch**: Rekrutierung aus einer Institution.
- **Multizentrisch**: Rekrutierung aus mehreren Institutionen.

---

# Prävalenz und Inzidenz

## Prävalenz

- **Definition**: Anteil der Personen mit einer Krankheit zu einem bestimmten Zeitpunkt.
- **Formel**:
  $$
  \text{Prävalenz} = \frac{\text{Anzahl der Fälle zu einem Zeitpunkt}}{\text{Anzahl der Personen in der Population zu diesem Zeitpunkt}}
  $$
- **Beispiel**:
  - Rheumatische Arthritis bei Frauen in Stockholm: Prävalenz von 7%.

## Inzidenz

- **Definition**: Anzahl der Neuerkrankungen in einem Zeitraum pro Personen unter Risiko.
- **Formel**:
  $$
  \text{Inzidenz} = \frac{\text{Anzahl der neuen Fälle im Zeitraum}}{\text{Anzahl der Personen unter Risiko zu Beginn des Zeitraums}}
  $$
- **Beispiel**:
  - Hirntumore bei schwedischen Männern in der Kunststoffindustrie: Inzidenz von 0,4%.

## Unterschiede

|                | **Prävalenz**      | **Inzidenz**               |
| -------------- | ------------------ | -------------------------- |
| **Zähler**     | Alle Erkrankten    | Neuerkrankungen            |
| **Nenner**     | Gesamte Population | Gesunde Personen zu Beginn |
| **Zeit**       | Zeitpunkt          | Zeitraum                   |
| **Studientyp** | Querschnittsstudie | Kohortenstudie             |

## Zusammenhang

- **Formel**:
  $$
  \text{Prävalenz} = \text{Inzidenz} \times \text{durchschnittliche Krankheitsdauer}
  $$
- **Interpretation**: Hohe Prävalenz bei chronischen Krankheiten trotz niedriger Inzidenz.

---

# Mortalität und Letalität

## Krankheitsspezifische Mortalität

- **Definition**: Anzahl der Todesfälle an einer Krankheit pro Population.
- **Formel**:
  $$
  \text{Mortalität} = \frac{\text{Anzahl der Todesfälle im Zeitraum}}{\text{Anzahl der Personen unter Risiko zu Beginn des Zeitraums}}
  $$
- **Beispiel**:
  - Kreislauferkrankungen in Mecklenburg-Vorpommern 1990: Mortalität von 0,059%.

## Letalität

- **Definition**: Anteil der Erkrankten, die an der Krankheit sterben.
- **Formel**:
  $$
  \text{Letalität} = \frac{\text{Anzahl der Todesfälle im Zeitraum}}{\text{Anzahl der erkrankten Personen zu Beginn des Zeitraums}}
  $$
- **Beispiel**:
  - Lungenkrebs in den USA 2001: Letalität von 83%.

## Zusammenhang

- **Formel**:
  $$
  \text{Mortalität} = \text{Inzidenz} \times \text{Letalität}
  $$

---

# Systematische Fehler (Bias)

## Definition

- **Systematische Fehler**: Verfälschungen, die zu fehlerhaften Schlussfolgerungen führen.
- **Haupttypen**:
  - **Selektionsbias**
  - **Informationsbias**

## Selektionsbias

- **Ursache**: Systematische Unterschiede in der Auswahl der Studienteilnehmer.
- **Beispiele**:
  - Fälle und Kontrollen stammen aus unterschiedlichen Populationen.
  - Nicht repräsentative Studienpopulation für die Zielpopulation.

## Informationsbias

- **Ursache**: Fehler bei der Datenerhebung.
- **Arten**:
  - **Recall Bias**: Unterschiede im Erinnerungsvermögen der Teilnehmer.
  - **Messfehler**: Ungenaue oder fehlerhafte Messinstrumente.
- **Beispiele**:
  - Unterschiedliche Blutentnahmezeiten beeinflussen Messergebnisse.
  - Verzerrte Selbstauskünfte aufgrund sozialer Erwünschtheit.

---

**Hinweis**: Dieser Leitfaden bietet einen zusammengefassten Überblick über die Einführung in die medizinische Biometrie und die grundlegenden Konzepte epidemiologischer Studien. Für detaillierte Informationen und spezifische Beispiele empfiehlt es sich, weiterführende Literatur zu konsultieren.

<!-- DISQUS SCRIPT COMMENT START -->

<!-- DISQUS RECOMMENDATION START -->

<div id="disqus_recommendations"></div>

<script> 
(function() { // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
var d = document, s = d.createElement('script'); // IMPORTANT: Replace EXAMPLE with your forum shortname!
s.src = 'https://myuninotes.disqus.com/recommendations.js'; s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>
Please enable JavaScript to view the 
<a href="https://disqus.com/?ref_noscript" rel="nofollow">
comments powered by Disqus.
</a>
</noscript>

<!-- DISQUS RECOMMENDATION END -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
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
