import Containar from "../Containar"
import Flex from "../Flex"
import Image from "../Image"
import logo from '../../assets/logo.png'
import { FaChevronDown } from "react-icons/fa";
import Button from '../Button'


const Header = () => {
  return (
    <div className="">
        <Containar>
            <Flex className={'justify-between'}>
                <div className="">
                  <Image src={logo}/>
                </div>
                <div className="">
                  <ul className="flex ">
                    <li className="flex items-center pr-12">Home <FaChevronDown  className="pl-3 text-2xl" /> </li>
                    <li className="flex items-center pr-12">About <FaChevronDown   className="pl-3 text-2xl"/> </li>
                    <li className="flex items-center pr-12">Service <FaChevronDown   className="pl-3 text-2xl"/> </li>
                    <li className="flex items-center pr-12">Portfolio <FaChevronDown   className="pl-3 text-2xl"/> </li>
                    <li className="flex items-center pr-12">Price <FaChevronDown   className="pl-3 text-2xl"/> </li>
                    <li className="flex items-center pr-12">Blog <FaChevronDown   className="pl-3 text-2xl"/> </li>
                  </ul>
                </div>
                <div className="">
                  <Button btnText={'Contact Us'}/>
                </div>
            </Flex>
        </Containar>
    </div>
  )
}

export default Header