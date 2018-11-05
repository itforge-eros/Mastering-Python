# Logical Operator
Logical Operator เป็นตัวดำเนินการสำหรับการจัดการข้อมูลประเภท boolean เพื่อการจัดการ logic นั่นเอง โดยเราจะได้ใช้งานอีกเมื่อได้เรียน Conditions ครับ

ตัวอย่าง Logical Operator

| Logical Operator | วิธีการเขียน |
|:-:|:-:|
| AND | and | 
| OR | or |
| NOT | not |
| XOR | ^ |

การเอาโค้ดข้างบนมาเขียนใหม่ จึงได้แบบนี้นั่นเอง
```python
if (first_name == "Kumamon" and age == 21):
    print("My name is Kumamon")
```

## ตารางการใช้ Logical Operator
![](http://ds-wordpress.haverford.edu/bitbybit/wp-content/uploads/2012/07/Chapter_3-90.jpg)
*ภาพจาก haverford.edu*

โดย 0 คือค่าเท็จ 1 คือค่าจริง

จากการสังเกต ก็จะเห็นได้ว่า
- สมการ AND ตัวแปรทั้งสองต้องเป็น TRUE เพื่อทำให้สมการเป็น TRUE
- สมการ OR ตัวแปรทั้งสองต้องเป็น FALSE เพื่อทำให้สมการเป็น FALSE
- สมการ NOT นั้นจะสลับ logic ไปเป็นอีกฝั่งนึงเลย (เช่น จริงเปลี่ยนไปเป็นเท็จ และ เท็จเปลี่ยนไปเป็นจริง)

## Comparison Operator

Comparison Operator หรือตัวดำเนินการเปรียบเทียบ เป็นตัวดำเนินการประเภทหนึ่ง ที่ใช้จัดการกับค่า boolean เหมือนกัน ซึ่งจะนำไปใช้กับค่าประเภทต่าง ๆ เพื่อให้ได้มาซึ่งค่า boolean

ตัวดำเนินการเปรียบเทียบมีทั้งหมด 6 ตัว ดังนี้

| **==** | **!=** | **<** | **<=** | **>**| **>=** |
|---|---|---|---|---|---|
| เท่ากับ | ไม่เท่ากับ | น้อยกว่า | น้อยกว่าหรือเท่ากับ | มากกว่า | มากกว่าหรือเท่ากับ |

มาดูตัวอย่างการใช้งานเลย

```python
print(5 == 5)   # แสดงผล True
print(5 == 10)  # แสดงผล False
```

```python
print(5 != 10)  # แสดงผล True
print(10 != 10) # แสดงผล False
```

```python
print(20 < 30)  # แสดงผล True
print(30 < 30)  # แสดงผล False
print(40 < 30)  # แสดงผล False
```

```python
print(20 <= 30) # แสดงผล True
print(30 <= 30) # แสดงผล True
print(40 <= 30) # แสดงผล False
```

```python
print(50 > 35)  # แสดงผล True
print(35 > 35)  # แสดงผล False
print(20 > 35)  # แสดงผล False
```

```python
print(50 >= 35) # แสดงผล True
print(35 >= 35) # แสดงผล True
print(20 >= 35) # แสดงผล False
```

โดยค่าที่ตัวดำเนินการเหล่านี้คืนค่ากลับมา จะมีค่าเป็นชนิด boolean ก็คือ True หรือ False นั่นเอง โดย True มีค่าเทียบเท่าเป็น 1 และ False มีค่าเทียบเท่าเป็น 0

โดยหากลองนำค่า boolean มาแปลงเป็นจำนวนเต็ม จะได้ดังนี้

```python
print(int(False)) # แสดงผล 0
print(int(True))  # แสดงผล 1
print(int(1 > 2)) # แสดงผล 0
print(int(1 < 2)) # แสดงผล 1
```

ต่อมาสำหรับใน Python นั้น ค่า boolean ยังสามารถนำมากระทำการต่าง ๆ ได้แบบเดียวกันกับจำนวนเต็มทุกอย่างเลย ไม่ต้องแปลงเป็นจำนวนเต็มก่อนด้วย มาดูตัวอย่างกันครับ

```python
print(True + True)        # แสดงผล 2
print(True + True + True) # แสดงผล 3
print(100 * False)        # แสดงผล 0
```
