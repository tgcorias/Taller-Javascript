function calcularDto(precio, dto){
    const porcentPrecioConDescuento = 100 -dto;
    const precioConDescuento = (precio * porcentPrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickDto(){
    const precio = document.getElementById("InputPrice");
        const pValue = precio.value;
    const dto = document.getElementById("InputDto");
        const dtoValue = dto.value;

    const descuento = calcularDto(pValue, dtoValue);
    
    const pid = document.getElementById("RP");
   pid.innerText = "Tu precio con descuento es: $" + descuento;
    
}