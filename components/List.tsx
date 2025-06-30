import { Task } from "@/components/Task"

export type List = {
    id: string;
    owner_id: string;
    name: string;
    tasks: Task[];
}

export type ListSearch = {
    name: string;
    index: number[];
    severity: number[];
    completion: number;
}