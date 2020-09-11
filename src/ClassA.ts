import { oClassB } from "./ClassB";

export class ClassA {
    public toBeTestA():number {
        return 100;
    }
    public toBeTestB():string {
        return oClassB.toBeMocked("123");
    }
}