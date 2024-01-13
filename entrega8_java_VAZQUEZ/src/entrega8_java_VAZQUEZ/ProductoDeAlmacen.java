package entrega8_java_VAZQUEZ;

public class ProductoDeAlmacen extends Producto implements Iva {

    private String categoria;

    public ProductoDeAlmacen(double precio, String nombre, String categoria) {
        super(nombre, precio);  // Cambiado el orden de los parámetros
        this.categoria = categoria;
    }

    @Override
    public double calcularIVA() {
        return getPrecio() * 0.21;  // Usar getPrecio() para obtener el precio
    }

    @Override
    public String toString() {
        return super.toString() + ", Categoría: " + categoria;
    }
}