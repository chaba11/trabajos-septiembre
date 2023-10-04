import { useEffect, useState } from "react"

const Users = () => {
	const [usuarios,setusuarios]=useState([])
	useEffect(()=>{
		async function FetchData(){
			const res=await fetch("https://randomuser.me/api/?results=3");
			const datos = await res.json();
			setusuarios(datos);
		}
		FetchData()
	},[])
  return (
	<>
	
	<div className="flex items-center justify-center m-5 flex-col">
	{usuarios.results && usuarios.results.map(user=>(
		<>
		<div className="flex items-center justify-between m-5">
			<div className="m-5 text-start">
				<h1>{user.name.first} {user.name.last}</h1>
				<h2> {user.email}</h2>
				<h2>{user.location.country}</h2>
			</div>
			<div><img src={user.picture.large} alt="" /></div>
		</div>
		</>
	))}
	</div>
	
	</>
  )
}

export default Users
