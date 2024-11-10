const resumeform = document.getElementById('resumeform')as HTMLInputElement | null
const resumeoutput = document.getElementById('resumeoutput')as HTMLInputElement | null
if(resumeform && resumeoutput){
    resumeform.addEventListener('submit',(event)=>{
        event?.preventDefault();
        const  firstname=(document.getElementById('firstname')as HTMLInputElement).value;
        const  lastname=(document.getElementById('lastname')as HTMLInputElement).value;
        const  email=(document.getElementById('email')as HTMLInputElement).value;
        const  number=(document.getElementById('number')as HTMLInputElement).value;
        const  location=(document.getElementById('location')as HTMLInputElement).value;
        const  Education=(document.getElementById('Education')as HTMLInputElement).value;
        const  Skills=(document.getElementById('Skills')as HTMLInputElement).value;
        const  Experience=(document.getElementById('Experience')as HTMLInputElement).value;
        const imageInput = document.getElementById("image") as HTMLInputElement;
        const imagefile = imageInput.files?.[0];
        const image = imagefile ? URL.createObjectURL(imagefile) : "";
        const resumeHTML =`
        <h2><b>Congrats your First Generated!</b></h2>


      
${    
    image
      ? `<img src="${image}" alt="image" width="150px"  border: 2px solid black;
    object-fit: cover; height="150px" class="image">`
      : ""
  }
      
        <p><strong>FirstName:</strong> ${firstname}</p><br>
        <p><strong>LastName:</strong> ${lastname}</p><br>
        <p><strong>Email:</strong> ${email}</p><br>
        <p><strong>Phone Number:</strong> ${number}</p><br>
        <p><strong>Location:</strong> ${location}</p><br>
        <p><strong>Education:</strong> ${Education}</p><br>
        <p><strong>Skills:</strong> ${Skills}</p><br>
        <p><strong>Experience:</strong> ${Experience}</p><br>
   `;
        resumeoutput.innerHTML=resumeHTML
});
}
else{
    console.error('Form or output div not found in the DOM');
}


