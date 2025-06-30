import { List } from "@/components/List"

export type User = {
    // username: string;
    // password: string;
    id: string;
    lists: List[];
    settings: unknown;
}

export type AppSettings = {
    ListDirectory: string;
    APIPath: string;
    DeleteCompletedTasks: boolean;
}