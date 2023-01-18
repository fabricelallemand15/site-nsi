from random import randint


def maximum(a, b):
    if a > b:
        return a
    else:
        return b


@trace
def maximum_tab(tab):
    if len(tab) == 1:
        return tab[0]
    else:
        return maximum(tab[0], maximum_tab(tab[1:]))


mon_tab = []
for i in range(20):
    mon_tab.append(randint(-100, 100))
print(mon_tab)
print(maximum_tab(mon_tab))
