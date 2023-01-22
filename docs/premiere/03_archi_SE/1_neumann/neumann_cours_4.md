Nous avons vu comment un assemblage de transistors pouvait permettre de faire des opérations logiques, de construire des mémoires, des microprocesseurs, ...

Dans l'architecture de von Neumann, les instructions et les données sont stockées dans la même mémoire et toutes ces informations transitent sous la forme de signaux électriques entre la mémoire et les différents composants du CPU.

Toutes ces informations, instructions et données, sont codées par une suite de 0 et de 1 puisque c'est le seul langage compris au niveau du matériel. Comment cela se passe-t-il ?

## 1. Fonctionnement du processeur

Un processeur donné est capable d'exécuter un certain nombre d'opérations de base, celles pour lesquelles il dispose d'un circuit électronique qui les réalise.

L'ensemble des instructions exécutables directement par le microprocesseur (instructions machines) constitue ce que l'on appelle le "langage machine" du processeur.

Chaque instruction machine correspond à une configuration électronique binaire composée principalement de 2 parties :

* Le champ "code opération" (opcode) qui indique au processeur le type de traitement à réaliser. Par exemple, sur un certain modèle de processeur, le code "00100110" donne l'ordre d'effectuer une multiplication.
* Le champ "opérandes" indique la nature des données sur lesquelles l'opération désignée par le "code opération" doit être effectuée.

Un opérande peut être de 3 natures différentes :

* l'opérande est une valeur immédiate : l'opération est effectuée directement sur la valeur donnée dans l'opérande ;
* l'opérande est un registre du CPU : l'opération est effectuée sur la valeur située dans un des registres (R0,R1, R2,...) ; l'opérande indique de quel registre il s'agit ;
* l'opérande est une donnée située en mémoire vive : l'opération est effectuée sur la valeur située en mémoire vive à l'adresse XXXXX. Cette adresse est indiquée dans l'opérande.

Le programme exécuté se trouve en RAM, tout comme les données. Un registre particulier du processeur, nommé IP (instruction pointer), contient l'adresse de la cellule RAM de la prochaine instruction à exécuter.

Un deuxième registre, IR (instruction register), joue un rôle important en raison de sa connexion physique au reste du processeur : placer dans ce registre la configuration électronique qui dénote une instruction provoque l'activation du circuit dédié à la réalisation de l'opération sous-jacente.

Le CPU a un fonctionnement cyclique :

* il copie dans le registre IR le contenu de la RAM à l'adresse pointée par IP ;
* il décode l'instruction contenue dans IR : ceci provoque l'activation du circuit électronique qui réalise l'opération visée ;
* il exécute l'instruction décodée ; ceci met aussi à jour la valeur de IP pour continuer dans le programme.

La capacité du processeur à exécuter tous les programmes s'explique par ce fonctionnement très souple et par le fait que le jeu d'instructions de base est suffisamment riche pour être universel (on dit que le langage machine est Turing-complet).

Dans le modèle de von Neumann, il y a une seule mémoire vive pour le programme et les données : c'est par sa copie dans le registre IR qu'une configuration électronique initialement présente en RAM joue le rôle d'une instruction. La même configuration pourrait être interprétée comme une donnée (entier, etc.) dans un autre contexte.

Historiquement, les instructions machine sont relativement basiques ; on peut se contenter d'à peine plus que ce qui est nécessaire pour l'universalité. Pour des raisons de performance, les processeurs modernes savent exécuter nativement des opérations plus complexes, comme la composée addition-produit ou des opérations sur des vecteurs de petite dimension.

Les opérations fondamentales sont de trois sortes :

