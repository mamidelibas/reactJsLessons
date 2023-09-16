import { Header } from "./Header";

export default function Home() {
  let firstName = "Muhammet ";
  let age = 23;
  function concolaBas() {
    alert("merhaba");
  }
  return (
    <>
      <Header />
      <h1>
        Benim adım : {firstName} ve Yaşım : {age}
      </h1>
      <button onClick={concolaBas}>Alert Göster</button>
    </>
  );
}

// rfc : kısayol function açar
