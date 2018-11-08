# Dictionary

Dictionary เป็นการเก็บข้อมูลประเภทหนึ่ง ซึ่งจะมีความคล้ายคลึงกับการเก็บตัวแปรหลาย ๆ อันเข้าไปสู่ตัวแปรเดียวกัน

โดย Dictionary จะเก็บข้อมูลเป็นคู่ ๆ โดยแต่ละคู่ประกอบไปด้วย

- Key
- Value

แต่ว่า Dictionary สามารถเก็บข้อมูล (Key และ Value) ได้หลาย ๆ อัน ทำให้เราสามารถเรียกค่า (Key) เพื่อเอาผลลัพธ์ (Value) ได้

โดยเราอาจมีหลาย Key ก็ได้ แต่อาจจะไม่มี Value (ก็คือปล่อยให้ค่า Value เป็น None)

---

## สร้าง Dictionary

เราสามารถสร้างตัว Dictionary ใหม่โดยการใช้ฟังก์ชัน `dict()` เพื่อเปลี่ยนตัวแปรให้เก็บข้อมูลแบบ Dictionary และสร้่าง Dictionary เปล่า ๆ ขึ้นมา 1 อัน

ตัวอย่างการเขียน

```python
my_dictionary = dict() # Empty dictionary
```
```python
my_dictionary = {
"happy" : 20,
"not happy" : 30,
"sad" : False
}
```
```python
my_dictionary = {"happy" : 20, "not happy" : 30, "sad" : False}
```

ซึ่งเราสามารถเขียนแบบแยกบรรทัด หรือรวมเป็นบรรทัดเดียวก็ได้ครับ

---

## เรียกข้อมูลมาจาก Dictionary

### แบบเหมือน List

ก็สามารถเรียกเหมือน List ได้เลย แต่การเรียกจะใส่เป็น Key แทน ไม่เหมือน List ที่จะใส่เป็นลำดับของข้อมูล

```python
my_dictionary['happy'] # Returns 20
```

หรือเราอาจจะเช็คก่อนว่ามี key นั้นๆอยู่หรือเปล่าโดยการใช้ keyword `in`

```python
"happy" in my_dictionary # Return true
20 in my_dictionary # Return true
```

หากคืนกลับมาเป็น True (เหมือนกับตัวอย่าง) ก็จะบอกได้ว่ามี Key ที่ชื่อนั้นอยู่ใน dictionary นั้นๆ

### แบบใช้ methods

ในแบบนี้ เราก็จะได้ใช้ `.get()` และ `.setdefault()` ทำให้จัดการกับ Key ที่ไม่เคยอยู่จริงก็ได้ครับ

การใช้ `.get()` ก็เหมือนกับการเรียกถามหา Value จากค่า Key ที่ให้มา แต่จะแตกต่างออกไปคือ หากว่ามันหาแล้วไม่เจอ ก็จะคืนค่า `None` กลับมาแทน

ตัวอย่างเช่น

```python
my_dict.get('Kuma')
```

แต่หากว่าไม่ต้องการที่จะขอคืนเป็น None ก็สามารถใส่พารามิเตอร์ `default` เข้าไปด้วยก็ได้ครับ เช่นว่า หากไม่เจอ ก็ให้คืนเป็น 0

```python
my_dict.get('Kuma', default=0)
```

และสำหรับ `.setdefault()` ก็จะเหมือนกับ `.get()` เลย แต่ว่าจะใส่ค่าที่น้องเคยหาเข้าไปใน dictionary ด้วย เหมือนมันสร้างว่า key ที่เราหา เท่ากับ None แล้วก็เอาไปเก็บไว้ใน dictionary แล้วก็ค่อยเรียกค่านั้นอีกรอบ

---

## เพื่มค่าเข้าใปใน Dictionary

ถ้าต้องการเพื่มค่าเข้าไปใน Dictionary ก็สามารถทำการเพื่ม ด้วยการเขียน

```python
<variableName>[<key>] = <value>
```

เช่นว่าเราต้องการบอกให้ `kumamon = 12` และไปอยู่ในตัวแปร Dictionary ที่ชื่อว่า `my_dict` ก็จะเขียนได้ดังนี้ครับ

```python
my_dict['kumamon'] = 12
```

---

## ลบค่าออกจาก Dictionary

โดยเราสามารถเลือกที่จะลบ

- ทุกตัว
- ตัวที่เลือก
- ลบความเป็น Dictionary ออกไป

### ลบค่าบางตัวออกจาก Dictionary

เราสามารถใช้ keyword `del` เพื่อทำการลบค่าออกไปครับ ตัวอย่างเช่น

```python
del my_dict['Kumamon']
```

มันก็จะทำการลบค่า Key + Value ที่ Key มีค่าเท่ากับ 'Kumamon' ออกไป ราวกับว่ามันไม่เคยเกิดขึ้นมาก่อนเลย

### ลบค่าทุกตัวออกจาก Dictionary

เรายังสามารถใช้เมธอด `.clear()` เพื่อทำการล้างค่า Key + Value ออกไป ทำให้ตัวแปรเป็น Dictionary เปล่าๆ

ตัวอย่างการเขียน

```python
my_dict.clear()
```

### ลบความเป็น Dictionary ออกไป

เหมือนทำให้ตัวแปรนั้นเก็บเป็นค่า None ไปเลย พูดง่ายๆก็คือที้งมันไปเลย โดยการใช้ keyword `del`

ตัวอย่างการใช้งาน

```python
del my_dict
```

ก็จะทำให้เวลาเรียกตัวแปร my_dict ก็จะขึ้นแบบน้ีครับ

```shell
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'mydict' is not defined
```

เพราะการใช้ `del` เป็นการลบตัวแปรออกไปเลย ไม่เหมือนการเขียน `my_dict = None` นะครับ เพราะว่าอันนั้น ตัวแปรยังอยู่

---

## เช็คค่า Keys และ Values ที่อยู่ใน Dictionary

เราสามารถใช้ `.keys()` สำหรับการดูค่า keys ทั้งหมดใน Dictionary และใช้ `.values()` เพื่อดูค่า values ทั้งหมดใน Dictionary

ตัวอย่างการใช้งาน

```python
my_dictionary = {"happy" : 20, "not happy" : 30, "sad" : False}

print(my_dictionary.keys())
print(my_dictionary.values())
```

ก็จะออกมาเป็น

```python
dict_keys(['happy', 'not happy', 'sad'])
dict_values([20, 30, False])
```

โดยมันคืนออกมาเป็นตัวแปรประเภท `dict_keys` และ `dict_values` นั่นเอง เราจะยังไม่สามารถเอาข้อมูลที่ขอมา เพื่อเอาไปใช้ได้นะครับ ดังนั้นหากเราต้องการนำกลุ่มของ Key หรือ Value เหล่านี้ไปใช้งานต่อได้อย่างสะดวก เราสามารถใช้ฟังก์ชัน `list()` ช่วยได้ ดังนี้ครับ

```python
my_dictionary = {"happy" : 20, "not happy" : 30, "sad" : False}

print(list(my_dictionary.keys()))
print(list(my_dictionary.values()))
```

ก็จะออกมาเป็น

```python
['happy', 'not happy', 'sad']
[20, 30, False]
```
