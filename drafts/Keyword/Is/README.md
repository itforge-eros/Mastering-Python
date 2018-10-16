# is
is is used in Python for testing object identity. While the == operator is used to test if two variables are equal or not, is is used to test if the two variables refer to the same object.

It returns True if the objects are identical and False if not.
```python   
>>> True is True
True
>>> False is False
True
>>> None is None
True
```
We know that there is only one instance of True, False and None in Python, so they are identical.

```python
>>> [] == []
True
>>> [] is []
False
>>> {} == {}
True
>>> {} is {}
False
```
An empty list or dictionary is equal to another empty one. But they are not identical objects as they are located separately in memory. This is because list and dictionary are mutable (value can be changed).

```python
>>> '' == ''
True
>>> '' is ''
True
>>> () == ()
True
>>> () is ()
True
```
Unlike list and dictionary, string and tuple are immutable (value cannot be altered once defined). Hence, two equal string or tuple are identical as well. They refer to the same memory location.