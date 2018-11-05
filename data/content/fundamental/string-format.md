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
เราสามารถจัดทำ Aligment ใน Python ได้

เช่นต้องการให้เป็นแบบนี้

```
My Name is Kumamon              naja
My Name is              Kumamon naja          
```  

นั่นก็คือการให้มันชิดขวาและชิดซ้ายนั่นเอง ซึ่งเราสามารถทำให้มันชิดได้ โดยการใส่ตัวเลขไปด้วย

ตัวอย่างเช่น

```python
first_name = "Kumamon"
print("My Name is %-20s naja" % first_name)   
print("My Name is %20s naja" % first_name) 
```

ก็จะได้ผลลัพธ์เหมือนด้านบนครับ

โดยหลักการนั่นก็คือ Python จะเว้นที่ไว้ x ช่อง (ซึ่งในตัวอย่างเว้นไว้ 20 ช่่อง) แล้วค่อยใส่ String ไปตรงนั้น

โดยหากว่า
- เป็นเลขจำนวนเป็นบวก ก็จะชิดขวา
- เป็นเลขจำนวนเป็นลบ ก็จะชิดซ้าย

### String Cut Length
หลังจากได้เรียนการ align กันมาแล้ว ก็จะบอกว่ายังมี function นึงที่เราอาจจะยังไม่เคยเจอ นั่นก็คือการตัดให้ได้ขนาด x ตัว

ไปดูตัวอย่างกันครับ โดยปกติแล้ว เราก็จะใช้ [] แบบนี้

```python
first_name = "Kumamon"
print("My name is", first_name[:4])
```

ก็จะได้ผลออกมาเป็น "My name is Kuma" นั่นเอง

แต่เราเรียน % แล้ว เราก็ต้องใช้มันอะเนอะ ก็เลยเป็นแบบนี้ไป

```python
first_name = "Kumamon"
print("My name is %s", %first_name[:4])
```

แต่ก็ยังไม่สุด เพราะยังทำแบบนี้ได้อีกครับ

```python
first_name = "Kumamon"
print("My name is %.4s", %first_name)
```

### Recap on usage
**String Type**<br>
| Type      | %10s     | %-10s    | %.10s      | %-.10s     | %10.10s | %-10.-10s |
| --------- | -------- | -------- | ---------- | ---------- | ------- | --------- |
| For       | Aligning | Aligning | Cut String | Cut String | Both    | Both      |
| Alignment | Right    | Left     | Right      | Left       | Right   | Left      |

```python
text = "ABC"
print("%4s" % text)      # Prints out " ABC"
print("%-4s" % text)     # Prints out "ABC "
print("%.2s" % text)     # Prints out "AB"
print("%-.2s" % text)    # Prints out "AB"
print("%5.2s" % text)    # Prints out "   AB"
print("%-5.2s" % text)   # Prints out "AB   "
```

**Integer Type**
| Type | %10d | %-10d | %010d |
| --- | --- | --- | --- | --- |
| For | Aligning | Aligning | Aligning & Filling Zeroes |
| Alignment | Right | Left | Right |

```python
number = 12345
print("%10d" %number)  # Prints out "     12345"
print("%-10d" %number) # Prints out "12345     "
print("%010d" %number) # Prints out "0000012345"
```

**Float Type**
| Type      | %10f     | %-10f    | %.10f      | %-.10f     | %10.10f | %-10.-10f |
| --------- | -------- | -------- | ---------- | ---------- | ------- | --------- |
| For       | Aligning | Aligning | Cut String | Cut String | Both    | Both      |
| Alignment | Right    | Left     | Right      | Left       | Right   | Left      |

```python
number = 123.4567

print("%10f" %number)    # Prints out "123.456700"
print("%-10f" %number)   # Prints out "123.456700"
print("%.2f" %number)    # Prints out "123.46"
print("%-.2f" %number)   # Prints out "123.46"
print("%10.3f" %number)  # Prints out "   123.457"
print("%-10.3f" %number) # Prints out "123.457   "
```
