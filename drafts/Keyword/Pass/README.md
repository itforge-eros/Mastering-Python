# pass
pass is a null statement in Python. Nothing happens when it is executed. It is used as a placeholder.

Suppose we have a function that is not implemented yet, but we want to implement it in the future. Simply writing,
```python
def function(args):
```
in the middle of a program will give us IndentationError. Instead of this, we construct a blank body with the pass statement.
```python
def function(args):
    pass
```
We can do the same thing in an empty class as well.
```python
class example:
    pass
```