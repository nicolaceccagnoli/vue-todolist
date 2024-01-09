// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            // Dichiaro una Variabile che conterrà un messaggio che voglio stampare in
            message: 'To Do List',
            // Creo l'Array di Oggetti della mia lista di cose da fare
            todos: [
                {
                    text : 'Completare la Milestone 1',
                    done: true 
                }, 
                {
                    text : 'Completare la Milestone 2',
                    done: true 
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
    }, methods: {
        // Creo una funzione che servirà per rimuovere i punti della lista che ho completato
        removeTodo(i) {
            this.todos.splice(i, 1);
            // .splice rimuove gli elementi da un array e vuole sempre almeno 2 argomenti (l'indice dell'elemento dell'array da cui partire, il numero di elementi da rimuovere partendo dall'indice stabilito)
        }
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');