# Loops
Loop คือการทำซำ้ ๆ ซึ่งสามารถกำหนดให้ทำงานแบบต่าง ๆ ตามที่ต้องการได้ โดยแบ่งเป็น 2 ประเภท

1. วนเมื่อเงื่อนไขถูกต้อง (Condition-based Loop)
2. วนตามจำนวนที่ได้ระบุไว้ (Amount-based Loop)

## While Loop

<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/While-loop-diagram.svg/440px-While-loop-diagram.svg.png width="60%">

*ภาพประกอบจาก Wikipedia.com*

โดย `while` ก็คือการวนเมื่อเงื่อนไขยังคงถูกต้อง และจะทำการหยุดเมื่อเงื่อนไขไม่เป็นจริงแล้ว

### วิธีการใช้งาน
```python
while <expression>:
    # จะรันโค้ดในนี้เมื่อ <expression> ยังเป็นจริง
```

ตัวอย่างเช่น

```python
num = 0
while num < 5:
    print(num, end="")
    num += 1
```

```
0 1 2 3 4
```

### Infinite Loop

ซึ่งอย่างหนึ่งที่ต้องระวังเกี่ยวกับ while loop ก็คือการกำหนดเงื่อนไข ซึ่งหากเรากำหนดเงื่อนไขการวนลูปได้ไม่ดีหรือไม่ระมัดระวัง อาจเกิดสิ่งที่เรียกว่า Infinite loop หรือการวนที่ไม่รู้จบได้นั่นเอง ยกตัวอย่างเช่น

```python
num = 0
while True:
    print(num, end="")
    num += 1
```

ก็จะแสดงผลดังนี้ ไปเรื่อย ๆ ไม่มีที่สิ้นสุด

```
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 ...
```

## For Loop

เป็นการวนลูปที่เราสามารถเลือกกำหนดจำนวนรอบที่แน่นอนได้เลย โดยสามารถกำหนดได้หลากหลายวิธี โดยจะแสดงในตัวอย่างด้านล่าง

### วิธีการใช้งาน
```python
for <variable> in <sequence>:
    # Statements
```

ตัวอย่างแรก เราสามารถใช้กับฟังก์ชัน `range()` ได้ เช่น

```python
for i in range(5):
    print(i, end="")
```

```
0 1 2 3 4
```

ตัวอย่างต่อมา จะเห็นว่าเราสามารถนำมาใช้งานกับ Sequence ได้กับประเภทใดก็ได้เลย

```python
for i in "Python":
    print(i, end=" ")
```

```
P y t h o n
```

หรืออีกหนึ่งตัวอย่าง

```python
for i in [15, 6, 1999]:
    print(i, end=" ")
```

```
15 6 1999
```

## การใช้ range()

`range()` นั้นเป็น built-in function ที่นำมาใช้ช่วยกำหนดช่วงของจำนวนเต็มที่เรียงต่อกันได้ โดยสามารถเลือกใส่ได้ตั้งแต่ 1 จนไปถึง 3 arguments ดังนี้

```
range(<stop>)
range(<start>, <stop>)
range(<start>, <stop>, <step>)
```

ซึ่งหลักการทำงานจะคล้ายคลึงกับ String เลยทีเดียว

ตัวอย่างที่หนึ่ง กำหนดเพียงค่า stop

```python
for i in range(5):
    print(i, end=" ")
```
```
0 1 2 3 4
```

ตัวอย่างที่สอง กำหนดค่า start และ stop

```python
for i in range(10, 15):
    print(i, end=" ")
```
```
10 11 12 13 14
```

ตัวอย่างที่สาม กำหนดครบทั้ง 3 ค่า start, stop และ step

```python
for i in range(10, 20, 2):
    print(i, end=" ")
```
```
10 12 14 16 18
```

## คำสั่ง break

`break` คีย์เวิร์ดที่จะช่วยให้โปรแกรมของเรานั้นหลุดออกจากลูปนั้น ๆ ทันที

โดยการใช้งานคือเราสามารถพิมพ์ `break` ไปข้างในลูปได้เลย ส่วนมากนิยมใส่ไว้ใน `if` อีกชั้นหนึ่ง เพื่อตรวจสอบเงื่อนไขที่จะให้หลุดออกจากลูปนั้น ๆ ยกตัวอย่าง เช่น

```python
for i in range(10):
    print(i, end=" ")
    if i == 3:
        break
```
```
0 1 2 3
```

ข้อควรระวังคือ หากมีลูปซ้อนกัน 2 ชั้น คำสั่ง `break` จะทำให้โปรแกรมออกจากลูปแค่ชั้นเดียวเท่านั้น เช่น

```python
for i in range(3):
    for j in range(5):
        print(j, end=" ")
        if j == 3:
            break
    print()
```
```
0 1 2 3
0 1 2 3
0 1 2 3
```

## คำสั่ง continue

คีย์เวิร์ดที่จะช่วยให้โปรแกรมของเรานั้นเริ่มลูปรอบใหม่ทันที โดยไม่สนคำสั่งที่อยู่ข้างล่างเลย มาดูตัวอย่างกันครับ

```python
for i in range(5):
    if i == 2:
        continue
    print(i, end=" ")
```
```
0 1 3 4
```

ซึ่ง continue นั้นมักจะใช้ในกรณีที่เราต้องการข้ามบางอย่างไปในการทำงานแบบวนซำ้ของโปรแกรมเรานั่นเอง
