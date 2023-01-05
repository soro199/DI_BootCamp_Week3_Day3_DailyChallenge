let input = document.getElementById("letter")

input.style.color="red"
input.style.border="200"





            function lettre(event) {
                // Récupérer la valeur de input
                var Value = event.target.value;

                 // Filtrer les caractères speciaux
                var filtrageValue = Value.replace(/[^a-zA-Z]/gi, ''); // Expression reguliere

                // Mettre à jour la valeur de input
                event.target.value = filtrageValue;
            }