function addTask()
{
    var input= document.querySelector('#input').value;
    var value= input.trim();
    if(value=='')
    {
        alert('Please Enter Task!');
    }
    else
    {
        var lists=document.querySelector('.list-group');
        var listItem= document.createElement('li');
        listItem.className='list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML=value;
        var delIcon=document.createElement('i');
        delIcon.className='fa-solid fa-trash';
        comicon=document.createElement('i');
        comicon.className='fa-solid fa-check';
        delIcon.onclick=function()
        {
            listItem.removeChild(delIcon);
            listItem.appendChild(comicon);
            alert('Task Completed');
            listItem.classList.add('bg-info');
            //listItem.remove();
        }
        comicon.onclick=function()
        {
            listItem.removeChild(comicon);
            listItem.appendChild(delIcon);
            alert('Task Re-Assign');
            listItem.classList.remove('bg-info');

        }
        listItem.appendChild(delIcon);
        lists.appendChild(listItem);
    }
}