async function publicLists(){
    const container = document.getElementById('publicContainer');

    try{
        const data = await getContentUnderCategory();
        for(let category of data[0]){
            const div = document.createElement('div');
            div.className = "listcard";
            const header = document.createElement('h2');
            header.innerHTML = category.name;
            div.appendChild(header);
            container.appendChild(div);
            for(let items of data[1]){
                if(category.id === items.categoryid){
                    const p = document.createElement('p');
                    const divContent = document.createElement('div');
                    divContent.className = "contentDiv";
                    const check = document.createElement('p');
                    if(items.done === true){
                        check.innerHTML = "✔";
                    }
                    p.innerHTML = items.content;
                    divContent.appendChild(p);
                    divContent.appendChild(check);
                    div.appendChild(divContent);
                }
            }
        }
    }
    catch(err){
        console.log(err);
    }
}