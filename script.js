const photoContainer=document.querySelector('.photo-container');
const search = document.querySelector('.search');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  let keyword = 'nature';
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
      img.src = photo.urls.small;
      photoContainer.append(img)
    })
  })
  .catch(err => console.error(err));
}

