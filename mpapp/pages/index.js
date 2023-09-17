import { useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("Muhammet");

  const [age, setAge] = useState(23);

  // let firstName = "Muhammet Delibaş - ";
  // let age = 23;
  let alertGoster = () => {
    alert("Merhaba");
    console.log("Butona tıklandı.");
  };
  let studenObject = {
    studentName: "Ahmet",
    studenAge: 23,
  };
  return (
    <>
      <h1>
        Benim adım : {firstName} Yaşım : {age}
      </h1>
      {/* OBJELERİN İÇİNDEKİ VERİYİ ÇEKME */}
      <h2>{studenObject.studenAge}</h2>
      <button
        onClick={() => {
          alertGoster();
          console.log(firstName);
        }}
      >
        Click
      </button>{" "}
      <br /> <br />
      <input
        placeholder="Lütfen Bir Metin Yazın..."
        onChange={(event) => {
          // console.log(e.target.value);
          // firstName = event.target.value;

          // inputa girilen değeri al ve Click fonksiyonunda değiştir
          // setFirstName(event.target.value);
          setAge(event.target.value);
        }}
      />
    </>
  );
}
