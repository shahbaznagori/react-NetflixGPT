 const FormValidator =(email, password , name=null)=>{

    console.log(email);

   const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?$/.test(name);



   if(!isEmailValid ){
    return "Invalid email"
   }

   if(!isPasswordValid){
    return "Invalid password"
   }

   if(name && !isNameValid){
    return "Invalid name"
   }



   return null;
}

export default FormValidator;

