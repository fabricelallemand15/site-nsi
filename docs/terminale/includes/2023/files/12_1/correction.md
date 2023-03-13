```python linenums='1'
def ajoute(cle, a): 
    if a is None:
        a = ABR(None, cle, None)
    elif cle > a.cle:
        a.droit = ajoute(cle, a.droit)
    else:
        a.gauche = ajoute(cle, a.gauche)
    return a
```