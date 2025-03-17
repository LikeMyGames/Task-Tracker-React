export interface Task {
	name: string;
	severity: string;
	completion: boolean;
	note: string | null;
	index: number;
	id: string;
	dueDate: string;
	dueTime: number;
	repetition: string;
}