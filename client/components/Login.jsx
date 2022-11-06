import { useForm } from "react-hook-form";
import React, {useState} from 'react';

export default function Login() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    
    const isInitialMount = useRef(true);

    useEffect(() => {
      if (isInitialMount.current) {
         isInitialMount.current = false;
      } else {
          // Your useEffect code here to be run on update
          fetch(
            // server (data will be this obj: {"name":"usernameIentered","password":"passIentered"}, if we have access to it here send it in post body)
            // get back a yes / no from the server
            // if yes, redirect to homepage
            // if no, getelementbyid no match. innerhtml = we don't have that name/password combo on file
          )
      }
    });

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
    <label>Name: </label>
    <input {...register("name")} placeholder="name" /><br />
    <label>Password: </label>
    <input {...register("password")} placeholder="password" /><br />
    <input type="submit" value="Login" />
    <p>{data}</p>


    <p id='nomatch'></p>
    <p>link to signup page</p>
    </form>
  )
}