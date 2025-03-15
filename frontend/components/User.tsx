// import List from "@/components/Lists"

export interface User {
    // username: string;
    // password: string;
    id: string;
    lists: string[];
    settings: string;
}

export interface AppSettings {
    ListDirectory: string;
    APIPath: string;
    DeleteCompletedTasks: boolean;
}