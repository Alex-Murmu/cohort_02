import React, { useEffect, useState, useMemo } from "react";

function UseMemoONE() {
  const [Excahnge1Data, setExchange1Data] = useState({ return: 0 });
  const [Excahnge2Data, setExchange2Data] = useState({ return: 0 });
  const [bankData, setBankData] = useState({ return: 0 });

  useEffect(() => {
    setExchange1Data({ return: 1000 });
  }, []);

  useEffect(() => {
    setExchange2Data({ return: 1000 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({ return: 5000 });
    }, 5000);
  }, []); // ✅ Fixed: Runs only once

  const cryptoReturn = useMemo(() => {
    console.log("Hi there before"); // ✅ Now logs only once in production
    return { return: Excahnge1Data.return + Excahnge2Data.return };
  }, [Excahnge1Data,Excahnge2Data]);

  const incomax = (cryptoReturn.return + bankData.return) * 0.3;

  return (
    <div>
      <div>This is the amount you have to pay: {incomax}</div>
    </div>
  );
}

export default UseMemoONE;
