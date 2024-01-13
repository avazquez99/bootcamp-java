package entrega8_java_VAZQUEZ;

import java.util.Scanner;

public class MainClassE8 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		//Instanciar Carrito
		Carrito carro = new Carrito();
		
		while (true) {
            try {
                System.out.println("Menú:");
                System.out.println("1. Agregar producto al carrito");
                System.out.println("2. Ver cantidad de productos en el carrito");
                System.out.println("3. Ver importe total del carrito");
                System.out.println("4. Ver contenido del carrito");
                System.out.println("5. Salir");

                int opcion = scanner.nextInt();

                switch (opcion) {
                    case 1:
                        // Agregar producto al carrito
                        System.out.print("Ingrese el nombre del producto: ");
                        String nombre = scanner.next();
                        System.out.print("Ingrese el precio del producto: ");
                        double precio = scanner.nextDouble();
                        System.out.print("Ingrese la categoría del producto: ");
                        String categoria = scanner.next();

                        ProductoDeAlmacen producto = new ProductoDeAlmacen(precio, nombre, categoria);
                        carro.agregarProducto(producto);
                        break;

                    case 2:
                        // Ver cantidad de productos en el carrito
                        System.out.println("Cantidad de productos en el carrito: " + carro.getCantidadProductos());
                        break;

                    case 3:
                        // Ver importe total del carrito
                        System.out.println("Importe total del carrito: " + carro.getImporteTotal());
                        break;

                    case 4:
                        // Ver contenido del carrito
                    	carro.mostrarContenidoCarrito();
                        break;

                    case 5:
                        // Salir
                        scanner.close();
                        return;

                    default:
                        System.out.println("Opción no válida. Intente nuevamente.");
                }
            } catch (Exception e) {
                System.err.println("Error: Ingrese un valor numérico válido.");
                scanner.nextLine();  // Limpiar el scanner
            }
        }
    }
}