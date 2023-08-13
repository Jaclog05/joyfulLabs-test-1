const wrapperEl = document.getElementById('wrapper')

function createForm(){
    const formEl = document.createElement('form')
    
    formEl.innerHTML = `
            <div class="left">
            <label>
                <i class="fa-solid fa-calendar-days"></i>
                <input placeholder="start Time" type="text" >
            </label>
            <label>
                <i class="fa-solid fa-building"></i>
                <input placeholder="Location" type="text" >
            </label>
            <label>
                <i class="fa-solid fa-list"></i>
                <input placeholder="Title" type="text" >
            </label>
            <label>
                <i class="fa-solid fa-list"></i>
                <textarea placeholder="Description" ></textarea>
            </label>
            </div>
            <div class="right">
                <button id="above" class="above">Add Above</button>
                <button id="below" class="below">Add Below</button>
            </div>
    `
    return formEl
}

function addAbove(){
    const formElCreated = createForm()
    wrapperEl.prepend(formElCreated)
}

function addBelow(){
    const formElCreated = createForm()
    wrapperEl.appendChild(formElCreated)
}

wrapperEl.addEventListener('click', function (e) {
    e.preventDefault()
    if(e.target.classList.contains('above')){
        addAbove()
    }else if(e.target.classList.contains('below')){
        addBelow()
    }
})

addAbove()