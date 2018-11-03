# File Manipulation

```python
file_variable = open("file_name.txt", "w")

file_variable.write("Hello World")

file_variable.close()
```

Program need to close the file. Because when you write something, it keeps it in buffer, not the actual file. By closing it, the Python script will save the buffer (write) to the according file

```python
file1 = open("test.txt", "r+w")
file2 = open("test2.txt", "r+w")

file1.write("Hello")
file2.write("Hello")

file1.close()
```
The file `file2` will not be saved. Because the file is not closed. Thus the program is not saved.

### Another way to write file
```python
with open("file_name.txt", "w") as file_variable:
    file_variale.write("Hello World")
```
By using `with` and `as` keyword, this script will automaticaly close the program
