const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
    //   console.log(event);
    const input = event.target.children[1].value;
    inputForm.reset()
    // const input = document.querySelector('#searchByID')
    // console.log(input.value)
    fetch(`http://localhost:3000/movies/${input}`)
    .then(res => res.json())
    .then(data => {
        const title = document.querySelector('#movieDetails h4');
        const summary = document.querySelector('#movieDetails p')
        
        title.textContent = data.title;
        summary.textContent = data.summary;
    })
    });
}

document.addEventListener('DOMContentLoaded', init);



