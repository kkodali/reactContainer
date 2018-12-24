# reactContainer

Container concept example

Simple parent which passes down the data and control function with all the logical rendering on parent itself.

Loads and updates ui based on the state of parent while rendering different(same in this example though :P ) functions of the child components on the fly.

I am using create-react-app serviceworker for simple buidl process instead of adding babel and webpack dependencies. This is simple and easy way to start an app from scratch.

Now the next example will be a complex route of this simple example. 
We will use react + redux + sagas to achive the same rendering of child components from parent by updating the props.
