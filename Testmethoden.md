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