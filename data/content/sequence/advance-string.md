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

## String Array
Python นั้น จะเก็บข้อมูล String ไว้ในแบบ Array หรือเป็นกล่องที่อยู่ในโกดังโดยที่ กล่องๆนึงจะเก็บตัวอักษร 1 ตัว

และ โกดังคือตัวแปรที่เก็บข้อมูล String ที่มีหน้าที่กล่องนั่นเอง แต่ว่าโกดังอันนี้สามารถยืดหดขนาดได้ครับ โดยผู้จัดการขนาดโกดังก็คือตัว Python นั่นเอง

ดังนั้นเราเลยไม่ต้องสนใจเรื่องการเปลี่ยนขนาดโกดัง เหมือนหลาย ๆ ภาษาคอมพิวเตอร์ครับ

ต่อมา เรามาเข้าเรื่องเกี่ยวกับภาษา Python กันต่อ ภายในตัวอย่างด้านล่าง ทางเราจะใช้ตัวอย่างเป็นคำว่า "@55_kumamon" ครับ

ขั้นแรกก็จะต้องแตกออกมาเป็นกล่องที่ใส่ตัวอักษรได้ 1 ตัวอักษรก่อน เราก็จะได้ประมาณนี้ครับ

| ตัวอักษร | @ | 5 | 5 | _ | k | u | m | a | m | o | n  |
| ------ |---|---|---|---|---|---|---|---|---|---|--- |
| ตำแหน่ง | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |


เราก็จะเห็นว่าตัวอักษร '@' นั้นเป็นตัวแรก และ 'n' เป็นตัวสุดท้าย

ปกติแล้วคนที่ยังไม่เคยเขียนโปรแกรมเราก็จะเรียกตัวแรกว่าตัวที่ 1 ตามหลักการทางคณิตศาสตร์ แต่ในทางคอมพิวเตอร์จะเริ่มนับทุกอย่างจาก 0 ครับ

![](https://i.redd.it/iwnqgrrbls5z.png)

นอกนั้นยังไม่พอ ซึ่งในภาษา Python นั้นเรายังสามารถมองตำแหน่งเป็นเลขติดลบได้ด้วย โดยนับตั้งแต่ -1 ลดลงไปเรื่อย ๆ จากตำแหน่งสุดท้ายของ String โดยสามารถมองได้ตามตัวอย่างดังนี้ครับ

| ตัวอักษร | @ | 5 | 5 | _ | k | u | m | a | m | o | n  |
| ------ |---|---|---|---|---|---|---|---|---|---|--- |
| ตำแหน่ง | -11 | -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 |

ซึ่งเราสามารถทราบความยาวของ String ได้โดยใช้ฟังก์ชัน `len()` ซึ่งก็ย่อมาจากคำว่า length หรือความยาวนั่นเอง โดยก็จะนับจำนวนตัวอักษรใน String ให้นั่นเอง

ตัวอย่างเช่น

```python
first_name = "@55_kumamon"
print(len(first_name))
```

## เลือกตัวอักษรตัวเดียว (Start)
หากเราต้องการเอาตัวอักษร '@' มาจาก string ก็สามารถเขียนได้ดังนี้ครับ
```python
text = "@55_kumamon"
print(text[0])
```

||▼|||||||||||
|--------|---|---|---|---|---|---|---|---|---|----|----|
| ตัวอักษร | @ | 5 | 5 | _ | k | u | m | a | m | o  | n  |
| ตำแหน่ง | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9  | 10 |
||▲|||||||||||

จุดที่ต้องสังเกตอยู่ที่ `text[0]` ครับ เป็นการบอกว่าจะเอาตัวที่ 0 (`[@]`) มาจากตัวแปร `text` นั่นเอง

วิธีการเรียก นั่นก็คือ มีตัวแปร และก็ตามด้วยกล่อง `[]` ครับ โดยเราใส่หมายเลขกล่อง (ตัวอักษร) เข้าไปครับ และผลลัพท์ก็จะออกมา

แล้วถ้าต้องการเรียกหลายอัน เหมือนเป็นกลุ่มหล่ะ

## การเลือกตัวอักษรมากกว่า 1 ตัว (Stop)
เราสามารถเขียนเหมือนอันด้านบนหล่ะครับ แต่เราเพื่มขั้นตอนขึ้นมาอีกนิดนึง โดยการเขียนเครื่องหมาย `:` ไปขั้นครับ

วิธีการใช้งานก็คือ `[<ตัวอักษรตัวแรก> : <ตัวอักษรหลังตัวสุดท้ายที่เลือก>]`

ตัวอย่างการใช้งาน

```python
text = "@55_kumamon"
print(text[0:8])
```

ก็จะแสดงคำว่า "@55_kuma" บนหน้าจอครับ

จุดสังเกตนั่นก็คือ เราได้เลือกตั้งแต่ตัวที่ 0 นั่นก็คือ @ จนถึงตัวที่ 8 นั่นก็คือ m แต่ทำไมมันออกมาเป็น "@55_kumam" ละ

โดยตาม Python จะทำถึงตัวก่อนตัว Stop ที่เรากำหนด ดังนั้นควรระวังเป็นอย่างยิ่ง

||▼|▼|▼|▼|▼|▼|▼|▼||||
|--------------|---|---|---|---|---|---|---|---|---|----|----|
| ตัวอักษร | @ | 5 | 5 | _ | k | u | m | a | m | o  | n  |
| ลำดับ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9  | 10 |
||▲|▲|▲|▲|▲|▲|▲|▲||||

หากว่าจะเลือกตั้งแต่ตัวแรกจนถึงตัวที่ 8 เราก็สามารถละเว้นไว้ได้

ตัวอย่างเช่น
```python
text = "@55_kumamon"
print(text[:8])
```
เพราะ Python ถือว่าเราไม่ยอมบอกเอง ก็จะถึือว่าอยู่ ณ ที่ความเข้าใจเดียวกัน (default) ไปว่าต้องเรื่มจากตัวแรก

## การเลือกทุก ๆ n ตัว (Step)
หากเราต้องการที่จะเลือกเพียงบางตัว เช่นเลือกตัวแรก แล้วก็ข้าม 2 ตัว แล้วก็ค่อยเลือก

เราสามารถทำได้โดยการเพื่ม `:` เข้ามาอีกตัวนึง ก็จะได้เป็น
```python
text = "@55_kumamon"
text[::2]
```

||▼||▼||▼||▼||▼||▼|
|--------------|---|---|---|---|---|---|---|---|---|----|----|
| ตัวอักษร | @ | 5 | 5 | _ | k | u | m | a | m | o  | n  |
| ลำดับ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9  | 10 |
||▲||▲||▲||▲||▲||▲|

และเนื่องจากเราก็รู้ว่า หากไม่มีตัวเลขเรื่ม (Start) และตัวสุดท้าย (Stop) ก็จะถือในความเข้าใจเหมือนกันว่า เลือกทุกตัวนั่นเอง

### สรุปการใช้งาน Start : Stop : Step
```python
<variable>[start:stop:step]

# Start -> ให้เรื่มตั้งแต่ตัวอักษรไหน       (Default: 0)
# Stop  -> ให้หยุดที่ตัวอักษรไหน          (Default: ความยาว String)
# Step  -> ข้ามตัวอักษรเมื่อครบทุก ๆ n ตัว (Default: 1)
```
