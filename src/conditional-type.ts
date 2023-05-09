type a1 = number;

type a2 = a1 extends string ? string : null;


// remove a value from type by never 
type peoples = "saadi" | "abrar" | "sadin";
type removePeople<T,K> = T extends K ? never : T;

type currentPeople = removePeople<peoples, "sadin">