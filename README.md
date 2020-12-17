# sines210--SOUIDI-_-INES-ECF202012_1
School evaluation



PRESENTATION DU PROJET :

Le projet comporte 15 pages HTML dont 10 pages individuelles pour chaque artiste présenté, 1 page d'accueil, 1 page type bibliothèque artistes, 1 page de contact et 2 pages de test pas encore fonctionnelles pour une future application avec utilisation de l'API Deezer.


///A NOTER QUE POUR TOUT CE QUI CONCERNE LES TECHNIQUES DU CODE CSS, LES COMMENTAIRES SE TROUVENT DANS LES RUBRIQUES SASS CORRESPONDANTES


      1° La maquette
      
Les maquettes sont dans l'idée de respecter au mieux les attentes et la maquette de base du client en essayant de lui donner un côté actuel. Sont présentes la première maquette qui à été refaite (v1 et v2) et les maquettes de la page d'accueil, de la page artistes, de la page contact et des pages individuelles des artistes. Chacune des pages a une maquette pour format desktopet mobile (sauf page contact qui a le même design au en mobile et en destop).

Le tout dans un format au plus simple, sans surcharge et moderne proposant une navigation fluide et intuitive (l'utilisation du gradient pour les couleurs à été conservé comme demandé par le client avec notamment un gradient différent pour chaque artiste sur pages individuelles.
Site responsive sur format desktop, mobile et tablette.


     
     2° Navigation entre les pages et liens 

Le header, commun à toutes les pages fonctionnelles => Le logo et nom du site sont des liens vers la page d'accueil; la searchBar n'est pas encore fonctionnelle; 3 liens de navigations type navBar vers l'accueil, la page artistes et la page de contact.

La section 'cartes' (présente sur page accueil et artistes) avec photo des artistes => chaque carte se retourne au survol de la souris en descktop et au clic en mobile et donne accès à deux liens: 1 vers le site de spotify et l'autre vers la page test de l'api deezer; le nom des artistes sous les cartes sont des liens vers les pages individuelles de chaque artiste.

Le bouton 'voir les artistes de ma bibliothèque' qui est un lien vers la page artistes.

La barre icones commune à toutes les pages fonctionnelles avec des liens vers les sites internet deezer, tuneIn, musicBrainz et spotify.

Le footer commun à toutes les pages fonctionnelles avec un seul lien en état de marche, celui de la page contact.


 
      3° Structure des pages
          
		  
					3-a/ Header
Nous retrouvons le header, avec nom du site(marque déposée) et logo (les logos du site et marque déposée sont en unicode). Puis vient une searchBar, puis liens de navigations. 
Au format desktop et grande tablette les liens de navigation apparaissent sur le header en haut. Au format mobile les liens de navigation se transforment en menu burger qui une fois cliqué donne accès à une navigation latérale qui se déploie. Le header est fixe au scroll en format desktop et sera fixe au scroll en format mobile pour la version 2. 


					3-b/ La searchBar
 Elle à été faite grâce à un input de type search et un placeholder 'search' et loupe en unicode pour que l'on sache qu'il s'agit d'une barre de recherche. Cette searchBar permettra plus tard de rechercher des artistes sur les plateformes partenaires de musique en ligne. A noter que le client demandait sur sa maquette de base deux searchBar : une pour recherche par groupe et l'autre pour recherche par nom mais que cette distinction ne semblait pas pertinente puisque les recherches dans les moteurs de recherches ne distingue pas les artistes individuels des groupes. Il n'y a donc qu'une searchBar.
  
  
 					 3-c/ Recherches récentes 
  Titre sur page d'accueil proposant les cartes des dernières recherches de l'utilisateur
  
  
 					 3-d/ Section cartes

Cartes avec photo des artistes, effet de style type 'flip cards' donnant accès au verso de la carte à des liens et nom des artistes en dessous en lien avec la page respective de chacun. Sur la page d'accueil apparaîtront les cartes des derniers artistes recherchés et sur la page artistes les cartes de tous les artistes de la librairie. Les liens sont des icones fontAwesome auxquelles j'ai rajouté des transformations de style au clic et survol souris.


 					 3-e/ Bouton accès bibliothèque 
Présent sur la page d'accueil avec effet de style au survol de la souris


					  3-f/ Section concert sur page accueil
Cartes avec photo et couleur pour effet de style et liste des prochains concerts des artistes favoris de l'utilisateur.


					  3-g/ Section icones 
Icones de chaque plateforme demandée par le client. A noter que je voulais travailler avec des icones fontAwesome (comme celles utilisées au revers des cartes artistes) mais que les icones de musicBrainz et tuneIn n'existait pas dans leur librairie. Je suis donc aller chercher l'image du logo de chaque plateforme. Images auxquelles j'ai supprimé le background pour ne garder que le logo et que j'ai redimensionner dans le but de respecter les bonnes pratiques. Ces icones sont des liens vers les plateformes correspondantes.


 					 3-h/ Footer
Le footer correspondant à la maquette client : lien support, contact, a propos, liens et partenaires. Pour l'instant seul le lien contact est fonctionnel.


 					 3-i/ Page individuelles des artistes
Sont présents en plus des éléments communs à toues les pages fonctionnelles 2 photos de l'artiste, se superposant pour effet de style, un encart avec ses prochains concerts (seulement pour les artistes ayant des dates prévues, les dates mentionnées n'étant pas fictives). Une petite biographie de l'artiste et un clip qui est un iframe you tube qui permet d'avoir un player avec le clip directement intégré à la page HTML.

  
					 3-j/  Page contact
