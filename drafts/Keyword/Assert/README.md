# assert
assert is used for debugging purposes.

While programming, sometimes we wish to know the internal state or check if our assumptions are true. assert helps us do this and find bugs more conveniently. assert is followed by a condition.

If the condition is true, nothing happens. But if the condition is false, AssertionError is raised. For example:
```python
>>> a = 4
>>> assert a < 5
>>> assert a > 5
Traceback (most recent call last):
  File "<string>", line 301, in runcode
  File "<interactive input>", line 1, in <module>
AssertionError
```

For our better understanding, we can also provide a message to be printed with the AssertionError.

```python
>>> a = 4
>>> assert a > 5, "The value of a is too small"
Traceback (most recent call last):
  File "<string>", line 301, in runcode
  File "<interactive input>", line 1, in <module>
AssertionError: The value of a is too small
```
At this point we can note that,

assert condition, message
is equivalent to,

```python
if not condition:
    raise AssertionError(message)
```