# global
global is used to declare that a variable inside the function is global (outside the function).

If we need to read the value of a global variable, it is not necessary to define it as global. This is understood.

If we need to modify the value of a global variable inside a function, then we must declare it with global. Otherwise a local variable with that name is created.

Following example will help us clarify this.

globvar = 10
def read1():
    print(globvar)
def write1():
    global globvar
    globvar = 5
def write2():
    globvar = 15

read1()
write1()
read1()
write2()
read1()
Output

10
5
5
Here, the read1() function is just reading the value of globvar. So, we do not need to declare it as global. But the write1() function is modifying the value, so we need to declare the variable as global.

We can see in our output that the modification did take place (10 is changed to 5). The write2() also tries to modify this value. But we have not declared it as global.

Hence, a new local variable globvar is created which is not visible outside this function. Although we modify this local variable to 15, the global variable remains unchanged. This is clearly visible in our output.