# T.P. : circuits logiques

Les exercices de cette page sont à réaliser à l'aide du simulateur inclus dans la page.

**Une fois les exercices terminés, imprimer la page dans un fichier PDF et la déposer dans le dossier réseau prévu à cet effet.**

## :fontawesome-solid-computer: Exercice 1 


Réaliser un circuit logique à 4 entrées, à l'aide des portes disponibles à gauche, telle que Sortie vaut 1 si, et seulement si, au moins une des entrées est non nulle.

<div style="width: 100%; height: 430px">
<logic-editor mode="design" showonly="not or and">
<script type="application/json">
{
"v": 2,
"in": [
{"pos": [150, 100], "id": 8, "name": "A", "val": 0},
{"pos": [150, 140], "id": 9, "name": "B", "val": 0},
{"pos": [150, 180], "id": 10, "name": "C", "val": 0},
{"pos": [150, 220], "id": 11, "name": "D", "val": 0}          
],
"out": [{"pos": [600, 160], "id": 12, "name": "Sortie"}]
}
</script>
</logic-editor>
</div>

## :fontawesome-solid-computer: Exercice 2

Dessiner un circuit logique qui a 4 entrées A, B, C et D et dont la sortie O vaut 1 si, et seulement si, toutes les entrées sont nulles.

<div style="width: 100%; height: 430px">
  <logic-editor mode="design" showonly="not and or">
    <script type="application/json">
      {
        "v": 2,
        "in": [
          {"pos": [150, 100], "id": 8, "name": "A", "val": 0},
          {"pos": [150, 140], "id": 9, "name": "B", "val": 0},
          {"pos": [150, 180], "id": 10, "name": "C", "val": 0},
          {"pos": [150, 220], "id": 11, "name": "D", "val": 0}          
        ],
        "out": [{"pos": [600, 160], "id": 12, "name": "Sortie"}]
     }
    </script>
  </logic-editor>
</div>

## :fontawesome-solid-computer: Exercice 3

Dessiner un circuit logique correspondant à la table ci-dessous.

| A | S | O |
| --- | --- | --- |
|0|0|0|
|1|0|1|
|0|1|1|
|1|1|0|

L'objectif est de renvoyer la valeur de A si S = 0 et de renvoyer (non A) sinon.

<div style="width: 100%; height: 430px">
  <logic-editor mode="design" showonly="not and or">
    <script type="application/json">
      {
        "v": 2,
        "in": [
          {"pos": [150, 100], "id": 8, "name": "A", "val": 0},
          {"pos": [150, 220], "id": 11, "name": "S", "val": 0}          
        ],
        "out": [{"pos": [600, 160], "id": 12, "name": "O"}]
     }
    </script>
  </logic-editor>
</div>

## :fontawesome-solid-computer: Exercice 4

On considère le circuit suivant : 

![](../../../assets/images/exos_circuitsFig1.png)

1. Reproduire ce circuit dans le simulateur ci-dessous.
2. En vous aidant du simulateur, établir la table de vérité de ce circuit.
3. Que fait ce circuit ?

Votre réponse ci-dessous : 

<textarea style="border: solid;" cols="100" rows="20">Votre réponse ici ...</textarea>

<div style="width: 100%; height: 430px">
  <logic-editor mode="design" showonly="not and or xor in out">
    <script type="application/json">
      {
        "v": 3
      }
    </script>
  </logic-editor>
</div>

## :fontawesome-solid-computer: Exercice 5

On peut faire une porte NON avec une porte NAND.

En rajoutant les fils manquants, utilisez la porte NAND (non-et) pour que la valeur de Sortie soit la même que celle de Témoin, quelle que soit la valeur de Entrée.

* Pour rajouter un fil, il suffit de cliquer sur la sortie d'une porte et de faire glisser le fil jusqu'à l'entrée d'une autre porte.
* Pour changer la valeur de Entrée, il suffit de cliquer dessus.
        
<div style="width: 100%; height: 470px">
  <logic-editor mode="connect">
    <script type="application/json">
      {
        "v": 3,
        "in": [{"pos": [230, 240], "id": 0, "name": "Entrée", "val": 0}],
        "gates": [{"type": "NAND", "pos": [370, 190], "in": [1, 2], "out": 3}, {"type": "NOT", "pos": [370, 280], "in": 4, "out": 5}],
        "out": [{"pos": [510, 190], "id": 6, "name": "Sortie"}, {"pos": [510, 280], "id": 7, "name": "Témoin"}],
        "wires": [[3, 6], [0, 4], [5, 7]]
      }
    </script>
  </logic-editor>
</div>

## :fontawesome-solid-computer: Exercice 6
	
En rajoutant des portes NAND, disponibles à gauche, faites des circuits équivalents aux portes ET et OU déjà installées.

* En cas d'erreur de manipulation, vous pouvez réinitialiser en utilisant le bouton à droite.

<div style="width: 100%; height: 680px">
  <logic-editor mode="design" showonly="nand">
    <script type="application/json">
      {
        "v": 3,
        "in": [
          {"pos": [170, 140], "id": 31, "name": "A1", "val": 0},
          {"pos": [170, 180], "id": 32, "name": "B1", "val": 0},
          {"pos": [170, 440], "id": 38, "name": "A2", "val": 0},
          {"pos": [170, 480], "id": 39, "name": "B2", "val": 0}
        ],
        "gates": [{"type": "AND", "pos": [320, 240], "in": [33, 34], "out": 35}, {"type": "OR", "pos": [320, 540], "in": [40, 41], "out": 42}],
        "out": [
          {"pos": [460, 240], "id": 36, "name": "Témoin1"},
          {"pos": [460, 100], "id": 37, "name": "Sortie1"},
          {"pos": [460, 540], "id": 43, "name": "Témoin2"},
          {"pos": [460, 400], "id": 44, "name": "Sortie2"}
        ],
        "wires": [[31, 33], [32, 34], [35, 36], [39, 41], [38, 40], [42, 43]]
      }
    </script>
  </logic-editor>
</div>

## :fontawesome-solid-computer: Exercice 7
      
Faire un circuit équivalent à une porte XOR à l'aide de portes ET, OU et NON.

*  Vous pouvez rajouter une porte XOR et une nouvelle sortie pour tester votre circuit.
* *optionnel* Il y a 2 façons de faire une porte XOR, donc vous pouvez chercher la deuxième construction.
* *optionnel* Pour les plus courageux, vous pouvez essayer de faire le même circuit avec uniquement des portes NAND.
            
<div style="width: 100%; height: 400px">
  <logic-editor mode="design" showonly="and or not xor out nand">
    <script type="application/json">
      {
        "v": 2,
        "in": [
          {"pos": [150, 140], "id": 1, "name": "A", "val": 0},
          {"pos": [150, 180], "id": 2, "name": "B", "val": 0}
        ],
        "out": [
          {"pos": [500, 160], "id": 7, "name": "Sortie"}
        ]
      }
    </script>
  </logic-editor>
</div>

