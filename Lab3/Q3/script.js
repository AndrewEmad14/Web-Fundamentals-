var rootElement = document.documentElement;
var style = rootElement.children[0].children[0];
var img = document.getElementById("header").children[0];
style.textContent+=`
  #header{
    text-align : right;
  }
  #navigation{
    display: flex;
    justify-content: center;  
    align-items: center;      
  }
  #nav{
    list-style-type: circle;
  }
  ul#nav li{
    width:1rem;
  }

`
document.body.append(img.cloneNode(true));