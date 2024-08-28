import { GetJobsResponse } from '@/types/job.type';
import axios, { AxiosResponse } from 'axios';

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'Node.js developer in New-York,USA',
    page: '1',
    num_pages: '1',
    date_posted: 'all'
  },
  headers: {
    'x-rapidapi-key': '311bdde9cfmshc6a0b8bd389fdfbp18f6ebjsn4a2d2a733605',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};

const getJobs = async() => {
    try {
        const response:AxiosResponse<GetJobsResponse> = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
