import footerImage from "../assets/footerImage.png"
const Footer = () => {
  return (
    <>
        <div className="flex justify-center">
            <img src={footerImage} alt=""
            className="w-72 object-contain mt-4 mr-20" />
        </div>
    </>
  )
}

export default Footer