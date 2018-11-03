# String
หลังจากที่เรารู้จักตัวแปรต่าง ๆ ของ Python แล้ว ต่อไปใน Lecture นี้ เราจะมาดูกันว่าเราสามารถทำอะไรได้บ้างกับข้อมูลประเภท String หรือข้อความนั่นเอง

โดยจะแยกออกมา 3 เนื้อหาใหญ่ๆ นั่นก็คือ
- Introduction to String
- [String Array](Python/String/Array/)
- [String Format](Python/String/Format/)

## Introduction to String 
String คืออะไร

String คือกลุ่มของตัวอักษร (Character) อย่างน้อย 2 ตัวอักษรเป็นต้นไป (หมายความว่า String จะถูกเรียกว่า Character เมื่ิอมีตัวอักษรเพียงตัวเดียวเท่านั้น)

แต่การเรียก Character เป็นเพียงนิยามเฉยๆ ตอนเขียนจริงก็ให้เรียกว่ามันคือ String ครับ

## String Concatenation
Concatenation นั้นหมายถึงการนำ string มาแปะเข้าด้วยกัน [[Wikipedia.com]](https://en.wikipedia.org/wiki/Concatenation)

เราสามารถทำการเอา String มาต่อกันได้ โดยการใช้เครื่องหมายบวก (`+`)

ตัวอย่างเช่น
```python
text = "Hello"
text2 = "World"
print(text + text2) # Returns "HelloWorld"
```

หรือเราสามารถใช้เครื่องหมาย , เพื่อทำการเอามาแปะกัน <br>
แต่ว่าจะแตกต่างจาก + นั่นคือ **เอาไปแปะแล้วมี Space ด้วย 1 ตัว**

ตัวอย่างเช่น
```python
text = "Hello"
text2 = "World"
print(text, text2) # Returns "Hello World"
```

แต่ในตัวอย่างนี้
```python
text1 = "Hello"
text2 = "World"
text3 = text1, text2 # Returns ('Hello', 'World')
```

แล้วทำไมมันไม่ได้เหมือน `print(text1, text2)` ละ<br>
นั่นก็เพราะว่า เขียนแบบนั้น ก็หมายถึงการให้ตัวแปร `text1` และ `text2` ไปจัดเก็บอยู่ในตัวแปร `text3` นั่นเอง

แต่เอาเป็นว่า มันได้ค่าไม่เท่ากันครับ ไว้ใน lecture หน้า ๆ จะมาอธิบายครับ

## String with Integer
เราเพิ่งผ่านมาเองว่าเอา String มาทำอะไรกับตัวเลขไม่ได้ แต่ก็ยังมีข้อยกเว้นอยู่นะครับ เมื่อเอา String มายุ่งกับ Integer ตัวอย่างเช่น

```python
text = "Kumamon"
print(text * 5) # Returns "KumamonKumamonKumamonKumamonKumamon"
```

ซึ่งการคูณแบบนี้ Python จะคิดว่าให้ทำการ copy และแปะตัว string นั้น 5 รอบ

แล้วทำไมอันนี้ มันไม่ทำงานละครับ ?
```python
text = "kuma"
text2 = "mon"
print(text + text2 + 555)
```

Console จะแสดงข้อความนี้ออกมา
```text
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: must be str, not int
```

นั่นก็เพราะว่า Python นึกว่าเราจะเอาไป concatenate นั่นเอง ซึ่งเลขนั้นไม่ใช่ String แต่เป็น Integer จึงไม่สามารถทำการ concatenate ได้<br>
วิธีการแก้ไขจึงต้องแปลงค่า Integer ไปเป็น String ก่อน เลยได้เป็น

```python
text = "kuma"
text2 = "mon"
print(text + text2 + str(555)) # Returns kumamon555
```

### วิธีให้ตัวแปรเก็บค่า String
เราสามารถใช้ "" เพื่อครอบตัวอักษร เพื่อบอกว่ามันเป็น String ก็ได้<br>
หรือจะใช้ฟังก์ชั่น `str()` เพื่อทำการ Data Type Casting ก็ได้ครับ

ตัวอย่างการให้มันเก็บแบบ string แน่นอน
```python
text1 = "" # ขอบอกไว้ก่อนว่า Python ไม่ต้องทำการจองตัวแปรนะครับ
text2 = "Hello World"
text3 = "Not that much 555"
text4 = "12" # ค่า '12' (string) จะไม่เท่ากับ 12 (integer) นะครับ ต้องระวังให้ดี
```
