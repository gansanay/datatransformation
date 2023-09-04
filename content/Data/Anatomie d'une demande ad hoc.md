---
title: Anatomie d'une demande ad hoc
draft: 
tags:
  - businessliteracy
  - dataliteracy
  - operatingmodel
---
Dans l'article précédent, [[Au secours, une demande ad hoc]], nous avons pu assister à deux conversations entre Eva du marketing et Tom de l'équipe data. Que s'est-il donc passé dans la seconde conversation pour qu'elle soit à la fois beaucoup plus agréable pour Eva et Tom, et beaucoup plus positive pour leur organisation ?

* Eva propose de co-construire l'analyse avec Tom !
* Tom ayant déjà pu être impliqué dans le suivi de précédentes collections, il fait preuve de <b>business literacy</b>, aide Eva à spécifier son besoin et propose des pistes.
* Eva continue d'impliquer Tom dans sa problématique, et peut préciser ses questions métier en se sachant comprise.
* Tom se sent mieux parce qu'il voit qu'Eva se pose les questions dont il a besoin, il peut donc lui demander directement ce dont il a besoin. De plus, Eva et lui disposent d'une documentation partagée où les processus et métriques sont détaillés.
* Au-delà de Eva et Tom, après la documentation centralisée, on retrouve ici un autre facteur qui facilite grandement leurs échanges : une gouvernance des données maîtres, ici tout ce qui concerne les collections. Ils ont ainsi une unique source de vérité et évitent de recourir à des fichiers.
* Suite à cet échange, Eva et Tom se sont compris facilement et il est facile pour Tom de proposer un retour rapide. En plus, le travail que va faire Tom va être exploité dans un rapport récurrent apportant une information importante au métier... et ce ne sera donc plus une demande ad hoc !

## Les demandes *ad hoc* échouent dès la traduction du besoin métier

Le coeur du problème se trouve dans la deuxième étape, où la question initiale est traduite.

Entre le métier et la technique, chacun ne connaît généralement qu'une partie de la réalité :
* **le métier sait quel est son problème**, mais ne sait pas exactement quelles données sont disponibles et sous quelles contraintes. Il ne sait pas non plus toujours formuler quelles sont les hypothèses sous-jacentes à sa question, dont la technique a besoin pour lui répondre
* **la technique sait quelles données sont disponibles** et comment elles sont organisées mais ne connaît pas forcément assez le sujet métier pour être capable de faire le lien avec une autre requête précédente, pour remplir ou proposer les hypothèses manquantes dans la demande
## L'absence de partage de connaissances aboutit à une perte de confiance et de valeur

Aucun des deux n'a ou ne prend véritablement le temps de se mettre à la place de l'autre, et les échanges entre les deux deviennent petit à petit transactionnels. Au lieu de partager le problème métier, on doit spécifier un cahier des charges, qui est écrit dans une langue difficile à saisir par le métier. Si le résultat ne correspond pas à l'attente, le cahier des charges sera opposé pour montrer que la demande était mal spécifiée. Dans le meilleur des cas, le cycle recommence jusqu'à ce que la bonne solution soit trouvée, et coûte très cher en temps pour tous.

Petit à petit, après quelques demandes, quelle sera la réaction naturelle du métier ?
* **Faire sans les données**, et se couper d'une décision basée sur des faits
* **Faire beaucoup moins de demandes**, rassembler tous leurs besoins dans une méga-demande d'une énorme extraction, qu'ils traiteront ensuite difficilement sous Excel
* **Faire transiter l'ensemble des données vers une solution SaaS tierce** qui leur propose d'exploiter leurs données et de leur revendre sous forme de tableaux de bords et d'études.
## Sortir du *ticketing* et trouver un nouveau mode d'échange

La clé pour sortir de cette situation est d'exploiter le moment de la qualification du besoin comme une opportunité de transmission de *data literacy* au métier et de *business literacy* à la technique.

Beaucoup de questions seront posées au début, mais à mesure que les demandes se répéteront, chacun en connaîtra plus sur le domaine de l'autre, et il n'est pas difficile de parier que rapidement beaucoup de difficultés seront naturellement levées.
## "N'est-ce pas le travail du Product Owner ?"

Dans un contexte où on sur-spécialise les postes et où on sépare scrupuleusement les responsabilités, difficile de créer cette double transmission de *literacy* entre les équipes. C'est souvent à un(e) (Proxy) Product Owner qu'incombe la responsabilité d'exprimer le besoin métier.

Sans céder à l'envie de dire que tout le monde est concerné et que la réussite ou l'échec sont celles de tous, on peut au moins se dire que si certaines demandes ad hoc peuvent s'apparenter à des prémices de produit, il n'est pas opportun de plaquer un *framework* sur les demandes *ad hoc*, mais plutôt de les reconnaître comme une opportunité de partage.
## Mais comment faire face à toutes ces demandes ?

Une équipe data devrait toujours être perçue comme disponible pour traiter des requêtes ad hoc... mais faire en sorte de ne pas se retrouver en surcharge !

Dans le prochain article [[Faire des demandes ad hoc une opportunité de montée en maturité]], je proposerai une manière de distinguer les demandes pour mieux les valoriser et faire entrer l'effort correspondant dans des projets plus faciles à planifier.