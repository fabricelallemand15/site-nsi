let is_prime n =
  if n = 2 then true
  else if n < 2 || n mod 2 = 0 then false
  else begin
    let reponse = ref true in 
    for k = 3 to 1 + int_of_float (sqrt (float_of_int n)) do
        if n mod k = 0 then
            reponse := false;
    done;
    !reponse;
    end;
;;

let str1 = string_of_bool (is_prime 131);;
print_string "Test avec 131 : ";;
print_string str1;;
print_newline ();;
let str2 = string_of_bool (is_prime 25);;
print_string "Test avec 25 : ";;
print_string str2;;