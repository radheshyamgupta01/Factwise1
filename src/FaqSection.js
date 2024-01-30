import FAQItem from "./FaqItem";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FAQSection = ({ celebritiesData }) => {
  const [searchUser, setSearchUser] = useState("");

  const searchUserHandler = (e) => {
    setSearchUser(e.target.value);
  };

  const filteredData = celebritiesData.filter((user) => {
    return user.first.toLowerCase().includes(searchUser.toLowerCase());
  });

  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
      <div className="flex flex-col items-center">
        <p className="text-neutral-500 text-xl mt-3 ">List view </p>
        <div className="pt-2  pl-2 relative mx-auto  text-gray-600">
          <input
            className="border-2 border-gray-300   bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            value={searchUser}
            style={{ width: '580px' }}

            onChange={searchUserHandler}
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-600 h-4 w-4 fill-current"
            />
          </button>
        </div>
      </div>
      <div className="grid  divide-neutral-200 max-w-xl mx-auto mt-8  rounded-lg rounded-2 m-4">
        {filteredData.map((user) => (
          <FAQItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
