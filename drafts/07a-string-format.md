# String Format
เนื่องจากว่า บางครั้ง เราอยากที่จะใช้ Python เพื่อการแสดงผลลัพท์ แต่ก็อยากให้มันเป็น Format หรือ การเรียงตัวอักษรที่เราต้องการ จึงทำให้ เราขี้เกียจมาพิมพ์แบบนี้

```python
var1 = 21
print("Kumamon is already", var1, "years old")
```
เพื่อจะได้ผลลัพท์ "Kumamon is already 21 years old"

โดย lecture นี้จะมาสอนการใข้ `%` และ `.format()` ครับ

## อะไรคือ %
เอาจริง ๆ มันก็คือเครื่องหมายเปอร์เซนต์นั่นแหละครับ แต่ก็ทำให้มันเป็นที่วางตัวแปรได้เช่นเดียวกัน

อันนี้เป็นวิธีการใช้งานครับ เราอาจจะยังไม่เข้าใจก็ไม่เป็นไร ค่อยกลับมาดูก็ได้ครับ

| รูปแบบ % | %s | %d หรือ %i | %f | %e |
| :-: | :-: | :-: | :-: | :-: |
| สำหรับข้อมูลประเภท | String | Integer | Float | เลขฐานในหลักวิทยาศาสตร์<br>(Scientific Significant) |

ตัวอย่างการใช้งาน
```python
age = 21
print("Kumamon is already %d years old" % age)
```
ก็จะได้ผลลัพท์ "Kumamon is already 21 years old" เช่นเดียวกันครับ

โดยหลักการคร่าวๆนั่นก็คือ Python จะทำการเอาค่าจากตัวแปร `age` เข้าไปยัดในจุดที่ `%d` อยู่ ทำให้ได้ผลลัพธ์ได้ออกมาแบบนั้นครับ

แล้วถ้าเราอยากใส่มากกว่า 1 ตัวล่ะ เช่น `"My name is <first_name> and my age is <age> years old"` โดยตัวแปร `first_name` และ `age` เราจะกำหนดค่าตัวแปรเอง

หากว่าเราใช้วิธีเดิม (Concatenation) ก็ได้เขียนได้ดังนี้ครับ
```python
first_name = "Kumamon"
age = 21

print("My name is", first_name, "and my age is", age, "years old")
```

ซึ่งก็เขียนยากและดูยากด้วย แต่เราก็สามารถใช้ `%` ได้ดังนี้ครับ

```python
first_name = "Kumamon"
age = 21
print("My name is %s and my age is %d years old" % (first_name, age))
```

ก็จะได้ผลลัพท์เป็น "My name is Kumamon and my age is 21 years old" นั่นเอง
จะสังเกตได้ว่ามันทำให้ดูง่ายขึ้น และเขียนง่ายขึ้นด้วย<br>

## ลองใช้ %

### String Alignment
เราสามารถจัดทำ Aligment ใน Python ได้<br>
เช่นต้องการให้เป็นแบบนี้
```
My Name is Kumamon              naja
My Name is              Kumamon naja          
```  
นั่นก็คือการให้มันชิดขวา และ ชิดซ้ายนั่นเอง

เราสามารถทำให้มันชิดได้ โดยการใส่ตัวเลขไปด้วย<br>
ตัวอย่างเช่น
```python
first_name = "Kumamon"
print("My Name is %-20s naja" %first_name)   
print("My Name is %20s naja" %first_name) 
```
ก็จะได้ผลลัพท์เหมือนด้านบนครับ

โดยหลักการนั่นก็คือ Python จะเว้นที่ไว้ x ช่อง (ซึ่งในตัวอย่างเว้นไว้ 20 ช่่อง)<br
แล้วค่อยใส่ String ไปตรงนั้น

โดยหากว่า
- เป็นเลขจำนวนเป็นบวก ก็จะชิดขวา
- เป็นเลขจำนวนเป็นลบ ก็จะชิดซ้าย

### String Cut Length
หลังจากได้เรียนการ align กันมาแล้ว ก็จะบอกว่ายังมี function นึงที่เราอาจจะยังไม่เคยเจอ นั่นก็คือการตัดให้ได้ขนาด x ตัว

ไปดูตัวอย่างกันครับ

