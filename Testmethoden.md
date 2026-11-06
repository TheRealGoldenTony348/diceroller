## Vor- und Nachteile der Testmethoden

Für eine Webapp mit einem Initiative-Tracker (Initiativereihenfolge im Kampf) und einem Dice Roller (virtueller Würfel) für Dungeons & Dragons.

| Testmethode                             | Vorteile                                                                                                              | Nachteile                                                                                                            |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Usability-Tests                         | Zeigen, ob die Webapp einfach zu bedienen ist. Probleme beim Hinzufügen von Charakteren oder Würfeln werden erkannt.  | Benötigen Testpersonen und Vorbereitung. Die Auswertung kann zeitaufwendig sein.                                     |
| Observability-Tests (Beobachtungstests) | Zeigen, wie Nutzer die Webapp tatsächlich verwenden und wo sie Schwierigkeiten haben.                                 | Man erkennt nicht immer, warum Nutzer etwas machen. Testpersonen können sich durch die Beobachtung anders verhalten. |
| Interview-Tests                         | Nutzer können Wünsche und Verbesserungsvorschläge direkt mitteilen. Man erfährt, welche Funktionen ihnen fehlen.      | Antworten sind subjektiv. Nutzer beschreiben ihr Verhalten möglicherweise anders, als es tatsächlich ist.            |
| Think-Aloud-Tests                       | Nutzer erklären während der Bedienung ihre Gedanken. Dadurch werden unverständliche Funktionen und Probleme sichtbar. | Das laute Denken kann die Bedienung beeinflussen. Manche Nutzer haben Schwierigkeiten, ihre Gedanken zu erklären.    |

## Empfehlung für die Webapp

Think-Aloud-Tests kombiniert mit Usability-Tests eignen sich besonders gut.

Beispielsweise erhalten Testpersonen folgende Aufgaben:

1. Einen Kampf mit drei Charakteren erstellen.
2. Die Initiative für alle Charaktere würfeln.
3. Die Kampfreihenfolge automatisch sortieren.
4. Zum nächsten Charakter wechseln.
5. Einen W20 mit Vorteil würfeln.

Dabei lässt sich überprüfen, ob die Funktionen verständlich sind, wie schnell Aufgaben erledigt werden und wo Schwierigkeiten auftreten.

| Aufgabe                                           | Annahme                                                                                     | Hypothese                                                                                                   | Erfolgskriterium                                                                                                                                 |
|---------------------------------------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| **1. Einen Kampf mit drei Charakteren erstellen** | Die Testpersonen verstehen, wie sie einen Kampf anlegen und Charaktere hinzufügen.          | Die Testpersonen können ohne Hilfestellung einen Kampf mit drei Charakteren erstellen.                      | Mindestens 80 % erstellen innerhalb von 2 Minuten einen Kampf mit genau drei Charakteren, ohne Hilfestellung.                                    |
| **2. Die Initiative für alle Charaktere würfeln** | Die Funktion zum Würfeln der Initiative ist leicht auffindbar und verständlich beschriftet. | Die Testpersonen finden und nutzen die Funktion ohne Hilfestellung.                                         | Mindestens 80 % würfeln innerhalb von 30 Sekunden die Initiative für alle drei Charaktere, ohne Hilfestellung.                                   |
| **3. Die Kampfreihenfolge automatisch sortieren** | Die Testpersonen erkennen, wie sie die Charaktere nach Initiative sortieren lassen.         | Die Testpersonen können die automatische Sortierung auslösen und die angezeigte Reihenfolge nachvollziehen. | Mindestens 80 % lösen innerhalb von 20 Sekunden die Sortierung aus und erkennen, dass höhere Initiativewerte zuerst kommen.                      |
| **4. Zum nächsten Charakter wechseln**            | Die Anzeige des aktiven Charakters und die Funktion zum Wechseln sind verständlich.         | Die Testpersonen können zum nächsten Charakter wechseln und erkennen anschließend, wer an der Reihe ist.    | Mindestens 80 % wechseln innerhalb von 10 Sekunden ohne Hilfestellung zum nächsten Charakter und benennen ihn korrekt.                           |
| **5. Einen W20 mit Vorteil würfeln**              | Die Auswahl des W20 und die Einstellung „Vorteil“ sind verständlich.                        | Die Testpersonen können einen W20 mit Vorteil würfeln und das gewertete Ergebnis erkennen.                  | Mindestens 80 % führen innerhalb von 30 Sekunden ohne Hilfestellung den Wurf korrekt aus und erkennen den höheren der beiden Würfe als Ergebnis. |

Die Zeitgrenzen sind vorgeschlagene Zielwerte. Für die Auswertung bedeutet „ohne Hilfestellung“, dass die Testleitung
keine Hinweise zur Bedienung gibt; die Aufforderung zum lauten Denken ist weiterhin erlaubt.