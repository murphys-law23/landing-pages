
const Navbar = () => {
  return (
    <>
    <div className="flex justify-between w-auto p-10 text-white items-center">
        <div className="text-white text-4xl">
            <p>Bluify</p>
        </div>
        <div className="flex justify-between ">
            <ul className="flex justify-between gap-12">
                <li><a href=""></a>Destination</li>
                <li><a href=""></a>Experinces</li>
                <li><a href=""></a>Hotel</li>
                <li><a href=""></a>Travel Guides</li>
                <li><a href=""></a>Pricing</li>
            </ul>
        </div>
        <div >
            <button className="bg-blue-600 w-17 h-8 text-2 rounded-2xl">Sign In</button>
        </div>
    </div>
    </>
  )
}

export default Navbar