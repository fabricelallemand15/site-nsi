# solution 1

# def occurrences(texte: str) -> dict:
#     d = {}
#     liste_mots = texte.split()
#     for mot in liste_mots:
#         n = liste_mots.count(mot)
#         d[mot] = n
#     return d

# solution 2 : en une ligne

def occurrences(texte: str) -> dict:
    return {mot:texte.split().count(mot) for mot in texte.split()}

# solution 3 : plus artisanale

# def occurrences(texte: str) -> dict:
#     d = {}
#     liste_mots = texte.split()
#     for mot in liste_mots:
#         if mot in d:
#             d[mot] += 1
#         else:
#             d[mot] = 1
#     return d