import { oClassB } from "../ClassB";
import { ClassA } from "../ClassA";
import { ClassC } from "../ClassC";
import { mockHello } from "./Common";

const mock = jest.fn();
oClassB.toBeMocked = mock;



test("calla",  () => {
    const a: ClassA = new ClassA();
    const rt = a.toBeTestA();
    expect(rt).toStrictEqual(100);
});

test("mock",  () => {
	mock.mockReturnValueOnce("100");	
    const a: ClassA = new ClassA();
	const rt = a.toBeTestB();
    expect(rt).toStrictEqual("100");
	//expect(mock.mock.calls.length).toBe(1);
	//expect(mock.mock.calls[0][0]).toBe("123");
	//expect(mock.mock.calls).toContainEqual(["123","p2","p3"]);
	expect(mock.mock.calls).toMatchSnapshot("check mock calls");
});

test("static instance",  () => {
	const a: ClassA = new ClassA();
	a.testStaticInstance();
	expect(mockHello.mock.calls.length).toBe(1);
});