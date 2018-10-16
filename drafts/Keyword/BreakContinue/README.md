# break, continue
break and continue are used inside for and while loops to alter their normal behavior.

break will end the smallest loop it is in and control flows to the statement immediately below the loop. continue causes to end the current iteration of the loop, but not the whole loop.

This can be illustrated with the following two examples:
```python
for i in range(1,11):
    if i == 5:
        break
    print(i)
```
```
Output

1
2
3
4
```
Here, the for loop intends to print numbers from 1 to 10. But the if condition is met when i is equal to 5 and we break from the loop. Thus, only the range 1 to 4 is printed.
```python
for i in range(1,11):
    if i == 5:
        continue
    print(i)
```
```
Output

1
2
3
4
6
7
8
9
10
```
Here we use continue for the same program. So, when the condition is met, that iteration is skipped. But we do not exit the loop. Hence, all the values except 5 is printed out.