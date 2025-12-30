
const Form = (props) => {

  return (
    <div className='bg-linear-to-br from-[#1E1E1E] to [#111111] text-white p-6 sm:p-10 lg:p-20 h-fit w-full max-w-2xl mx-auto rounded-2xl'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-500'>Create Profile</h1>
        <form onSubmit={(e)=> props.submitHandler(e)} className='flex flex-col gap-4 mt-6 sm:mt-8 lg:mt-10'>
            <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4'>
              <label htmlFor="name" className='min-w-fit text-sm sm:text-base'>Name</label>
            <input value = {props.name} onChange={(e)=> props.setName(e.target.value)} className='border-gray-600 border p-2 w-full rounded-lg bg-[#19181C] focus:outline-none placeholder:text-sm' name='name' type="text" placeholder='Eg - John Doe' />
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-7'>
              <label htmlFor="img-url" className='min-w-fit text-sm sm:text-base'>Link</label>
            <input value = {props.imgUrl} onChange={(e)=> props.setImgUrl(e.target.value)} className='border-gray-600 border p-2 w-full rounded-lg bg-[#19181C] focus:outline-none placeholder:text-sm' name='img-url' type="text" placeholder='https://' />
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-7'>
              <label htmlFor="description" className='min-w-fit text-sm sm:text-base'>Role</label>
            <input value = {props.role} onChange={(e)=> props.setRole(e.target.value)} className='border-gray-600 border p-2 w-full rounded-lg bg-[#19181C] focus:outline-none placeholder:text-sm' name='description' type="text" placeholder='Role' />
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4'>
              <label htmlFor="description" className='min-w-fit text-sm sm:text-base'>About</label>
            <input value = {props.description} onChange={(e)=> props.setDescription(e.target.value)} className='border-gray-600 border p-2 w-full rounded-lg bg-[#19181C] focus:outline-none placeholder:text-sm' name='description' type="text" placeholder='Type Something...' />
            </div>
            <button className='px-7 py-2 bg-[#222] text-white cursor-pointer font-semibold rounded-xl w-fit mx-auto mt-5 text-sm sm:text-base'>Submit</button>
        </form>
    </div>
  )
}

export default Form