new Vue({
    el: '#vue-app',
    data: {
        name: 'Harsha',
        taskName: '',
        toggle: false,
        notToggle: true,
        toDos: [
            { description: "Learn Vue JS" },
            { description: "Build apps using Vue JS" },
            { description: "Master Vue JS" }
        ],

    },
    methods: {
        greet: (msg) => { return "Good Mrng," + " " + msg },
        modifyUserChoice: () => { },
        addToDo: function () {
            this.toDos.push({ description: this.taskName }),
                console.log(this.toDos);
        }
    }
}) 
