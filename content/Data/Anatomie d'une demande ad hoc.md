---
title: Anatomie d'une demande ad hoc
draft: 
tags:
  - businessliteracy
  - dataliteracy
  - operatingmodel
---
Dans l'article précédent, [[Au secours, une demande ad hoc]], nous avons pu assister à deux conversations entre Eva du marketing et Tom de l'équipe data. Que s'est-il donc passé dans la seconde conversation pour qu'elle soit à la fois beaucoup plus agréable pour Eva et Tom, et beaucoup plus positive pour leur organisation ?

D'abord, Eva propose de co-construire l'analyse avec Tom !

Ensuite, deux facteurs positifs viennent de la volonté de nos deux interlocuteurs :

* Tom ayant déjà pu être impliqué dans le suivi de précédentes collections, il fait preuve de <b>business literacy</b>, aide Eva à spécifier son besoin et propose des pistes. Eva se sent donc plus à l'aise pour impliquer Tom dans sa problématique, et peut préciser ses questions métier en se sachant comprise.

* Tom se sent mieux parce qu'il voit qu'Eva a, ou a pris, des réflexes analytiques, et possède une forme de **data literacy**. Ce qui ne veut pas nécessairement dire qu'elle a appris à écrire des requêtes SQL ! Mais elle sait que pour être archivées, maintenues, et exploitées à grande échelle, les données sont d'abord modélisées de manière normalisée, pour ensuite se prêter à des agrégations qui diffèrent suivant les contextes. Et elle sait donc suffisamment se mettre à la place de Tom pour deviner la complexité de ce qu'elle demande.

Mais Eva et Tom ont également la chance d'être soutenus par des fondations mises à leur disposition et qui sont là encore le fruit d'un travail entre métier et technique :

* Une **documentation partagée** où les processus et métriques sont détaillés.

* Les données maîtres, ici tout ce qui concerne les collections, sont **disponibles et explorables** par tous dans une unique source de vérité. Ils évitent donc de devoir recourir à des fichiers, manuellement édités et échangés qui, les sujets se multipliant, leur ajoutent une charge cognitive importante.

Suite à cet échange, Eva et Tom se sont compris et il est facile pour Tom de proposer un retour rapide. En plus, le travail que va faire Tom va être exploité dans un rapport récurrent apportant une information importante au métier... et ce ne sera donc plus une demande ad hoc !

## Les demandes *ad hoc* échouent dès la traduction du besoin métier

En fait, le coeur du problème se trouve dans la deuxième étape, où la question initiale est traduite.

Aucun des deux n'a ou ne prend véritablement le temps de se mettre à la place de l'autre, et les échanges entre les deux deviennent petit à petit transactionnels. Au lieu de partager le problème métier, on doit spécifier un cahier des charges, qui est écrit dans une langue difficile à saisir par le métier. Si le résultat ne correspond pas à l'attente, le cahier des charges sera opposé pour montrer que la demande était mal spécifiée. Dans le meilleur des cas, le cycle recommence jusqu'à ce que la bonne solution soit trouvée, et coûte très cher en temps pour tous.

Je vous partage les différentes issues, toutes négatives, que j'ai pu observer dans des environnements où la relation métier - technique est devenue au mieux transactionnelle voire franchement difficile :

* **Le métier fait sans les données**, et se couper d'une décision basée sur des faits ou sur une vision plus exhaustive

* **Le métier fait beaucoup moins de demandes**, rassemble tous l besoins dans une méga-demande d'une énorme extraction, qu'ils traiteront ensuite difficilement sous Excel

* **Le métier fait transiter l'ensemble des données vers une solution ou un acteur tiers** qui leur propose d'exploiter leurs données et de leur revendre sous forme de tableaux de bords et d'études.
## Sortir du *ticketing*

La clé pour sortir de cette situation est d'exploiter le moment de la qualification du besoin comme une opportunité de transmission de *data literacy* au métier et de *business literacy* à la technique.

Le ticketing est tentant pour les équipes techniques. Centraliser, rationaliser les demandes, pouvoir (essayer de) qualifier et quantifier l'effort, attribuer la tâche... Mais souvenons-nous que le ticketing a plutôt été inventé pour des demandes d'infogérance, de support de niveau 1, des demandes globalement toutes similaires ou en tout cas, dans un espace des possibles "attendu" : tel produit, tel matériel...

Mais si le ticketing est en effet bien adapté aux demandes de support, il ne l'est pas du tout pour des demandes d'actes, pas seulement de création, mais créatifs. En mettant l

En adoptant un mode de recueil des demandes plus ouvert, beaucoup de questions seront posées au début, mais à mesure que les demandes se répéteront, chacun en connaîtra plus sur le domaine de l'autre, et il n'est pas difficile de parier que rapidement beaucoup de difficultés seront naturellement levées.

Mais cela n'exclut pas la mise en place d'un suivi en interne des demandes, par l'équipe data, pour pouvoir mesurer la charge de demandes ad hoc et son évolution, sa répartition par équipe demandeuse et par thématique, les typologies de demandes... Au contraire, ce sera un outil de valeur pour  [[Faire des demandes ad hoc une opportunité de montée en maturité]], le sujet du prochain article !
## "N'est-ce pas le travail du (Proxy) Product Owner / Manager ?"

Dans le cadre d'un besoin qui dépasserait une certaine taille critique et correspondrait à un besoin récurrent, on passerait sur une notion de produit. On irait bien évidemment identifier, entre autres, un rôle aguerri à l'exercice de la maïeutique et capable d'empathie à la fois métier et technique.

Certaines demandes ad hoc peuvent s'apparenter à des prémices de produit, c'est pourquoi il est important, via cette double transmission de *literacy* entre les équipes, de les documenter et capitaliser pour le cas où la demande apparaîtrait récurrente. 

Rien n'empêche, cela dit, de distinguer dans le cadre des demandes ad hoc des profils **plutôt** solutionneurs et d'autres **plutôt** développeurs, ce qui est aussi un moyen de faire évoluer au mieux chaque collaborateur en fonction de sa maturité et de sa personnalité.

## Et le self service ? Ne serait-il pas plus simple de laisser les utilisateurs accéder eux-mêmes aux données ?

Selon moi, pour faire court, les deux ne s'opposent pas mais se complètent. J'y reviendrai longuement dans de prochains articles.
## Merci, mais comment faire face à toutes ces demandes ?

Une équipe data devrait toujours être perçue comme disponible pour traiter des requêtes ad hoc... mais faire en sorte de ne pas se retrouver en surcharge !

Comme évoqué plus haut, dans le prochain article [[Faire des demandes ad hoc une opportunité de montée en maturité]], je proposerai une manière de distinguer les demandes pour mieux les valoriser et faire entrer l'effort correspondant dans des projets plus faciles à planifier.



---


Entre le métier et la technique, chacun ne connaît généralement qu'une partie de la réalité :
* **le métier sait quel est son problème**, mais ne sait pas exactement quelles données sont disponibles et sous quelles contraintes. Il ne sait pas non plus toujours formuler quelles sont les hypothèses sous-jacentes à sa question, dont la technique a besoin pour lui répondre
* **la technique sait quelles données sont disponibles** et comment elles sont organisées mais ne connaît pas forcément assez le sujet métier pour être capable de faire le lien avec une autre requête précédente, pour remplir ou proposer les hypothèses manquantes dans la demande
## L'absence de partage de connaissances aboutit à une perte de confiance et de valeur