# del
del is used to delete the reference to an object. Everything is object in Python. We can delete a variable reference using del
```python
>>> a = b = 5
>>> del a
>>> a
Traceback (most recent call last):
  File "<string>", line 301, in runcode
  File "<interactive input>", line 1, in <module>
NameError: name 'a' is not defined
>>> b
5
```
Here we can see that the reference of the variable a was deleted. So, it is no longer defined. But b still exists.

del is also used to delete items from a list or a dictionary:

```python
>>> a = ['x','y','z']
>>> del a[1]
>>> a
['x', 'z']
``` 