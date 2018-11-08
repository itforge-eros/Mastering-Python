# Introduction to Python
ใน lecture นี้เราจะพามาดูในเรื่องการ
- เก็บค่าที่ได้รับมากับตัวแปร
- คำนวณเลข
- คำนวณสมการ

และรายละเอียดที่เหลือ หรือว่าข้ามไป ก็จะอยู่ใน lecture อื่นๆนะครับ

### ศัพท์ที่ควรรู้
เนื่องจากพวกเราจะทำการอธิบายอาจจะมีคำอธิบายด้วยศัพท์ทางคอมพิวเตอร์ดังนั้น ศัพย์ต่อไปนี้ควรรู้ไว้จะดีมากครับ<br>
โดยด้านล่างจะเป็นศัพท์ที่อาจจะใช้เพื่ออธิบาย lecture นี้ครับ และใน lecture อื่นๆ ก็จะเก็บพวกศัพท์ไว้ท้าย lecture ครับ

[`Logic`][1]
[`Statement`][2]

[1]: https://en.wikipedia.org/wiki/Logic_in_computer_science
[2]: https://en.wikipedia.org/wiki/Statement_(computer_science)

และพวกเราจะแนะนำให้ทุกคน เซฟไฟล์ Python แล้วเอาไป Run นะครับ หากยังทำไม่เป็น ก็สามารถเข้าไปดูได้[ที่นี่]()ครับ

## Basic calculation
ก่อนที่จะเรียน ให้คัดลอก Code ด้านล่างนี้ เพื่อเรียนเรื่อง basic calculation ครับ
```python
print(

)
```
ถ้ายังไม่เข้าใจว่า `print()` ก็ไม่เป็นไรครับ เดี๋ยวได้เรียนแน่นอน ขออธิบายย่อ ๆ ไว้ก่อนว่าเอาไว้แสดงผลลัพธ์บนหน้าจอครับ

เรื่มแรก ก็คือลองให้ Python คำนวณเลขดูครับ เช่น
```
2 + 2 
```
เราก็คงรู้คำตอบว่าเท่ากับอะไร แต่ลองดูครับ ว่า Python บอกว่าเท่ากับเท่าไหร่<br>
โดยการเอาไปแปะใน `print()` แบบนี้ครับ

```python
print(2 + 2)
```

แล้วก็ลองดู ว่าได้เท่าไหร่ หากได้ผลลัพธ์เป็น 4 ก็ต่อไป

ครววนี้เลขยาก ๆ หน่อยก็ได้ครับ

```
2 + 2 - 1
```

## Equation Logic 
ก็เป็นเนื้อหาอันสุดท้ายใน lecture นี้แล้ว นั่นก็คือการเทียบสมการครับ<br>

เพื่อจะทดสอบ ก็ให้คัดลอก Code เหมือนเดิมครับ
```python
bool1 = 2 + 2 == 4
bool2 = "Kuma" == "Kuma"
bool3 = "Kuma" == "kuma"
bool4 = True == True
bool5 = 1 + 1 == 2 and 2 == 3 - 1

print(bool1)
print(bool2)
print(bool3)
print(bool4)
print(bool5)
```

[DocString](Python/Introduction/Docstring/)  [Logical Operator](Python/Introduction/LogicalOperator/)  [Variable](Python/Introduction/Variable/)