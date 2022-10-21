from ast import For


matriz = [
    [1, 2, 3, 4, 5 ],
    [6, 7, 8, 9, 10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],
]



for i in range(len(matriz)):  
    for j in range(len(matriz)):
        if (i+j) == (len(matriz)-1):
            print(matriz[i][j])
    
    