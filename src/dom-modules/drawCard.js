import makeEl from "../helper-modules/makeElement";

export default function drawCard(id,title,desc,startDate,endDate,checklist,status){
    const cardTemplate = document.getElementsByClassName('card-template')[0]
    const card = cardTemplate.cloneNode(true);

    const cardTitle = card.getElementsByClassName('title')[0]
    const cardDesc = card.getElementsByClassName('desc')[0]
    const cardChecklist = card.getElementsByClassName('checklist-container')[0]

    card.setAttribute('class','card')
    card.setAttribute('data-todo-id',id)
    card.removeAttribute("hidden")
    if (status) card.classList.add('done')
    
    cardTitle.innerText = title;
    cardDesc.innerText = desc;

    
    if (checklist.list.length){
        for (let item of checklist.list){
        if (!item.state.visibility) continue;
        cardChecklist.append(makeEl('div', item.desc, {
            'class': ((item.state.status)?'done':'') + ' checklist-item',
            'data-checklist-id': item.id
        }))
    }}

    return card;
}
