# Lists

List มีหน้าที่เก็บข้อมูลที่เป็นกลุ่ม ซึ่งแตกต่างกันกับการเก็บตัวแปรทั่วไปเพราะว่าเก็บข้อมูลได้เยอะมาก ๆ และเรียงลำดับได้ด้วย

ใน Python นั้น จะถือ List ว่ามีค่าไม่เท่ากับ Array ดังนั้นอย่าเรียกว่ามันคืออันเดียวกันนะครับ

โดยปกติแล้ว เราจะเก็บข้อมูลโดยการใช้แบบนี้ครับ

```python
my_var1 = 12
my_var2 = 24
my_var3 = 36
my_var4 = 48
```

แต่หากว่าเราเอามาใส่ List ก็จะได้แบบนี้ครับ

```python
my_var = [12, 24, 36, 48]
```

ทำให้เวลาเราต้องการเรียกค่า ก็เรียกจากตัวแปรเดียว และเข้าไปใน list แทนครับ วันนี้เราก็จะมาเรื่มใช้งาน list กัน

## สร้าง List ขึ้นมาใหม่

ในภาษา Python เราไม่จำเป็นที่จะต้องประกาศตัวแปรการจัดเก็บนะครับสามารถบอกค่าให้มันได้เลย

หากเราอยากที่จะสร้าง List เปล่าขึ้นมา 1 อัน ก็สามารถเขียนได้สองวิธี ดังนี้ครับ

```python
my_list = list()
```
```python
my_list = []
```

หากต้องการกำหนดข้อมูลเองเลย ก็สามารถทำได้ดังนี้ครับ

```python
kumamon = ['Kumamon', 'is', 'so', 'cute']
numbers = [1, 2, 3, 4]
```

## เข้าถึงข้อมูลใน List

เราสามารถเข้าถึงข้อมูลได้โดยการใช้ [] เหมือน String เลย เช่น

```python
kumamon = ['Kumamon', 'is', 'so', 'cute']
var1 = kumamon[0]

print(var1) # ก็จะได้ผลลัพท์เป็น 'Kumamon'
```

หรืออาจจะเลือกหลาย ๆ อันเหมือน String เช่น

```python
kumamon = ['Kumamon', 'is', 'so', 'cute']
var1 = kumamon[0:2]

print(var1) # ก็จะได้ผลลัพท์เป็น ['Kumamon', 'is']
```

## เพื่มข้อมูลไปใน List

### ด้วยการใช้ method `.append()`

การใช้เมธอดนี้จะทำให้ข้อมูลที่ใส่เข้าไปใน Parameter ไปอยู่ในลำดับสุดท้ายของ list ทันที
```Python
numbers = [1, 2, 3, 4]
numbers.append(5)

print(numbers) # Numbers มีค่าเป็น [1, 2, 3, 4, 5]
```

### โดยการบวกจาก List อื่น

เราก็สามารถใช้การ concat ตัว list ได้เหมือนกัน

```python
text1 = ["Happy"]
text2 = ["Kumamon"]
text1 += text2
```

ทำให้ตัวแปร text1 มีค่าเท่ากับ `["Happy", "Kumamon"]`

## การแปลงระหว่าง String และ List

### แปลง String -> List ด้วย `.split()`

โดยเราจะใส่เป็นตัวที่ใช้แยก string ออกมาเป็น list เข้าไปที่ตัว parameter

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

### แปลง String -> List ด้วย `list()`

เราสามารถใช้ฟังก์ชัน `list()` เพื่อแปลง Sequence ชนิดต่าง ๆ หลายชนิดให้เป็น List ได้ รวมถึง String โดยมีหลักการดังนี้

```python
text = "Python"
print(list(text)) # แสดงผล ['P', 'y', 't', 'h', 'o', 'n']
```

### แปลง List -> String ด้วย `.join()`

โดยก็จะใช้หลักการคล้าย ๆ กัน แต่คราวนี้จะเปลี่ยน List ให้เป็น String เราสามารถใส่ ตัวอักษร หรือคำหน้าเมธอด เพื่อให้มันแยกออกมาแบบต่าง ๆ (เหมือนคราว split) หรือไม่ก็ได้

ตัวอย่างการใช้งาน

```python
text = ['I', 'am', 'a', 'happy', 'Kumamon']
print(" ".join(text)) # แสดงผล "I am a happy Kumamon"
```

## การเรียงข้อมูลใหม่ใน List

### ใช้ method `.sort()`

