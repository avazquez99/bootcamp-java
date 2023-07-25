package ejercicio1_d2;

import java.util.Scanner;

public class Calculadora {

	public static void main(int a, int b, String op) {

		Scanner scanner = new Scanner(System.in);

		System.out.print("Ingrese el primer parámetro: ");
		System.out.print("Ingrese el segundo parámetro: ");
		
		switch(op) {
			case "sumar":
				System.out.println("La suma de los parámetros da como resultado: " + (a + b));
				break;
			case "restar":
				System.out.println("La resta de los parámetros da como resultado: " + (a - b));
				break;
			case "dividir":
			case "multiplicar":
		}

	}

}
