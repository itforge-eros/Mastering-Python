# finally
finally is used with try…except block to close up resources or file streams.

Using finally ensures that the block of code inside it gets executed even if there is an unhandled exception. For example:
```python
try:
    Try-block
except exception1:
    Exception1-block
except exception2:
    Exception2-block
else:
    Else-block
finally:
    Finally-block
```
Here if there is an exception in the Try-block, it is handled in the except or else block. But no matter in what order the execution flows, we can rest assured that the Finally-block is executed even if there is an error. This is useful in cleaning up the resources.

