# DnD Wiki Redesign für mehr Inklusivität

## Kontext & Zielsetzung

Dieses Projekt entstand als Konzept und Beispielhafte Umsetzung im Rahmen des Workshops Inklusives Webdesigns von Sonja Schumacher während der Werkwoche der Technischen Hochschule 2024.
Ziel war es Konzepte und Technicken für Inklusives Webdesign am Beispiel der Website [dnd5e.wikidot.com](https://dnd5e.wikidot.com) zu trainieren.

## Konzept & Umzetzung

Während des Workshops entstanden mehrere Ansatzpunkte um die Website zu verbessern von denen einige im Code dieses Repositories Beispielhaft umgesetzt wurden.

### Farbe & Kontraste

Die Farbgebung der Original Website weist einige Kontrastprobleme auf, die im [contrast-grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23786b3d%2C%20Darker%20Brown%0D%0A%23908149%2C%20Link%0D%0A%23ECE9E4%2C%20Text%20Hell%0D%0A%23333%2C%20Text%20Dunkel%0D%0A%23ffe68c%2C%20%20Section%20Hintergrund%201%0D%0A%23fffcf2%2C%20Section%20Hintergrund%202%0D%0A%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp)
gut erkennbar sind. Insbesondere bei den Links, welche beim Hover-Effekt dieselbe Farbe annehmen wie der Hintergrund.

Mithilfe der Tools [realtimecolors.com](https://www.realtimecolors.com/?colors=15161e-ebe1c5-439004-54412a-fdfded&fonts=Inter-Inter) und [contrast-grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%2315161e%2C%20Text%0D%0A%23ebe1c5%2C%20Hintergrund%0D%0A%23439004%2C%20Primärfarbe%0D%0A%2354412a%2C%20Secundärfarbe%0D%0A%23fdfded%2C%20Akzentfarbe&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp)
fanden wir eine alternative Farbgebung für die Website, mit der Voraussetzung, dass diese auch in den empfohlenen Kombinationen und Größen verwendet werden.

Um weiter die Kontraste zu stärken tauschten wir ein paar der verwendeten Icons gegen solche aus, welche auch allein durch die Silhouette erkennbar sind und weniger dünne, leicht verschwindende Zwischenlinien enthalten.

### Struktur & Visuelle Navigation

Uns fiel auf, dass die verschiedenen Sektionen der Originalseite sehr unterschiedlich groß waren und fassten manche zu übergreifenden Überschriften zusammen. Zudem versahen wir alle Überschrifften im Html mit den entsprechenden tags und, wo sinnvoll, mit aria-labeln. 
Beispielsweise enthält jede Klasse (h3) die Untersektionen (h4) "Published Subclasses", "Unearthed Arcana" und "Quick Links", wobei diese sich für jede Klasse wiederholen. 
Um die eindeutige Zuordnung für beispielsweise Screenreader oder Navigation über nur die Überschriften zu ermöglichen wurde jeder dieser Untersektionen als aria-label der Klassenname hinzugefügt.
Zum Beispiel ist die "Unearthed Arcana" Überschrift des Barden gekennzeichnet als `aria-label="Bard Unearthed Arcana"`

Für die visuelle Navigation zeigen wir die Überschriften der Hauptsektionen groß und übersichtlich direkt zu Beginn der Seite an. 
Scrollt man tiefer in den Inhalt wechselt die Navigation zu einer Leiste, welche immer am oberen Bildschirmrand bleibt und so schnelle navigation zwischen den Sektionen ermöglicht.

Zudem war es uns wichtig die einzelnen Sektionen besser visuell voneinander abzugrenzen. In der Originalseite wechseln sich hellgelbe und fast weiße Hintergrundfarben zwischen jedem Thema ab. 
Dabei wird jedoch nicht unterschieden, ob es sich hierbei um eine Haupt- oder eine Untersektion handelt, wodurch diese schwer voneinander unterscheidbar sind und es schwer fällt auf einen Blick zu erkennen, wo auf der Seite man sich gerade befindet.
In dem Redesign hat jede große Überschrift, welche auch in der Navigationsleiste sichtbar ist, eine eigene, langgezogene Kachel. Die Sektionen innerhalb sind wiederum durch simple horizontale Linien voneinander getrennt.

### Shortcuts & Tastatur Navigation

Die großte Herausforderung bei der Navigation für das Wiki war, dass es sich dabei inhärent um eine trockene Sammlung von Links handelt. 
Folglich besteht es aus vielen einzelnen Auflistungen von Links welche als Einzelelemente annavigierbar sind und so für sehr viele Tabs sorgen, wenn man durch die gesamte Seite springen möchte.
Um dem Abzuhelfen entschieden wir uns für eine sehr intensive Nutzung von Skip-Links.

Angedacht ist, dass jede längere Auflistung von Links übersprungen werden kann, indem man dem Nutzer die Möglichkeit gibt, direkt zum nächsten Thema zu springen. 
Dabei bleiben die Sprünge jeweils auf einer hierarchischen Ebene. 
Es soll also möglich sein über ein Hauptthema zum nächsten zu springen, wie sie in der Navigationsleiste stehen, sowie zum Beispiel über eine Klasse auf h3 Ebene (vom Artificer zum Barbarian) oder direkt über  "Published Subclasses" zu "Unearthed Arcana" auf h4 Ebene.

Zudem halten wir es für sinnvoll häufig genutzte Funktionen an eigene Tastatur Shortcuts zu hängen, welche angezeigt werden sobald die Seite über Tastatur navigiert wird und vom Nutzer ausgeschaltet werden können.
Bisher ist es so möglich mit "t" sofort zurück zum Anfang der Seite zu springen.

## Learnings & Ausblick

Die Arbeit am Redesign hat mir (Paula Nuber) ganz besonders aufgezeigt, dass es keine Formel x gibt nach der jede Website perfekt inklusiv Designed werden kann.
Jede Website hat einen anderen Aufbau und Zweck und somit andere Anforderungen, was an dem Beispiel des Wikis klar wird, da es sehr trocken als Auflistung von Ressourcen gehalten ist und so besondere Navigationsmöglichkeiten braucht, damit Nutzer mit der Tastatur nicht endlos durch Links tabben müssen.

Dadurch, dass eben nicht jede Website nach demselben Schema designed werden kann, entsteht für mich denke ich ein besonderer Anreiz auch bei zukünftigen Projekten im Hinterkopf zu behalten, was sie besonders macht und welchen Zweck die Website eigentlich erreichen will, damit dieser Zweck auch vom inklusiven Design der Website optimal unterstützt werden kann.

## Autoren

Am Projekt gearbeitet haben gemeinsam Paula Nuber und Marvin Murmann, die Readme als Zusammenfassung wurde verfasst von Paula Nuber.
