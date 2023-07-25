package ejercicio1_d1;

import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;

public class Jsonify {

	public static void main(String[] args) {
	
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese los parámetros separados por espacios: ");
        String input = scanner.nextLine(); // este comando omite la tecla "ENTER"

        // Obtener los parámetros de entrada como valores
        String[] inputValues = input.split("\\s+"); // con esta línea, omito los espacios

        if (inputValues.length > 0) {
            // Convertir los valores en una lista JSON
            String json = convertToJSON(inputValues);

            // Imprimir la lista JSON
            System.out.println(json);
        } else {
            System.out.println("No se proporcionaron parámetros de entrada.");
        }

        scanner.close();
    }

	private static String convertToJSON(String[] inputValues) {
        StringBuilder jsonBuilder = new StringBuilder();
        jsonBuilder.append("data:[");
        for (int i = 0; i < inputValues.length; i++) {
            String value = inputValues[i];
            jsonBuilder.append("\"").append(value).append("\"");
            if (i < inputValues.length - 1) {
                jsonBuilder.append(",");
            }
        }
        jsonBuilder.append("]");
        return jsonBuilder.toString();
	}

}
