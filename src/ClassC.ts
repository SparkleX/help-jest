export class ClassC {
	static instance = new ClassC();
	public static get Current(): ClassC {
		return ClassC.instance;
	}
	public hello(): void{
        console.debug("hello");
    }
}