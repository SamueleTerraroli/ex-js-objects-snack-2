// 🏆 Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger
console.log(secondBurger.name); // Double Cheese Burger

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? -- un solo oggetto con due riferimenti

// 🏆 Code Question 2

const hamburger1 = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};
const secondBurger1 = { ...hamburger1 };
secondBurger1.ingredients[0] = "Salad";

console.log(hamburger1.ingredients[0]); // Salad
console.log(secondBurger1.ingredients[0]); // Salad

// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

//  Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//  Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? -- due oggetti

// 🏆 Code Question 3

const hamburger2 = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29
  }
};

const secondBurger2 = structuredClone(hamburger2);
const thirdBurger = structuredClone(hamburger2);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? -- sono stati creati tre oggetti

// 🏆 Code Question 4

const chef2 = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
}

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: 'Main Street',
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? -- spread operator perchè permette di clonare anche le funzioni
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché? -- structuredClone() perche permette di clonare oggetti annidati

// 🎯 Code Question 5 (Bonus)

const hamburger3 = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29
  }
};

const newRestaurant = { ...hamburger3.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger3 = { ...hamburger3 };
secondBurger3.maker.restaurant = newRestaurant;
secondBurger3.maker.name = "Chef Hyur";

console.log(hamburger3.maker.name); // Chef Hyur
console.log(secondBurger3.maker.name); // Chef Hyur
console.log(hamburger3.maker.restaurant.name); // Hyur's II
console.log(secondBurger3.maker.restaurant.name); // Hyur's II

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? -- sono stati creati tre oggetti

// 🎯 Code Question 6 (Bonus)

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },

  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: 'Main Street',
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      }
    },
    isOpen: true,
  }
}

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?

// 🎯 Snack  (Bonus)
// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

// ⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).

