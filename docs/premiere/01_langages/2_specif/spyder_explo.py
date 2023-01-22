import statistics


def mot_le_plus_long(mot1: str, mot2: str, mot3: str) -> str:
    """retourne le mot le plus long parmi les trois
    mots donnés en arguments"""
    if len(mot1) >= len(mot2):
        if len(mot1) >= len(mot3):
            mot = mot1
        else:
            mot = mot3
    elif len(mot2) >= len(mot3):
        mot = mot2
    else:
        mot = mot3
    return mot


def test_fonction():
    assert mot_le_plus_long("a", "aa", "aaa") == "aaa"
    assert mot_le_plus_long("aa", "a", "aaa") == "aaa"
    assert mot_le_plus_long("aaa", "aa", "a") == "aaa"
    assert mot_le_plus_long("aaa", "a", "aa") == "aaa"
    assert mot_le_plus_long("a", "aaa", "aa") == "aaa"
    assert mot_le_plus_long("aa", "aaa", "a") == "aaa"
    print("Tous les tests sont réussis !")


a = "Casserole"
b = "anticonstitutionnellement"
c = "Voiture"
print(mot_le_plus_long(a, b, c))
a = statistic
