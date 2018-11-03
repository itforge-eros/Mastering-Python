# Introduction to While Loop
![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/While-loop-diagram.svg/440px-While-loop-diagram.svg.png)
<br>*ภาพประกอบจาก Wikipedia.com*

โดย `while` ก็คือการ **วนเมื่อเงื่อนไขยังคงถูกต้อง** และจะทำการหยุดเมื่อเงื่อนไขไม่เป็นจริงแล้ว หากยังไม่เข้าใจก็ให้อ่านใหม่ครับ แต่ถ้าเข้าใจแล้วก็อ่านเรื่องต่อไปได้เลย

!> **คำแนะนำ**<br>
เนื่องจากว่าอันนี้มันง่ายที่สุด เลยแนะนำว่าให้มาลองเล่นอันนี้ให้่ชำนาญก่อนนะครับ ก่อนที่จะไปหา Loop อีกประเภทนึง

## วิธีการใช้ WHILE loop
```python
while <statement>:
    # และจะรันโค้ดด้านล่างเมื่อ <argument> ยังเป็นจริง
```

ตัวอย่างเช่น
```python
count = 10
while count > 5:
    print(count, end=" ")
    count = count - 1
```

ก็จะได้ค่าออกมาเป็น
```
10 9 8 7 6
```

## Infinite Loop
![](http://3.bp.blogspot.com/_F7vpRIjAvYI/TIU7VpNlbzI/AAAAAAAABoI/s2clJ4LoWO0/s1600/image.png)

Infinite Loop คืออะไร ??<br>
1 Infinite Loop เป็นบ้านของ Apple ครับ<br>

หยอกๆ Infinite Loop ก็คือ Loop ที่ัยังไม่จบนั่นเอง(ตอนนี้กลายเป็น Apple Park แล้ว)<br>
เนื่องจากอะไรนั่นเหรอ ก็เพราะว่าเงื่อนไขยังไม่เป็นจริงซักทียังไงหล่ะ มันก็เลยเกิด

![](https://www.google.co.th/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjKs9Hn4pbeAhVEsY8KHXMeC0AQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FApple_Park&psig=AOvVaw0ij_SwrAc9DmsoV8RsdNwV&ust=1540185108879342)

และเมื่อเกิดแล้ว เราก็จะหยุดมันไม่ได้ครับ ยกเว้นว่าต้องทำการหยุดด้วยการ Terminate โปรแกรม
เอาเป็นว่าไปดูตัวอย่างดีกว่าครับ

```python
client = "apple"
while (client = "apple"):
  print("You are in an infinite loop")

# Returns
You are in an infinite loop
You are in an infinite loop
You are in an infinite loop
You are in an infinite loop
...
...
...
...
# แล้วมันไม่หยุดเลยครับ
```
ถ้าสังเกตดีๆ บรรทัดแรกพี่ได้ประกาศตัวแปร client ให้เท่ากับ "apple" มันก็ไม่มีอะไรแปลกประหลาด
บรรทัดที่ 2 เราได้เขียนว่า "เมื่อตัวแปร client เท่ากับ String "apple" จะให้วน loop" ก็ไม่แปลกอะไร แล้ว loop ก็เรื่มครับ เพราะว่าเป็นจริง

แต่ว่า ไม่มีบรรทัดไหนมีการเปลี่ยนตัวแปร client เลย ทำให้ "เมื่อตัวแปร client เท่ากับ "apple" แล้วก็จะให้วน loop" ยังคงเป็นจริงอยู่ ทำให้วนอยู่แบบนี้ครับ ไม่มีใครหยุดมันเลย

## คำสั่งอื่นๆที่เกี่ยวข้อง (Break & Continue)
เนื่องจากว่า เราต้องการทำ loop แต่ก็อยากที่จะข้าม หรือหยุด loop เมื่อถึงเงื่อนไขที่น้องตั้งเพื่มขึ้นมานั่นเอง<br>
ใน lecture นี้ก็จะสอน keyword ทืี่เราเอาไว้คควบคุม loop 2 อัน นั่นก็คือ
- Break
- Continue

### Using break
เป็น keyword ที่ว่า เมื่อ loop ถึงบรรทัด break นี้ได้ก็จะทำการออก loop นั้นทันที

!> **ข้อระวัง**<br>ออกแค่ใน loop ที่ตัวเองอยู่ หากว่าอยู่ใน loop ซ้อน loop ก็จะออก loop ที่ตัวเองอยู่ แต่ไม่ได้ออก loop ที่วนอยู่ภายนอก

ตัวอย่างการใช้ `break`
```python
kumamon = "cute"
age = 21

while (kumamon == "cute"):
    print("I am happy")
    age += 1
    
    if (age == 25):
        break
```

ก็จะออกผลมาว่า
```
I am happy
I am happy
I am happy
I am happy
```
เพราะได้วน 4 รอบ แต่ทำไมวนได้ 4 รอบละ

รอบแรกค่า age = 21 และก็ได้เพื่มในบรรทัดที่ 6 เป็น 22 ครับ และบรรทัดที่ 8 ก็ไม่เป็นจริง เพราะว่า 22 ไม่เท่ากับ 25 ครับ<br>
รอบที่ 2 ก็เช่่นกัน age = 22 และก็ได้เพื่มในบรรทัดที่ 6 เป็น 23 ครับ และบรรทัดที่ 8 ก็ไม่เป็นจริง เพราะว่า 23 ไม่เท่ากับ 25 ครับ

วนไปถึงรอบที่ 4 age = 24 และก็ได้เพื่มในบรรทัดที่ 6 เป็น 25 ครับ และบรรทัดที่ 8 ก็เป็นจริง เพราะว่า 25 เท่ากับ 25 แล้ว จึงถึงบรรทัดที่มี `break` ได้ ทำให้โปรแกรมออกจาก loop มานั่นเอง 

### Using continue
โดยตัว continue นั้นมีความแตกต่างกับ break อยู่นิดเดียว นั่นก็คือ หากถึงบรรทัดนั่นแล้ว ก็จะกลับไปรัน loop ใหม่ โดยทำให้ข้ามบรรทัดที่จะทำงานหลังมันทันที

ถ้ายังไม่เข้าใจก็ไปดูกันครับ
```python
i = 0
while (i < 16):
    i += 1
    if (i % 5 == 0):
        continue

    print(i, end=" ") # ในบรรทัดนี้ ได้ใส่ parameter `end = " "` เข้าไปด้วย เพื่อให้มันปรี้นท์ " " แทนบรรทัดใหม่ครับ (แต่เดิมเป็น end="\n")

print("Loop is complete!")
```
ก็จะแสดงผลออกมาดังนี้ครับ
```
"1 2 3 4 6 7 8 9 11 12 13 14 16 Loop is complete"
```
เราก็จะเห็นว่า พอ i เท่ากับ 0, 5, 10, 15 แล้ว ก็จะไม่รันโค้ดด้านล่างเลย (บรรทัดที่ 7 เป็นต้นไป)<br>
แต่เนื่องจากว่าบรรทัดที่ 9 นั้นไม่ได้อยู่ใน loop เลยรันได้อย่างปกติดี

พี่ก็เลยทำสรุปเอาไว้สำหรับ break และ continue ดังนี้ครับ

|              | **break**       | **continue**                 |
| ------------ | --------------- | ---------------------------- |
| **เพื่อเอาไว้** | หยุด loop  | เรื่ม loop ใหม่ทันที          |
| **มีหน้าที่หลักคือ**| เพื่อเอาไว้กัน infinite loop | เพื่อหยุดให้ loop ทำงานในส่วนที่ไม่เกี่ยวข้อง |

---

## [FOR Loop](Python/Loop/For/)