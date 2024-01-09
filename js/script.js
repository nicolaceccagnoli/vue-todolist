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
                    done: true 
                }, 
                {
                    text : 'Finire l\'esercizio di oggi',
                    done: true 
                }, 
                {
                    text : 'Compleatre il 1^ Bonus',
                    done: true, 
                },
                {
                    text : 'Compleatre il 2^ Bonus',
                    done: true, 
                }
            ],

            // Dichiaro una Variabile che mi servirà per aggiungere un nuovo punto alla lista
            newTodo: ''

        };
    }, methods: {
        // Creo una funzione che servirà per rimuovere i punti della lista che ho completato
        removeTodo(i) {
            this.todos.splice(i, 1);
            // .splice rimuove gli elementi da un array e vuole sempre almeno 2 argomenti (l'indice dell'elemento dell'array da cui partire, il numero di elementi da rimuovere partendo dall'indice stabilito)
        },
        
        // Dichiaro una funzione che servirà per creare un nuovo oggetto e al click sul bottone mi pushi lo stesso oggetto nell'array
        createObjTodos() {

            const newObj = {
                text : this.newTodo,
                done: false
            }

            // .trim() è un metodo che rimuove gli spazi da entrambi i lati di una stringa
            if (this.newTodo.trim().length > 0) {
                this.todos.push(newObj);
                this.newTodo = '';
            }

            console.log(this.todos);
            
        },

        // Creo una Funzione che inverta il valore della proprietà "done" al click sull'item della lista
        invertDoneProperty(i) {
            if (this.todos[i].done == false) {
                this.todos[i].done = true;
            } else {
                this.todos[i].done = false
            }
        }
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');