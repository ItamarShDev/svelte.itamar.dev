export interface Resume {
	jobs?: JobsEntity[] | null;
	properties?: string[] | null;
	education?: string[] | null;
}
export interface JobsEntity {
	title: string;
	duration: Duration;
	company: Company;
	tags?: string[] | null;
	description: string;
	elaborated_description: string;
}
export interface Duration {
	from: number;
	to: number | string;
}
export interface Company {
	name: string;
	logo: string;
	website: string;
}
