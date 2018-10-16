# and, or , not
and, or, not are the logical operators in Python. and will result into True only if both the operands are True. The truth table for and is given below:

### Truth table for and
A	B	A and B
True	True	True
True	False	False
False	True	False
False	False	False
or will result into True if any of the operands is True. The truth table for or is given below:

### Truth table for or
A	B	A or B
True	True	True
True	False	True
False	True	True
False	False	False
not operator is used to invert the truth value. The truth table for not is given below:

### Truth tabel for not
A	not A
True	False
False	True
some example of their usage are given below

```python
>>> True and False
False
>>> True or False
True
>>> not False
True
```