![header](https://user-images.githubusercontent.com/88057828/147366482-6e70d378-f9ee-4130-985f-ee6a499fad34.png)

> Status: Done ✔️

## Intruduction

### This is a basic web page project about the BMI (Body Mass Index) with:
+ Infomations about the BMI
+ And a simple calculator that use the user height and weight

## Technologies Used:

+ [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
+ [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
+ [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/javascript)

<hr>

## How it works?
1. The `height` and `weight` data are recovered at variables, after the form `submit` event.
2. Then this variables are tested at functions that brings dynamically  feedbacks to the user, according to its values. Here are the functions created in `script.js` and what they do:
```js
    getFormData(height, weight); // first function to run after the form's submit event, brings a tension to the user's data

    calcImc(height, weight); // is called after validating the data in the previous function, and serves to actually calculate the user's body mass index

    showRes(imc); // this function receives the body mass index as a parameter and displays, finally, the result message to the user from conditionals code blocks

    hideRes(); // used when there is a need to hide the previous result for a better user experience with the application
```

<hr>

## How to run the project:

You can run the page just by [clicking here](https://murilosopi.github.io/my-imc) or scanning the QR Code below
<div>
  <img src="https://user-images.githubusercontent.com/88057828/147368385-1bbec721-aa38-4395-b848-0550e32bd527.png" style="width: 250px;">
</div>
