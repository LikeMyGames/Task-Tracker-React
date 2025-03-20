export interface Task {
	id: string;
	owner_id?: string;
	name: string;
	index: number;
	severity: string;
	completion: number;
	note: string | null;
	dueDate: string;
	dueTime: number;
	repetition: string;
}