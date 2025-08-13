"use client";

import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confiPassword, setConfiremedPassword] = useState("");

  const Show=(e)=>{
      
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(confiPassword)
  }


  return (
    <div>
      <h3>Register</h3>
      <label>
        User Name:
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br></br>

     <label>
      Email:
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </label> <br></br>

      <label>
      Password:
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </label><br></br>

      <label>
      confiPassword:
      <input
        placeholder="Confirm Password"
        type="password"
        value={confiPassword}
        onChange={(e) => setConfiremedPassword(e.target.value)}
      />
       </label><br></br>

       <button onClick={Show}>submit</button>
      
    </div>

    // updated  design for from  of registratin 
    //     <div>
    //   <h3>Register</h3>
    //   <form onSubmit={handleSubmit}>
    //     <table>
    //       <tbody>
    //         <tr>
    //           <td>
    //             <label>User Name:</label>
    //           </td>
    //           <td>
    //             <input
    //               placeholder="Your Name"
    //               value={name}
    //               onChange={(e) => setName(e.target.value)}
    //             />
    //           </td>
    //         </tr>

    //         <tr>
    //           <td>
    //             <label>Email:</label>
    //           </td>
    //           <td>
    //             <input
    //               placeholder="Email"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </td>
    //         </tr>

    //         <tr>
    //           <td>
    //             <label>Password:</label>
    //           </td>
    //           <td>
    //             <input
    //               placeholder="Password"
    //               type="password"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //           </td>
    //         </tr>

    //         <tr>
    //           <td>
    //             <label>Confirm Password:</label>
    //           </td>
    //           <td>
    //             <input
    //               placeholder="Confirm Password"
    //               type="password"
    //               value={confiPassword}
    //               onChange={(e) => setConfiremedPassword(e.target.value)}
    //             />
    //           </td>
    //         </tr>

    //         <tr>
    //           <td colSpan="2" style={{ textAlign: "center", paddingTop: "10px" }}>
    //             <button type="submit">Submit</button>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </form>

    //   {/* Preview of Name */}
    //   <h4>{name}</h4>
    // </div>
  );
}
