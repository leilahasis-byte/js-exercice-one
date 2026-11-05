function changeImage(){
       const Image=document.querySelector('#narki');
     const url =prompt("please enter your image url")
      const color = prompt("Please enter border color");
    const width = prompt("Please enter image width");
    const height = prompt("Please enter image height");
    const radius = prompt("Please enter border radius");
  
    Image.setAttribute('src',url)

    Image.style.border = "3px solid " + color;
    Image.style.width = width + "px";
    Image.style.height = height + "px";
    Image.style.borderRadius = radius + "px";
}