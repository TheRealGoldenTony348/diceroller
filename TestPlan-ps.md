# Testplan: Initiative-Tracker und Dice Roller

Modul 245 – Aufgabe Testplan, 28.10.2026

## Ziel des Tests

Der Test untersucht, ob neue Nutzende die zentralen Funktionen der D&D-Webapp ohne Einführung bedienen können. Dabei werden Verständlichkeit, Auffindbarkeit und Zeitaufwand geprüft. Schwierigkeiten und laut ausgesprochene Gedanken liefern Hinweise auf Verbesserungsmöglichkeiten.

## Testmethode

Ein moderierter Usability-Test wird mit der Think-Aloud-Methode kombiniert. Die Testpersonen bearbeiten einzeln fünf Aufgaben und sprechen dabei ihre Gedanken, Erwartungen und Unsicherheiten aus. Die Testleitung beobachtet und protokolliert das Verhalten, ohne Hinweise zur Bedienung zu geben.

## Annahme und Hypothese

**Annahme:** Personen mit D&D-Grundkenntnissen verstehen die verwendeten Fachbegriffe und können sich grundsätzlich in einer Webapp orientieren.

**Hypothese:** Die zentralen Funktionen sind so verständlich gestaltet, dass mindestens vier von fünf Testpersonen jede Aufgabe innerhalb der festgelegten Zielzeit korrekt und ohne Hilfestellung erledigen können.

## Erfolgskriterium

Der Test gilt als bestanden, wenn bei jeder der fünf Aufgaben mindestens vier von fünf Testpersonen das jeweilige Erfolgskriterium erfüllen. Die Ergebnisse werden pro Aufgabe ausgewertet; ein guter Durchschnitt gleicht eine nicht bestandene Aufgabe nicht aus. Die Zeitgrenzen sind vorab festgelegte Zielwerte und werden während der Testreihe nicht verändert.

## Beschreibung der Testpersonen

Es nehmen fünf Personen teil, die gelegentlich oder regelmässig Pen-and-Paper-Rollenspiele wie Dungeons & Dragons spielen. Sie kennen Initiative, Kampfreihenfolge und Würfeln mit Vorteil und verfügen über grundlegende Computerkenntnisse. Die Webapp haben sie bisher nicht verwendet und sie waren nicht an ihrer Entwicklung beteiligt.

Die Gruppe soll sowohl gelegentliche als auch erfahrene Spielende umfassen. Alle sind bereit, ihre Gedanken während der Bedienung laut auszusprechen. Die Ergebnisse beziehen sich auf diese Zielgruppe; über Personen ohne D&D-Kenntnisse erlauben sie keine verlässliche Aussage.

## Aufgaben, Messgrössen und Erfolgskriterien

| Nr. | Aufgabe für die Testperson | Messgrössen | Erfolgskriterium pro Aufgabe |
| --- | --- | --- | --- |
| 1 | Erstelle einen neuen Kampf mit den Charakteren Aria, Borin und Cora. | Bearbeitungszeit, Anzahl korrekt hinzugefügter Charaktere, Hilfestellungen | Mindestens 4 von 5 Personen erstellen innerhalb von 2 Minuten einen Kampf mit genau diesen drei Charakteren, ohne Hilfestellung. |
| 2 | Ermittle mit der Würfelfunktion die Initiative aller drei Charaktere. | Bearbeitungszeit, Anzahl Charaktere mit gewürfelter Initiative, Hilfestellungen | Mindestens 4 von 5 Personen würfeln innerhalb von 30 Sekunden die Initiative aller drei Charaktere, ohne Hilfestellung. |
| 3 | Lass die Anwendung die Kampfreihenfolge anhand der Initiative festlegen. Erkläre anschliessend, wer zuerst handelt. | Bearbeitungszeit, Auslösen der automatischen Sortierung, Verständnis der Reihenfolge | Mindestens 4 von 5 Personen lösen innerhalb von 20 Sekunden ohne Hilfestellung die automatische Sortierung aus und erkennen, dass höhere Initiativewerte zuerst kommen. |
| 4 | Der aktuelle Charakter hat seinen Zug beendet. Wechsle zum nächsten Charakter und benenne ihn. | Bearbeitungszeit, korrekter Wechsel, Erkennen des aktiven Charakters | Mindestens 4 von 5 Personen wechseln innerhalb von 10 Sekunden ohne Hilfestellung zum nächsten Charakter und benennen ihn korrekt. |
| 5 | Würfle einen W20 mit Vorteil und erkläre, welches Ergebnis gewertet wird. | Bearbeitungszeit, Würfel- und Modusauswahl, Verständnis des Ergebnisses | Mindestens 4 von 5 Personen führen innerhalb von 30 Sekunden ohne Hilfestellung den Wurf korrekt aus und erkennen den höheren der beiden Würfe als gewertetes Ergebnis. Bei Gleichstand gilt der gemeinsame Wert. |

