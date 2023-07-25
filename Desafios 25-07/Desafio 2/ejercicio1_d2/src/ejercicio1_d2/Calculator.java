package ejercicio1_d2;

import java.util.Scanner;

public class Calculator {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);

		System.out.print("Ingrese el primer parámetro: ");
		int nroA = scanner.nextInt();
		System.out.print("Ingrese el segundo parámetro: ");
		int nroB = scanner.nextInt();
		
		System.out.println("Las operaciones a realizar son: sumar - restar - dividir - multiplicar");
		System.out.print("Ingrese la operación a realizar: ");
		
		String op = scanner.next();
		
		switch(op) {
			case "sumar":
				System.out.println("La suma de los parámetros da como resultado: " + (nroA + nroB));
				break;
			case "restar":
				System.out.println("La resta de los parámetros da como resultado: " + (nroA - nroB));
				break;
			case "multiplicar":
				System.out.println("La multiplicación de los parámetros da como resultado: " + (nroA * nroB));
				break;
			case "dividir":
				System.out.println("La división del primer parámetro por el segundo da como resultado: " + (nroA / nroB));
				System.out.println("La división del segundo parámetro por el primero da como resultado: " + (nroB / nroA));
				break;
		}
		
		scanner.close();
	}

}
