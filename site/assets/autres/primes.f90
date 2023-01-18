PROGRAM primes

    PRINT*, "Test avec 131 : ", is_prime(131)
    PRINT*, "Test avec 25 : ", is_prime(25)

CONTAINS

    FUNCTION is_prime(n)
        LOGICAL :: is_prime
        INTEGER, INTENT(IN) :: n
        INTEGER :: k
    
        IF(n==2) THEN
        is_prime = .TRUE.
        ELSE IF(n < 2 .OR. MOD(n,2) == 0) THEN
        is_prime = .FALSE.
        ELSE
        is_prime = .TRUE.
        DO k = 3, INT(SQRT(REAL(n))) + 1, 2
            IF(MOD(n,k) == 0) THEN
                is_prime = .FALSE.
                EXIT
            END IF
        END DO
        END IF
    END FUNCTION is_prime

END PROGRAM primes