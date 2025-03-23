console.log('Infinite scroll');

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => {
            
            let body = document.body;

            for(let user of data){
                let pId = document.createElement('p');
                let pName = document.createElement('p');
                let pWebsite = document.createElement('p');

                pId.innerText = `User ID: ${user.id}`;
                pName.innerText = `User Name: ${user.name}`;
                pWebsite.innerText = `User URL: ${user.pWebsite}`;

                body.appendChild(pId);
                body.appendChild(pName);
                body.appendChild(pWebsite);
            }
        })
        .catch(error => {
            console.error(error);
        });
        
}

const scrollToEndOfPage = () => {

    let doc = document.documentElement;

    let scrollHeight = doc.scrollHeight;

    let scrollTop = doc.scrollTop;

    let clientHeight = doc.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    if (sumScrollTopClientHeight >= scrollHeight) {

        console.log('Scrolled to the bottom of the page');

        getData();
    }

}

window.addEventListener('scroll', scrollToEndOfPage);