# Math Library
หลังจากที่เราได้ลองใช้ function แบบ built-in กันไปแล้ว

สำหรับคนที่ยังไม่เข้าใจว่า built-in function คืออะไร แนะนำให้ไปศึกษา Lecture ก่อนหน้าให้เข้าใจก่อนนะครับ

lecture นี้ เราจะมาทำความรู้จักกับ library `math` กันนะครับ

ใน library นี้ก็จะมีฟังก์ชันที่เราสามารถเอาไปช่วยคำนวณเลขแบบ advanced ได้โดยไม่ต้องเขียนวิธีการคำนวณเอง แต่ขั้นแรกต้องอธิบายว่า Library คืออะไรก่อน

### What is Library
เป็นข้อมูลหรือ เครื่องมือที่มีผู้สร้างมาไว้อยู่แล้ว เราสามารถนำมาใช้งานได้เลยโดยไม่จำเป็นต้องเข้าใจการทำงานของ Algorithm ข้างใน

ก็จะสรุปได้ว่า เป็น collection ที่มีฟังก์ชั่นที่เขียนไว้แล้ว ให้นักพัฒนาได้เอาไปใช้นั่นเอง

## Importing Library
ถ้าเราต้องการที่จะใช้ `library math` ก็จำเป็นที่ต้อง Download ตัว library ก่อน โดยมีอยู่ 2 วิธีครับ

- โหลดตัวฟังก์ชันที่จะใช้จริง
- โหลดฟังก์ชันทุกตัวที่อยู่ใน library

แต่เนื่องจากว่า ถ้า Download ทุกตัวมา มันก็จะกินทรัพยากรเครื่องมากกว่า

### Import ทุกตัว
```python
import math
```

หรือหากว่าอยากที่จะเปลี่ยนชื่อ library ไปเป็นตามสไตล์ของเราเอง ก็สามารถทำได้ครับ

```python
import math as m
```

โดยคำว่า `as` นั้นจะทำให้น้องเปลี่ยนชื่อของ library ได้ทำให้น้องเรียก `m.ceil()` แทน `math.ceil()` ได้ครับ

ตัวอย่างการใช้งาน function เมื่อโหลดมาแล้ว
```python
print(math.ceil(12.5))
```
สังเกตว่าจะมีการเขียน `math` ไว้หน้าชื่อฟังก์ชั่นด้วยนะครับ แต่เปลี่ยนแล้ว เปลี่ยนกลับไม่ได้ ยกเว้นว่าจะ import ใหม่ครับ

### Import เพียงบางตัว
ใน ณ​ ตอนนี้อาจจะยังไม่ต้องเรียนก็ได้ครับ เพราะอันที่แล้วก็เพียงพอ แต่ถ้าอยากก็ไม่ว่าอะไรครับ

```python
from math import ceil
```

สังเกตว่าชื่อ library อยู่ที่หลัง `from` และชื่อ function จะอยู่หลัง `import`

ทำให้การเรียกใช้งานไม่ต้องมี `math.` แล้ว เรียกเหมือนฟังก์ชั่นธรรมดาได้เลย

ตัวอย่างเช่น
```python
print(ceil(12.5))
```

โดยเรายังสามารถใช้คีย์เวิร์ด from และ as ด้วยกันได้ด้วยอีก เช่น

```python
from math import factorial as fac
```

ดังนั้นการเรียกใช้จะเป็นเพียง
```python
print(fac(3))
```

## ฟังก์ชั่นที่ควรรู้ไว้
เนื่องจากมันมีเยอะมากๆ ทางเราเลยเลือกอันที่ต้องใช้บ่อยๆมาแล้วกันครับ อันอื่นๆ อาจจะเข้าไปดูได้ในเว็บไซต์ของ Python.org ครับ

**Absolute Values**
<br>ทำให้ค่าของตัาแปลตัวเลขเป็นเชิงบวกทั้งหมด<br>
Make the integer or float becomes positive only.
```python
math.fabs([value])
```
or use built-in function `abs()` instead.<br>
แต่เราก็สามารถใช้ `abs()` ที่เป็น Built-in function ก็ได้ครับ

**Exponent**<br>
การยกกำลังนั้นเองแต่เราก็สามารถให้ Operator `**` ก็ได้ครับ<br>
or use exponent \*\* sign
Returns value as x**y
```python
math.pow([value], [exponent power])
```

**Root of n**<br>
คือการหา รากของ n  นั้นเอง<br>
Returns value as x^1/2 (square root)
```python
math.sqrt([float or integer])
```

**Logarithms**<br>
คือการหาค่า log โดย paramenter แรก จะเป็นฐาน ส่วนอีกตัวจะเป็นเลข<br>
Returns the value as log [base] [number]
```python
math.log([number], [base])
```
หรือเราสามารถใช้ ตัวสำเร็จรูป ก็ได้ <br>
or use a predefined log level

```python
math.log2([number])
math.log10([number])
```

**Rounding Up**<br>
เป็นการปัดเลขทศนิยมโดยจะเป็นการปัดขึ้นทั้งหมด <br>
Returns value as integer (rounding up)
```python
math.ceil([float or integer])
```

**Rounding Down**<br>
เป็นการปัดเลขทศนิยมโดยจะเป็นการปัดลงทั้งหมด <br>
Returns value as integer (rounding down)
```python
math.floor([float or integer])
```

**Factorial**<br>
เป็นการหา Factorial ของค่านั้นๆ <br>
Returns the value of the value factorial
```python
math.factorial([integer])
```

**Calculate GCD**<br>
เป็นการหา หรม (หารร่วมมาก) ของตัวเลข 2 ตัว<br>
Returns the GCD of integer A and B
```python
math.gcd([integer_a], [integer_a])

```

**Pi Constant**<br>
เป็นค่าคงที่ของ PI <br>
Returns the value of pi (more accurate than 22/7, but not for 355/113)
```python
math.pi()
```

## Trigonometric Functions
![](https://engineering.purdue.edu/~asm215/topics/trigfunc.gif)

```python
math.sin([radians])
math.cos([radians])
math.tan([radians])

math.csc([radians])
math.sec([radians])
math.cot([radians])

math.arcsin([radians])
math.arccos([radians])
math.arctan([radians])
```
สังเกตดูครับ ว่ามันใช้ `radians` ไม่ใช่ `degrees` ครับ

**เปลี่ยน Degrees -> Radians**
```python
math.radians([degree])
```