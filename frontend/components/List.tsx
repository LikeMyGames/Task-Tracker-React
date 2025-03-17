import { Task } from "@/components/Task"

export interface List {
    id: string;
    name: string;
    tasks: Task[];
}

export interface ListSearch {
    name: string;
    index: number[];
    severity: number[];
    completion: number[];
}