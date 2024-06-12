"use client";
import { useState, useRef, ChangeEvent } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

type Props = { setRoute: (route: string) => void };

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};

const Verification: React.FC<Props> = ({ setRoute }) => {
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    "0": "",
    "1": "",
    "2": "",
    "3": "",
  });

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const verifcationHandler = async () => {
    setInvalidError(true);
  };

  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);

    const newNumber = {
      ...verifyNumber,
      [index]: value,
    };
    setVerifyNumber(newNumber);

    if (value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div>
      <h1 className="title">Verify your code</h1>
      <div className="w-full flex items-center justify-center mt-2">
        <div className="w-[80px] h-[80px] rounded-full bg-[#497df2] flex items-center justify-center">
          <VscWorkspaceTrusted size={40} />
        </div>
      </div>
      <div className="m-auto mt-6 flex items-center justify-around">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            key={key}
            ref={(el) => (inputRefs.current[index] = el as HTMLInputElement)}
            type="text"
            className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${
              invalidError
                ? "shake border-red-500"
                : "border-blue-950 dark:border-white"
            }`}
            placeholder=""
            maxLength={1}
            value={verifyNumber[key as keyof VerifyNumber]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <br />
      <button
        onClick={verifcationHandler}
        className="mt-2 inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-500"
      >
        Verify OTP
      </button>
      <div className="mt-6">
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Go back to sign in?
          <span
            className="text-blue-500 font-bold cursor-pointer"
            onClick={() => setRoute("Login")}
          >
            {" "}
            Login
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Verification;
