program primes;

function is_prime(n: integer): boolean;
var
  k: integer;
begin
  if n = 2 then
    is_prime := true
  else if (n < 2) or (n mod 2 = 0) then
    is_prime := false
  else begin
    is_prime := true; k := 3;
    while k <= sqrt(n) + 1 do begin
      if n mod k = 0 then begin
       is_prime := false; exit
      end;
      k := k + 2
    end
  end
end;

begin
  writeln('Test avec 131 : ', is_prime(131));
  write('Test avec 25 : ', is_prime(25))
end.
