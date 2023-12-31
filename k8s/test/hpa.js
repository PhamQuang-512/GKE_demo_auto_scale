import { sleep } from 'k6';
import http from 'k6/http';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
	return {
		'summary.html': htmlReport(data),
	};
}
// init

export let options = {
	scenarios: {
		contacts: {
			executor: 'ramping-vus',
			startVUs: 0,
			stages: [{ duration: '5s', target: 1000 }],
			gracefulRampDown: '0s',
		},
	},
};

//vus
export default function () {
	let res = http.get('http://34.81.200.141/hpa');
	console.log(res.status);
}
