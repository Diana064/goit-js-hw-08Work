// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

import { galleryItems } from './gallery-items';

const gallery = galleryItems;
console.log(gallery);
const galleryMarkup = document.querySelector('.gallery');
console.log(galleryMarkup);

const markup = gallery
	.map(({ preview, original, description }) => {
		return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
	})
	.join('');

galleryMarkup.insertAdjacentHTML('beforeend', markup);

const lighbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: '200',
});
lighbox.on('show.simplelightbox');
console.log(galleryItems);
