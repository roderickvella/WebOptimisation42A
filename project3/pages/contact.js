import Nav from "../components/Nav"
import Footer from "../components/Footer"
import {useForm} from "react-hook-form"

function Contact() {
  const { register, handleSubmit, formState:{errors}} = useForm();

  const handleFormSubmit = async(data) =>{
    console.log(data);
    console.log(data.firstName);
    console.log(data.comments);

    //sending data to our json server to store the user's feedback
    const response = await fetch("http://localhost:8080/feedback",{
      method: "POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    })
    //after it is stored, show an alert message
    alert("Thanks for your feedback");

  }

  return (
    <div>
      <Nav/>

      <section className="section">

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input {...register("firstName",{required:true})} placeholder="First Name" />
          <br/>
          <textarea {...register("comments",{required:true, minLength:{value:10,message:"Must be at least 10 characters"}})} placeholder="Comments"/>
          <br/>
          <br/>
          <input type="Submit"/>
        </form>
        <br/>
        {errors.comments ? <div>{errors.comments.message}</div> : null}

      </section>

      <Footer/>


    </div>
   
  );
}

export default Contact;