```python
my_list = [1, 3, 4, 2, 5]
my_list.sort()

# my_list จะเป็น [1, 2, 3, 4, 5]
```

### ใช้ function `sorted()`

วิธีเหมือนกับ `.sort()` เลย แต่ว่าอันนี้เป็น built-in function เท่านั้นเอง

```python
my_list = [1, 3, 4, 2, 5]
my_list = sorted(my_list)

# my_list จะเป็น [1, 2, 3, 4, 5]
```

แต่หากว่าเราต้องการที่จะ sort จากหลังมาหน้า ก็ให้ใส่ Parameter `reverse` และให้มันเป็น True ครับ

ตัวอย่างเช่น

```Python
my_list = [1, 3, 4, 2, 5]
my_list.sort(reverse=True)

# my_list now equals to [5, 4, 3, 2, 1]
```

เช่นเดียวกันกับการใช้ `sorted()`

### ข้อสังเกตของการใช้ sort
การ sort นี้จะทำการเลือกจากตัวข้อมูลที่มีค่า ASCII ต่ำที่สุดก่อน ทำให้การ sort ตัวอักษรเป็นแบบนี้

```Python
my_list = ['a', 'A', 'z', 'Z']
my_list.sort() # หรือใช้ sorted(my_list)

# my_list ก็จะมีค่าเท่ากับ ['A', 'Z', 'a', 'z']
```

และด้วยข้อจำกัด ทำให้เราทำการ sort ข้อมูลที่เป็นประเภทต่างกันไม่ได้

```Python
my_list = [9, 1, 'a', 'A']
my_list.sort()

# จะเกิด ValueError เพราะไม่สามารถเทียบค่าระหว่างประเภทได้
```

### การทำการ sort แบบมี filter
บางครั้ง หากเราต้องการที่จะ sort แบบพิเศษ ไม่อยาก sort แบบที่มันมีให้มาแล้ว เราจะต้องใส่ parameter `key` เข้าไปด้วยครับ

ตัวอย่างการใช้งานดังนี้

```python
my_list = ['My', 'name', 'is', 'Kumamon']
my_list.sort(key=str.lower)
print(my_list)
```

ก็จะได้ออกมาเป็น `['is', 'Kumamon', 'My', 'name']` เนื่องจากบอกว่าให้ตัวอักษรตัวเล็กเริ่มก่อน หากไม่ได้ใส่่ตัว key แล้ว ก็จะได้ผลลัพท์เป็น `['Kumamon', 'My', 'is', 'name']`

## หาข้อมูลใน List

### หาว่าข้อมูลอยู่ที่ลำดับใดด้วย .index()

ตัวอย่างการใช้งาน

```python
my_list = ["Happy", "Funny", "Fat"]
index_number = my_list.index("Happy")

print(index_number) # ก็จะแสดงค่าออกมาเป็น 0 เพราะคำว่า "Happy" อยู่ที่ลำดับที่ 0
```

## ลบข้อมูลใน List

### นำข้อมูลออกไปและไปแทนในตัวแปรด้วย .pop()

.pop() หากถูกเรียกใช้แล้ว ก็จะคืนค่าเข้าไปอยู่ในตัวแปรที่เรียก และทำการลบข้อมูลนั้นออกจาก List เลย ให้คิดว่ามันคือการย้ายข้อมูลเข้าไปในตัวแปรนั่นเอง

ตัวอย่างการใช้งาน

```Python
my_list = ["Happy", "Funny", "Fat"]
print(my_list.pop(1))

# แสดงผลตัวแปร my_list ออกมาก็จะได้ค่าเป็น "Funny"
# และตัวแปร my_list ก็จะมีค่าเท่ากับ ["Happy", "Fat"]
```

### นำข้อมูลออกจาก List ด้วย .remove()

.remove() จะทำการลบข้อมูลที่เลือกออกจากตัว list เลย และหลังจากการทำ `.remove()` ตัว List จะทำการคำนวณลำดับใน list ใหม่

ตัวอย่างการใช้งาน
```python
my_list = ["Happy", "Funny", "Fat"]
my_list.remove("Funny")

# my_list ตอนนี้มีค่าเท่ากับ ["Happy", "Fat"]
```


### แทนค่าใน List ด้วย .replace()

ตัวอย่างการใช้งาน

```python
text = "Hello, my name is Kumamon"
return text.replace("Kumamon", "Rillakuma")
# Returns "Hello, my name is Rillakuma"
```
