function calcularDto(precio, dto){
    const porcentPrecioConDescuento = 100 -dto;
    const precioConDescuento = (precio * porcentPrecioConDescuento)/100;
    return precioConDescuento;
}


 