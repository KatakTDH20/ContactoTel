const app1 = {
    data() {
        return {
            mensaje: '',
            contactos: [], // La lista de contactos estará vacía al principio
            nuevoCliente: '',
            nuevoContacto: '',
            nuevaCategoria: '',
            nuevoMensaje: 0,
            nuevaLlamada: 0
        };
    },
    methods: {
        // Método para agregar un contacto
        agregar() {
            if (this.nuevoCliente && this.nuevoContacto && this.nuevaCategoria) {
                this.contactos.push({
                    cliente: this.nuevoCliente,
                    contacto: this.nuevoContacto,
                    categoria: this.nuevaCategoria,
                    mensajes: this.nuevoMensaje,
                    llamadas: this.nuevaLlamada
                 });
                // Limpiar los campos después de agregar
                this.nuevoCliente = '';
                this.nuevoContacto = '';
                this.nuevaCategoria = '';
                this.nuevoMensaje = 0;
                this.nuevaLlamada = 0;
            }
        },
        
        // Método para eliminar un contacto
        eliminarContacto(index) {
            this.contactos.splice(index, 1); // Elimina el contacto en la posición indicada
        },

        // Método para incrementar el número de mensajes, con límite 25
        incrementarMensajes(contacto) {
            if (contacto.mensajes < 25) {
                contacto.mensajes++;
            }
        },

        // Método para decrementar el número de mensajes, con límite 0
        decrementarMensajes(contacto) {
            if (contacto.mensajes > 0) {
                contacto.mensajes--;
            }
        },

        // Método para incrementar el número de llamadas, con límite 15
        incrementarLlamadas(contacto) {
            if (contacto.llamadas < 15) {
                contacto.llamadas++;
            }
        },

        // Método para decrementar el número de llamadas, con límite 0
        decrementarLlamadas(contacto) {
            if (contacto.llamadas > 0) {
                contacto.llamadas--;
            }
        }
    },
    computed: {
        // Computed property para calcular el total de mensajes
        totalMensajes() {
            return this.contactos.reduce((total, contacto) => total + contacto.mensajes, 0);
        },
        
        // Computed property para calcular el total de llamadas
        totalLlamadas() {
            return this.contactos.reduce((total, contacto) => total + contacto.llamadas, 0);
        }
    }
};

// Crear la aplicación Vue y montarla en el elemento con id "seccion"
const app2 = Vue.createApp(app1).mount('#seccion');


