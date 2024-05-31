
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

            document.getElementById("slot1").textContent = slot1;
            document.getElementById("slot2").textContent = slot2;
            document.getElementById("slot3").textContent = slot3;

            if (slot1 === slot2 && slot2 === slot3 && slot1 === slot3) {
                document.getElementById("result").textContent = "Je hebt gewonnen!🥳";
                
            } 

            else {
                document.getElementById("result").textContent = "Verloren!";
            }

            if (slot1 == "𝟟" && slot2 == "𝟟" && slot3 == "𝟟") {
             document.getElementById("result").textContent = "JACKPOT!!!!!!!!!";
            }
        }

 RandomKnop.addEventListener("click",spin) 