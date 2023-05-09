interface IUser {
     name: string;
     age: number;
}

interface IExtendUser extends IUser {
     role: string;
}

const user : IExtendUser = {
     name: "sheikh saadi",
     age: 28,
     role: "web developer"
}

console.log(user);