# taking input from console
# name = input("Enter your name: ")
# print(name)
# age = int(input("Enter your age: "))
# print(age)

# # output to console
# print("Hello, " + name + "! your age is " + str(age))

# print(f"Hello, {name}! your age is {age}")


# string manipulation

first_name = "Python"
second_name = "Demo"
full_name = first_name + " " + second_name
print(full_name)

# Repetition of string
greet = "Hello!" * 5
print(greet.upper())

greet = "Hello! World"
print(greet.replace("Hello","Hey"))


# Accessing string characters
text = "Python"
print(text[0]) # output : P --> starts from begining index 0,1,2,3...
print(text[-2]) # output : o --> starts from end index -1,-2,-3....

# slicing 
print(text[0:4])
print(text[:4])
print(text[3:])

# length of string
print(len(text))

# multiline commenting
"""
print("will not print this")
"""

# Escape sequence \\
text1 = "python \n demo" 
print(text1)
text1 = "python\tdemo" 
print(text1)

# Operators
# Assignment Operators
# = : assign value on the right to the variable on the left
# += : adds right value to the left value and assign the value to the left ex., i += 1
# -= : sub ---- " " -----
# *= : multiplies 
# /= : divides
# %= : take modulus

x = 5 # assiging
x += 3 
print(x)
x -= 2
print(x)
x *= 4
print(x)
x /= 5
print(x)

# Comparison operator
# == : checks if two values are equal
# != : checks if two values are not equal
# > : checks if left is greater than right value
# < : checks if right is greater than left value
# >= : checks if left is greater or equal than right value
# <= : checks if right is greater ot equal than left value

a = 10
b = 20

# print(a == b)
# print(a != b)
# print(a > b)
# print(a < b)
# print(a >= 10)
# print(a <= 25)

# Logical operator
# and : returns true if both conditions are true
# or : returns true if atleast one condition is true
# not : reverses the logical state

x = 5
y = 10
z = 15

# print(x > 0 and y > 5)
# print(x > 10 or z > 10)
# print(not(x > 10))

# Membership operator
# in and not in
my_list = [1,2,3,4,5]
print(6 not in my_list)

my_string = "PythonDemo"
print(" " in my_string)


# List in Python
# List is a collection of items that is ordered, mutable(changeable) and allows duplicate elements. it can hold elements of different data types such as int,str..
# syntax of list my_list = [element1, element2, element3,....]

fruits = ["apple", "mango", "cherry"]
numbers = [1,2,3,4,5]
mixed = ["apple", 3 , True]

# accessing elements
print(fruits[-1])

# modifing the list
fruits[1] = "orange"
print(fruits)

# adding elements
# append to add at the end
fruits.append("grape")
print(fruits)
# add at specific place
fruits.insert(1,"kiwi")
print(fruits)

# removing elements
# removes the first occurance
# fruits.remove("orange")
# print(fruits)
# fruits.pop(1)
# print(fruits)

# slicing list
# list_name[start:end:step]

numbers = [0,2,1,3,6,4,5,2,2,2]
print(numbers[1:4])
print(numbers[::])

# list functions
print(len(fruits))

print(sorted(numbers))
print(sum(numbers))

print(fruits.index("cherry"))
print(numbers.count(2))

fruits.reverse()
print(fruits)

#Tuples
# tuple is a collection of items that is ordered and immutable(unchangeable). Tuples are similar to list but once tuple is created, you cannot modify it. 
# syntax my_tuple = (element1, element2, element3,...)

my_tuple = ("apple","mango","cherry")
print(my_tuple[1:3])
