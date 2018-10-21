# Lists

ลิสต์ (หรือที่ในภาษาคอมพิวเตอร์อื่นๆเรียกว่า array) โดยมันมีหน้าที่เก็บข้อมูลที่เป็นกลุ่ม ซึ่งแตกต่างกันกับการเก็บตัวแปรทั่วไปเพราะว่าเก็บข้อมูลได้เยอะมากๆ และเรียงลำดับได้ด้วย

!> ใน Python นั้น จะถือ List ว่ามีค่าไม่เท่ากับ Array ดังนั้นอย่าเรียกว่ามันคืออันเดียวกันนะครับ

โดยปกติแล้ว น้องจะเก็บข้อมูลโดยการใช้แบบนี้ครับ

```python
my_var1 = 12
my_var2 = 24
my_var3 = 36
my_var4 = 48
```

แต่หากว่าเราเอามาใส่ list ก็จะได้แบบนี้ครับ

```python
my_var = [12, 24, 36, 48]
```

ทำให้เวลาเราต้องการเรียกค่า ก็เรียกจากตัวแปรเดียว และเข้าไปใน list แทนครับ

วันนี้เราก็จะมาเรื่มใช้งาน list กัน

## ความแตกต่างระหว่าง List และ Tuple

หากเปรียบเทียบกันด้านการใช้งานตัวข้อมูล ก็จะไม่แตกต่างกัน
แต่ถ้ามามาดูจริงๆแล้ว ตัว Tuple จะแตกต่างจาก List ในด้านของการเอาข้อมูลเข้าไปนั่นเอง ซึ่งตัว Tuple ไม่สามารถเอาข้อมูลเข้าไปได้ เช่นเดียวกันกับการลบข้อมูลออก

ถ้าจะให้อธิบายง่ายๆ ก็คือ

- Tuple เป็นเหมือน Read ได้อย่างเดียว
- List สามารถที่จะทำการ Read และ Write ได้ด้วย

เราก็ควรเลือกประเภท Array ตามแต่ละสถานการณ์แล้วกันนะครับ

### สร้าง List ขึ้นมาใหม่

ในภาษา Python น้องๆไม่จำเป็นที่จะต้องประกาศตัวแปรการจัดเก็บนะครับสามารถบอกค่าให้มันได้เลย

หากเราอยากที่จะสร้าง List เปล่าขึ้นมา 1 อัน ก็สามารถเขียนได้ว่า

```python
var1 = list()
```

หรือ

```python
var2 = []
```
แต่ถ้าน้องต้องการระบุขนาดไว้ล่วงหน้า ก็สามารถใส่ค่าว่างเข้าไปได้ครับ ดังนี้

```python
var3 = [None, None, None]
```

หรือถ้าต้องการใส่ข้อมูลเข้าไปเองเลย ก็สามารถทำได้ดังนี้ครับ

```python
kumamon = ['Kumamon', 'is', 'so', 'cute']
numbers = [1, 2, 3, 4]
```

## เข้าถึงข้อมูลใน List

น้องๆสามารถเข้าถึงข้อมูลได้โดยการใช้ [] เหมือน String เลย

ตัวอย่างเช่น

```python
kumamon = ['Kumamon', 'is', 'so', 'cute']
var1 = kumamon[0]

print(var1) # ก็จะได้ผลลัพท์เป็น 'Kumamon'
type(var1) # ก็จะเป็นประเภท String
```

หรืออาจจะเลือกหลายๆอันเหมือน String เช่น

```python
kumamon = ['Kumamon', 'is', 'so', 'cute']
var1 = kumamon[0:2]

print(var1) # ก็จะได้ผลลัพท์เป็น ['Kumamon', 'is', 'so']
type(var1) # ก็จะออกมาเป็น <class 'list'> (ตัวแปรประเภท list)
```


## การนับลำดับของ List

หลักการของการนับลำดับข้อมูลใน List ก็เหมือนกับ String นะครับ
โดยให้ตัวแรกมีค่าเท่ากับ 0 และนับไปเรื่อยๆครับ

