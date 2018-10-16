# yield
yield is used inside a function like a return statement. But yield returns a generator.

Generator is an iterator that generates one item at a time. A large list of value will take up a lot of memory. Generators are useful in this situation as it generates only one value at a time instead of storing all the values in memory. For example,
```python
>>> g = (2**x for x in range(100))
```
will create a generator g which generates powers of 2 up to the number two raised to the power 99. We can generate the numbers using the next() function as shown below.
```python
>>> next(g)
1
>>> next(g)
2
>>> next(g)
4
>>> next(g)
8
>>> next(g)
16
```
And so on… This type of generator is returned by the yield statement from a function. Here is an example.
```python
def generator():
    for i in range(6):
        yield i*i

g = generator()
for i in g:
    print(i)
```
```
Output

0
1
4
9
16
25
```
Here, the function generator() returns a generator that generates square of numbers from 0 to 5. This is printed in the for loop.