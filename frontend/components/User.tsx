import List from "@/components/Lists"

export default interface User {
    username: string;
    password: string;
    lists: List[];
    settings: AppSettings;
}

export interface AppSettings {
    ListDirectory: string;
    APIPath: string;
    DeleteCompletedTasks: boolean;
}