# nonlocal
The use of nonlocal keyword is very much similar to the global keyword. nonlocal is used to declare that a variable inside a nested function (function inside a function) is not local to it, meaning it lies in the outer inclosing function. If we need to modify the value of a non-local variable inside a nested function, then we must declare it with nonlocal. Otherwise a local variable with that name is created inside the nested function. Following example will help us clarify this.
```python
def outer_function():
    a = 5
    def inner_function():
        nonlocal a
        a = 10
        print("Inner function: ",a)
    inner_function()
    print("Outer function: ",a)

outer_function()
```
```
Output

Inner function:  10
Outer function:  10
```
Here, the inner_function() is nested within the outer_function.

The variable a is in the outer_function(). So, if we want to modify it in the inner_function(), we must declare it as nonlocal. Notice that a is not a global variable.

Hence, we see from the output that the variable was successfully modified inside the nested inner_function(). The result of not using the nonlocal keyword is as follows:
```python
def outer_function():
    a = 5
    def inner_function():
        a = 10
        print("Inner function: ",a)
    inner_function()
    print("Outer function: ",a)

outer_function()
```
```
Output

Inner function:  10
Outer function:  5
```
Here, we do not declare that the variable a inside the nested function is nonlocal. Hence, a new local variable with the same name is created, but the non-local a is not modified as seen in our output.

