import { List } from "@/components/List"

export interface User {
    // username: string;
    // password: string;
    id: string;
    lists: List[];
    settings: string;
}

export interface AppSettings {
    ListDirectory: string;
    APIPath: string;
    DeleteCompletedTasks: boolean;
}