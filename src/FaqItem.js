import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClinicMedical,
  faL,
  faMinus,
  faPencilAlt,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
const FAQItem = ({ user }) => {

  
 
  const navigate = useNavigate();
  
  const [editStateValue,setEditStateValue]=useState()
  const [otherAccordionOpen, setOtherAccordionOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [validUser, setValidUser] = useState(true);
  const [userIsNotValid, setUserIsNotValid] = useState(false);
  const [isAnyUserInEditMode, setIsAnyUserInEditMode] = useState(false);
  const { first, last, dob, gender, email, description, country, picture } =
    user;
  const [isOpen, setIsOpen] = useState(false);
  const [userGender, setUserGender] = useState({
    gender: "Male",
  });
  const [userDescription, setUserDescription] = useState({
    description: description,
  });

  const [userDob, setUserDob] = useState({
    dob: dob,
  });
  const [userCountry, setUserCountry] = useState({
    country: country,
  });
  const [editState, setEditState] = useState(false);
 
  localStorage.setItem("item",0)
  // const editStateHandler = (dob,index) => {
    
  //   const age = userAge(dob);
  //   console.log(age, "this is user age ");
  //   if (age < 18) {
  //     setUserIsNotValid(true);
  //     setTimeout(() => {
  //       setUserIsNotValid(false);
  //     }, 3000);

  //     return;
  //   }
  const editStateHandler = (dob, index) => {
    const age = userAge(dob);
    console.log(age, "this is user age ");

    if (age < 18) {
      setUserIsNotValid(true);
      setTimeout(() => {
        setUserIsNotValid(false);
      }, 3000);
      return;
    }

    // Check if any user is already in edit mode
    if (isAnyUserInEditMode) {
      return;
    }

    setEditState((prevEditState) => !prevEditState);
    setIsAnyUserInEditMode((prev) => !prev);
  };
      
        
      
    



    
   
    
  //   setUserIsNotValid(false);
   
  // };
 

 
  



  const modalHandler = () => {
    navigate("/modal");
  };
  const userAge = (dob) => {
    const today = new Date();
    const userAgeConverted = new Date(dob);
    let age = today.getFullYear() - userAgeConverted.getFullYear();
    const month = today.getMonth() - userAgeConverted.getMonth();

    if (
      month < 0 ||
      (month === 0 && today.getDate() < userAgeConverted.getDate())
    ) {
      age--;
    }

    return age;
  };

  const validateUserAge = () => {
    const foundUserAge = userAge(userDob.dob);

    if (foundUserAge <= 18) {
      setValidUser(false);
    } else {
      setValidUser(true);
    }
  };
  const handleUserDobChange = (e) => {
    const newDate = e.target.value;
    setUserDob({ ...userDob, dob: newDate });
    setIsDisabled(false);
  };
  const saveUserDetail = () => {
    const saveUserDetailObj = {
      newDob: userDob.dob,
      newCountry: userCountry.country,
      newGender: userGender.gender,
      newDescription: userDescription.description,
    };
    return saveUserDetailObj;
  };
  const handleIconClick = () => {
    const result = saveUserDetail();
    // This function will only be called if isDisabled is false
    console.log("Icon clicked", result);
  };
  const setUserGenderHandler = (e) => {
    setUserGender({ ...userGender, gender: e.target.value });
    setIsDisabled(false);
  };
  const setUserCountryHandler = (e) => {
    setUserCountry({ ...userCountry, country: e.target.value });
    setIsDisabled(false);
  };
  const setUserDescriptionHandler = (e) => {
    setUserDescription({ ...userDescription, description: e.target.value });
    setIsDisabled(false);
  };
  return (
    <div className="py-2  ">
   <details className="group  border rounded-lg  bg-gray-100 ">
 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
   <div className="flex items-center ms-2 me-2 gap-2 pt-2">
     <img src={picture} className="rounded-full w-10 h-10" />{" "}
     <span>
       {first} {last}
     </span>
   </div>
   <span className="pr-2 transition-transform transform duration-300">
     {isOpen ? (
       <FontAwesomeIcon
         onClick={() => setIsOpen(false)}
         icon={faMinus}
         className="text-gray-500"
       />
     ) : (
       <FontAwesomeIcon
         onClick={() => setIsOpen(true)}
         icon={faPlus}
         className="text-gray-500"
       />
     )}
   </span>
 </summary>

 {!editState ? (
   <div className="flex flex-col items-center">
     <p className="text-neutral-600  group-open:animate-fadeIn">
       <div className="flex items-center  justify-between pl-6 pr-6  ">
         <div>
           <strong>Age :</strong>
           <div>{userAge(userDob.dob)}</div>
         </div>

         <div>
           <strong>Gender:</strong>
           <div>{userGender.gender}</div>
         </div>

         <div>
           <strong>Country:</strong>
           <div>{userCountry.country}</div>
         </div>
       </div>
       <div className="pl-6">
         {userIsNotValid && (
           <div class="font-regular relative mb-4 block w-full rounded-lg bg-green-500 p-4 text-base leading-5 text-white opacity-100">
             sorry you are not an adult
           </div>
         )}
         <strong>Description:</strong>
         <div>{description}</div>

         <div className="flex justify-end items-center pt-6 pr-6 pb-8 gap-8">
           <FontAwesomeIcon
             icon={faTrashAlt}
             style={{ color: "red", fontSize: "24px" }}
             onClick={() => modalHandler()}
           />

           <FontAwesomeIcon
             icon={faPencilAlt}
             onClick={() => editStateHandler(userDob.dob,user.id)}
             style={{
               color: "gray",
               fontSize: "24px",
               marginLeft: "10px",
             }}
           />
         </div>
       </div>
     </p>
   </div>
 ) : (
   <div className="flex flex-col items-center">
     <p className="text-neutral-600 group-open:animate-fadeIn">
       <div className="flex items-center justify-evenly gap-2 pl-6 pr-6 pt-2 pb-2">
         <div>
           <strong>Age:</strong>

           <input
             type="date"
             value={userDob.dob}
             onChange={handleUserDobChange}
             required
           />
         </div>

         <div>
           <strong>Gender:</strong>
           <select
             className="border border-gray-300 px-2 py-1 rounded"
             value={userGender.gender}
             type="text"
             required
             onChange={(e) => setUserGenderHandler(e)}
           >
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Transgender">Transgender</option>
             <option value="Rather not say">Rather not say</option>
             <option value="Other">Other</option>
           </select>
         </div>
         <div>
           <strong>Country:</strong>
           <input
             className="border border-gray-300 px-2 py-1 rounded"
             value={userCountry.country}
             onChange={(e) => setUserCountryHandler(e)}
             type="text"
             required
           />
         </div>
       </div>
       <div className=" w-full pl-6 pr-6">
         <strong>Description:</strong>
         <textarea
           value={userDescription.description}
           onChange={(e) => setUserDescriptionHandler(e)}
           className="w-full  h-40 border border-gray-300 px-2 py-1 rounded"
         ></textarea>
         <div className=" flex justify-end items-center pt-6 pr-6 pb-8 gap-8">
           <FontAwesomeIcon
             icon={faTimes}
             className="text-red-500 text-lg rounded-full bg-red border border-red-500 p-1 cursor-pointer"
            //  onClick={() => editStateHandler()}
           />

           <div>
           
             {isDisabled ? (
               <FontAwesomeIcon
                 icon={faCheck}
                 className="text-gray-500 text-lg rounded-full bg-gray-300 border border-gray-500 p-1 cursor-not-allowed"
               />
             ) : (
               <FontAwesomeIcon
                 icon={faCheck}
                 className="text-green-500 text-lg rounded-full bg-red border border-green-500 p-1 cursor-pointer"
                 onClick={() => handleIconClick()}
               />
             )}
           </div>
         </div>
       </div>
     </p>
   </div>
 )}
</details>
  
      
    </div>
  );
};
export default FAQItem;
