# lambda
lambda is used to create an anonymous function (function with no name). It is an inline function that does not contain a return statement. It consists of an expression that is evaluated and returned. For example:
```python
a = lambda x: x*2
for i in range(1,6):
    print(a(i))
```
```
Output

2
4
6
8
10
```
Here, we have created an inline function that doubles the value, using the lambda statement. We used this to double the values in a list containing 1 to 5.