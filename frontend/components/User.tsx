import { List } from "@/components/List"

export interface User {
    // username: string;
    // password: string;
    id: string;
    lists: List[];
    settings: unknown;
}

export interface AppSettings {
    ListDirectory: string;
    APIPath: string;
    DeleteCompletedTasks: boolean;
}