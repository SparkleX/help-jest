import { ClassC } from "../ClassC";

const mockHello = jest.fn();
const oClassC: ClassC = {
	hello : mockHello
};

jest.spyOn(ClassC, 'Current', 'get').mockReturnValue(oClassC);

export { mockHello };