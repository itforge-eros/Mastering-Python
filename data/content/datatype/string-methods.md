# String Method

String Method คือเมธอดที่เป็นของคลาส String อาจมองเป็นชุดคำสั่งหรือลูกเล่นของคลาส String ก็ได้

ซึ่งเมธอดจะคล้ายกับการเรียกใช้ฟังก์ชัน แต่จะเป็นการเรียกผ่าน Object เท่านั้น โดยในที่นี้คือเราจะ "เรียกใช้งานเมธอดผ่าน String ที่เราได้สร้างไว้แล้ว" นั่นเอง

## Using .lower() .upper() .swapcase()
`.lower()`, `.upper()` และ `.swapcase()` เป็นเมธอดหนึ่งของ String ที่ใช้สำหรับการแปลงเปลี่ยน String และคืนค่ากลับมา

- `.lower()` ทำหน้าที่แปลง String เป็นตัวอักษรพิมพ์เล็กทั้งหมด
- `.upper()` ทำหน้าที่แปลง String เป็นตัวอักษรพิมพ์ใหญ่ทั้งหมด
- `.swapcase()` ทำหน้าสลับตัวอักษรทั้งหมดใน String โดยพิมพ์ใหญ่เป็นพิมพ์เล็ก และพิมพ์เล็กเป็นพิมพ์ใหญ่

```python
text = "Object-Oriented Programming"
return text.lower()    # Returns "object-oriented programming"
return text.upper()    # Returns "OBJECT-ORIENTED PROGRAMMING"
return text.swapcase() # Returns "oBJECT-oRIENTED pROGRAMMING"
```

## Using .capitalize() .title()
`.capitalize()` และ `.title()` เป็นเมธอดหนึ่งของ String ที่ใช้สำหรับการแปลงเปลี่ยน String และคืนค่ากลับมา

- `.capitalize()` จะทำการเปลี่ยนตัวอักษรตัวแรกของ String ให้เป็นตัวพิมพ์ใหญ่ และตัวอื่นเป็นพิมพ์เล็กทั้งหมด
- `.title()` จะทำการเปลี่ยนตัวอักษรตัวแรกของ "ทุกคำ" ใน String ให้เป็นตัวพิมพ์ใหญ่ และตัวอื่นเป็นพิมพ์เล็กทั้งหมด

```python
text = "pyThoN IS eASY!"
return text.capitalize() # Returns 'Python is easy!'
return text.title()      # Returns 'Python Is Easy!'

text = "LONdon brIdGE"
return text.capitalize() # Returns 'London bridge'
return text.title()      # Returns 'London Bridge'
```

## Using .isupper() & .islower()
`.isupper()` และ `.islower()` เป็นเมธอดหนึ่งของ String ไว้สำหรับตรวจสอบว่า String นั้น เป็นตัวอักษรพิมพ์ใหญ่ทั้งหมดหรือไม่ กับเป็นตัวอักษรพิมพ์เล็กทั้งหมดหรือไม่ ตามลำดับ โดยจะคืนค่าเป็น boolean

ซึ่งเงื่อนไขการตรวจสอบของเมธอดทั้งสองอย่างนี้คือ จะต้องประกอบไปด้วยตัวอักษรอย่างน้อย 1 ตัว และไม่มีตัวอีกษรเคสอื่นปนอยู่ด้วย

```python
text = "computer"
return text.islower() # Returns True
return text.isupper() # Returns False

text = "python3"
return text.islower() # Returns True
return text.isupper() # Returns False

text = "OOP"
return text.islower() # Returns False
return text.isupper() # Returns True

text = "USB-C"
return text.islower() # Returns False
return text.isupper() # Returns True

text = "Tokyo Japan"
return text.islower() # Returns False
return text.isupper() # Returns False

text = "???"
return text.islower() # Returns False
return text.isupper() # Returns False
```

## Using .isdigit() & .isalpha()
`.isdigit()` และ `.isalpha()` เป็นเมธอดหนึ่งของ String ไว้สำหรับตรวจสอบว่า String นั้น เป็นตัวเลขทั้งหมดหรือไม่ กับเป็นตัวอักษรทั้งหมดหรือไม่ ตามลำดับ โดยจะคืนค่าเป็น boolean

```python
text = "2018"
return text.isdigit() # Returns True
return text.isalpha() # Returns False

text = "Python"
return text.isdigit() # Returns False
return text.isalpha() # Returns True

text = "Thailand 4.0"
return text.isdigit() # Returns False
return text.isalpha() # Returns False
```

## Using .find()
`.find()` เป็นเมธอดหนึ่งของ String ซึ่งไว้สำหรับค้นหาตำแหน่งของ Sub-string ว่าอยู่ตำแหน่งใดของ String หลัก ถึงแม้พบมากกว่า 1 ตำแหน่ง ก็จะแสดงตำแหน่งแรกที่พบเสมอ หรือหากไม่พบจะคืนค่าเป็น -1

```python
var = "ABCDE"
return var.find("A") # Returns 0

var = "ABCDE"
return var.find("B") # Returns 1

var = "ABCDE"
return var.find("F") # Returns -1

var = "Kumamon is happy"
return var.find("mon") # Returns 4

var = "Kumamon is happy, Kumamon is happy"
return var.find("mon") # Returns 4
```

## Using .count()
`.count()` เป็นเมธอดหนึ่งของ String ซึ่งไว้สำหรับใช้นับจำนวน Sub-string ที่อยู่ภายใน String หลัก

```python
var = "ABCDE"
return var.count("A") # Returns 1

var = "ABCDEAAAAA"
return var.count("A") # Returns 6

var = "ABCDE"
return var.count("F") # Returns 0

var = "Kumamon is happy"
return var.count("Kuma") # Returns 1

var = "Kumamon is happy, Kumamon is happy"
return var.count("Kuma") # Returns 2
```

## Using len()
`len()` นั้นไม่ใช่เมธอดแต่อย่างไร แต่เป็น built-in function ที่ใช้หาความยาวของ String ได้ รวมถึงหาความยาวของ Sequence ประเภทอื่น ๆ อีกด้วย

```python
print(len("Hello"))       # แสดงผล 5
print(len("Python"))      # แสดงผล 6
print(len("Programming")) # แสดงผล 11
```
