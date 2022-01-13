import {getProviders, signIn} from "next-auth/react"; 

function Login({providers}){
    return<div>
        <img className="w-52 mb-5" src="spotify.png" alt=""></img>
        {Object.values(providers).map((provider) =>(
            <div key={provider.name}>
                <button className="">Login with {provider.name}</button>
            </div>
        ))}
    </div>
}
export default Login;

export async function getServerSideProps(){
    const providers = await getProviders();
    
    return{
        props:{
            providers,
        },
    };
}