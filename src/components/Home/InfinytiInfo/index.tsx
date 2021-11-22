import React from "react";
import Image from "next/image";
import { BsDistributeHorizontal } from "react-icons/bs";
import { GiSeaDragon } from "react-icons/gi";
function InfinytiInfo() {
  return (
    <section className="relative pt-12">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4 hidden md:block">
            <Image
              alt="text"
              className="max-w-full rounded-lg shadow-lg object-cover "
              src="https://image.freepik.com/foto-gratis/fondo-galaxia-espacial_53876-93121.jpg"
              width={634}
              height={951}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-yellow-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-300 mt-8">
                <GiSeaDragon size={32} />
              </div>
              <h3 className="text-3xl font-semibold">What is Lorem Ipsum?</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200 mr-3">
                        <BsDistributeHorizontal size={24} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-400">What is Lorem Ipsum?</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200 mr-3">
                        <BsDistributeHorizontal size={24} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-400">What is Lorem Ipsum?</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200 mr-3">
                        <BsDistributeHorizontal size={24} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-400">What is Lorem Ipsum?</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfinytiInfo;
