import fetchival from 'fetchival';

const CLIENT_ID = '972b42d28929460';
const apiBase = 'https://api.imgur.com/3';
const request = fetchival(apiBase, {
  mode: 'cors',
  headers: {
    Authorization: 'Client-ID ' + CLIENT_ID
  }
});

export function searchGallery(section = 'hot', sort = 'viral', page = 0) {

  return request('gallery/' + section + '/' + sort + '/' + page).get();

}