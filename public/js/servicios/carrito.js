class CarritoService {
    // URL_CARRITO = 'https://61e842dee32cd90017acc179.mockapi.io/carrito'
    URL_CARRITO = '/api/carrito/'

    async guardarCarritoService(carrito) {
        let carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }
}

const carritoService = new CarritoService()
