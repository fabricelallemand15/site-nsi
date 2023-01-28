---
title: TP - Révisions sur les adresses IP
---

Activité d'introduction : adressage IP, réseaux, masques
=========================================================

> Cette activité permet de (re)définir quelques notions facilitant la
> compréhension du chapitre sur les protocoles de routage.

## Adresse IP

La plupart du temps lorsque l'on parle de *réseau*, il s'agit en
réalité d'un **sous-réseau** d'un réseau plus grand (par exemple un
sous-réseau du réseau mondial IP).

Chacun de ses (sous-)réseaux possède une adresse IP, appelée **adresse
du (sous-)réseau**. Dans un (sous-)réseau, il y a plusieurs machines que
l'on appellent **hôtes**, possédant elles aussi une adresse IP
dépendant de celle du (sous-)réseau.

Une adresse IP (IPv4) est une suite de 32 bits (4 octets) exprimée en
décimales à point, en séparant chacun des octets par un point :
`X1.X2.X3.X4` où X1, X2, X3 et X4 sont les valeurs des 4 octets.

**Exemple** :

-   Représentation binaire : `11000001 00110111 11011101 00111110`
-   Représentation décimale pointée : `193.55.221.62` (où `193` est la
    valeur décimale de `11000001`, `55` celle de `00110111`, etc.)

## Structure d'une adresse IP : parties *réseau* et *hôte*

Pour chaque adresse, une partie des bits (les bits de poids fort, à
gauche) représente la partie « réseau », et l'autre partie (les bits de
poids faible, à droite) représente la partie « hôte » c'est-à-dire la
machine du réseau.

Par exemple, si les 3 premiers octets représentent la partie *réseau* et
le dernier la partie *hôte*, on obtient le découpage suivant :

|Réseau                       |   Hôte|
|---------------------------- |-------------|
|11000001 00110111 11011101   |   00111110|
|193.55.221                   |   62|

✍️ **Q1** : Si la partie réseau occupe les 3 premiers octets, quel est
le nombre d'hôtes possibles pour le réseau en question ?

✍️ **Q2** : Et si la partie réseau occupe les 28 premiers bits ?


## Masque de sous-réseau

Le mécanisme permettant de situer la limite en la partie *réseau* et la
partie *hôte* s'appelle le **masque de sous-réseau** (en anglais :
*subnet mask*). C'est aussi une suite de 32 bits :

-   une série continue de `1` qui fixe la partie *réseau* (celle de
    gauche)
-   une série continue de `0` qui correspond à la partie *hôte*

**Exemple** : Dans le cas où les 3 premiers octets représentent la
partie *réseau*, alors le masque de sous-réseau est
`11111111.11111111.11111111.00000000` ou `255.255.255.0` en décimal.

✍️ **Q3** : Si la partie *réseau* d'un sous-réseau occupe les 28
permiers bits, donner le masque de sous-réseau en notations binaire et
décimale.

## Notation CIDR

Lorsque l'on donne l'adresse IP d'un (sous-)réseau, il faut donc
également donner le masque associé. On pourrait le donner en notation
binaire ou décimale, mais pour simplifier on donne généralement juste le
nombre de bits correspondant à la partie *réseau* : `X1.X2.X3.X4 /n`
signifie que les n premiers bits de poids forts de l'adresse IP
représentent la partie *réseau*, les bits suivants de poids faibles
représentent la partie *hôte*.

> Cette notation simplifiée s'appelle notation CIDR (*Classless
> Inter-Domain Routing*).

**Exemple** : le masque de sous-réseau
`11111111.11111111.11111111.00000000` (ou `255.255.255.0`) s'écrit donc
plus simplement `/24` car il y a 24 bits pour la partie *réseau*.

✍️ **Q4** : Déterminer la notation CIDR pour un sous-réseau dont le
masque est 255.255.255.240.

##Adresse réseau

L'**adresse réseau** permet de savoir si 2 machines peuvent communiquer
entre elles (directement). Si ces 2 machines ont une adresse réseau
identique, alors elles appartiennent au même réseau et elles peuvent
communiquer.

Cette adresse réseau est celle dont tous les bits de la partie *hôte*
sont à 0, autrement dit l'adresse IP la plus "basse" du réseau.

**Exemple** : si `193.55.221.62` est une machine d'un réseau dont le
masque est `/24`, alors l'adresse du réseau en question est :

