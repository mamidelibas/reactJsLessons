export default function Home() {
  let nameSurname = "Muhammet Delibaş - ";
  let age = 23;
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
        Benim adım : {nameSurname} Yaşım : {age}
      </h1>
      {/* OBJELERİN İÇİNDEKİ VERİYİ ÇEKME */}
      <h2>{studenObject.studenAge}</h2>
      <button onClick={alertGoster}>Click</button> <br /> <br />
      <input
        placeholder="Lütfen Bir Metin Yazın..."
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </>
  );
}
