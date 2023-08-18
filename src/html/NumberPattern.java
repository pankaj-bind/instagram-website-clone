import java.util.Scanner;

public class NumberPattern {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the number of rows: ");
        int n = scanner.nextInt();
        
        for (int i = n; i >= 1; i--) {
            // Print spaces
            for (int j = n; j > i; j--) {
                System.out.print("  ");
            }
            
            // Print decreasing numbers from i to 1
            for (int j = i; j >= 1; j--) {
                System.out.print(j);
                if (j != 1) {
                    System.out.print(" ");
                }
            }
            
            System.out.println(); // Move to the next line
        }
        
        // Print the last part of the pattern
        for (int i = 2; i <= n; i++) {
            // Print spaces
            for (int j = n; j > i; j--) {
                System.out.print("  ");
            }
            
            // Print increasing numbers from 1 to i
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
                if (j != i) {
                    System.out.print(" ");
                }
            }
            
            System.out.println(); // Move to the next line
        }
        
        scanner.close();
    }
}
