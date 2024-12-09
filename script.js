document.addEventListener("DOMContentLoaded", () => {  // Ensure DOM is ready

    const container = document.createElement("div");

    const drumkit = {
        clap: "q",
        hihat: "w",
        kick: "e",
        openhat: "r",
        ride: "t",
        snare: "y",
        tink: "u",
        tom: "i",
    };

    for (const key in drumkit) {
        const htmlElement = document.createElement("div");
        htmlElement.classList.add("drum");
        htmlElement.style.color = "blue";
        
        const image = document.createElement("img");
        image.src = "./pics/" + key + ".png";
        image.width = 100;

        image.addEventListener("click", () => {
            const audio = new Audio("./sounds/" + key + ".wav");
            audio.play();
        });

        htmlElement.appendChild(image);

        const txt = document.createElement("p");
        txt.textContent = key[0].toUpperCase() + key.slice(1);

        htmlElement.appendChild(txt);
        container.appendChild(htmlElement);
    }

    document.body.appendChild(container);

    window.addEventListener("keydown", (e) => {
        for (const key in drumkit) {  // Declare key in the loop
            if (drumkit[key] === e.key) {
                const audio = new Audio("./sounds/" + key + ".wav");
                audio.play();
                break;
            }
        }
    });
});
