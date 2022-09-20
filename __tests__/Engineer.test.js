const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    // Tests if instantiation of an Engineer contains the name, id, email, and github property
    describe('Engineer Instantiation', () => {
        const obj = new Engineer();

        it('should return an object containing a "name" property when called with the "new" keyword', () => {
            expect('name' in obj).toEqual(true);
        });

        it('should return an object containing a "id" property when called with the "new" keyword', () => {
            expect('id' in obj).toEqual(true);
        });

        it('should return an object containing a "email" property when called with the "new" keyword', () => {
            expect('email' in obj).toEqual(true);
        });

        it('should return an object containing a "github" property when called with the "new" keyword', () => {
            expect('github' in obj).toEqual(true);
        });
    }); 

    // Tests if instantiation of an Engineer can call the getName, getID, getEmail, getRole, and getGithub methods
    describe('Engineer Methods', () => {
        const engin = new Engineer('Name', 1, 'engineer@email.com', 'Github');

        it('should return the string "Name" when "getName" method is called', () => {
            expect(engin.getName()).toBe('Name');
        });

        it('should return the integer "1" when "getID" method is called', () => {
            expect(engin.getID()).toBe(1);
        });

        it('should return the string "engineer@email.com" when "getEmail" method is called', () => {
            expect(engin.getEmail()).toBe('engineer@email.com');
        });

        it('should return the string "Engineer" when "getRole" method is called', () => {
            expect(engin.getRole()).toBe('Engineer');
        });    

        it('should return the string "Github" when "getGithub" method is called', () => {
            expect(engin.getGithub()).toBe('Github');
        });    
    });

});