
const wrapper = document.querySelector(".sliderWrap");

wrapper.style.transform = "translateX(-400vw)"

let list = document.querySelectorAll(".innerhead");

for (let i = 0; i < list.length; i++) {
    if (i===0) {
        
        list[0].addEventListener("click", () => {
            wrapper.style.transform = "translateX(0vw)"

        })
    }
    if (i===1) {
        
        list[1].addEventListener("click", () => {
            wrapper.style.transform = "translateX(-100vw)"

        })
    }
    if (i===2) {
        
        list[2].addEventListener("click", () => {
            wrapper.style.transform = "translateX(-200vw)"

        })
    }
    if (i===3) {
        
        list[3].addEventListener("click", () => {
            wrapper.style.transform = "translateX(-300vw)"

        })
    }
    if (i===4) {
        
        list[4].addEventListener("click", () => {
            wrapper.style.transform = "translateX(-400vw)"

        })
    }
    
}




const products = [
    {
    id: 1,
    title: "Air Force",
    price: 159,
    colors:
    [
        {
            code:"black",
            img:"/images/air.png",

        },
        {
            code:"darkblue",
            img:"/images/air2.png",
        },
    ],
    },
    {
    id: 2,
    title: "Jordan",
    price: 119,
    colors:
    [
        {
            code:"black",
            img:"/images/jordan.png",

        },
        {
            code:"darkblue",
            img:"/images/jordan2.png",
        },
    ],
    },
    {
    id: 3,
    title: "Blazer",
    price: 125,
    colors:
    [
        {
            code:"black",
            img:"/images/blazer.png",

        },
        {
            code:"darkblue",
            img:"/images/blazer2.png",
        },
    ],
    },
    {
    id: 4,
    title: "Crater",
    price: 99,
    colors:
    [
        {
            code:"black",
            img:"/images/crater.png",

        },
        {
            code:"darkblue",
            img:"/images/crater2.png",
        },
    ],
    },
    {
    id: 5,
    title: "Hippie",
    price: 209,
    colors:
    [
        {
            code:"black",
            img:"/images/hippie.png",

        },
        {
            code:"darkblue",
            img:"/images/hippie2.png",
        },
    ],
    },

]

const myDiv = document.querySelector('.select-color1');
const myDiv1 = document.querySelector('.select-color2');

myDiv.addEventListener('click', () => {
  myDiv.style.border = '5px solid red';
});

myDiv1.addEventListener('click', () => {
  myDiv1.style.border = '5px solid red';
});

myDiv.addEventListener('mouseout', () => {
    myDiv.style.border = '5px solid white';
  });

myDiv1.addEventListener('mouseout', () => {
    myDiv1.style.border = '5px solid white';
  });




// menuItem.forEach((item , index)=>{
//     item.addEventListener("click",()=>{
//         wrapper.style.transform = "translateX$((-100*index)vw)";
//     })
// })


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".sliderimg");
const currentProductTitle = document.querySelector(".product-name");
const currentProductPrice = document.querySelector("#price");
const currentProductColors = document.querySelectorAll(".color-p");
const currentProductSizes = document.querySelectorAll(".product-size");






list.forEach((item , index)=>{
    item.addEventListener("click", () => {

        wrapper.style.transform = "translateX$((-100*index)vw)";

        choosenProduct = products[index];
        
        const myButton1 = document.querySelector('.buybutton');
        const myDiv3 = document.querySelector('.full-product-detail');
        
        myButton1[index].addEventListener('click', () => {
          myDiv3.scrollIntoView();
        });
        
        
        currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
});
});





currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
  });
  
  currentProductSizes.forEach((size, index) => {
      size.addEventListener("click", () => {
          currentProductSizes.forEach((size) => {
              size.style.backgroundColor = "white";
              size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
  
  const productButton = document.querySelector(".buybutton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
  
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });
  



















