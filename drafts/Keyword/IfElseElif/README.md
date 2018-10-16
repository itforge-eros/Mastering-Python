# if, else, elif
if, else, elif are used for conditional branching or decision making.

When we want to test some condition and execute a block only if the condition is true, then we use if and elif. elif is short for else if. else is the block which is executed if the condition is false. This will be clear with the following example:

```python
def if_example(a):
    if a == 1:
        print('One')
    elif a == 2:
        print('Two')
    else:
        print('Something else')

if_example(2)
if_example(4)
if_example(1)
```
```
Output

Two
Something else
One
```
Here, the function checks the input number and prints the result if it is 1 or 2. Any input other than this will cause the else part of the code to execute.