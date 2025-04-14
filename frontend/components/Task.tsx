export type Task = {
	id: string;
	owner_id: string;
	name: string;
	task_index: number;
	severity: number;
	completion: number;
	note: string;
	dueDate: string;
	dueTime: string;
	repetition: string;
}