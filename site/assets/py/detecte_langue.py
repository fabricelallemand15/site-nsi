import matplotlib.pyplot as plt
import random as rd
from bs4 import BeautifulSoup
import requests

alphabet = "abcdefghijklmnopqrstuvwxyz"
signature = {
    "Français":   ["e", "s", "a", "i", "t", "n", "r", "u", "o", "l"],
    "Anglais":    ["e", "t", "a", "o", "i", "n", "s", "h", "r", "d"],
    "Allemand":   ["e", "n", "i", "s", "r", "a", "t", "d", "h", "u"],
    "Espagnol":   ["e", "a", "o", "s", "r", "n", "i", "d", "l", "c"],
    "Italien":    ["e", "a", "i", "o", "n", "l", "r", "t", "s", "c"],
    "Portugais":  ["a", "e", "o", "s", "r", "i", "d", "m", "n", "t"],
    "Espéranto":  ["a", "i", "e", "o", "n", "l", "s", "r", "t", "k"],
    "Polonais":   ["a", "i", "o", "e", "z", "n", "r", "w", "s", "t"],
    "Néerlandais":["e", "n", "a", "t", "i", "r", "o", "d", "s", "l"]
}

def analyze_text(text: str) -> dict:
    """retourne un dictionnaire indiquant la fréquence d'apparition
    des différentes lettres présentent dans le texte"""
    dico = {lettre:0 for lettre in alphabet}
    nb_lettres = len(text)
    for char in text:
        if char in alphabet:
            dico[char] += 1
    for lettre in dico:
        dico[lettre] = dico[lettre] / nb_lettres
    return dico

def analyze_file(file: str) -> dict:
    """retourne un dictionnaire indiquant la fréquence d'apparition
    des différentes lettres présentent dans le fichier"""
    f = open(file, mode="r", encoding="utf-8")
    text = f.read()
    f.close()
    return analyze_text(text)

def draw_histo(file: str):
    """affiche l'histogramme des fréquences d'apparition des lettres
    dans le fichier"""
    dico = analyze_file(file)
    fig, ax = plt.subplots()
    # Construction des listes d'abscisses et d'ordonnées
    liste_lettres = list(alphabet)
    hauteurs = [dico[lettre] for lettre in liste_lettres if lettre in dico]
    bar_colors = [(rd.random(), rd.random(), rd.random(), 1) for k in range(len(alphabet))]
    ax.bar(liste_lettres, hauteurs, color = bar_colors)
    ax.set_ylabel('Fréquence')
    ax.set_title("Fréquences d'apparition des lettres")
    print(dico["w"])
    plt.show()

def signature_text(text: str) -> list:
    """retourne la liste des dix lettres les plus présentes dans le texte"""
    dico = analyze_text(text)
    sign = []
    while len(sign) < 10:
        # recherche de la lettre la plus fréquente
        liste = list(dico.items()) # liste des couples clés:valeurs
        char_max, freq_max = liste[0]
        for char in alphabet:
            if char in dico:
                if dico[char] > freq_max:
                    char_max, freq_max = char, dico[char]
        # ajout de la lettre la plus fréquente
        sign.append(char_max)
        # on l'enlève du dictionnaire
        dico.pop(char_max)
    return sign

def distance_listes(l1: list, l2: list) -> float:
    """retourne la "distance" entre les deux listes de même longueur
    ces listes étant formées de caractères"""
    assert len(l1) == len(l2), "Je ne peux pas calculer la distance entre deux listes de longueurs différentes !"
    d = 0
    for k in range(len(l1)):
        if l1[k] in l2:
            d = d + abs(k-l2.index(l1[k]))
        else:
            d = d + 10
    return d

def detecte_langue(text: str):
    """retourne la langue la plus probable dans laquelle le texte est écrit"""
    sign_text = signature_text(text)
    d = 100
    reponse = ""
    for langue in signature:
        if distance_listes(sign_text, signature[langue]) < d:
            d = distance_listes(sign_text, signature[langue])
            reponse = langue
    return reponse

def parse_url(url: str) -> str:
    texte = ""
    page_web = requests.get(url)
    html = BeautifulSoup(page_web.text, "html.parser")
    # on ne retient que le contenu des balises <p>
    for paragraphe in html.find_all("p"):
        texte += paragraphe.text
    return texte

def detecte_langue_url(url: str) -> str:
    texte = parse_url(url)
    return detecte_langue(texte)


# draw_histo("texteDE.txt")

# # Vérification des signatures

print(signature["Français"][0])
liste_fichiers = ["texteDE.txt", "texteEN.txt", "texteES.txt", "texteESP.txt", "texteFR.txt", "texteIT.txt", "texteNL.txt", "textePL.txt", "textePT.txt"]
for file in liste_fichiers:
    f = open(file, mode="r", encoding="utf-8")
    text = f.read()
    f.close()
    print(file, detecte_langue(text))

urlFR = "http://fr.wikipedia.org/wiki/Bataille_de_la_Clearwater"
urlEN = "https://en.wikipedia.org/wiki/Battle_of_the_Clearwater"
urlIT = "https://www.lastampa.it/esteri/2022/10/10/news/guerra_russiaucraina_putin_lattacco_al_pontee_terrorismo_degli_007_di_kiev_medvedev_la_risposta_russa_e_la_distruz-11036824/?ref=LSHBBC-BH-I0-PM6-S1-T1"
urlPL = "https://www.gazetaprawna.pl/wiadomosci/swiat/artykuly/8564676,atak-na-most-krymski-w-moskwie-zmiana-wladzy-w-armii-rosyjskiej-wojna-w-ukrainie.html"
urlES = "https://www.elmundo.es/internacional/2022/10/10/6343b3edfc6c836c0e8b4575.html"
urlDE = "https://www.zeit.de/politik/deutschland/2022-10/wahl-niedersachsen-2022-waehlernachbefragung"
urlPT = "https://www.dn.pt/dinheiro/verbas-do-fundo-de-compensacao-vao-apoiar-rendas-de-jovens-trabalhadores-15238120.html"
urlESP = "https://zamenhof.life/eo/"
print(detecte_langue_url(urlESP))