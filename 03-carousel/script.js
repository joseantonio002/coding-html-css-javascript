const database = [
    {
      name: "0-john Lennon",
      context: "John Winston Ono Lennon (born John Winston Lennon; 9 October 1940 - 8 December 1980) was an English singer, songwriter, musician and peace activist who achieved worldwide fame as the founder, co-songwriter and rhythm guitarist of the Beatles"
    },
    {
      name: "1-charly",
      context: "Charly García (born Carlos Alberto García, October 23, 1951) is an Argentine singer-songwriter, musician and record producer. With a vast and renowned career, he formed and headlined two of the most popular bands in Argentina's rock history"
    },
    {
      name: "2-brianwilson",
      context: "Brian Douglas Wilson (born June 20, 1942) is an American musician, singer, songwriter, and record producer who co-founded the Beach Boys. Often called a genius for his novel approaches to pop composition and extraordinary musical aptitude"
    },
    {
      name: "3-hendrix",
      context: "James Marshall 'Jimi' Hendrix (born Johnny Allen Hendrix; November 27, 1942 - September 18, 1970) was an American guitarist, singer, and songwriter. Although his mainstream career spanned only four years, he is widely regarded as one of the best guitarrist"
    }
]



const photo = document.getElementById("photo");
const name1 = document.getElementById("name");
const subcontext = document.getElementById("subcontext");
const context = document.getElementById("context");
const buttons = document.querySelectorAll(".btn");                   
const surprise = document.getElementById("surprise");

let id = 0;

const persons = [ 
  {
    src : "./images/John-Lennon.jpeg",
    sub: "Pegaba a su mujer",
    name: "John Lennon",
    context: database[0].context
  },
  {
    src : "./images/charly.jpeg",
    sub: "Se cree especial",
    name: "Charly García",
    context: database[1].context
  },
  {
    src : "./images/BrianWilsonGetty.jpeg",
    sub: "Esquizofrenico diagnosticado",
    name: "Brian Wilson",
    context: database[2].context
  },
  {
    src : "./images/hendrix.jpeg",
    sub: "C murio a los 27",
    name: "Jimi Hendrix",
    context: database[2].context
  }     
]

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const classes = event.currentTarget.classList;
    if(classes.contains("right")) {
      id++;
      id = id % persons.length;
      console.log(id);
    }
    else if(classes.contains("left")){
      id--;
      id < 0 ? id = persons.length - 1 : true;
    }
    else { //surprise me button
      let newid = id;
      while(newid === id) {
        newid = Math.floor(Math.random() * persons.length);
      }
      id = newid;
    }
    photo.setAttribute("src", persons[id].src);
    name1.textContent = persons[id].name;
    subcontext.textContent = persons[id].sub;
    context.textContent = persons[id].context;
  })
})




