const Intern = require('../lib/Intern');

describe('Intern', () => {

    // Tests if instantiation of an Intern contains the name, id, email, and school property
    describe('Intern Instantiation', () => {
        const obj = new Intern();

        it('should return an object containing a "name" property when called with the "new" keyword', () => {
            expect('name' in obj).toEqual(true);
        });

        it('should return an object containing a "id" property when called with the "new" keyword', () => {
            expect('id' in obj).toEqual(true);
        });

        it('should return an object containing a "email" property when called with the "new" keyword', () => {
            expect('email' in obj).toEqual(true);
        });

        it('should return an object containing a "school" property when called with the "new" keyword', () => {
            expect('school' in obj).toEqual(true);
        });
    }); 

    // Tests if instantiation of an Intern can call the getName, getID, getEmail, getRole, and getSchool methods
    describe('Intern Methods', () => {
        const intern = new Intern('Name', 1, 'intern@email.com', 'School');

        it('should return the string "Name" when "getName" method is called', () => {
            expect(intern.getName()).toBe('Name');
        });

        it('should return the integer "1" when "getID" method is called', () => {
            expect(intern.getID()).toBe(1);
        });

        it('should return the string "intern@email.com" when "getEmail" method is called', () => {
            expect(intern.getEmail()).toBe('intern@email.com');
        });

        it('should return the string "Intern" when "getRole" method is called', () => {
            expect(intern.getRole()).toBe('Intern');
        });    

        it('should return the string "School" when "getSchool" method is called', () => {
            expect(intern.getSchool()).toBe('School');
        });    
    });

});