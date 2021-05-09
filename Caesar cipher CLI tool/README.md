# Casear cipher cli

This is a command line application. it encrypts and decrypts text with Caesar's cipher. The application encrypts and decrypts only letters of the Latin alphabet. All other characters, including lettars from alphabets fo other languages, numbers, punctuation marks, etc. remain uncanged.

## How to install 

To install this application, you must perfom the following steps:
1. Download it from this repositiry.
2. Run the command line and go to the application folder.
3. Enter the command "npm install" and wait for the dependency installation.
4. The application is ready to go.


---


## How to use

After installation completed to start the application, in the folder with the application, enter the following into the command line: node "app [options]", where options are command line parameters that determine the operation (short alias and full name):
* -s, --shift: a shift
* -i, --input: an input file
* -o, --output: an output file
* -a, --action: an action encode/decode 


The **action** option can take the values of **encode** and **decode** and indicates what needs to be done with the incoming text: **encrypt** or **decrypt**.

The **shift** option must be a positif o negative integer. It denotes a **shift** of letters for encryption and decryption.

 **Action** and **shift** options are **mandatory**: if one of them absent, there vil be an **error**. **input** and **output** options must be relative path to file or even filename if file is in application root folder (**input** is the path to the file from which the text id read; **output** is a path to the file where the text will bi written).

 If the file on any of path **does't exist** or the path is **incorrect**, there will be an error.

 If the **input** and /or **output** options are absennt, then **readin** and/or **writing** will be carried out from/to **command line**. To **interrut** the procces, in this case, press **Ctrl+C**.

---

## Examples of usage:

1. -a (--action) is encode

$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
input.txt This is secret. Message about "_" symbol!
output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!


$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
plain.txt This is secret. Message about "_" symbol!
encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

2. -a (--action) is decode

Decoding encoded initial string with the same -s(--shift) number produces the initial string.


$ node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!
plain.txt This is secret. Message about "_" symbol!

3. Negative shift handling

$ node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
plain.txt This is secret. Message about "_" symbol!
encoded.txt Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!


## Use with pleasure!




