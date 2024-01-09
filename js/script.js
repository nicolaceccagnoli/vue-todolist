// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            message: 'To Do List',

            todos: [
                {
                    text : 'Completare la Milestone 1',
                    done: true 
                }, 
                {
                    text : 'Completare la Milestone 2',
                    done: false 
                }, 
                {
                    text : 'Completare la Milestone 3',
                    done: false 
                }, 
                {
                    text : 'Finire l\'esercizio di oggi',
                    done: false 
                }, 
                {
                    text : 'Compleatre il 1^ Bonus',
                    done: false, 
                },
                {
                    text : 'Compleatre il 2^ Bonus',
                    done: false, 
                }


            ]

        };
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');