

const RandomKnop = document.querySelector("#draai")

let fruit= ["🍒", "🍋", "🍉", "🍇", "⭐", "🔔"]; 

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

            if (slot1 === slot2 && slot2 === slot3) {
                document.getElementById("result").textContent = "Je hebt gewonnen!🥳";
            } 

            else {
                document.getElementById("result").textContent = "Verloren!";
            }

        }

 RandomKnop.addEventListener("click",spin) 