## This repository is used for the Introduction to Debugging in JavaScript.

In this repository, we used the debugging tool on the browser to debug the code.

##  Follow below instructions

-   git clone

-   To view how your HTML page, right-click the debug_code.html file after selecting this file, then select "Open with `Live Server`" Extension on `VS Code`.

-   The server should start on port 5500, indicated by a notification on the bottom right side.

-   You will see the output.

-   Now enter the numbers in input boxes available and click on "Perform Operation" button.

-   Now to see the flow of this code, right-click in the same window of your browser where output is being displayed and then select "Inspect."

-   As soon as you click on the button, you will see the screen like as if it has paused, just like in the given screenshot. Also, value number 1 highlighted in red box in the screenshot shows that two numbers has been recived in variables a and b. Along with that, number 2 indicate where the pause has happened at debugger point, which is the current pointer of your code.

-   Then you need to click the forward arrow at the top right ->.

-   As soon as you will click on that button, your current pointer will move to the return a*b, indicating that the flow of the code has now reached to this point.

-   Click the forward button again, and the pointer will move towards number 1 in the given screenshot, indicating that the displayResult() function is called. Also number 2 indicate num1 and num2 has 12 and 13 values respectivly.

-   Again click on forward button and the pointer will move to number 1 in given screenshot, indicating that it is now trying to access the element whose ID is result. Also result variable has the awnswer to the multiplication.

-   Click the forward button again, and the pointer will shift towards number 1 in the screenshot, indicating that it has included the result in that element using textContent

-   Then, click on the forward button again, and the pointer will go to number 1, indicating that the button has been clicked, and it will also show the result at number 2

-   After this, it will come out of the debugging zone.