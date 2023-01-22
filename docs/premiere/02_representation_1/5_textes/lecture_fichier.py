from io import open

f = open("texte_ascii.txt")
for ligne in f.readlines():
    print(ligne)
f.close()

print("---------")

f = open("texte_utf-8.txt")
for ligne in f.readlines():
    print(ligne)
f.close()