โดยปกติแล้ว เราก็จะใช้ [] แบบนี้
```python
first_name = "Kumamon"
print("My name is", first_name[:4])
```
ก็จะได้ผลออกมาเป็น "My name is Kuma" นั่นเอง

แต่เราเรียน % แล้ว เราก็ต้องใช้มันอ่ะเนอะ ก็เลยเป็นแบบนี้ไป

```python
first_name = "Kumamon"
print("My name is %s", %first_name[:4])
```

แต่ก็ยังไม่[สุดๆไปเลย เหมือนเพลงของนูโว](https://www.youtube.com/watch?v=LKLH2E7uaMY) เพราะยังทำแบบนี้ได้อีกครับ
```python
first_name = "Kumamon"
print("My name is %.4s", %first_name)
```

แต่ต้องเตือนไว้ก่อน ว่าถ้าใส่ตัวเลขไปมากกว่าที่ array string มีอยู่ ก็จะเป็นแบบนี้ครับ
```python

```

### Recap on usage
**String Type**<br>
| Type      | %10s     | %-10s    | %.10s      | %-.10s     | %10.10s | %-10.-10s |
| --------- | -------- | -------- | ---------- | ---------- | ------- | --------- |
| For       | Aligning | Aligning | Cut String | Cut String | Both    | Both      |
| Alignment | Right    | Left     | Right      | Left       | Right   | Left      |

```python
text = "ABC"

print("%4s" %text)      # Prints out " ABC"
print("%-4s" %text)     # Prints out "ABC "
print("%.2s" %text)     # Prints out "AB"
print("%-.2s" %text)    # Prints out "AB"
print("%5.2s" %text)    # Prints out "   AB"
print("%-5.2s" %text)   # Prints out "AB   "
```

**Integer Type**
| Type      | %10d     | %-10d    | %.10d      | %-.10d     | %10.10d | %-10.-10d | %0.10d                          |
| --------- | -------- | -------- | ---------- | ---------- | ------- | --------- | ------------------------------- |
| For       | Aligning | Aligning | Cut String | Cut String | Both    | Both      | Aligning                        |
| Alignment | Right    | Left     | Right      | Left       | Right   | Left      | Right
(Add 0 instead of space) |

```python
number = 12345

print("%10d" %number)       # Prints out "     12345"
print("%-10d" %number)      # Prints out "12345     "
print("%.3d" %number)       # Prints out "12345"
print("%-.3d" %number)      # Prints out "12345"
print("%0.10d" %number)     # Prints out 0000012345
```

**Float Type**
| Type      | %10f     | %-10f    | %.10f      | %-.10f     | %10.10f | %-10.-10f |
| --------- | -------- | -------- | ---------- | ---------- | ------- | --------- |
| For       | Aligning | Aligning | Cut String | Cut String | Both    | Both      |
| Alignment | Right    | Left     | Right      | Left       | Right   | Left      |

```python
number = 123.4567

print("%10f" %number)       # Prints out "123.456700"
print("%-10f" %number)      # Prints out "123.456700"
print("%.2f" %number)       # Prints out "123.46"
print("%-.2f" %number)      # Prints out "123.46"
print("%10.3f" %number)     # Prints out "   123.457"
print("%-10.3f" %number)    # Prints out "123.457   "
```

**Scientific Significant Type**
```python
number = 123.4567

print("%e" %number) # Prints out '1.234567e+02'
```
----------

## เปลี่ยน String ให้เป็นตัวเลข
![https://i.stack.imgur.com/X4yts.png](https://i.stack.imgur.com/X4yts.png)
*Reference : https://i.stack.imgur.com/X4yts.png*


### String to ASCII (Decimal)
```python
print(ord('A'))         # Print out 65
print(ord('B'))         # Print out 66
print(ord('A') + 1)     # Print out 66
```

### ASCII (Decimal) to String
```python
print(chr(65))      # Print out 'A'
print(chr(65+1))    # Print out 'B'
print(chr(65+2))    # Print out 'C'

var = 65
print(chr(var)) # Print out 'A'
```

### Alters String ASCII from character
```python
print(chr(ord('A')+1)) # Print out 'B'
```

### String to change case
Convert character/text to lowercase ->          `.lower()` <br>
Convert character/text to uppercase ->          `.upper()` <br>
Swap character/text case from lower/upper ->    `.swapcase()` <br>

Check character/text is lowercase ->        `.islower()` <br>
Check character/text is uppercase ->        `.isupper()` <br>
Check character/text is a number ->         `.isdigit()` <br>
Check character/text is an alphabet ->      `.isalpha()` <br>

### Using .lower()
```python
return text.lower()
# If text = "KUMAMON", returns "kumamon"
# If text = "KuMaMoN", returns "kumamon"
# If text = "kumamon", returns "kumamon"
```

### Using .upper()
```python
return text.upper()
# If text = "KUMAMON", returns "KUMAMON"
# If text = "KuMaMoN", returns "KUMAMON"
# If text = "kumamon", returns "KUMAMON"
```

### Using .swapcase()
```python
return text.swapcase()
# If text = "KUMAMON", returns "kumamon"
# If text = "KuMaMoN", returns "kUmAmOn"
# If text = "kumamon", returns "KUMAMON"
```

### Using .isupper() & .islower()
```python
<string>.islower()
<string>.isupper()

text = "K"
return text.islower() # Returns false
return text.isupper() # Returns true

text = "k"
return text.islower() # Returns true
return text.isupper() # Returns false
```

### Using .isdigit() & .isalpha()
```python
How to use:
<input variable>.isdigit()
-> Returns True or False

<input variable>.isalpha()
-> Returns True or False

text = "12"
return text.isdigit() # Returns true
return text.isalpha() # Returns false

text = "ABC"
return text.isdigit() # Returns false
return text.isalpha() # Returns true
```

----------
# String with array counts and find
```plain
Finding character in text -> .find()
Count character in text that satisfies search query -> .count()
Finding text in array -> .index()

Count all character in text -> len()
```

### Using .find()
```python
How to use:
<variable name>.find("<character/text you want to find>")
-> Return as the lowest array number

# 1 occurence character
var = "ABCDE"
return var.find("A") # Returns 0

# 2 occurence character
var = "ABCDEAAAAA"
return var.find("A") # Returns 0

# Non occurence character
var = "ABCDE"
return var.find("F") # Returns -1

# Using more than 1 character
var = "Kumamon is happy"
return var.find("Kuma") # Returns 0

# Using more than 1 character + 2 occurrence
var = "Kumamon is happy, Kumamon is happy"
return var.find("Kuma") # Returns 0
```

### Using .count()
```python
How to use:
<variable name>.count("<character/text you want to count>")
-> Returns the amount of character count.

# 1 occurence character
var = "ABCDE"
return var.count("A") # Returns 1

# 2 occurence character
var = "ABCDEAAAAA"
return var.count("A") # Returns 6

# Non occurence character
var = "ABCDE"
return var.count("F") # Returns 0

# Using more than 1 character
var = "Kumamon is happy"
return var.count("Kuma") # Returns 1

# Using more than 1 character + 2 occurrence
var = "Kumamon is happy, Kumamon is happy"
return var.count("Kuma") # Returns 2
```

### Using len()
```python
How to use:
len(<variable you want to count character>)
Returns number of elements/character in array/text

# Using to count strings
return len("Kumamon") # Returns 7

# Using to count strings in variable
var = "Kumamon"
return len(var) # Returns 7

# Using to count elements in array
var = [11,12,13,14,15]
return len(var) # Retuns 5
```
---
# Strings to other base numeric number

### Using bin()
```python
How to use:
bin(<decimal integer>) # Built-in function. Returns the binary number (Base 2)

Example:
print(bin(12345)) # Prints out 0b11000000111001
```

### Using hex()
```python
How to use:
hex(<decimal integer>) # Built-in function. Returns the hexadecimal number (Base 6)

Example:
print(hex(12345)) # Prints out 0x3039
```

### Using oct()
```python
How to use:
oct(<decimal integer>) # Built-in function. Returns the octal number (Base 8)

Example:
print(oct(12345)) # Prints out 0o30071
```

### Convert other base to decimal
```python
number = "11000000111001"
int(number, 2) # Returns 12345 (converts from base 2 (binary) to base 10 (decimal))
```

---

สำหรับเนื้อหา String Array และ Introduction to String ก็สามารถคลิกดูได้ที่ลี้งก์ข้างล่างครับ
## [Introduction to String](Python/String/)
## [String Array](Python/String/Array/)
