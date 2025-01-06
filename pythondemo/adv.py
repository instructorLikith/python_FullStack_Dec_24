# functions
# syntax 
def my_function(fname, lname):
    print("Hello! " + fname + " " + lname)

my_function("World", "Param")

#to pass arbitrary arguments --> *args
def arb_arg(*kids): 
    print(kids)

arb_arg("abc", "efg", "xyz", "pqr")

#kwargs, keyword arguments --> **kwargs
def print_kid_name(**kids):
    print("first Name is " + kids["fname"] + " & last name is " + kids["lname"])

print_kid_name(lname = "Hello", fname = "World")

#Default Param
def print_country(country = "India"):
    print("The Country is " + country)

print_country()

#passing list as param
def print_fruits(fruits):
    for x in fruits:
        print(x)


fruits = ["apple","orange","cherry"]

print_fruits(fruits)

#Return from function
def multiply_by_2(num):
    return 2 * num

print(multiply_by_2(5))
print(multiply_by_2(15))
print(multiply_by_2(25))

# for empty function
def myfunction():
    pass

myfunction()

#OOP - Object Oriented Programming
# class

class Car:
    def __init__(self, door, wheel, seat):
        self.door = door
        self.wheel = wheel
        self.seat = seat
    
    def print_car_design(self):
        print("wheels: " + self.wheel)
        print("seats: " + self.seat)
        print("door: " + self.door)


toyota = Car("3","4","2")
toyota.print_car_design()

suzuki = Car("5","4","4")
suzuki.print_car_design()

# OOP , Inheritance , Abstraction , Encapsulation , Polymorphism 

class Person:
    def __init__(self, name, age, gender):
        self.name = name #public
        self.__age = age #private
        self._gender = gender #protected
        print("init called")

    def get_person_name(self):
        return f"name is : {self.name}"
    
    def get_person_age(self):
        return self.__age
    
    def set_person_age(self, age):
        if age>0:
            self.__age = age
        else:
            print("Invalid Age")
    
p1 = Person("Raj",25,"male")

print(p1.name)

print(p1._gender)

#print(p1.__age)

p1.set_person_age(0)
print(p1.get_person_age())


str1 = "Hello World"
print(len(str1))

myTuple = ("apple","orange","cherry")
print(len(myTuple))

        
# j1 = Person("john", 30)
# j1.age = 40
# j1.name = "johnny"
# j1.print_person_name()

# r1 = Person("Raj", 20)
# r1.print_person_name()

# class Student(Person):
#     pass


# class Teacher(Person):
#     pass

# s1 = Student("Sathish",20)
# s1.print_person_name()

# t1 = Teacher("Raju",40)
# t1.print_person_name()