const Employee = require('../lib/Employee');

// Test suite
describe('Employee', () => {

    // Tests if instantiation of an Employee contains the name, id, and email property
    describe('Employee Instantiation', () => {
        const obj = new Employee();

        it('should return an object containing a "name" property when called with the "new" keyword', () => {
            expect('name' in obj).toEqual(true);
        });

        it('should return an object containing a "id" property when called with the "new" keyword', () => {
            expect('id' in obj).toEqual(true);
        });

        it('should return an object containing a "email" property when called with the "new" keyword', () => {
            expect('email' in obj).toEqual(true);
        });
    }); 

    // Tests if instantiation of an Employee can call the getName, getID, getEmail, and getRole methods
    describe('Employee Methods', () => {
        const empl = new Employee('Name', 1, 'employee@email.com');

        it('should return the string "Name" when "getName" method is called', () => {
            expect(empl.getName()).toBe('Name');
        });

        it('should return the integer "1" when "getID" method is called', () => {
            expect(empl.getID()).toBe(1);
        });

        it('should return the string "employee@email.com" when "getEmail" method is called', () => {
            expect(empl.getEmail()).toBe('employee@email.com');
        });

        it('should return the string "Employee" when "getRole" method is called', () => {
            expect(empl.getRole()).toBe('Employee');
        });    
    });

});