


























//---------------------------





const form = document.getElementById('screenshot-form')
const container = document.getElementById('screenshot-container')
const saveButton = document.getElementById('save-screenshot-button')

const axios = require("axios");
const options = {
  method: 'GET',
  url: 'https://website-screenshot6.p.rapidapi.com/screenshot',
  params: {
    url: 'https://rapidapi.com/marketplace',
    width: '1920',
    height: '1080',
    fullscreen: 'true'
  },
  headers: {
    'X-RapidAPI-Key': '7c81e499a0msh6613a31e99daea4p180aa3jsnbf28e55647ff',
    'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const url = event.target.elements.url.value
  const apiKey = '7c81e499a0msh6613a31e99daea4p180aa3jsnbf28e55647ff';
  const apiUrl = 'https://website-screenshot6.p.rapidapi.com/screenshot'
  const response = await fetch(apiUrl)
  const blob = await response.blob()
  const urlObject = URL.createObjectURL(blob)
  container.innerHTML = `<img src="${urlObject}">`
  container.style.display = 'block'
  saveButton.style.display = 'block'
})
const saveScreenshot = async () => {
    const url = form.elements.url.value;
    // const apiKey = '7c81e499a0msh6613a31e99daea4p180aa3jsnbf28e55647ff';
    const apiUrl = `https://crudcrud.com/api/ea0dcd46c59b43be82d67b838a9ba3c5`;
    const base64 = container.querySelector('img').src.split(',')[1];
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url,
        image: base64
      })
    });
    if (response.ok) {
      alert('Screenshot saved!');
      form.reset();
      container.innerHTML = '';
      container.style.display = 'none';
      saveButton.style.display = 'none';
      displayScreenshots();
    } else {
      alert('Failed to save screenshot!');
    }
  };
  
  saveButton.addEventListener('click', saveScreenshot);
  
  const displayScreenshots = async () => {
     const apiKey = '7c81e499a0msh6613a31e99daea4p180aa3jsnbf28e55647ff';
    const apiUrl = https://crudcrud.com/api/${apiKey}/screenshots;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const list = document.createElement('ul');
    for (const screenshot of data) {
    const item = document.createElement('li');
    const url = screenshot.url;
    const image = screenshot.image;
    const imageObject = new Image();
    imageObject.src = data:image/png;base64,${image};
    item.innerHTML = <a href="${url}" target="_blank">${url}</a>;
    item.appendChild(imageObject);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', async () => {
    const deleteUrl = https://crudcrud.com/api/${apiKey}/screenshots/${screenshot._id};
    const deleteResponse = await fetch(deleteUrl, {
    method: 'DELETE'
    });
    if (deleteResponse.ok) {
    alert('Screenshot deleted!');
    displayScreenshots();
    } else {
    alert('Failed to delete screenshot!');
    }
    });
    item.appendChild(deleteButton);
    list.appendChild(item);
    }
    document.body.appendChild(list);
    };
    
    displayScreenshots();