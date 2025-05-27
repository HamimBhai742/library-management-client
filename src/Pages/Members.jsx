import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../hooks/useAxiosPublic'
import { Helmet } from 'react-helmet'

const Members = () => {
  const axiosPublic =useAxiosPublic()
  const {data:members=[]}=useQuery({
    queryKey:['members'],
    queryFn:async()=>{
      const res=await axiosPublic.get("/members")
      const filteredMembers = res.data.filter(member => member.role !== 'admin');
      return filteredMembers
    }
  })
  console.log(members)
  return (
    <div className='grid grid-cols-3 mt-5 mx-10 gap-4'>
        <Helmet>
        <title>Members</title>
      </Helmet>
{
  members.map(m=>
  <div>
    <figure>
          <img className='w-[300px] h-[300px] rounded-lg' src={m.photo} alt="" />
    </figure>
    <h3 className='text-sm mt-2'><span className='font-bold'>Name: </span>{m.name}</h3>
<h4 className='text-sm'><span className='font-semibold'>Email: </span>{m.email}</h4>
<p className='text-sm'><span className='font-semibold'>Role: </span>{m?.role}</p>
  </div>
)
}
    </div>
  )
}

export default Members
