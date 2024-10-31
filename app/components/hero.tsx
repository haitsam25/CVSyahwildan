import foto from "../foto1.jpeg";
function Profile() {
    return (
      <img
        src={foto.src}
        alt="Ihsan Jaya Dipa "
        className="fotoku"
      />
    );
  }

export default function Hero () {
    return (
        
                <div className="container mx-auto p-2 text-center">
                <h1 className="text-gray-400 font-bold" > CV Online</h1>
                <h1 className="text-3xl text-red-400 font-bold">Syahwildan</h1>
                <Profile />
                <p>Saya Adalah programer komputerisasi akuntansi sejak tahun 2015</p>
                </div>
    );
}