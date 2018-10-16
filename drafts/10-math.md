# Math Library
หลังจากน้องๆได้ลองเล่น function แบบ built-in กันไปแล้ว<br>

สำหรับน้องๆที่ยังไม่เข้าใจว่า built-in function คืออะไร ก็ให้ไปเรียน concept ของมันซะก่อนนะครับ

แต่ใน lecture นี้ พี่มงก็จะทำการอธิบายเกี่ยวกับ library `math` นั่นเอง

ใน library นี้ก็จะมีฟังก์ชั่นที่น้องๆสามารถเอาไปช่วยคำนวณเลขแบบ advanced ได้โดยไม่ต้องเขียนวิธีการคำนวณเอง<br>
แต่ขั้นแรกต้องอธิบายว่า Library คืออะไรก่อน

### What is Library
> In computer science, a library is a collection of non-volatile resources used by computer programs, often for software development. These may include configuration data, documentation, help data, message templates, pre-written code and subroutines, classes, values or type specifications. -- Wikipedia.com

ก็จะสรุปได้ว่า เป็น collection ที่มีฟังก์ชั่นที่เขียนไว้แล้ว ให้นักพัฒนาได้เอาไปใช้นั่นเอง

## Importing Library
ถ้าน้องๆต้องการที่จะใช้ `library math` น้องๆก็จำเป็นที่ต้องโหลดมันซะก่อน โดยมีอยู่ 2 วิธีครับ

- โหลดตัว function ที่จะใช้จริง
- โหลด function ทุกตัวที่อยู่ใน library

แต่เนื่องจากว่า ถ้าน้องโหลดทุกตัวมา มันก็จะกินทรัพยากรเครื่องมากกว่า แต่ก็ไม่เป็นอะไรหรอกครับ ทรัพยากรเหลือเยอะแยะนะ อิอิ

### โหลดทุกตัว
```python
import math
```

หรือหากว่าน้องอยากที่จะเปลี่ยนชื่อ library ไปเป็นตามสไตล์ของน้องเอง ก็สามารถทำได้ครับ

```python
import math as quickmaffs
```
โดยคำว่า `as` นั้นจะทำให้น้องเปลี่ยนชื่อของ library ได้ทำให้น้องเรียก `quickmaffs.ceil()` แทน `math.ceil()` ได้ครับ

ตัวอย่างการใช้งาน function เมื่อโหลดมาแล้ว
```python
print(math.ceil(12.5))
```
สังเกตว่าจะมีการเขียน `math` ไว้หน้าชื่อฟังก์ชั่นด้วยนะครับ


!> แต่เปลี่ยนแล้ว เปลี่ยนกลับไม่ได้นาจาา ยกเว้นว่าจะ import ใหม่ครับ

### โหลดบางตัว
ใน ณ​ ตอนนี้อาจจะยังไม่ต้องเรียนก็ได้ครับ เพราะอันที่แล้วก็เพียงพอ แต่ถ้าอยากก็ไม่ว่าอะไรครับ

```python
from math import ceil
```

สังเกตว่าชื่อ library อยู่ที่หลัง `from` และชื่อ function จะอยู่หลัง `import`

ทำให้การเรียกใช้งานไม่ต้องมี `math.` แล้ว เรียกเหมือนฟังก์ชั่นธรรมดาได้เลย

ตัวอย่าง
```python
print(ceil(12.5))
```

## ฟังก์ชั่นที่ควรรู้ไว้
เนื่องจากมันมีเยอะมากๆๆๆๆๆ พี่มงก็เลยเลือกอันที่ต้องใช้บ่อยๆมาแล้วกันครับ อันอื่นๆ น้องอาจจะเข้าไปดูได้ในเว็บไซต์ของ Python.org ครับ

**Absolute Values**
Make the integer or float becomes positive only.
```python
math.fabs([value])
```
or use built-in function `abs()` instead.

**Exponent**
or use exponent \*\* sign
Returns value as x**y
```python
math.pow([value], [exponent power])
```

**Root of n**
Returns value as x^1/2 (square root)
```python
math.sqrt([float or integer])
```

**Logarithms**
Returns the value as log [base] [number]
```python
math.log([number], [base])
```

or use a predefined log level

```python
math.log2([number])
math.log10([number])
```

**Rounding Up**
Returns value as integer (rounding up)
```python
math.ceil([float or integer])
```

**Rounding Down**
Returns value as integer (rounding down)
```python
math.floor([float or integer])
```

**Factorial**
Returns the value of the value factorial
```python
math.factorial([integer])
```

**Calculate GCD**
Returns the GCD of integer A and B
```python
math.gcd([integer_a], [integer_a])

```

**Pi Constant**
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