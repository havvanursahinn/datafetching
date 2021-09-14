function getUsers(){

    const url = 'https://jsonplaceholder.typicode.com/albums';

    let what = fetch(url).then(response => response.json())
        .then(result => {
        
            for (let index = 0; index < result.length; index++) {
                const element = result[index];
                let postDiv = document.createElement('div');
                postDiv.classList.add('post');
                let ul = document.createElement('ul');
                let liId = document.createElement('li');
                let liId1 = document.createElement('li');
                let liTitle = document.createElement('li');
                
                ul.innerText = (index+1) +' numaralı kullanıcının bilgileri:';
                liId.innerText = 'user id:' + element.userId;
                liId1.innerText='id:'+ element.id;
                liTitle.innerText='title:'+element.title;
                ul.append(liId);
                ul.append(liId1);
                ul.append(liTitle);
                postDiv.append(ul);
        
                document.querySelector('#container').append(postDiv);

            }
        });





}