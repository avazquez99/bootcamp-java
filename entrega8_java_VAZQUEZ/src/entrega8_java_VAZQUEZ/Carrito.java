package entrega8_java_VAZQUEZ;

import java.util.ArrayList;
import java.util.List;

public class Carrito {
	
	private ArrayList<ProductoDeAlmacen> productos = new ArrayList<>();
	
	public Carrito() {

	}

    public void agregarProducto(ProductoDeAlmacen producto) {
        productos.add(producto);
    }

    public int getCantidadProductos() {
        return productos.size();
    }

    public double getImporteTotal() {
        double total = 0;
        for (ProductoDeAlmacen producto : productos) {
            total += producto.getPrecio();
        }
        return total;
    }

    public void mostrarContenidoCarrito() {
        System.out.println("Contenido del carrito:");
        for (ProductoDeAlmacen producto : productos) {
            System.out.println(producto.toString());
        }
    }
}



