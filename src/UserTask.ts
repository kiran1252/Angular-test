export class UserTask{
    Users?: String[];
    Tasks?: TaskObj[];
}

export class TaskObj {
    Task?: String;
    Expiry_date?: String;
    User?: String;
    Important?: boolean;
    Created_on?: String;

}

