# String
น้องๆ ก็ได้เรียนไปแล้วถึงประเภทของตัวแปร วันนี้จะมาเรียนรู้ว่าเราจะทำอะไรได้กับตัวแปรแบบ String กันบ้าง

โดยจะแยกออกมา 3 เนื้อหาใหญ่ๆ นั่นก็คือ
- Introduction to String
- [String Array](Python/String/Array/)
- [String Format](Python/String/Format/)

## Introduction to String 
แต่พี่มงต้องอธิบายก่อนนะครับว่า String คืออะไร

String คือ**กลุ่ม**ของตัวอักษร (Character) อย่างน้อย 2 ตัวอักษรเป็นต้นไป (หมายความว่า String จะถูกเรียกว่า Character เมื่ิอมีตัวอักษรเพียงตัวเดียวเท่านั้น)

**แต่การเรียก Character เป็นเพียงนิยามเฉยๆ ตอนเขียนจริงก็ให้เรียกว่ามันคือ String ครับ**

## String Concatenation
Concatenation นั้นหมายถึงการนำ string มาแปะเข้าด้วยกัน [[Wikipedia.com]](https://en.wikipedia.org/wiki/Concatenation)

น้องสามารถทำการเอา String มาแปะกันได้ โดยการใช้เครื่องหมายบวก (`+`)

ตัวอย่างเช่น
```python
text = "Hello"
text2 = "World"
print(text + text2) # Returns "HelloWorld"
```

หรือน้องๆสามารถใช้เครื่องหมาย , เพื่อทำการเอามาแปะกัน <br>
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

แล้วทำไมมันไม่ได้เหมือน `print(text1, text2)` หล่ะครับ<br>
นั่นก็เพราะว่า เขียนแบบนั้น ก็หมายถึงการให้ตัวแปร `text1` และ `text2` ไปจัดเก็บอยู่ในตัวแปร `text3` นั่นเอง

แต่เอาเป็นว่า มันได้ค่าไม่เท่ากันครับ ไว้ใน lecture หน้าๆจะมาอธิบายครับ

## String with Integer
พี่มงบอกเองไม่ใช่เหรอ ว่าเอา String มาทำอะไรกับตัวเลขไม่ได้<br>
แต่ก็ยังมีข้อยกเว้นอยู่นะครับ เมื่อเอา String มายุ่งกับ Integer ตัวอย่างเช่น
```python
text = "Kumamon"
print(text * 5) # Returns "KumamonKumamonKumamonKumamonKumamon"
```

ซึ่งการคูณแบบนี้ Python จะคิดว่าให้ทำการ copy และแปะตัว string นั้น 5 รอบ

::: tip Challenge
น้องลองคิดดูซิ ว่าถ้าพี่เขียนแบบนี้
```python
text = "Kumamon"
print(5 * text)
```
แล้วจะรันผ่าน และได้ผลลัพท์เหมือน `print(text * 5)` หรือเปล่า
:::

แล้วทำไมอันนี้ มันไม่ทำงานหล่ะครับ ???
```python
text = "kuma"
text2 = "mon"
print(text + text2 + 555)
```

มันแสดงข้อความนี้ออกมาอ่ะครับ
```text
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: must be str, not int
```

นั่นก็เพราะว่า Python นึกว่าน้องจะเอาไป Concatinate นั่นเอง ซึ่งเลข 555 นั้นไม่ใช่ String แต่เป็น Integer จึงไม่สามารถทำการ Concat ได้<br>
วิธีการแก้ไขจึงต้องแปลงค่า Integer ไปเป็น String ซะก่อน เลยได้เป็น

```python
text = "kuma"
text2 = "mon"
print(text + text2 + str(555)) # Returns kumamon555
```

### วิธีให้ตัวแปรเก็บค่า String
น้องสามารถใช้ "" เพื่อครอบตัวอักษร เพื่อบอกว่ามันเป็น String ก็ได้<br>
หรือน้องจะใช้ฟังก์ชั่น `str()` เพื่อทำการ Data Type Casting ก็ได้ครับ

ตัวอย่างการให้มันเก็บแบบ string แน่นอน
```python
text1 = "" # ขอบอกไว้ก่อนว่า Python ไม่ต้องทำการจองตัวแปรนะครับ
text2 = "Hello World"
text3 = "Not that much 555"
text4 = "12" # ค่า '12' (string) จะไม่เท่ากับ 12 (integer) นะครับ ต้องระวังให้ดี
```

---

สำหรับเนื้อหา String Array และ String Format ก็สามารถคลิกดูได้ที่ลี้งก์ข้างล่างครับ<br>
[String Array](Python/String/Array/)  [String Format](Python/String/Format/)
