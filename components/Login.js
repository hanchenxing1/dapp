import Image from "next/image"
import { useMoralis } from "react-moralis"


const Login = () => {
    const { authenticate } = useMoralis()

    return (
        <div className="bg-black relative">
            <div className="flex flex-col z-50 absolute items-center h-4/6 w-full justify-center space-y-4">
                <Image 
                    className="object-cover rounded-full"
                    src="/Cypher_moon.png"
                    width={200}
                    height={200}
                    alt="Cypher moon logo"
                />

                <button onClick={authenticate} className="bg-yellow-600 p-5 text-black font-bold rounded-lg">login to the metaverse</button>
            </div>

            <div className="w-full h-screen relative">
                <Image 
                    src="https://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                    alt="futuristic background"
                />
            </div>
        </div>
    )
}

export default Login
