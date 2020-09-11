import { oClassB } from "../ClassB";
import { ClassA } from "../ClassA";


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
	expect(mock.mock.calls.length).toBe(1);
    expect(mock.mock.calls[0][0]).toBe("123");
    expect(mock.mock.calls).toContainEqual(["123"]);
    expect(mock.mock.calls).toMatchSnapshot();
});