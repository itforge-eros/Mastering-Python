# Try and Except
คำว่า Try คือการลองโค้ดบรรทัดนั้น เพื่อหากว่าการลองนั้นไม่ผ่าน (เกิด Exception) ก็จะไม่ทำโปรแกรมเราพัง

```python
try:
    num = int(num)
```

The variable `num` will be converted if it does not returns out as error.
ตัวแปล `num` จะถูก Convert เป็นตัวแปลชนิด Integer แต่ถ้าไม่สามารถ convert ได้จะ Return error ออกมา

If you want to handle a specific error, you can use except keyword.
ถ้าต้องการที่จะรับมือกับ Error ที่เกิดขึ้น เราจะรับมือ Error โดยใช้ `except`

```python
try:
    num = int(num)
except:
    print("this thing cannot be convert to integer.")
```
