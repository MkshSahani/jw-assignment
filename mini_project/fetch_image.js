fetch("https://drive.google.com/file/d/1IIlIvxCWRZ2IQkjBPhljvdwuw-tOZuVV/view?usp=sharing")
    .then(res => res.json("https://dog.ceo/api/breeds/image/random"))
    .then(result => {
        console.log(result); 
    })
    .catch(err => console.log(err)); 


// https://dog.ceo/api/breeds/image/random