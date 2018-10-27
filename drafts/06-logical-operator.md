# Logic Operator
Logic Operator เป็นการจัดการตัวแปรประเภท boolean เพื่อการจัดการ logic นั่นเอง<br>
โดยเราจะได้ใช้งานอีก 1 รอบเมื่อได้เรียน Conditions ครับ

ตัวอย่าง Logic Operator

| Logical Operator | วิธีการเขียน |
|:----------:|:------------------:|
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

NOTE : โดย 0 คือค่าเท็จ 1 คือค่าจริง

จากการสังเกต ก็จะเห็นได้ว่า
- สมการ AND ตัวแปรทั้งสองต้องเป็น TRUE เพื่อทำให้สมการเป็น TRUE
- สมการ OR ตัวแปรทั้งสองต้องเป็น FALSE เพื่อทำให้สมการเป็น FALSE
- สมการ NOT นั้นจะสลับ logic ไปเป็นอีกฝั่งนึงเลย (เช่น จริงเปลี่ยนไปเป็นเท็จ และ เท็จเปลี่ยนไปเป็นจริง)

## Comparison Operator
| **==**    | **!=**       | **<**     | **<=**                | **>**     | **>=**                |
|-----------|--------------|-----------|-----------------------|-----------|-----------------------|
| Equals to | Not equal to | Less than | Less than or equal to | More than | More than or equal to |