Imports System

Module Program
    Function is_prime(n)
        If n = 2 Then
            is_prime = True
        ElseIf n < 2 Or n Mod 2 = 0 Then
            is_prime = False
        Else
            is_prime = True
            For k = 3 To Int(Math.Sqrt(n)) + 1 Step 2
                If n Mod k = 0 Then
                    is_prime = False
                    Exit For
                End If
            Next
        End If
    End Function

    Sub Main(args As String())
        Console.WriteLine(is_prime(131))
        Console.WriteLine(is_prime(25))
    End Sub
End Module