* Les instructions arithmétiques (addition, soustraction, multiplication...) effectuent des calculs mathématiques, soit sur des entiers, soit sur des flottants. Par exemple, on peut avoir une instruction consistant à additionner la valeur contenue dans le registre R1 et le nombre 789 et ranger le résultat dans le registre R0.
* Les instructions de transfert de données permettent de transférer une donnée d'un registre du CPU vers la mémoire vive et vice versa. Par exemple, on peut avoir une instruction consistant à prendre la valeur située à l'adresse mémoire 487 et la placer dans la registre R2, ou encore prendre la valeur située dans le registre R1 et la placer à l'adresse mémoire 512.
* Les instructions de rupture de séquence ou instructions de saut. Elles permettent d'agir sur le registre
IP qui contient l'adresse de la prochaine instruction à exécuter. Les instructions arithmétiques ou de transfert de données, outre leur effet spécifique, incrémentent la valeur de IP : de cette façon, l'exécution du programme avance séquentiellement (après avoir exécuté l'instruction placée à l'adresse 512, on passe à l'adresse 513, ...). Les instructions de saut permettent de réaliser les autres structures de contrôle d'exécution, notamment l'alternative et la boucle.

On distingue les instructions de saut inconditionnel, qui modifient toujours IP à la valeur donnée en opérande, et les instructions de saut conditionnel, qui ne font cette modification que selon certaines circonstances, et sinon ont le comportement habituel d'incrémentation de IP. Une instruction de saut conditionnel permet par exemple d'agir comme suit : si la valeur contenue dans le registre R1 est strictement supérieure à 0 alors la prochaine instruction à exécuter est celle située à l'adresse mémoire 4521.

## 2. Le langage Assembleur

Programmer en langage machine est extrêmement difficile (très longue suite de 0 et de 1), pour pallier cette difficulté, les informaticiens ont remplacé les codes binaires abscons par des symboles mnémoniques (plus facile à retenir qu'une suite de "1" et de "0"), cela donne l'assembleur. 

Par exemple un "ADD R1,R2,#125" sera équivalent à "11100010100000100001000001111101".

Le processeur est uniquement capable d'interpréter le langage machine, un programme appelé "assembleur" assure donc le passage de "ADD R1,R2,#125" à "11100010100000100001000001111101". Par extension, on dit que l'on programme en assembleur quand on écrit des programmes avec ces symboles mnémoniques à la place de suite de "0" et de "1".

Il n'est pas question d'apprendre à programmer en assembleur, mais vous devez être capables de comprendre l'exécution d'une séquence d'instructions simples en assembleur.

## 3. Exemples d'instructions

```DASM16 title="Assembleur"
LDR R1,78
```

Place la valeur stockée à l'adresse mémoire 78 dans le registre R1 (par souci de simplification, nous continuons à utiliser des adresses mémoire codées en base 10)

```DASM16 title="Assembleur"
STR R3,125
```

Place la valeur stockée dans le registre R3 en mémoire vive à l'adresse 125

```DASM16 title="Assembleur"
ADD R1,R0,#128
```

Additionne le nombre 128 (une valeur immédiate est identifiée grâce au symbole #) et la valeur stockée dans le registre R0, place le résultat dans le registre R1

```DASM16 title="Assembleur"
ADD R0,R1,R2
```

Additionne la valeur stockée dans le registre R1 et la valeur stockée dans le registre R2, place le résultat dans le registre R0

```DASM16 title="Assembleur"
SUB R1,R0,#128
```

Soustrait le nombre 128 de la valeur stockée dans le registre R0, place le résultat dans le registre R1

```DASM16 title="Assembleur"
SUB R0,R1,R2
```

Soustrait la valeur stockée dans le registre R2 de la valeur stockée dans le registre R1, place le résultat dans le registre R0

```DASM16 title="Assembleur"
MOV R1, #23
```

Place le nombre 23 dans le registre R1

```DASM16 title="Assembleur"
MOV R0, R3
```

Place la valeur stockée dans le registre R3 dans le registre R0

```DASM16 title="Assembleur"
B 45
```

Nous avons une structure de rupture de séquence, la prochaine instruction à exécuter se situe en mémoire vive à l'adresse 45

```DASM16 title="Assembleur"
CMP R0, #23
```

Compare la valeur stockée dans le registre R0 et le nombre 23. Cette instruction CMP doit précéder une instruction de branchement conditionnel BEQ, BNE, BGT, BLT (voir ci-dessous)

```DASM16 title="Assembleur"
CMP R0, R1
```

Compare la valeur stockée dans le registre R0 et la valeur stockée dans le registre R1.

```DASM16 title="Assembleur"
CMP R0, #23
BEQ 78
```

La prochaine instruction à exécuter se situe à l'adresse mémoire 78 si la valeur stockée dans le registre R0 est égale à 23

```DASM16 title="Assembleur"
CMP R0, #23
BNE 78
```

La prochaine instruction à exécuter se situe à l'adresse mémoire 78 si la valeur stockée dans le registre R0 n'est pas égale à 23

```DASM16 title="Assembleur"
CMP R0, #23
BGT 78
```

La prochaine instruction à exécuter se situe à l'adresse mémoire 78 si la valeur stockée dans le registre R0 est plus grand que 23

```DASM16 title="Assembleur"
CMP R0, #23
BLT 78
```

La prochaine instruction à exécuter se situe à l'adresse mémoire 78 si la valeur stockée dans le registre R0 est plus petit que 23

```DASM16 title="Assembleur"
HALT
```

Arrête l'exécution du programme

Encore une fois, il n'est pas question d'apprendre à programmer en assembleur, les instructions ci-dessus sont uniquement des exemples.

#### Utilisation des labels

En fait, les instructions assembleur B, BEQ, BNE, BGT et BLT n'utilisent pas directement l'adresse mémoire de la prochaine instruction à exécuter, mais des "labels". Un label correspond à une adresse en mémoire vive (c'est l'assembleur qui fera la traduction "label" $\longrightarrow$ "adresse mémoire"). L'utilisation d'un label évite donc d'avoir à manipuler des adresses mémoires en binaire ou en hexadécimal. Voici un exemple qui montre comment utiliser un label :

```DASM16 title="Assembleur"
CMP R4, #18
BGT monLabel
MOV R0,#14
HALT
monLabel:
MOV R0,#18
HALT
```

Dans l'exemple ci-dessus, nous avons choisi "monLabel" comme nom de label. La ligne "MOV R0,#18" a pour label "monLabel" car elle est située juste après la ligne "monLabel:". Concrètement, voici ce qui se passe avec ce programme : si la valeur stockée dans le registre R4 est supérieure à 18 on place le nombre 18 dans le registre R0 sinon on place le nombre 14 dans le registre R0. ATTENTION : la présence du "HALT" juste après la ligne "MOV R0,#14" est indispensable, car sinon, la ligne "MOV R0,#18" sera aussi exécutée (même si la valeur stockée dans le registre R4 est inférieure à 18 )

## 4. Du langage de haut niveau à l'assembleur

Les langages de programmation « évolués » (Python, C++, …), destinés à être utilisés par des humains, se composent d'instructions complexes, opérant sur des types de données beaucoup plus complexes que des booléens. Il faudra donc passer par une étape de « conversion » du langage évolué vers le langage machine, chaque instruction du langage « évolué » donnant lieu à un grand nombre d'instructions « élémentaires » du langage machine. On distinguera l'opération de compilation (conversion de tout le code évolué en langage machine) de l'opération d'interprétation (la conversion est réalisée au fur et à mesure du déroulement du code).

Python, par exemple, est un langage interprété : un programme, l'interpréteur Python, se charge de traduire les instructions du langage en code assembleur au fur et à mesure de son exécution.

Voici ce que pourrait donner la "transformation" d'un programme Python tout simple en langage machine (plus  précisément ici en assembleur).

Voici le programme Python :

```py
x = 4
y = 8
if x == 10:
	y = 9
else :
	x=x+1
z=6
```

et voici maintenant voici son équivalent en assembleur :

```DASM16 title="Assembleur"
MOV R0, #4
STR R0,30
MOV R0, #8
STR R0,75
LDR R0,30
CMP R0, #10
BNE else
MOV R0, #9
STR R0,75
B endif
else:
LDR R0,30
ADD R0, R0, #1
STR R0,30
endif:
MOV R0, #6
STR R0,23
HALT
```

Comme vous  pouvez  le constater le moindre programme Python donne un programme assembleur relativement complexe.

## 5. Compléments d'informations

* Le modèle de von Neumann sur [interstices](https://interstices.info/le-modele-darchitecture-de-von-neumann/){ target=_blank }
* Mémoire et unité centrale, un couple dédié à l'exécution des programmes sur [interstices](https://interstices.info/memoire-et-unite-centrale-un-couple-dedie-a-lexecution-des-programmes/){ target=_blank }
* Une histoire de l'architecture des ordinateurs  sur [Lumni](https://www.lumni.fr/video/une-histoire-de-l-architecture-des-ordinateurs){ target=_blank }
