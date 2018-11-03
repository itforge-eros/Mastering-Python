# DocString

เนื่องจากว่า ในอนาคต เราก็ต้องทำงานร่วมกับเพื่อนๆ ทำให้เราต้องมีการกำหนดวิธีการเขียนหน่อยครับ เพื่อให้เพื่อนๆเข้าใจว่าเรากำลังทำอะไรอยู่ และมันใช้อย่างไร

โดย Docstring ก็คือเป็นข้อมูล (Document) ที่เป็นข้อมูลเกี่ยวกับการใช้งานไฟล์ หรือ function นั่นเอง

Reference : [https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings](https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings)

และอันนี้ก็เป็นตัวอย่าง Docstring ที่เขียนไว้อยู่ระหว่างฟังก์ชั่น<br>
โดยฟังก์ชั่นนี้มีเป้าหมายในการแปลงคะแนนเต็ม 100 (คะแนนดิบ) ไปเป็นเกรด ที่มีค่าระหว่าง 0.0 ถึง 4.0

```python
def gpa_calculator(first_name, raw_score):
    """
        This function will calculate grade from student score

        Arguments:
            first_name: Store input that is a first name of user
            raw_score: A input from user that is a score based on 0 - 100 scale

        Returns:
            GPA: A calculated GPA that user will get in this semester (in 0.0 - 4.0 scale with 0.5 increments)

        Raises:
            none
    """
    MAX_GPA = 4.0
    if (100 => raw_score => 80):
        gpa = 4.0

    return gpa
```

คราวนี้ก็จะมาอธิบายเกี่ยวกับตัวโค้ดกันครับ

บรรทัดแรก `def gpa_calculator(first_name, raw_score):` ก็เป็นการประกาศฟังก์ชั่น ปกติครับ โดยมีการขอ parameter `first_name` และ `raw_score` ตามที่ DocString ได้บอกเอาไว้ ว่าเอาไว้ทำอะไร ต้องการอะไร

โดยบรรทัดแรกๆ จะเป็นการบอกว่า ฟังก์ชั่น หรือ โปรแกรมไฟล์นี้ทำงานเพื่ออะไร และจะได้ผลลัพท์ประมาณไหนออกมา พี่มงแนะนำว่าให้เขียนเชืงว่าให้เพื่อนเอาโค้ดของเราไปใช้ได้นั่นเอง

บรรทัด Arguments ก็จะเขียนว่าฟังก์ชั่นหรือโปรแกรมนี้รับค่าอะไรมา และมีตัวแปรอะไรที่ควรสนใจบ้าง พวกตัวแปรที่ใช้แล้วที้งเลย ไม่ต้องเขียนก็ได้ครับ

บรรทัด Returns ก็จะเขียนว่าฟังก์ชั่นหรือโปรแกรมไฟล์นี้จะมีการโยนค่าอะไรออกมาหรือเปล่า อาจจะถูกโยนออกมาเพื่อให้ตัวที่เรียกรับ

และบรรทัดสุดท้าย Raises ครับ อันนี้เราอาจจะยังไม่ต้องใช้ เพราะยังไม่มีความจำเป็นที่จะโยน Exception ไปหาตัวอื่นๆครับ