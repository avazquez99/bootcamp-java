package entrega8_java_VAZQUEZ;

public class Producto {
		
	protected String nombre;
	protected double precio;
	
	public Producto() {
		// TODO Auto-generated constructor stub
	}

	public Producto(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
	}
	
	// Getters y setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
	
    // método toString
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
	
}
