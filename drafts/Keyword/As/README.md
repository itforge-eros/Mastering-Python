# as
as is used to create an alias while importing a module. It means giving a different name (user-defined) to a module while importing it.

As for example, Python has a standard module called math. Suppose we want to calculate what cosine pi is using an alias. We can do it as follows using as:

```
>>> import math as myAlias
>>>myAlias.cos(myAlias.pi)
-1.0
```

Here we imported the math module by giving it the name myAlias. Now we can refer to the math module with this name. Using this name we calculated cos(pi) and got -1.0 as the answer.