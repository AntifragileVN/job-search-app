export const formatDateToLocal = (
	dateStr: string | number,
	locale: string = 'en-US'
) => {
	const timestamp = typeof dateStr === 'number' ? dateStr * 1000 : dateStr;
	const date = new Date(timestamp);
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	};
	const formatter = new Intl.DateTimeFormat(locale, options);
	return formatter.format(date);
};
