import { ImageLoaderProps } from 'next/image';

export function myLoader({ src, width, quality }: ImageLoaderProps) {
	return `${src}?w=${width}&q=${quality || 75}`;
}
