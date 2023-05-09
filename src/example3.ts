interface Person {

     firstName: string;
   
     lastName: string;
   
   }
   
   
   
   function fullName<T extends Person>(person: T): string {
   
     return `${person.firstName} ${person.lastName}`;
   
   }

const getName = fullName({firstName:"sekh", lastName:"saadi"})
console.log(getName);