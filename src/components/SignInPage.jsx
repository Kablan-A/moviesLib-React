import { useState } from "react";
import api from "../api/axiosConfig";
import { Link } from "react-router-dom";

function SignInPage({ updUserData }) {
  const [userType, setUserType] = useState("user");
  console.log(userType);

  function selectUserType(event) {
    setUserType((prevVal) => {
      const shadowClass = "shadow-logoShadow";

      const prevSelected = document.getElementById(prevVal);
      prevSelected.classList.remove(shadowClass);

      const currVal = event.target.id;
      const currSelected = document.getElementById(currVal);
      currSelected.classList.add(shadowClass);

      return currVal;
    });
  }

  const [formData, setFormData] = useState({
    eMail: "",
    password: "",
  });
  console.log(formData);

  function updFormData(event) {
    const { name, value } = event.target;

    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  }

  async function addUser(event) {
    try {
      event.preventDefault();

      const postData = {
        userType: userType,
        ...formData,
      };
      console.log(postData);

      const response = await api.post("/api/v1/users/add", postData);
      console.log(response.data);

      const userData = {
        userType: userType,
        eMail: formData.eMail,
        loggedIn: true,
      };

      updUserData(userData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-screen grid place-items-center">
      <div
        className="grid bg-secondaryBlack rounded-xl p-[3vmin]
               gap-[6vmin]"
      >
        <div
          className="w-full grid gap-[3vmin] grid-cols-2 place-items-center
              text-white text-[1.5vmax]"
        >
          <button
            id="user"
            onClick={(event) => selectUserType(event)}
            className="w-full rounded-md p-2 shadow-logoShadow hover:shadow-btnShadow
                     transition-all duration-300 uppercase"
          >
            User
          </button>
          <button
            id="admin"
            onClick={(event) => selectUserType(event)}
            className="w-full rounded-md p-2 hover:shadow-btnShadow
                     transition-all duration-300 uppercase"
          >
            Admin
          </button>
        </div>

        <form className="w-full grid gap-[3vmin]">
          <input
            isRequired
            placeholder="E-Mail"
            type="email"
            name="eMail"
            onChange={(event) => updFormData(event)}
            className="place-self-center p-1 rounded-md outline-none text-[#0d0d0e]"
          />

          <input
            isRequired
            placeholder="Password"
            type="password"
            name="password"
            onChange={(event) => updFormData(event)}
            className="place-self-center p-1 rounded-md outline-none text-[#0d0d0e]"
          />

          <button
            onClick={(event) => addUser(event)}
            className="text-[1.5vmax] hover:underline underline-offset-4 text-white"
          >
            <Link to={"/"}>Sign In</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
