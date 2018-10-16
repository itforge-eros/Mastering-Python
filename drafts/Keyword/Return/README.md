# return
return statement is used inside a function to exit it and return a value.

If we do not return a value explicitly, None is returned automatically. This is verified with the following example.
```python
def func_return():
    a = 10
    return a

def no_return():
    a = 10

print(func_return())
print(no_return())
```
```
Output

10
None
```