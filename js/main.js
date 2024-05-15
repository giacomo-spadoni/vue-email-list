const { createApp } = Vue

createApp({
    data() {
        return {
            title: '10 email casuali pronte per te!',
            indirizzoEmail: 'https://flynn.boolean.careers/exercises/api/random/mail',
            listaIndirizzi: [],
        }
    },
    methods: {
        getEmail() {
            return axios.get(this.indirizzoEmail).then((result) => {
                return result.data.response
            })
        },
        waitAllEmail() {
            const emailPromises = []
            for (let i = 0; i < 10; i++) {
                emailPromises.push(this.getEmail())
            }
            Promise.all(emailPromises).then((emails) => {
                this.listaIndirizzi = emails
            })
        },
        // createLi(idUl) {
        //     document.getElementById(idUl).innerHTML = '<li v-for="email, i in listaIndirizzi">{{listaIndirizzi[i]}}</li>'
        // }
    },
    mounted() {
        // this.waitAllEmail()
    }
}).mount('#app')