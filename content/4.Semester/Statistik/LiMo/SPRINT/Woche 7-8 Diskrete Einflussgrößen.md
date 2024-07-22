---
date created: Monday, 15. July 2024, 22:35
date modified: Monday, 15. July 2024, 22:40
---

# Woche 7-8: Diskrete Einflussgrößen

## Ziel

Integration und Interpretation diskreter Einflussgrößen in Regressionsmodellen.

## Inhalte

### Dummy-Variablen und ihre Anwendung

Diskrete Einflussgrößen, insbesondere nominale und ordinale Variablen, müssen in eine numerische Form umgewandelt werden, damit sie in Regressionsmodellen verwendet werden können. Dies geschieht oft durch die Erstellung von Dummy-Variablen.

#### Dummy-Variablen

Eine Dummy-Variable ist eine binäre Variable, die Werte von 0 und 1 annimmt und zur Kodierung kategorialer Daten verwendet wird.

#### Beispiel

Angenommen, wir haben eine kategoriale Variable "Geschlecht" mit den Kategorien "männlich" und "weiblich". Wir können eine Dummy-Variable "Geschlecht" wie folgt erstellen:

- "männlich" = 0
- "weiblich" = 1

#### Anwendung

Dummy-Variablen werden in das Regressionsmodell aufgenommen, um die Auswirkungen der verschiedenen Kategorien zu untersuchen.

$$
Y = \beta_0 + \beta_1 \cdot \text{Dummy}_1 + \beta_2 X_1 + \ldots + \beta_p X_p + \epsilon
$$

### Interpretation von Dummy-Variablen-Koeffizienten

Die Koeffizienten der Dummy-Variablen in einem Regressionsmodell repräsentieren die durchschnittliche Änderung der abhängigen Variable im Vergleich zur Referenzkategorie.

#### Beispiel

Wenn "männlich" die Referenzkategorie ist, gibt der Koeffizient der Dummy-Variable "weiblich" ($\beta_1$) die durchschnittliche Änderung der abhängigen Variable $Y$ für "weiblich" im Vergleich zu "männlich" an.

#### Interpretation

- $\beta_1$ > 0: "weiblich" hat einen positiven Einfluss auf $Y$ im Vergleich zu "männlich".
- $\beta_1$ < 0: "weiblich" hat einen negativen Einfluss auf $Y$ im Vergleich zu "männlich".

### Umgang mit nominalen und ordinalen Variablen

Nominale und ordinale Variablen können unterschiedlich behandelt werden, abhängig von der Art der Variable und der Analyse.

#### Nominale Variablen

Nominale Variablen haben keine natürliche Reihenfolge und werden vollständig durch Dummy-Variablen repräsentiert.

#### Beispiel

Eine Variable "Farbe" mit den Kategorien "rot", "grün" und "blau" könnte durch zwei Dummy-Variablen dargestellt werden:

- "grün" = 0, "rot" = 1, "blau" = 0 (Referenzkategorie)
- "grün" = 1, "rot" = 0, "blau" = 0

#### Ordinale Variablen

Ordinale Variablen haben eine natürliche Reihenfolge, und es kann sinnvoll sein, sie entweder als kontinuierliche Variablen zu behandeln oder Dummy-Variablen zu verwenden.

#### Beispiel

Eine Variable "Bildungsniveau" mit den Kategorien "niedrig", "mittel" und "hoch" könnte entweder durch Dummy-Variablen oder durch eine numerische Skala (z.B. 1, 2, 3) repräsentiert werden.

### Interaktion von diskreten und kontinuierlichen Variablen

Interaktionseffekte treten auf, wenn der Effekt einer unabhängigen Variable auf die abhängige Variable von einer anderen unabhängigen Variable abhängt. Bei diskreten und kontinuierlichen Variablen kann dies durch Interaktionsterme modelliert werden.

#### Beispiel

Angenommen, wir haben eine kontinuierliche Variable "Alter" und eine Dummy-Variable "Geschlecht". Der Interaktionseffekt könnte wie folgt modelliert werden:

$$
Y = \beta_0 + \beta_1 \cdot \text{Alter} + \beta_2 \cdot \text{Geschlecht} + \beta_3 \cdot (\text{Alter} \cdot \text{Geschlecht}) + \epsilon
$$

#### Interpretation

