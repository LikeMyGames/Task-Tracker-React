import task from "@/components/Task"

export default interface List {
    id: string;
    name: string;
    tasks: task[];
}