-   `11000001 00110111 11011101 00000000` les 8 derniers bits pour
    l'hôte ont été mis à zéro
-   en décimal cela donne `193.55.221.0`.

Ainsi, le réseau en question se note `193.55.221.0 /24`.

## Adresse de diffusion

L'**adresse de diffusion** ou **broadcast** est celle utilisée pour
envoyer des paquets à *toutes* les machines du réseau.

Cette adresse de diffusion est celle dont les bits de la partie *hôte*
sont à 1, autrement dit l'adresse IP la plus "haute" du réseau.

**Exemple** : Le réseau `193.55.221.0 /24` a donc pour adresse de
diffusion `11000001 00110111 11011101 11111111` ou `193.55.221.255` en
décimal.

## Plage d'adresses machines

La plage d'adresses machines est l'ensemble des adresses que peut
prendre une machine sur le réseau. Comme l'adresse réseau et l'adresse
de diffusion sont déjà prises, il reste toutes les adresses entre les
deux pour les *machines* du réseau :

-   la première adresse possible pour une machine est donc celle qui
    suit l'adresse réseau
-   la dernière adresse possible pour une machine est donc celle qui
    précède l'adresse de diffusion

**Exemple** : Les machines sur le réseau `193.55.221.0 /24` ont des
adresses IP variant de `193.55.221.1` (la première) à `193.55.221.254`
(la dernière).