ตัวอย่างการนับและจัดเก็บครับ

| **Value**          | Kumamon | is | so | cute |
| ------------------ | ------- | -- | -- | ---- |
| **Array Number**   | 0       | 1  | 2  | 3    |
| **Logical Number** | 1       | 2  | 3  | 4    |

## เพื่มข้อมูลไปใน List

### ด้วยการใช้ method `.append()`

การใช้ method นี้ืทำให้ข้อมูลที่ใส่เข้าไปใน Parameter ไปอยู่ในลำดับสุดท้ายของ list ทันที
```Python
kumamon = [1,2,3,4]
kumamon.append(5)

# kumamon now equals to
[1, 2, 3, 4, 5]
```

จะเห็นว่าข้อมูลที่ถูก append (ก็คือเลข 5) จะไปอยู่ลำดับสุดท้าย

### โดยการบวกจาก List อื่น

น้องๆก็สามารถใช้การ concat ตัว list ได้เหมือนกัน

```python
text1 = ["Happy"]
text2 = ["Kumamon"]
text1 += text2
```
ทำให้ตัวแปร text1 มีค่าเท่ากับ `["Happy", "Kumamon"]`

## การแปลงระหว่าง String และ List

### แปลง String -> List ด้วย `.split()`

โดยน้องๆจะใส่เป็นตัวที่ใช้แยก string ออกมาเป็น list เข้าไปที่ตัว parameter

ตัวอย่างการใช้งาน
```Python
text = "I am a happy Kumamon"
text = text.split()
# ตัวแปร text มีค่าเป็น ['I', 'am', 'a', 'happy', 'Kumamon']

text = "I,am,a,happy,Kumamon"
text = text.split(",")
# ตัวแปร text มีค่าเป็น ['I', 'am', 'a', 'happy', 'Kumamon']
```
จะเห็นได้่ว่า ในตัวอย่างที่ 2 ได้ใช้ `.split(',')` ทำให้เมื่อตัว Python เจอตัวอักษร `,` ก็จะทำการ split ครับ

แต่หากว่าไม่ใส่อะไรเลย (เหมือนในตัวอย่างที่ 1) ก็จะเห็นว่ามันจะใช้ space เพื่อการ split ครับ

### แปลง List -> String ด้วย `.join()`

โดยก็จะใช้หลักการคล้ายๆกัน แต่คราวนี้จะเปลี่ยน List ให้เป็น String<br>
น้องๆสามารถใส่ ตัวอักษร หรือคำหน้า method เพื่อให้มันแยกออกมาแบบต่างๆ (เหมือนคราว split) หรือไม่ก็ได้

ตัวอย่างการใช้งาน

text = ['I', 'am', 'a', 'happy', 'Kumamon']
print(" ".join(text)) # ก็จะปรี้นท์ออกมาเป็น "I am a happy Kumamon"
```

## การเรียงข้อมูลใหม่ใน List

### ใช้ method `.sort()`

```python
my_list = [1, 3, 4, 2, 5]
my_list.sort()

# my_list now equals to
[1, 2, 3, 4, 5]
```

### ใช้ function `sorted()`

วิธีเหมือนกับ `.sort()` เลย แต่ว่าอันนี้เป็น built-in function เท่านั้นเอง

```python
my_list = [1, 3, 4, 2, 5]
sorted(my_list)

# my_list now equals to
[1, 2, 3, 4, 5]
```

แต่หากว่าเราต้องการที่จะ sort จากหลังมาหน้า<br>
ก็ให้ใส่ Parameter `reverse` และให้มันเป็น True ครับ

ตัวอย่างเช่น

```Python
my_list = [1, 3, 4, 2, 5]
my_list.sort(reverse = True)

# my_list now equals to
[5, 4, 3, 2, 1]
```

เช่นเดียวกันกับการใช้ `sorted()`

### ข้อสังเกตของการใช้ sort
การ sort นี้จะทำการเลือกจากตัวข้อมูลที่มีค่า ASCII ต่ำที่สุดก่อน ทำให้การ sort ตัวอักษรเป็นแบบนี้

```Python
my_list = ['a', 'A', 'z', 'Z']
my_list.sort() # หรือใช้ sorted(my_list)

