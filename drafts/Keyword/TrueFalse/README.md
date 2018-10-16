# True, False, None
## True and False
True and False are truth values in Python. They are the results of comparison operations or logical (Boolean) operations in Python. For example:
```python
>>> 1 == 1
True
>>> 5 > 3
True
>>> True or False
True
>>> 10 <= 1
False
>>> 3 > 7
False
>>> True and False
False
```
Here we can see that the first three statements are true so the interpreter returns True and returns False for the remaining three statements. True and False in python is same as 1 and 0. 

This can be justified with the following example:
```python
>>> True == 1
True
>>> False == 0
True
>>> True + True
2
```

None is a special constant in Python that represents the absence of a value or a null value.

It is an object of its own datatype, the NoneType. We cannot create multiple None objects but can assign it to variables. These variables will be equal to one another.

We must take special care that None does not imply False, 0 or any empty list, dictionary, string etc. For example:

>>> None == 0
False
>>> None == []
False
>>> None == False
False
>>> x = None
>>> y = None
>>> x == y
True
Void functions that do not return anything will return a None object automatically. None is also returned by functions in which the program flow does not encounter a return statement. For example:


def a_void_function():
    a = 1
    b = 2
    c = a + b

x = a_void_function()
print(x)
Output


## None
This program has a function that does not return a value, although it does some operations inside. So when we print x, we get None which is returned automatically (implicitly). Similarly, here is another example:

def improper_return_function(a):
    if (a % 2) == 0:
        return True

x = improper_return_function(3)
print(x)
Output

None
Although this function has a return statement, it is not reached in every case. The function will return True only when the input is even.

If we give the function an odd number, None is returned implicitly.