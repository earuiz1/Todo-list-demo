
//Once the whole page loads
window.addEventListener('load', () => {

    const form = document.querySelector('#task-form');

    const input  = document.querySelector('#task-input');

    const form_submit = document.querySelector('#task-submit');

    const tasks_el = document.querySelector("#tasks");

    //Prevent from loading after the form is submmited
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
    })

    //Check if the submit button in the form was clicked
    form_submit.addEventListener('click', () =>{


        //If the input is blank, show an error msg
        if(!input.value){
            alert("Please enter a task!");
        }
        else{

        //Create a <div class="tasks">
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        tasks_el.appendChild(task_el);

        //Create a <div class="content">
        const content_el = document.createElement("div");
        content_el.classList.add("content");
        
        //Append content_el inside the <div class="tasks">
        task_el.appendChild(content_el);

        //Create an element of <input type="text" class="text">
        const input_el = document.createElement("input");
        input_el.classList.add("text");
        input_el.type = "text";
        input_el.setAttribute("readonly", "readonly");
        input_el.value = input.value;
        input.value = '';

        //Append input.el inside <div class="content>"
        content_el.appendChild(input_el);

        //Create an element of <div class="actions">
        const actions_el = document.createElement("div");
        actions_el.classList.add("actions");

        //Append actions_el inside <div class="tasks>"
        task_el.appendChild(actions_el);

        //Create an element of <button class="Edit">
        const button_edit_el = document.createElement("button");
        button_edit_el.classList.add("Edit");
        button_edit_el.innerHTML = 'Edit';

        //Append button_edit_el inside <div class="actions>"
        actions_el.appendChild(button_edit_el);

        //Create an element of <button class="Delete">
        const button_delete_el = document.createElement("button");
        button_delete_el.classList.add("Delete");
        button_delete_el.innerHTML = 'Delete';

        //Append button_delete_el inside <div class="actions>"
        actions_el.appendChild(button_delete_el);

        //Check if the Edit button was clicked
        button_edit_el.addEventListener('click',() =>{

            //Check if the button text is "EDIT" and remove the readonl attribute and change the name of button to SAVE
            if(button_edit_el.innerText == "EDIT"){
                input_el.removeAttribute("readonly");
                input_el.focus();
                button_edit_el.innerHTML = "SAVE";
            }
            //If the button text is SAVE, change back the name to EDIT and set the attribute readonly again.
            else{
                button_edit_el.innerHTML = "EDIT";
                input_el.setAttribute("readonly", "readonly");
            }

        })

        //Check if the Delete button was clicked
        button_delete_el.addEventListener('click',() =>{

            //If so, delete the child task where the button was clicked
            tasks_el.removeChild(task_el);

        })
    }

 })


})

