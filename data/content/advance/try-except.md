# Exceptions
คำว่า `try` คือการลองโค้ดกลุ่มหนึ่ง เผื่อหากว่าการลองนั้นไม่ผ่าน (เกิด Exception) ก็จะไม่ทำโปรแกรมเราพัง โดยหักเกิด Exception แล้ว ก็จะหยุดทำงานโค้ดในส่วนของ `try` ทันที แล้วทำงานในส่วนของ `except` แทน โดยเขียนได้ดังตัวอย่างนี้

```python
num = input()
try:
    num = int(num)
except:
    print("Integer Conversion Error")
```

โดย `except` นั้น เราสามารถเลือกดักเฉพาะ Exception เฉพาะอย่างก็ได้ โดยการใส่ชื่อ Exception นั้น ๆ ต่อจากคีย์เวิร์ด `except` ได้เลย เช่น

```python
num = input()
try:
    num = int(num)
except ValueError:
    print("Integer Conversion Error")
```

อยากดัก Exception เฉพาะมากกว่า 1 ชนิดก็ได้ โดยใช้ Tuple ที่เก็บชื่อ Exception ไว้ ดังนี้

```python
num = input()
try:
    num = int(num)
except (ValueError, EOFError):
    print("Integer Conversion Error")
```

แต่หากเกิด Exception ที่เราไม่ได้ทำการดักไว้ โปรแกรมเราก็จะพังแล้วหยุดทำงานทันทีอยู่ดี ดังนั้นในกรณีที่ไม่มั่นใจเรื่อง Exception เราอาจเลือกที่จะไม่ดัก Exception เฉพาะอย่างก็ได้

ยังมีอีกคีย์เวิร์ดคือ `finally` ซึ่งหลังจากโปรแกรมเราทำงานในส่วนของ `try` และ `except` ไปแล้ว โค้ดในส่วนของ `finally` นี้ก็จะทำงานต่อเสมอ ถึงแม้จะมีการ `return` หรือเรียกใช้ฟังก์ชัน `exit()` ใน `try` หรือ `except` มาก่อนหน้าก็ตาม เช่น

```python
try:
    num = int(num)
except:
    print("Integer Conversion Error")
finally:
    print("This is finally block")
```

สุดท้ายยังมีอีกคีย์เวิร์ดที่เรียกว่า `raise` ซึ่งเราอาจจะไม่ค่อยได้ใช้กันบ่อยนัก โดยเฉพาะผู้ที่กำลังหัดเขียนโปรแกรม แต่อาจจะจำเป็นต้องใช้เมื่อเขียนโปรแกรมขนาดใหญ่ในอนาคต

ซึ่งหน้าที่ของมันก็คือ ทำให้เกิด Exception นั่นเอง ใช่แล้วครับ! อ่านไม่ผิดแน่นอนครับ

ตัวอย่างการใช้งานคือ

```python
raise ZeroDivisionError
```

เราก็จะโดนตอบกลับมาราวกับว่าเกิด Exception จริง ๆ เลย ตัวอย่างประมาณนี้ครับ

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError
```
