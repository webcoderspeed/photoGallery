const photoContainer=document.querySelector('.photo-container');
const search = document.querySelector('.search');
const form = document.querySelector('form');

let keyword = 'nature';
form.addEventListener('submit', (e) => {
  e.preventDefault(); // to prevent page from refreshing

  if(search.value!== '' && search.value!==null){
    keyword = search.value
  }
  // clearing the previous search result from dom
  if(photoContainer.children){
    photoContainer.innerHTML = ''
  }
  fetchData(keyword);
  search.value = ''
})

// Fetching Request 

function fetchData(keyword){
   fetch(`https://api.unsplash.com/search/photos?page=4&query=${keyword}&client_id=akYmKgAOun-wWPUMbNTv9BB1BF3evnabcG7p7m2Q4xo&per_page=100`)
  .then(res => res.json())
  .then(photos => {
    console.log(photos)
    photos.results.map(photo => {
      const img = document.createElement('img');
      const a = document.createElement('a');
      a.href = photo.links.download;
      a.setAttribute('download',"download");
      img.src = photo.urls.small;
      a.innerHTML += `<img src=${photo.urls.full} />`
      photoContainer.append(a);
    })
  })
  .catch(err => console.error(err));
}

fetchData(keyword);