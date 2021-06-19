import resume from '../resume/resume.json';
export async function get({ slug }) {
	let body = JSON.stringify(resume);
	return { body };
}