Zusätzlich werden Fehlversuche, Suchwege, Kommentare und erkennbare Unsicherheiten protokolliert. Nach jeder Aufgabe bewertet die Testperson deren Schwierigkeit von 1 (sehr einfach) bis 5 (sehr schwierig). Diese Bewertung ergänzt die Beobachtungen und ist kein zusätzliches Bestehenskriterium.

## Durchführung und Auswertung

1. Die Testleitung erklärt den Ablauf und betont, dass die Anwendung geprüft wird. Die Testperson übt lautes Denken kurz an einer unabhängigen Aufgabe.
2. Alle Personen verwenden dieselbe Version der Webapp, denselben Browser und dasselbe Gerät mit identischer Fenstergrösse. Zu Beginn wird der Anwendungszustand zurückgesetzt.
3. Die Aufgaben werden einzeln in der angegebenen Reihenfolge vorgelesen. Die Zeitmessung beginnt nach dem Vorlesen, sobald die Testperson mit der Bedienung startet, und endet nach der vollständigen Erledigung einschliesslich der geforderten Erklärung.
4. Die Testleitung darf neutral zum lauten Denken auffordern. Hinweise zu Schaltflächen oder Vorgehensweisen zählen als Hilfestellung. Benötigt eine Person Hilfe, bricht ab oder überschreitet die Zielzeit, wird das Erfolgskriterium als nicht erfüllt erfasst. Sie darf die Aufgabe zur Ursachenanalyse weiterbearbeiten, höchstens bis zur doppelten Zielzeit.
5. Wenn eine Aufgabe scheitert, stellt die Testleitung danach den erforderlichen Ausgangszustand für die nächste Aufgabe her. Diese Vorbereitung liegt ausserhalb der Zeitmessung und wird protokolliert. Für Aufgabe 3 werden unterschiedliche Initiativewerte bereitgestellt, falls Gleichstände die Beurteilung erschweren.
6. Abschliessend werden unklare Funktionen und Verbesserungsvorschläge erfragt. Pro Aufgabe werden Erfolgsquote, Bearbeitungszeiten und beobachtete Probleme zusammengefasst. Bei fünf Personen entsprechen vier erfolgreiche Abschlüsse 80 %. Die kleine Stichprobe dient der Erkennung von Usability-Problemen und ist kein repräsentativer Nachweis für alle Nutzenden.

## Mögliche Biases und Massnahmen zur Vermeidung

| Möglicher Bias | Mögliche Auswirkung | Gegenmassnahme |
| --- | --- | --- |
| Auswahlbias | Nur erfahrene oder technisch versierte Personen lassen die Bedienung einfacher erscheinen. | Gelegentliche und erfahrene Spielende einbeziehen; Erfahrung dokumentieren und die festgelegten Auswahlkriterien einhalten. |
| Bestätigungsbias der Testleitung | Beobachtungen werden zugunsten der erwarteten guten Bedienbarkeit interpretiert. | Hypothese und Kriterien vorab festlegen; Erfolge und Probleme nach demselben Protokoll dokumentieren und Beobachtungen von Interpretationen trennen. |
| Einfluss der Moderation | Hinweise, Gestik oder suggestive Fragen lenken die Bedienung. | Einheitliche Aufgabenformulierungen nutzen, neutral bleiben und keine Bedienhinweise geben; notwendige Hilfe dokumentieren. |
| Soziale Erwünschtheit | Testpersonen vermeiden Kritik, um die entwickelnde Person nicht zu enttäuschen. | Ausdrücklich um ehrliche Kritik bitten, Rückmeldungen unter Testpersonen-Kürzeln erfassen und nach Möglichkeit eine unbeteiligte Person moderieren lassen. |
| Beobachtungseffekt | Testpersonen handeln unter Beobachtung vorsichtiger als im Alltag. | Eine ruhige Umgebung schaffen, eine kurze Eingewöhnung ermöglichen und erklären, dass Fehler der Anwendung gesucht werden. |
| Einfluss des lauten Denkens | Das Aussprechen von Gedanken verlängert die Bearbeitung und verändert den Ablauf. | Allen dieselbe Think-Aloud-Anweisung geben, vorher kurz üben und Zeitwerte ausdrücklich als Ergebnisse unter Think-Aloud-Bedingungen auswerten. |
| Lern- und Reihenfolgeeffekt | Frühere Aufgaben erleichtern spätere Aufgaben. | Die wegen des Kampfablaufs feste Reihenfolge bei allen beibehalten und dokumentieren; spätere Ergebnisse als Bedienung nach den vorherigen Aufgaben interpretieren. |
| Unterschiedliche Ausgangszustände und Zufallswerte | Fehlgeschlagene Voraufgaben oder gleiche Initiativewerte erschweren spätere Aufgaben unterschiedlich. | Ausgangszustände kontrollieren, bei Bedarf vor der nächsten Aufgabe wiederherstellen und Eingriffe sowie Gleichstände dokumentieren. |
