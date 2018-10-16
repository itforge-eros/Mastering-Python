# except, raise, try
except, raise, try are used with exceptions in Python.

Exceptions are basically errors that suggests something went wrong while executing our program. IOError, ValueError, ZeroDivisionError, ImportError, NameError, TypeError etc. are few examples of exception in Python. try...except blocks are used to catch exceptions in Python.

We can raise an exception explicitly with the raise keyword. Following is an example:
```python
def reciprocal(num):
    try:
        r = 1/num
    except:
        print('Exception caught')
        return
    return r

print(reciprocal(10))
print(reciprocal(0))
```
```
Output

0.1
Exception caught
None
```
Here, the function reciprocal() returns the reciprocal of the input number.

When we enter 10, we get the normal output of 0.1. But when we input 0, a ZeroDivisionError is raised automatically.

This is caught by our try…except block and we return None. We could have also raised the ZeroDivisionError explicitly by checking the input and handled it elsewhere as follows:
```python
if num == 0:
    raise ZeroDivisionError('cannot divide')
```