 const FormValidator =(email, password , name=null)=>{


   const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?$/.test(name);


  if(!name && !isNameValid){
    return "Invalid name"
   }


   if(!isEmailValid ){
    return "Invalid email"
   }

   if(!isPasswordValid){
    return "Invalid password"
   }

   



   return null;
}

export default FormValidator;

