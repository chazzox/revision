---
title: "java cheat sheet"
description: "everything java related in one big ol thing"
order: 1
---

-   This document aims to provide a general overview of the java basics
-   If you have any suggestions/questions about the cheat sheet, message me at
    [chazzox#1001]() on discord

# General Program Structure

This is just the simple boilerplate of any java program

Lets say we have a file called `Program.java`

```java
class Program {
    public static void main(String args[]){
        System.out.println("Hello world");
    }
}
```

Remember that after each operation you do in java, you need to end it with a
semicolon (`;`)

# Variables

Variables are a way of string data values in your program, in java you define a
variable like this:

```java
type varName = value;
```

-   type refers to the [data type](#Data-Types) that the variable is
-   varName is the name of the variable, to refer to the variable later on in your
    program you use this name

There are also rules that govern what you can call your variable

-   It must begin with a letter
-   The name cannot be the same as words already used in java (`int`, `boolean`,
    `class`, `float`, etc)

Variable names are case sensitive `MyVar` and `myvar` are 2 seperate variables

# Data Types

There are 8 primitive data types in java byte, char, short, int, long, float, double
and boolean. Data types like Strings, Arrays and Classes build on top of these. For
the sake of brevity We'll be focusing on int, String and Arrays (Classes will come up
later on). These are the ones I suspect are going to turn up on the test.

## Strings

You can define a string variable like this:

```java
String myStringVar = "Hello world";
```

**Make sure you use double quotation marks**

### Special Characters

-   If you want to define a string that contains double quotations marks, you will
    need to escape them first, otherwise the java compiler will mis understand you

-   You will also need to escape backslashes you want to include as well, since java
    will interpret a backslash as trying to escape the next character

```java
String illegalCharacterString = "This string contains \"double quotation marks\" and also \"backslashes: \\ \".";
```

### **String operations**

### Concatenation

There are a number of ways you can concatenate strings in java. This is a simple way
of doing it:

```java
String str1 = "first part";
String str2 = "second part";
String str3 = str1 + str2;
```

-   You can also use a StringBuilder

-   String builders are an object built into java

```java
StringBuilder sb = new StringBuilder();

sb.append("This is");
sb.append(" a ");
sb.append(" long string.");

String completeString = sb.toString();
```

-   You can add a string onto an already existing variable like this

```java
String str1 = "I am going to finish this ";
str1 += "sentence.";
```

```java
str1 += "sentence.";
// is shorthand for
str1 = str1 + "sentence.";
```

### lower/upper case conversion

Use the `.toUpperCase()` and `.toLowerCase()` methods to convert a string to lower
and upper case letters

Example:

```java
String lowerToUpper = "lower case string";
System.out.println(lowerToUpper.toUpperCase());
```

### Split

-   To split a string by something use the `.split()` method

```java
String spaces = "Split this string by every space";
String[] arrayOfWords = spaces.split(" ");
```

## Integers

### **Mathematical Operations**

### Add

```java
int addedNums = 4 + 4;
```

### Subtract

```java
int subtractedNums = 4 - 3;
```

### Division

```java
int test = 3/4
```

-   Test will be equal to `0` because we are computing integer division

### Exponentials

Before using the `Math.pow()` function, first make sure you have imported it to begin
with

```java
import java.lang.Math;
```

then

```java
System.out.println(Math.pow(2, 4)); // outputs:  16
```

### Modulus

-   The modulus operator will return the quotient of the division (aka the remainder)

```java
System.out.println(3 % 4); // outputs:  3
```

## Arrays

-   We use arrays to store multiple items of a given type

### The general format for defining an array is

```java
type[] arrayOfThing;
```

-   type can be a class, a boolean, a string

### Main info

If you wanted to have an array of strings you would define it like this

```java
String[] arrayOfStrings = { "First String", "Second String", "Third String", "Fourth String" };
```

-   In java, indexing starts at 0 this means that if you want to access the first
    element you would use `arrayOfStrings[0]` and if you wanted to access the 3
    element you would use `arrayOfStrings[2]`

### Arrays with multiple Dimensions

**TBD**

## Booleans

A boolean value can either be `true` or `false`

```java
boolean value = true;
```

## Boolean Expressions

Boolean expressions can be useful to assess equality and compare numbers

The main operators are:

-   Or:`|`
-   And:`&`
-   Not `!`
-   Equal To`==`,
-   Not equal to `!=`
-   Less than `<`
-   Less than or equal to `<=`
-   Greater than `>`
-   Greater than or equal to `>=`

We can use these operators like so

```java
boolean condition1 = 3 > 4; // false
boolean condition2 = 3 >= 3; // true
boolean condition3 = 3 < 4; // true
boolean condition4 = (36 > 12) && (23 < 23); // false
```

# Loops

## While Loop

-   Its best to use a while loop when the number of times to iterate is unknown

The general syntax for a while loops is:

```java
while (boolean_expression) {
    ...loop code
}
```

## For Loop

-   For loops are create if your going to iterate a fixed number of times, (eg loop
    through an array)

The general syntax for a for loops is:

```java
for (statement1; statement2; statement3; ){
    ...loop code
}
```

-   statement1 is only ran once, before the loop runs for the first time
-   statement2 should be a condition for if the loop should iterate again
-   statement3 is ran every time the loop iterates

example (loop through numbers 0-10):

```java
for (int i = 0; i <= 10; i++) {
    System.out.println(i);
}
```

# I/O

## Keyboard Input

-   To Read input from the keyboard, use a scanner object

<!-- used p to escape the list indent (not sure about how to go about this the right way) -->
<p>First import it (add this to the top of file)</p>

```java
import java.util.scanner;
```

Then declare an instance of the scanner in your class

```java
class YourProgram{
    // not always the right way to go about declaring a scanner but good enough for now
    public static Scanner kbdInput = new Scanner(System.in);
}
```

The scanner object as a few methods that allow us to read in typed input (boolean,
int, string etc)

### String

```java
System.out.println("number: ");
String name = kbdInput.nextLine();
```

-   `kbdInput.next()` also exists but I recommend doing
    [your own reading](https://www.javaartifacts.com/difference-next-nextline/) on
    that as it explains it better

### Int

```java
System.out.println("number: ");
String name = kbdInput.nextInt();
```

-   To learn more options for scanner input,
    [look here](https://www.w3schools.com/java/java_user_input.asp)

## Output

Throughout this document you've probably seen the use of `System.out.println`,
however other options also exist

### Standard Print: `System.out.print()`

```java
System.out.print("Hello");
System.out.print(" World");
```

Outputs:

```
Hello World
```

### Print with new line: `System.out.println()`

```java
System.out.println("Hello");
System.out.println("World");
```

Outputs:

```
Hello
World
```

### Formatted Print Statements: `System.out.printf()`

For more info about advanced use (I barely scratch the surface in this explanation)
[click here](https://www.journaldev.com/28692/java-printf-method)

-   `.printf()` allows you to include variables/values inside your print statement
    without having to create the string prior

-   It looks through the string argument for certain specifiers for different data
    types then inserts the provided arguments into the location of the specifiers

Here are a couple of the specifiers

-   `%c` - char
-   `%f` - floats (to specify the number of decimal places you want use `%.n` where n
    is the number of decimal places)
-   `%d` - Integers
-   `%s` - String
-   `%%` - Use this for any percent sign's your formatted string might contain

Note: `System.out.printf()` does not include a new line characters, this means that
any subsequent

Example:

```java
System.out.printf(
                "Using printf you can format a print statement with floats:  %.2f, integers: %d, chars: %c, and strings: %s. As well as many more!\n",
                3.42342, 502, 'a', "example string");
```

Outputs

```
Using printf you can format a print statement with floats:  3.42, integers: 502, chars: a, and strings: example string. As well as many more!
```

## Reading from a file

-   Not much to say here really, look below for the code that will open a file, then
    print out every line.

-   This code also includes a try catch statement, we use this so that the program
    does not crash if the file you are trying to read does not exist

```java
try {
    File file = new File('Filename.ext');
    Scanner file_reader = new Scanner(file);
    while (file_reader.hasNextLine()) {
        System.out.println(file_reader.nextLine());
        // here you can do some additional computation on the line string...
    }
    file_reader.close();
} catch (FileNotFoundException e) {
    System.out.println("file not found");
}
```

# Functions

## General syntax format for functions

```java
public static returntype functionName(type parameterName, type parameterName, ...){
    return valueOfTheSameReturnType
}
```

## Main Info

-   Functions allow you to bundle any reused code/distinct sequence of instructions
    into a reusable code block

-   In java, a function must have an output type, and optionally, any number of
    **typed** parameters.

-   Functions don't have to return anything, if that is the case for your function
    the return type would be `void`

Here's some example code for a function that adds two number together and returns the
result

```java
public static int AddNumbers(int num1, int num2) {
    return num1 + num2
}
```

# Classes

## General Class Syntax

```java
class ClassName {
    private type fieldName;

    public ClassName(type fieldNameInitialValue){
        this.fieldName = fieldNameInitialValue;
    }

    public type fieldNameGetter(){
        return fieldName;
    }

    public type fieldNameSetter(type NewFieldNameValue){
        this.fieldName = NewFieldNameValue;
    }

    public type otherFunction(type arg){
        ...random shite
    }
}
```

## Main info

-   Classes are a useful tool that allows us to bundle up any functions/data that
    might relate to a specific entity in a system (eg a book in a library database, a
    student in a school database)

-   You can define, data fields such as age, height, shoe size extra and also
    functions that process the data

### Constructors

-   The constructor is a special function that is used to initialise the class and
    all of its fields
-   The Class name and the constructor must have matching names
-   The Constructor must not have a return type
-   It can have as many arguments as you want

### Private vs Public

-   If you looked at the [general syntax](#General-Class-Syntax) for classes you'll
    notice that `private` and `public` appear in various places throughout the class.

-   A public property of a class will be able to be access from any class that
    initialises a new object of that class

-   A private property can only be accessed from within the class itself, its good
    practise to use private property for data fields in the class because otherwise
    anything outside of the class could change the value.

### Getters/Setters

-   Getters and setters are good practise as they allow you to protect any update the
    value of the class property

For example

```java
class Main {
    public static void main(String[] args) {

        SubClass newSub = new SubClass(32);
        System.out.println(newSub.test);

        newSub.test = 234;

        System.out.println(newSub.test);
    }
}

class SubClass {
    public int test;

    public SubClass(int newVal) {
        this.test = newVal;
    }
}
```

Outputs:

```
32
234
```

-   In this example, the value of the `test` property could be set to any string at
    any class in the code.
-   However if you use private getters and setters:

```java
class Main {
    public static void main(String[] args) {

        SubClass newSub = new SubClass(32);

        /*
         * All of this now throws an error (because test is now a private views):
         * System.out.println(newSub.test);
         * newSub.test=234;
         * System.out.println(newSub.test);
         */

        System.out.println(newSub.getTest());
        newSub.setTest(234);
        System.out.println(newSub.getTest());
    }
}

class SubClass {
    private int test;

    public SubClass(int newVal) {
        this.test = newVal;
    }

    public int getTest() {
        return this.test;
    }

    public void setTest(int newTestValue) {
        if (newTestValue < 100) {
            this.test = newTestValue;
        }
    }
}
```

Outputs:

```
32
32
```

You can validate any new possible value for the `test` property.

### Printing A Class

-   Usually if you try and print a class in java the output would like something like
    this:

```java
System.out.println(subClassObject);
```

Will output

```
SubClass@7f416310
```

-   However, if you define a `toString()` method in the class, java will now know how
    to print it

```java
class SubClass {
    public int test;

    public SubClass(int newVal) {
        this.test = newVal;
    }

    public String toString() {
        return String.format("%d", this.test);
    }
}
```

Now, anytime we try and print a instance of the class. It will print the value of
test

# Linked Lists

-   This part just provides example code for a linked list
-   If I can be bothered i'll add stuff for a tree data structure later on
-   cba to explain this part (yet)

```java
class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList("Test");
        myLinkedList.addHead("Test2");
        myLinkedList.addHead("Test3");
        myLinkedList.printList();
        myLinkedList.removeHead();
        myLinkedList.printList();
    }
}

class LinkedList {
    private ListNode head = null;

    public LinkedList(String payload) {
        this.head = new ListNode(null, payload);
    }

    public void addHead(String payload) {
        this.head = new ListNode(this.head, payload);
    }

    public void removeHead() {
        this.head = this.head.getNext();
    }

    public void printList() {
        ListNode current = this.head;
        while (current != null) {
            System.out.println(current.getPayload());
            current = current.getNext();
        }
    }
}

class ListNode {
    private ListNode next;
    private String payload;

    public ListNode(ListNode head, String payload) {
        this.next = head;
        this.payload = payload;
    }

    public ListNode getNext() {
        return this.next;
    }

    public String getPayload() {
        return this.payload;
    }
}
```

# Stuff I might add later

-   Switch statements
-   i forgot to do if statements so ill probably do those
