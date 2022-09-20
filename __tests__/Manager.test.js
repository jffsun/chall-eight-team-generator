const Manager = require('../lib/Manager');

describe('Manager', () => {

    // Tests if instantiation of an Manager contains the name, id, email, and office number property
    describe('Manager Instantiation', () => {
        const obj = new Manager();

        it('should return an object containing a "name" property when called with the "new" keyword', () => {
            expect('name' in obj).toEqual(true);
        });

        it('should return an object containing a "id" property when called with the "new" keyword', () => {
            expect('id' in obj).toEqual(true);
        });

        it('should return an object containing a "email" property when called with the "new" keyword', () => {
            expect('email' in obj).toEqual(true);
        });

        it('should return an object containing an "officeNumber" property when called with the "new" keyword', () => {
            expect('officeNumber' in obj).toEqual(true);
        });
    }); 

    // Tests if instantiation of a Manager has call the getName, getID, getEmail and getRole methods
    describe('Manager Methods', () => {
        const manager = new Manager('Name', 1, 'manager@email.com', 2);

        it('should return the string "Name" when "getName" method is called', () => {
            expect(manager.getName()).toBe('Name');
        });

        it('should return the integer "1" when "getID" method is called', () => {
            expect(manager.getID()).toBe(1);
        });

        it('should return the string "manager@email.com" when "getEmail" method is called', () => {
            expect(manager.getEmail()).toBe('manager@email.com');
        });

        it('should return the string "Manager" when "getRole" method is called', () => {
            expect(manager.getRole()).toBe('Manager');
        });    
    });

});