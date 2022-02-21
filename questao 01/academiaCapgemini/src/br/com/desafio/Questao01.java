package br.com.desafio;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Questao01 {

	@SuppressWarnings("resource")
	public static void main(String[] args) {
		/* Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espa�os. 
		 * A base e altura da escada devem ser iguais ao valor de n. A �ltima linha n�o deve conter nenhum espa�o */
		
			Scanner entrada = new Scanner(System.in);
			List<String> degraus = new ArrayList<>();

			System.out.print("Digite a quantidade de vezes: ");
			int qtdDegraus = entrada.nextInt();			 

			for (int i = 0; i < qtdDegraus; i++) {
			degraus.add(" ".repeat(qtdDegraus - i) + "*".repeat(i + 1));
			}
		 
			for (String d : degraus ) {
			System.out.println(d);
			}
	}

}
