export const Square = ( {onSubmit} ) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        onSubmit(email, password);
      };
    
    return (

        <div className="bg-black p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label for="email" className="block text-sm font-medium text-white-700">Correo electrónico</label>
                    <input type="email" id="email" class="mt-1 p-2 w-full border rounded-md text-black" />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-white-700">Contraseña</label>
                    <div className="flex items-center">
                        <input type="password" id="password" class="mt-1 p-2 w-full border rounded-md pr-10 text-black" />
                        <button type="button" class="transform translate-x-2 text-white-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        </button>
                    </div>

                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Ingresar</button>
            </form>
        </div>
        

    )
}