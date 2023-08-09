/* eslint-disable react/prop-types */

const ServiceCard = ({ item, index }) => {

  const { name, desc, bgColor, textColor } = item

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-heading font-[700]">{name}</h2>
      <p className="text-[-16px] leading-7 font-[400] text-text mt-4">{desc}</p>
    </div>
  )
}

export default ServiceCard