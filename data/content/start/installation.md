# Why have to be Python?
เราอาจจะยังสงสัย ว่าทำไมต้องเป็น "Python"

Python เป็นภาษาคอมพิวเตอร์ที่ให้เราสามารถกำหนดว่าให้คอมพิวเตอร์มันทำอะไรบ้าง ซึ่งการเรียนภาษา Python นั้นมี syntax ที่เข้าใจง่าย และง่ายต่อการเข้าใจการทำงานของอัลกอริทึม

และ Python นั้นเป็นภาษาที่รองรับระบบปฎิบัติการเยอะแยะไปหมด ทำให้มันแพร่หลาย และถูกนำไปใช้งานในหลาย ๆ วิธีเลย

## Obtaining Python
เนื่องจากว่า Python นั้นมีหลายแพลตฟอร์มมาก ทำให้นักพัฒนาได้เปิดให้พวกเราดาวน์โหลด Python ลงเครื่องกัน โดยจะเรียงลำดับจากความยากง่ายให้แล้วกันครับ

**Methods to obtain Python3**<br>
- Download Installer มาจาก [python.org](https://www.python.org/) (แนะนำ)
- Download Installer มาจาก [anaconda.com](https://www.anaconda.com/)
- Download โดยการใช้ HomeBrew (สำหรับ macOS)
- Download โดยการใช้ apt-get (สำหรับ Linux-based OS)

### Download Installer มาจาก Python.org
เราสามารถดาวน์โหลดตัว Python + Python IDE (IDLE) ได้ที่เว็บไซต์ของ Python.org ได้เลยครับ สามารถดาวน์โหลดได้[ที่นี่](https://www.python.org/downloads/)

ดังภาพตัวอย่าง เราสามารถกดปุ่มสีเหลืองเพื่อดาวน์โหลดได้เลยครับ

![](../assets/img/content/installation.png)

โดยทางเว็บไซต์จะขึ้นให้เราได้ดาวน์โหลด Python ตามระบบปฏิบัติการ (Operating System) ที่เราใช้โดยอัตโนมัติ

หากกรณีที่ขึ้นไม่ตรง หรืออยากหา Python สำหรับระบบปฏิบัติการอื่น ๆ เราก็ยังสามารถกดเลือกเพื่อค้นหาต่อได้ บริเวณด้านล่างของปุ่มดาวน์โหลดสีเหลืองนั่นเอง

### Download Installer มาจาก Anaconda.com
เราสามารถดาวน์โหลด Python ได้จากทาง Anaconda ครับ 

ข้อดีอย่างนึงของการทำแบบนี้นั่นคือ Conda (เป็นตัวจัดการ Python ของ Anacoda) จะทำการอัปเดตเวอร์ชันให้เป็นเวอร์ชั่นล่าสุดอย่างอัตโนมัติ ไม่จำเป็นที่จะต้องไปลงใหม่เหมือนกับวิธีแรก

แต่ข้อเสียจะอยู่ที่ว่ามันไม่มี IDLE ให้ครับ ทางเราเลยแนะนำว่าให้โหลด ถ้าต้องการนำไปใช้กับการเรียน Data Analysis หรือต้องการจะไปเป็น Data Scientist ครับ เพราะว่าเครื่องมือนั้นพร้อมจริง ๆ และใช้งานง่าย

### Download โดยการใช้ HomeBrew (สำหรับ macOS)
สำหรับผู้ที่อยากท้าทายตัวเอง และอยากใช้ Python บน command line ก็สามารถใช้ Homebrew ในการจัดการหลายๆอย่างให้นะครับ

หากยังไม่มี Homebrew บนเครื่อง ก็ให้พิพม์บรรทัดด้านล่างไปด้วยนะครับ
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

และทำการพิมพ์คำสั่งพวกนี้หลังจากทำการติดตั้ง HomeBrew เรียบร้อยแล้ว
```
brew doctor
brew install python
brew doctor
```

## Is Python in your computer?
สำหรับคนที่ใช้ MacOS หรือ Linux Distributions ทั้งหลาย เราสามารถเช็คว่ามี Python ในเครื่องแล้วหรือยัง โดยการพิมพ์
```
python3
```
ผ่านทาง Terminal ครับ

และสำหรับคนที่ใช้ Windows ถ้าเห็น IDLE อยู่บน desktop (หรือที่เก็บมันไว้) ก็ถือว่าดาวน์โหลดเรียบร้อยแล้วครับ โดยปกติแล้วจะมีเขียนเวอร์ขั่นของ Python กำกับที่บน IDLE ด้วยครับ (เช่น IDLE 3.7.1)

## Using Python Shell and Editor on IDLE
IDLE คือ IDE (Integrated Development Environment) ของ Python เอง ซึ่งมันก็จะแตกต่างกับตัว Text Editor อื่นๆ (เช่น Atom, Sublime Text, Visual Studio Code) นั่นก็คือมันใช้งานง่ายกว่า และก็สามารถกด `F5` (สำหรับผู้ที่ใช้ Windows) เพื่อทำการรันโปรแกรมได้เลย หรือกดปุ่มบนคีย์บอร์ดเพื่อรันโปรแกรม (script) ที่เราเขียนได้เลย

โดยเปิดตัว IDLE ขึ้นมาแล้ว เราจะเห็นหน้าต่างที่หน้าตาคล้ายกับ command line / shell ของ Python ตามภาพ

![](https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fi.stack.imgur.com%2Fbz1qE.jpg&f=1)<br>
หน้าต่าง IDLE

 **คำแนะนำ**<br>
สำหรับใครที่ดาวน์โหลด Python โดยการใช้ วิธีอื่นนอกจากวิธีแรก<br>
อาจจะไปทำเหมือนวิธีที่ 1 แต่ดาวน์โหลดเพียง IDLE
หรือลอง Google ดูครับว่ามีวิธีดาวน์โหลดผ่าน `apt-get` หรือไม่

## Using Python Shell on Terminal
สำหรับผู้ที่ดาวน์โหลด Python มาโดยการใช้ Homebrew หรือมีบนเครื่องแล้ว

ตัว Python บน Terminal ก็สามารถเรียกได้โดยการพิมพ์
```
python3
```
และหน้าจอก็จะเป็นดังภาพ

หรือคนที่ใช้ Windows ก็สามารถเขียนภาษา Python โดยใช้ shell ได้เหมือนกัน โดยการกดเข้าโปรแกรม Python Shell ก็จะได้ผลลัพท์เช่นเดียวกัน

![](https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fraphaelmarques.files.wordpress.com%2F2010%2F03%2Fterminal-python.png&f=1)

## Test your Python
เราต้องทดสอบก่อนว่า Python ที่ติดตั้งไปนั้น ทำงานได้อย่างถูกต้องหรือไม่<br>
โดยการเปิด Python ผ่าน IDLE หรือก็ Terminal ตามขั้นตอนด้านบนครับ

และพิมพ์
```python
print("My first Python Code!")
```

และก็ให้ลองกด ENTER ครับ<br>
หากว่ามันตอบกลับมาว่า "My first Python Code!" ก็ขอยินดีด้วยที่ด้วยนะครับที่ได้เขียนภาษา Python บรรทัดแรกเรียบร้อยแล้ว

---

## Run Python file on your computer
แต่ขั้นตอนพวกนี้ พี่ก็ยังไม่ได้พูดถึงเรื่องว่า ถ้าอยากเขียนโค้ดด้วยการใช้ Sublime, Atom, Visual Studio Code หรืออะไรต่างๆนาๆ ก็สามารถเขียนได้ แต่มันรันด้วยตัวมันเองไม่ได้หน่ะสิ ถถถ

ก็จะมารันไฟล์กันนะครับ โดยการเปิดโปรแกรม
- Windows PowerShell (สำหรับ Windows)
- Terminal (สำหรับ macOS และ Linux-based OS) 

ให้ `cd` เข้าไปที่โฟลเดอร์ที่เก็บไฟล์อยู่ และทำการพิมพ์
```
python3 <ชื่อไฟล์ + .py ด้วย>
```

ตัวอย่าง หากว่าเราได้บันทึกไฟล์ไว้ชื่อ `calculateMath.py` ก็ต้องพิมพ์แบบนี้เข้าไปครับ
```
python3 calculateMath.py
```

และถ้าหากว่าเรา ไม่ต้องการที่จะพิมพ์ input เข้าไปเอง ก็สามารถเขียน input ไว้ในไฟล์ .txt ครับ และทำแบบนี้
```
python3 <ชื่อไฟล์ + .py ด้วย> < <ชื่อไฟล์ input + .txt ด้วย>
```

และเช่นเดียวกัน ตัวอย่างว่า เราได้เซฟไฟล์ไว้ชื่อ `calculateMath.py` และชื่อไฟล์ input ชื่อ `calculateMathTestCase1.txt` ก็ต้องพิมพ์แบบนี้เข้าไปครับ
```
python3 calculateMath.py < calculateMathTestCase1.txt
```
การทำแบบนี้ เราก็ไม่จำเป็นที่จะต้องพิมพ์ input ด้วยตัวเองหลายๆครั้งครับ

แต่หากว่าเราอยากใช้ IDLE ก็ทำการ `File > Open` ตัวไฟล์ได้เลยนะครับ แลัวก็ใช้งานเหมือน IDLE เลย
