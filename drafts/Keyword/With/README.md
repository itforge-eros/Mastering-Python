# with
with statement is used to wrap the execution of a block of code within methods defined by the context manager.

Context manager is a class that implements `__enter__` and `__exit__` methods. Use of with statement ensures that the `__exit__` method is called at the end of the nested block. This concept is similar to the use of try…finally block. Here, is an example.
```python
with open('example.txt', 'w') as my_file:
    my_file.write('Hello world!')
```
This example writes the text Hello world! to the file example.txt. File objects have `__enter__` and `__exit__` method defined within them, so they act as their own context manager.

First the `__enter__` method is called, then the code within with statement is executed and finally the `__exit__` method is called. `__exit__` method is called even if there is an error. It basically closes the file stream.