# my_list ตอนนี้ก็จะมีค่าเท่ากับ ['A', 'Z', 'a', 'z']
```

และด้วยข้อจำกัด ทำให้เราทำการ sort ข้อมูลที่เป็นประเภทต่างกันไม่ได้

```Python
my_list = [9, 1, 'a', 'A']
my_list.sort()

# ก็จะเกิด ValueError เพราะไม่สามารถเทียบค่าระหว่างประเภทได้
```
### การทำการ sort แบบมี filter
บางครั้ง น้องต้องการที่จะ sort แบบพิเศษ ไม่อยาก sort แบบที่มันมีให้มาแล้ว<br>
ดังนั้นน้องจึงต้องใส่ parameter `key` เข้าไปด้วยครับ

ตัวอย่างการใช้งาน

```python
my_list = ['My', 'name', 'is', 'Kumamon']
my_list.sort(key = str.lower)

print(my_list)
```
ก็จะได้ออกมาเป็น ['is', 'Kumamon', 'My', 'name'] เนื่องจากบอกว่าให้ตัวอักษรตัวเล็กเริ่มก่อน

หากไม่ได้ใส่่ตัว key แล้ว ก็จะได้ผลลัพท์เป็น ['Kumamon', 'My', 'is', 'name']

## หาข้อมูลใน List

### หาว่าข้อมูลอยู่ที่ลำดับใดด้วย .index()

วิธีการใช้งาน

```
<list_variable>.list(<key>)
```

ตัวอย่างการใช้งาน

```
my_list = ["Happy", "Funny", "Fat"]
index_number = my_list.index("Happy")

print(index_number) # ก็จะแสดงค่าออกมาเป็น 0 เพราะคำว่า "Happy" อยู่ที่ลำดับที่ 0
```

# ลบข้อมูลใน List

### นำข้อมูลออกไปและไปแทนในตัวแปรด้วย .pop()

.pop() หากถูกเรียกใช้แล้ว ก็จะคืนค่าเข้าไปอยู่ใตัวแปรที่เรียก และทำการลบข้อมูลนั้นออกจาก List เลย<br>
ให้คิดว่ามันคือการย้ายข้อมูลเข้าไปในตัวแปรนั่นเอง

วิธีการใช้งาน

```
<variable name>.pop("<character/text/array number you want to use>")
```

ตัวอย่างการใช้งาน
```Python
my_list = ["Happy", "Funny", "Fat"]
print(my_list.pop(1))

# ปรี้นท์ตัวแปร my_list ออกมาก็จะได้ค่าเป็น "Funny"
# และตัวแปร my_list ก็จะมีค่าเท่ากับ ["Happy", "Fat"]
```

### นำข้อมูลออกจาก List ด้วย .remove()

.remove() จะทำการลบข้อมูลที่น้องเลือกออกจากตั list เลย

!> และหลังจากการทำ `.remove()` ตัว List จะทำการคำนวณลำดับใน list ใหม่

ตัวอย่างการใช้งาน
```
<variable name>.remove("<character/text/array number you want to remove>")
```
และตัวแปรก็จะออกมา โดยข้อมูลที่ถูกลบก็จะหายไปแล้ว

วิธีการใช้งาน
```python
my_list = ["Happy", "Funny", "Fat"]
my_list.remove("Funny")

# my_list ตอนนี้มีค่าเท่ากับ ["Happy", "Fat"]
```

### แทนค่าใน List ด้วย .replace()

วิธีการใช้งาน

```
<variable name>.replace(<text that you like to change>,<text that you like to change to>)
```

ตัวอย่างการใช้งาน

```python
text = "Hello, my name is Kumamon"
return text.replace("Kumamon", "Rillakuma")
# Returns "Hello, my name is Rillakuma"
```

---

### Referennce

- [`.join()`](https://devdocs.io/python~3.6/library/stdtypes#str.join)
- [`.sort()`](https://devdocs.io/python~3.6/library/stdtypes#list.sort)