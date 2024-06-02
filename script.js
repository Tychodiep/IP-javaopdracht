
const RandomKnop = document.querySelector("#draai")

let fruit= ["🍏","🍒","⭐️","𝟟"]; 

        function RandomFruit() {
            const randomIndex = Math.floor(Math.random() * fruit.length);
            return fruit[randomIndex]; 
        }

        function spin() {
            const slot1 = RandomFruit();
            const slot2 = RandomFruit();
            const slot3 = RandomFruit();

            document.querySelector("#slot1").textContent = slot1;
            document.querySelector("#slot2").textContent = slot2;
            document.querySelector("#slot3").textContent = slot3;

            if (slot1 === slot2 && slot2 === slot3 && slot1 === slot3) {
                document.querySelector("#result").textContent = "Je hebt gewonnen!🥳";
                
            } 

            else {
                document.querySelector("#result").textContent = "Verloren!";
            }

            if (slot1 == "𝟟" && slot2 == "𝟟" && slot3 == "𝟟") {
             document.querySelector("#result").textContent = "JACKPOT!!!!!!!!!";
            }
        }

 RandomKnop.addEventListener("click",spin) 
