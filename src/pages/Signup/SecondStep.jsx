import React from 'react'

function SecondStep() {
    return (
        <form action="" className='w-96 flex flex-col mt-4'>
            <div className='w-full lex flex-row py-2'>
                <input type="text" placeholder='Address' className='w-full border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400 mr-2' />
            </div>
            <div className='w-full flex py-2'>
                <input type="number" placeholder='Phone no.' className='w-full border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400' />
            </div>
            <div className='w-full flex flex-col py-2'>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" placeholder='Birthday' className='w-full border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400 mt-2' />
            </div>
            <div className='w-full flex flex-col py-2'>
                <h2>Gender</h2>
                <ul className='w-full flex justify-evenly mt-2'>
                    <li className='w-full flex item-center justify-center border border-slate-200 py-2 px-4 rounded-md mr-4'>
                        <input type="radio" name="gender" id="list-gender" />
                        <label htmlFor="list-gender" className='ml-2'>Male</label>
                    </li>
                    <li className='w-full flex item-center justify-center border border-slate-200 py-2 px-4 rounded-md'>
                        <input type="radio" name="gender" id="list-gender" />
                        <label htmlFor="list-gender" className='ml-2'>Female</label>
                    </li>
                </ul>
            </div>
            <div className='w-full flex justify-end py-2 mt-2'>
                <input type="button" value="Submit" className='font-semibold bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer outline-blue-400' />
            </div>
        </form>
    )
}

export default SecondStep