interface person {
    height: int;
    name: string;
}

interface starship {
    hyperdriveRating: int;
    name: string;
}

interface item {
    value: int;
    name: string;
}

type stack = Array<Array<item>>