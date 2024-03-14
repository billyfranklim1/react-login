
export default function LoginHeader({darkMode}) {

    return (
        <div className="mt-16 flex justify-between select-none">
        <img
          alt=""
          className="h-8"
          src={`${!darkMode ? 'logo-light.png' : 'logo-dark.png'}`} />
        <a href="" className="text-blue-500">
          Criar conta
        </a>
      </div>
    );
}