import java.util.regex.*;
import java.util.Scanner;
 public class regexExample1 {

	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		Pattern p=Pattern.compile(sc.nextLine());
		System.out.println("Enter text");
		Matcher m=p.matcher(sc.nextLine());
		boolean b=false;

		while(m.find()) {
			System.out.println("i found the text "+ m.group()+"starting index "+m.start()+"ans ending at "+m.end());
			b=true;
		}

		//System.out.println(b);

	}
}