✍️ **Q5** : Une machine d'adresse IP `112.133.102.41` appartient à un
réseau dont le masque est `/24` (c'est-à-dire `255.255.255.0`).

1.  Donner en notation binaire et en notation décimale, l'adresse
    réseau et l'adresse de diffusion du réseau.
2.  Combien de machines peut-on connecter dans ce réseau ? Quelle est
    leur plage d'adresses ?

✍️ **Q6** : Combien de machines peut-on connecter sur un réseau dont le
masque est `255.255.240.0` ?

✍️ **Q7** : On installe 10 machines sur un réseau local. L'adresse IP
`172.16.29.35` avec le masque `255.255.255.240` (soit `/28`) est
attribuée à une de ces machines.

1.  Combien d'hôtes peut-on placer dans le réseau où est située cette
    machine ?
2.  Dans quel réseau (préciser l'adresse) sont situées ces machines ?
3.  Pour ce réseau, donnez la première et la dernière adresse IP valide
    pour ces machines.
4.  Quelle est l'adresse de diffusion (*broadcast*) pour ce réseau ?

## Appartenance à un même réseau

On a dit précédemment que si 2 machines ont une adresse réseau
identique, alors elles appartiennent au même réseau et elles peuvent
communiquer.

Pour déterminer l'adresse réseau d'une adresse IP, il suffit
d'appliquer l'opérateur logique ET (ou AND en anglais) bit à bit entre
l'adresse IP et le masque de sous-réseau.

On rappelle l'opérateur ET a pour table de vérité :

|x  | y  | x ET y|
|---| ---| --------|
|0  | 0  | 0|
|1  | 0  | 0|
|0  | 1  | 0|
|1  | 1  | 1|

**Exemple** : Pour déterminer l'adresse réseau de la machine d'adresse
IP `193.55.221.62` avec le masque `255.255.255.0` :

|Adresse IP (d'une machine)   |`11000001.00110111.11011101.00111110`  | 193.55.221.62|
|-----------------------------| --------------------------------------- |---------------|
|Masque                       | `11111111.11111111.11111111.00000000` |  255.255.255.0|
|Adresse réseau               | `11000001.00110111.11011101.00000000` |  193.55.221.0|

✍️ **Q8** : Un réseau local contient une machine d'adresse IP
`192.168.0.1` avec le masque `/20`. La machine d'adresse IP
`192.168.1.3` appartient-elle au même réseau ? *Vous comparerez les
adresses réseaux de ces deux machines pour répondre*.

## 💻 Partie programmation

L'objectif de cette partie est d'écrire une fonction
`meme_sous_reseau(ip_a, ip_b, masque)` qui renvoie un booléen indiquant
si les machines A et B font partie du même sous-réseau.

Cette partie est à traiter dans Capytale : [https://capytale2.ac-paris.fr/web/c/aa58-1299451](https://capytale2.ac-paris.fr/web/c/aa58-1299451).

On rappelle quelques instructions qui pourront s'avérer utiles :

```python
    >>> bin(45)
    '0b101101'
    >>> chaine = "bonjour à tous !"
    >>> chaine.split(' ')  # on sépare la chaîne selon le caractère espace
    ['bonjour', 'à', 'tous', '!']
```

```python
    def et_logique(bit1, bit2):
        """
        Renvoie le résultat de l'opération logique bit1 ET bit2.
        
        Entrées : deux string d'1 caractère ('0' ou '1')
        Sortie : string 
        """
        # à vous de jouer !
        pass

    def test_et_logique():
        assert et_logique('0', '0') == '0'
        assert et_logique('0', '1') == '0'
        assert et_logique('1', '0') == '0'
        assert et_logique('1', '1') == '1'
        

    def entier_en_mot_binaire(entier, longueur_mot_binaire):
        """
        Renvoie un mot binaire correspondant à l'entier.
        
        Entrées :
            entier : int
            longueur_mot_binaire : int de longueur supérieure ou égale au nombre de bits de nécessaires
        pour convertir entier en base 2
        
        Sortie : string de longueur longueur_mot_binaire            
        """
        # à vous de jouer !
        pass

    def test_entier_en_mot_binaire():
        assert entier_en_mot_binaire(1, 8) == '00000001'
        assert entier_en_mot_binaire(192, 8) == '11000000'
        assert entier_en_mot_binaire(168, 8) == '10101000'


    def masque_en_mot_binaire(masque):
        """
        Renvoie la conversion du masque en un mot binaire.
        
        Entrée : masque (int)
        Sortie : string de 32 caractères
        """
        # à vous de jouer !
        pass

    def test_masque_en_mot_binaire():
        assert masque_en_mot_binaire(24) == '11111111111111111111111100000000'
        


    def ip_en_liste(ip):
        """
        Renvoie une liste dont les éléments sont les 4 octets de l'adresse ip.
        
        Entrée : ip (string) 
        Sortie : liste d'entiers
        """
        # à vous de jouer !
        pass

    def test_ip_en_liste():
        assert ip_en_liste('192.168.0.1') == [192, 168, 0, 1]
        
        

    def ip_en_mot_binaire(ip):
        """
        Renvoie la conversion d'une ip en un mot binaire.
        
        Entrée : string contenant une IP (ex "192.168.0.1")
        Sortie : string de 32 caractères
        """
        # à vous de jouer !
        pass
        
    def test_ip_en_mot_binaire():
        assert ip_en_mot_binaire("192.168.0.1") == '11000000101010000000000000000001'
        


    def adresse_reseau_ip(ip, masque):
        """
        Renvoie l'adresse réseau de l'adresse ip avec le masque masque.
        
        Entrées :
            ip : string contenant une IP (ex "192.168.0.1")
            masque : entier du masque en notation CIDR (ex : 24)
        Sortie : string de 32 caractères    
        """
        # à vous de jouer !
        pass

           
    def test_adresse_reseau_ip():
        assert adresse_reseau_ip("192.168.0.1", 24) == '11000000101010000000000000000000'
        assert adresse_reseau_ip("192.168.1.3", 24) == '11000000101010000000000100000000'
        assert adresse_reseau_ip("192.168.0.1", 20) == '11000000101010000000000000000000'
        assert adresse_reseau_ip("192.168.1.3", 20) == '11000000101010000000000000000000'
        


    def meme_sous_reseau(ip_a, ip_b, masque):
        """
        Renvoie un booléen indiquant si ip_a et ip_b sont dans un même réseau de masque masque.
        
        Entrées :
        ip_a:  string contenant une IP (ex "192.168.0.1")
        ip_b : string contenant une IP
        masque : entier du masque en notation CIDR (ex : 24)
        """
        # à vous de jouer !
        pass

    def test_meme_sous_reseau():
        assert meme_sous_reseau("192.168.0.1", "192.168.1.3", 24) == False
        assert meme_sous_reseau("192.168.0.1", "192.168.1.3", 20) == True
        assert meme_sous_reseau("192.168.0.1", "192.168.0.3", 30) == True
```

**Source :** [https://info-mounier.fr/terminale_nsi/archi_se_reseaux/ip_reseau_masque.php](https://info-mounier.fr/terminale_nsi/archi_se_reseaux/ip_reseau_masque.php)