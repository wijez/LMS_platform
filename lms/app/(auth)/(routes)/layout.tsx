const AuthLayout = ({children} : 
  {children: React.ReactNode}) => {
  return ( 
    <div className="justify-center h-full flex items-center">
      {children}
    </div>
   );
}
 
export default AuthLayout;