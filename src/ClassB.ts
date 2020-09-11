export class ClassB {
    public toBeMocked(a:string): string {
        console.debug("ERROR: ClassB.toBeMocked invoked")
        return "100";
    }
}

const oClassB = new ClassB ();
export { oClassB }