Der Koeffizient des Interaktionsterms ($\beta_3$) gibt an, wie sich der Effekt des Alters auf $Y$ je nach Geschlecht unterscheidet.

## Übungen

### Erstellung und Verwendung von Dummy-Variablen

#### Beispiel in R

```r
# Daten laden
data <- read.csv("data.csv")

# Dummy-Variablen erstellen
data$Geschlecht <- ifelse(data$Geschlecht == "weiblich", 1, 0)

# Regressionsmodell mit Dummy-Variablen
model <- lm(Y ~ Geschlecht + Alter + Einkommen, data = data)
summary(model)
```

#### Beispiel in Python

```python
import pandas as pd
import statsmodels.api as sm

# Daten laden
data = pd.read_csv("data.csv")

# Dummy-Variablen erstellen
data['Geschlecht'] = data['Geschlecht'].apply(lambda x: 1 if x == 'weiblich' else 0)

# Regressionsmodell mit Dummy-Variablen
X = data[['Geschlecht', 'Alter', 'Einkommen']]
X = sm.add_constant(X)
model = sm.OLS(data['Y'], X).fit()
print(model.summary())
```

### Untersuchung und Interpretation von Interaktionseffekten

#### Beispiel in R

```r
# Interaktionsterm erstellen
data$Alter_Geschlecht <- data$Alter * data$Geschlecht

# Regressionsmodell mit Interaktionseffekten
interaction_model <- lm(Y ~ Alter * Geschlecht, data = data)
summary(interaction_model)
```

#### Beispiel in Python

```python
# Interaktionsterm erstellen
data['Alter_Geschlecht'] = data['Alter'] * data['Geschlecht']

# Regressionsmodell mit Interaktionseffekten
X_interaction = data[['Alter', 'Geschlecht', 'Alter_Geschlecht']]
X_interaction = sm.add_constant(X_interaction)
interaction_model = sm.OLS(data['Y'], X_interaction).fit()
print(interaction_model.summary())
```

### Umgang mit nominalen und ordinalen Variablen

#### Beispiel in R

```r
# Nominale Variable "Farbe" in Dummy-Variablen umwandeln
data <- within(data, {
  Farbe_rot <- ifelse(Farbe == "rot", 1, 0)
  Farbe_grün <- ifelse(Farbe == "grün", 1, 0)
})

# Regressionsmodell mit Dummy-Variablen für Farbe
model_farbe <- lm(Y ~ Farbe_rot + Farbe_grün + Alter, data = data)
summary(model_farbe)

# Ordinale Variable "Bildungsniveau" numerisch kodieren
data$Bildungsniveau <- factor(data$Bildungsniveau, levels = c("niedrig", "mittel", "hoch"), ordered = TRUE)
data$Bildungsniveau <- as.numeric(data$Bildungsniveau)

# Regressionsmodell mit ordinaler Variable
model_bildung <- lm(Y ~ Bildungsniveau + Alter, data = data)
summary(model_bildung)
```

#### Beispiel in Python

```python
# Nominale Variable "Farbe" in Dummy-Variablen umwandeln
data = pd.get_dummies(data, columns=['Farbe'], drop_first=True)

# Regressionsmodell mit Dummy-Variablen für Farbe
X_farbe = data[['Farbe_rot', 'Farbe_grün', 'Alter']]
X_farbe = sm.add_constant(X_farbe)
model_farbe = sm.OLS(data['Y'], X_farbe).fit()
print(model_farbe.summary())

# Ordinale Variable "Bildungsniveau" numerisch kodieren
data['Bildungsniveau'] = data['Bildungsniveau'].map({'niedrig': 1, 'mittel': 2, 'hoch': 3})

# Regressionsmodell mit ordinaler Variable
X_bildung = data[['Bildungsniveau', 'Alter']]
X_bildung = sm.add_constant(X_bildung)
model_bildung = sm.OLS(data['Y'], X_bildung).fit()
print(model_bildung.summary())
```

Dieses Skript bietet eine umfassende Einführung in die Integration und Interpretation diskreter Einflussgrößen in Regressionsmodellen, ergänzt durch praktische Beispiele und Übungen zur Vertiefung des Verständnisses und der Fähigkeiten in der Anwendung und Interpretation der Ergebnisse.

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
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> Please note that these are my own notes and solutions, and I cannot guarantee the complete accuracy of all solutions as I am still a student myself.
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
