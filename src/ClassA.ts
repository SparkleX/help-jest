import { oClassB } from "./ClassB";
import { ClassC } from "./ClassC";

export class ClassA {
	public testStaticInstance(): void {
		ClassC.Current.hello();
	}
    public toBeTestA(): number {
        return 100;
    }
    public toBeTestB(): string {
        return oClassB.toBeMocked("123");
    }
}