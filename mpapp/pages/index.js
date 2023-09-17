export default function Home() {
  let nameSurname = "Muhammet Delibaş - ";
  let age = 23;
  let alertGoster = () => {
    alert("Merhaba");
    console.log("Butona tıklandı.");
  };
  return (
    <>
      <h1>
        Benim adım : {nameSurname} Yaşım : {age}
      </h1>
      <button onClick={alertGoster}>Click</button>
    </>
  );
}