Sont présents en plus des éléments communs à toutes les pages fonctionnelles une banniere avec effet de style fix au scroll, un formulaire de contact avec input nom, prénom, adresse mail et téléphone. Un champ de texte à remplir et un bouton submit. Effet de style sur le bouton submit. Le formulaire n'est pas encore fonctionnelle.


					3-k/ Page lien deezer
Cette page est une page en construction. Reliée à l'API de deezer developers, elle donne pour l'instant accès à un player. Chaque bouton en dessous du player correspond à un album des artistes de la bibliothèque. Au clic sur chaque bouton l'album se charge dans le player et puis à l'appui du bouton play du player on écoute l'album. Seul un utilisateur payant de deezer peut écouter l'album, pour les autres seulement 30 secondes de chaque chanson est disponible puis un message publicitiaire les invite à s'abonner. Plus tard cette page pourrait être conncectée à chaque artiste favori et donnerait accès à tous ses albums et chansons. 
  
  

      4° Layout 					
					
 Au départ j'ai créé le layout de base avec grid car c'est un outil très précis mais il rentrait en conflit avec ma navbar qui était codée avec flex (problème avec le overflow de ma navigation). J'ai donc créé un modele flex de layout sur inspiration de ce que propose le systeme Bootstraps mais au lieu de découper mon écran en 12 colonnes je l'ai fait en 6 colonnes (mobile et tablette, 5 pour le desktop). J'ai ensuite créé un attribut de classe pour chaque fraction et ce pour chaque format d'écran avec les mediaqueries correspondantes. Toutes les fractions sont en position relative pour leur responsivité et ont une largeur de 100% ainsi, peu importe la largeur de l'écran, la fraction occupe toujours 100% de son container et donc l'entiereté de la fraction d'écran qui lui a été attribué. On change donc la largeur de container selon l'attribut de classe qu'on lui assigne et pas selon la largeur de l'élément qui est toujours à 100% de sa boîte.
C'est un layout très intéressant au niveau de la simplicité avec laquelle il permet de rendre les pages responsive. De plus, ce layout, une fois mis en place, peut être adaptable à n'importe quel page et élément.
   
 
 
      5° Javascript
							
Les images des cartes des pages individuelles des artistes sont intégrées avec javascript.
Pour ce faire j'ai du créer une page js pour chaque artiste sinon le code javascript ne marchait pas puisqu'il y avait des sections de code qui ne correspondait à rien d'une  page à l'autre. En effet le code Javascript stoppe son éxécution s'il y a erreur et le fait de ne pas retrouver les variables définies dans le document donne lieu à erreur.
Le scroll reveal est en javasript en bas de chaque page lié à l'API scroll reveal.
Les fontions de déploiement de la navbar sont aussi codées en javascript.

   
   
     6° Redimension images 
							
J'ai resizer toutes les images pour que leurs tailles correspondent au mieux à la taille de leur container. Ainsi si on n'a pas trop à forcer pour faire rentrer les images dans leur container la lecture du robot permettant le chargement et le référencement du site sera facilitée et la vitesse de chargement des images et du site sera plus rapide. Un chargement optimisé veut aussi dire une économie d'énergie. Permet aussi d'avoir un meilleur référencement car la leture du robot est plus fluide.
   
   
     
			7° W3C
   
   HTML => 1 erreur  concernant mes encarts de concert car le titre en h3 est encapsulé d'une liste ul ce qui n'est pas dans la bonne pratique de la sémantique. Toutefois le fait de coder le titre de cette manière offre un alignement plus optimale.
   
   CSS => Aucune erreur trouvée



			8° Convention de nommage
      
La convention camelCase est privilégiée pour nommer les images et fichiers SASS, le PascalCase pour les différentes pages HTML ce qui permet une meilleure visibilité dans l'arborescence des fichiers sur l'éditeur de code. 



				9° Utilisation de SASS
J'ai utilisé SASS pour coder ma feuille de style car cela offre de mon point de vue une meilleure organnisation de mon travail et une plus de faciliter pour travailler dans le code, surtout quand il y a beaucoup de lignes et de pages. SASS est installé en début de projet gavec NPM et relié à la feuille de style avec un package JSON.



				10° Adaptabilité du contenu format  descktop, mobile et tablette RESPONSIVE
        
Le design du site est responsive
