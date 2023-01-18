def add_3_bits(a, b, c) :
    unite = int(
        (a and not b and not c) or 
        (not a and b and not c) or
        (not a and not b and c) or
        (a and b and c))
    deuzaine = int(
        (a and b) or 
        (b and c) or 
        (a and c))
    return str(deuzaine)+str(unite)

assert add_3_bits(0,0,0)=="00"
assert add_3_bits(1,0,0)=="01"
assert add_3_bits(0,1,0)=="01"
assert add_3_bits(0,0,1)=="01"
assert add_3_bits(1,1,0)=="10"
assert add_3_bits(1,0,1)=="10"
assert add_3_bits(0,1,1)=="10"
assert add_3_bits(1,1,1)=="11"
print("C'est parfait !")