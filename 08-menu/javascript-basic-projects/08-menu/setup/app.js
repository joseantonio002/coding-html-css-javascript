const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const selectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
let btns;


function displayMenuItems(menuItems) {

  let objects = menuItems.map(function (item) {
    return  `<article class="menu-item">
    <img src="${item.img}" alt="menu item" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
      ${item.desc}
      </p>
    </div>
  </article>`;
  })

  objects = objects.join("");
  selectionCenter.innerHTML = objects;

}

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  let checkedcategorys = [];
  menu.forEach(function (elem){
    if(!checkedcategorys.includes(elem.category)) {
      checkedcategorys.push(elem.category);
    }
    else {
      return elem;
    }
  });
  checkedcategorys.unshift("all");
  console.log(checkedcategorys);
  let buttonsHTML = checkedcategorys.map(function (elem) {
    return `<button type="button" class="filter-btn" data-id=${elem}>${elem}</button>`;
  }) 
  buttonsHTML = buttonsHTML.join("");
  btnContainer.innerHTML = buttonsHTML;
  btns = btnContainer.querySelectorAll(".filter-btn");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const btnCategory = e.currentTarget.dataset.id;
      const fitlermenu = menu.filter(function (elm) {
        if(elm.category == btnCategory) {
          return elm;
        }
      });
      if(btnCategory === "all") {
        displayMenuItems(menu);
      }
      else {
        displayMenuItems(fitlermenu);
      }
    })
  })

})

 


