export default interface task {
	name: string;
	importance: string;
	completion: boolean;
	note: string | null;
	index: number;
	id: string;
}