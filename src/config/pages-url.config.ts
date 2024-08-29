class DASHBOARD {
	private root = '';

	HOME = this.root;
	LIKED = `${this.root}/liked`;
	JOBS = `${this.root}/jobs`;
	JOBS_DESCRIPTION = `${this.root}/job-details`;
	PROFILE = `${this.root}/create-profile`;
}

export const DASHBOARD_PAGES = new DASHBOARD();
