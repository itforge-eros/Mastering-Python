## วิธีการใช้ `FOR` loop
![](https://www.programtopia.net/sites/default/files/for_0.png)

หลังจากที่ได้เรียน loop ที่จะหยุดเมื่อเงื่อนไขถูกต้องไปแล้ว ตอนนี้ก็จะมาเรียนแบบใหม่<br>
นั่นก็คือ FOR loop นั่นเอง

`FOR` loop นั่นเอาไว้ใช้ทำ loop ที่มีปริมาณ loop อธิบายไว้<br>
เช่นให้ loop 5 ครั้ง หรือ loop ตามขนาดความยาวของตัวอักษร (String)

นี่ก็คือวิธีใช้งาน for loop ครับ
```python
for <variable> in <list or string>:
```

ถ้ายังใช้ไม่เป็น ก็มีตัวอย่างมาให้ดูครับ
```python
for i in range(10):
    print(i, end=" ")

# prints 0 1 2 3 4 5 6 7 8 9
```
จุดที่เราควรสังเกตนั่นก็คือ <variable> และ `range(10)` ครับ
- โดยตัวแปรที่เราเลือก​ (นั่นก็คือ i) ก็สามารถถูกเรียกได้ตลอด ซึ่งตัว i นี้ก็จะเพื่มไปเรื่อยๆ ตาม range ครับ พี่เลยสามารถที่จะเขียน `print(i)` ได้ และออกมาเป็น 0 1 2 3 ... นั่นเอง
- range(10) เราก็อาจจะคุ้นๆกับ [] ที่บอกว่าให้เรื่มจุดไหน หยุดจุดไหน ก็จะคล้ายๆกับ range() นะครับ โดยหากว่าใส่ parameter ไปเพียงอันเดียว มันก็จะเรื่มตั้งแต่ 0 ให้ จนถึงตัวเลขที่ใส่เข้าไป ในกรณีนี้ก็คือ 10 - 1 = 9 นั่นเอง

!> อย่าลืม<br>
ว่า array เรื่มที่ 0 นะจ๊ะ

หากน้องๆยังไม่เข้าใจ keyword [`in`](Python/Loop/For/?id=in-keyword) และฟังก์ชั่น [`range()`](Python/Loop/For/?id=การใช้-range) ก็จะอยู่หลังๆเลยจ้า

**โจทย์ปัญหา** อยากวนเท่ากับตัวเลขในตัวแปร
```python
age = 21
for i in range(age):
    print("My age is : %d years old" %i)
```

**โจทย์ปัญหา** อยาก loop เท่าความยาวของ string
```python
first_name = "Kumamon"
for i in range(len(first_name)):
    print(i)
```
โดยเราสามารถคำนวณความยาวของ string โดยการใช้ `len()` ได้นะครับ และตัว `len()` ก็จะคืนค่าออกมาเป็นตัวเลข แล้วตัวฟังก์ชั่น `range()` ก็จะไปรับตัวเลขมา เพื่อมารันจำนวนนั้นๆให้ครับ

**โจทย์ปัญหา** อยากให้ปรี้นท์ตัวอักษรแต่ละตัวออกมาแทน
```python
for i in "Kumamon":
    print(i, end=" ")

# prints "K u m a m o n"
```

**โจทย์ปัญหา** อยากใช้งาน loop เพื่อปรี้นท์ข้อมูลใน array ออกมาทีละตัว
```python
text = [1,2,3,4,5]
for i in text:
    print(i, end=" ")

# prints "1 2 3 4 5"
```

## Loop ซ้อน Loop
![](http://etutorials.org/shared/images/tutorials/tutorial_23/09inf08.gif)
โดย loop ทั่วๆไปก็สามารถทำ loop ซ้อนๆกันได้ เพื่อประหยัดเวลาของเราเอง

หลักการก็คือ ตัวโปรแกรมก็จะรัน loop แรก แล้วมันก็ไปเจอ loop อีกอันนึง เลยเข้าไปทำ loop ที่อยู่ข้างในกว่า

This program will run to the total of 2 x 2 x 2 = 8 times.
```python
for i in range(2, 5):
    for j in range(2, 5):
        print("%d x %d = %d" %(i, j, i * j))
```
ก็จะออกผลลัพท์มาเป็น
```
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
```

### Using For loops to call function
```python
def main():
    for i in range(2):
        for j in range(2):
            kumamon(i, j)

def kumamon(num1, num2):
    print(num1 + num2)

main()

# Returns
0
1
1
2
```

---

## การใช้ keyword `IN`
`in` คือ operator ที่ใช้ Check ว่าภายใน String หรือ Array  มี  operand หรือ ค่าในตัวแปลของเรารึปล่าว

`in` keyword is pretty much like equal sign. But it can return true if **some** element does qualify.

```python
How to use:
<text> in <text>

Example
"kumamon" in "kumamon is happy" # Returns True
"kumamoto" in "kumamon is happy" # Returns False
```
in is a tester that find the text within the text. Similarly to .find()

**การเอา `IN` ไปใช้กับ array**
```python
Example

shopping_list = ['Apple', 'Banana', 'Peanut', 'Butter', 'Jelly']

"Apple" in shopping_list # Returns true
"Kumamon" in shopping_list # Returns false
```

## การใช้ฟังก์ชั่น `range()`
การใช้ฟังก์ชั่นนี้ ก็จะคืนค่าออกมาเป็น list ที่มีตัวเลข (integer) เรียงตามที่ให้ parameter มา
```python
How to use:
range(<stop>)
range(<start>, <stop>)
range(<start>, <stop>, <step>)

Example
range(10)       # Returns 0,1,2,3,4,5,6,7,8,9
range(1, 10)    # Returns 1,2,3,4,5,6,7,8,9,10
range(1, 10, 2) # Returns 2,4,6,8,10
```
**ตารางเปรียบเทียบ**

| Loop Type / Sample Environment | **For**      |**While**          |
| ------------------------------ | ------------ | ----------------- |
| Requires to start              | Amount of loops | Argument that still true |
| Loop Control                   | Using in, range() or array | Using break or making argument becomes false |
| Stop when                      | Loop amount is done | When argument is false |
| Made for                       | Exact number of loops | Argument that can become false     |

---

## [WHILE Loop](Python/Loop/While/)
