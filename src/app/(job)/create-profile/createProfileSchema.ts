import * as Yup from 'yup';

export const createProfileSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Name is required'),

	preferred_job: Yup.string()
		.min(5, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Job field is required'),

	about: Yup.string()
		.min(5, 'Too Short!')
		.max(300, 'Too Long!')
		.required('About field is required')
});
