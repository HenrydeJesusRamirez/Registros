        // Array para almacenar suscriptores
        var suscriptores = [];

        // Función para registrar un nuevo suscriptor
        function registrarSuscriptor() {
            // Obtener valores del formulario
            var nombre = document.getElementById('nombre').value;
            var correo = document.getElementById('correo').value;
            var contrasena = document.getElementById('contrasena').value;

            // Crear objeto de suscriptor
            var nuevoSuscriptor = {
                nombre: nombre,
                correo: correo,
                contrasena: contrasena
            };

            // Agregar el nuevo suscriptor al array
            suscriptores.push(nuevoSuscriptor);

            // Limpiar el formulario
            document.getElementById('suscripcionForm').reset();

            // Mostrar en la consola para verificar
            console.log('Nuevo suscriptor:', nuevoSuscriptor);
            console.log('Lista de suscriptores:', suscriptores);
        }
