export type GetJobsResponse = {
	status: string;
	request_id: string;
	parameters: Parameters;
	data: Job[];
};

export interface Parameters {
	query: string;
	page: number;
	num_pages: number;
}

export interface Job {
	employer_name: string;
	employer_logo?: string;
	employer_website?: string | null;
	employer_company_type?: string;
	job_publisher: string;
	job_id: string;
	job_employment_type: string;
	job_title: string;
	job_apply_link: string;
	job_apply_is_direct: boolean;
	job_apply_quality_score: number;
	job_description: string;
	job_is_remote: boolean;
	job_posted_at_timestamp: number;
	job_posted_at_datetime_utc: string;
	job_city: string;
	job_state: string;
	job_country: string;
	job_latitude: number;
	job_longitude: number;
	job_benefits?: string[] | null;
	job_google_link: string;
	job_offer_expiration_datetime_utc?: string | null;
	job_offer_expiration_timestamp?: number | null;
	job_required_experience: JobRequiredExperience;
	job_required_skills?: string[] | null;
	job_required_education: JobRequiredEducation;
	job_experience_in_place_of_education: boolean;
	job_min_salary?: number | null;
	job_max_salary?: number | null;
	job_salary_currency?: string | null;
	job_salary_period?: string | null;
	job_highlights: JobHighlights;
	job_job_title?: string | null;
	job_posting_language: string;
	job_onet_soc: string;
	job_onet_job_zone: string;
	job_naics_code?: string;
	job_naics_name?: string;
	job_occupational_categories?: string[];
}

export interface JobRequiredExperience {
	no_experience_required: boolean;
	required_experience_in_months?: number;
	experience_mentioned: boolean;
	experience_preferred: boolean;
}

export interface JobRequiredEducation {
	postgraduate_degree: boolean;
	professional_certification: boolean;
	high_school: boolean;
	associates_degree: boolean;
	bachelors_degree: boolean;
	degree_mentioned: boolean;
	degree_preferred: boolean;
	professional_certification_mentioned: boolean;
}

export interface JobHighlights {
	Qualifications?: string[];
	Responsibilities?: string[];
	Benefits?: string[];
}
