let question_btn=document.querySelectorAll(".question")

question_btn.forEach(btn => {
    btn.addEventListener('click',()=>{
        let ans=btn.nextElementSibling 
        if(ans.classList.contains("hidden"))   {
            ans.classList.remove("hidden")
            btn.classList.add("bold")

        }
        else{
            ans.classList.add("hidden")
            btn.classList.remove("bold")
        }
    
         
   });
})