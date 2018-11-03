# Built-In Functions
ในภาษา Python นั้นก็จะมีสิ่งที่เรียกว่า Built-in Function หรือฟังก์ชันที่ทาง Python มีพร้อมให้อยู่แล้วนั่นเอง ซึ่งสามารถอ่านการใช้งานทั้งหมดได้จากที่นี่ครับ
[https://docs.python.org/3/library/functions.html](https://docs.python.org/3/library/functions.html)

การที่จะตั้งชื่อฟังก์ชั่นนั้นไม่ได้ตั้งชื่ออะไรก็ได้ โดยชื่อฟังก์ชันที่ Python จองไว้ไม่ให้ตั้งชื่อเหมือน จะมีดังนี้ครับ

และเช่นเดียวกัน เราก็สามารถใช้ฟังก์ชันที่ Python ทำไว้แล้วได้เช่นเดียวกัน โดยการเรียกเหมือนกับฟังก์ชั่นธรรมดาเลย

|  |  |  |  |  |
| ------------- | ----------- | ------------ | ---------- | -------------- |
| abs()         | dict()      | help()       | min()      | setattr()      |
| all()         | dir()       | hex()        | next()     | slice()        |
| any()         | divmod()    | id()         | object()   | sorted()       |
| ascii()       | enumerate() | input()      | oct()      | staticmethod() |
| bin()         | eval()      | int()        | open()     | str()          |
| bool()        | exec()      | isinstance() | ord()      | sum()          |
| bytearray()   | filter()    | issubclass() | pow()      | super()        |
| bytes()       | float()     | iter()       | print()    | tuple()        |
| callable()    | format()    | len()        | property() | type()         |
| chr()         | frozenset() | list()       | range()    | vars()         |
| classmethod() | getattr()   | locals()     | repr()     | zip()          |
| compile()     | globals()   | map()        | reversed() | \__import__()   |
| complex()     | hasattr()   | max()        | round()    |                |
| delattr()     | hash()      | memoryview() | set()      |                |

### Using abs()
คือใช้ ค่าสมบูรณ์ ตามค่าของคณิตศาสตร์ ซึ่ง `abs()` จะ return ค่าท่างคณิตศาสตร์ออกมาเป็นค่าบวก<br>

```python
print(abs(32))  # แสดงค่า 32
print(abs(-32)) # แสดงค่า 32
```

### Using chr()
คือการเแปลงตัวเลข (จำนวนเต็ม) เป็นตัวอักษรโดยอ้างอิงจาก ASCII encoding

```python
print(chr(65)) # แสดงค่า 'A'
print(chr(97)) # แสดงค่า 'a'
```

### Using ord()
คือการแปลงจากตัวอักษร (character) เป็นเลขจำนวนเต็มโดยอ้างอิงจาก ASCII encoding

```python
print(ord('A')) # แสดงค่า 65
print(ord('a')) # แสดงค่า 97
```

### Using len()
เป็นการหาค่าความยาวของตัวแปรชนิด Sequence ต่าง ๆ อย่าง เช่น String, List, Tuple, Dict

```python
print(len("Kumamon")) # แสดงค่า 7
print(len([1, 1, 2])) # แสดงค่า 3
```

### Using max()
จะ return ค่าที่มากที่สุด จาก argument ตั้งแต่ 2 ตัวขึ้นไป หรือ argument ประเภท sequence ตั้งแต่ 1 ตัวขึ้นไป

```python
print(max(64, 32, 128)) # แสดงค่า 128
print(max([16, 8, 4]))  # แสดงค่า 16
```

### Using min()
จะ return ค่าที่มากที่สุด จาก argument ตั้งแต่ 2 ตัวขึ้นไป หรือ argument ประเภท sequence ตั้งแต่ 1 ตัวขึ้นไป

```python
print(min(64, 32, 128)) # แสดงค่า 32
print(min([16, 8, 4]))  # แสดงค่า 4
```

### Using pow()
เป็นการคำนวนหาค่ายกกำลัง

```python
print(pow(2, 8))  # แสดงค่า 256
print(pow(10, 4)) # แสดงค่า 10000
```

### Using round()
เป็น Function ที่จะ return ค่าที่มีการปัดเศษเรียบร้อยแล้ว โดยที่ ถ้าเศษมีค่ามากกว่าหรือเท่ากับ 5 จะทำการปัดค่าขึ้น แต่ถ้าน้อยกว่า 5 จะทำการปัดค่าลง

```python
print(round(3.14159265))    # แสดงค่า 3
print(round(3.14159265, 2)) # แสดงค่า 3.14
print(round(3.14159265, 4)) # แสดงค่า 3.1416
```

### Using str() float() int() bool()
เป็น function ที่ใช้ในการทำ type casting ที่เราได้ผ่านมาใน lecture ก่อนหน้านี้
```python
print(str(3.14))     # แสดงค่า "3.14"
print(float("3.14")) # แสดงค่า 3.14
print(int(3.14))     # แสดงค่า 3
print(bool(1))       # แสดงค่า True
```
