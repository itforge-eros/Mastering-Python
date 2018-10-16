# in
in is used to test if a sequence (list, tuple, string etc.) contains a value. It returns True if the value is present, else it returns False. For example:
```python
>>> a = [1, 2, 3, 4, 5]
>>> 5 in a
True
>>> 10 in a
False
```
The secondary use of in is to traverse through a sequence in a for loop.
```python
for i in 'hello':
    print(i)
```
```
Output

h
e
l
l
o
```