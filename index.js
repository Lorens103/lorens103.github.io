document.addEventListener("DOMContentLoaded", function(event) {
    gsap.set( "svg", { visibility: "visible" } );

    const dot = document.getElementById("dot");
    const tl = gsap.timeline( { defaults: { ease: "power3.inOut" }} );

    gsap.set(
        [
            /* gsap animations elements in "" */
        ],
        { opacity: 0 }
        );

        tl.fromTo( dot, { opacity: 0 }, { opacity: 1, repeat: -1 } );

    });


    function send() {
        var yourNumber = document.getElementById("yourNumber");
        var maximal = document.getElementsByClassName("maximal").text.value;
        var minimal = document.getElementsByClassName("minimal").text.value;

        if (maximal && minimal !== 0) {

        if (maximal && minimal <= 1000000000000) {

            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            var randomFloat = getRandomIntInclusive(minimal, maximal);
            var randomInt = Math.ceil(randomFloat);

            console.log(randomInt);

        }

        else {
            alert("Enter a lower number");
        }

    }

    if (yourNumber != undefined) {
        yourNumber.innerHTML = randomInt;
    }

}