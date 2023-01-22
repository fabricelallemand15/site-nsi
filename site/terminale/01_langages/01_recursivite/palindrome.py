def palindrome(mot: str) -> bool:
    if len(mot) == 0 or len(mot) == 1:
        return True
    else:
        n = len(mot)
        return mot[0] == mot[n-1] and palindrome(mot[1:n-1])