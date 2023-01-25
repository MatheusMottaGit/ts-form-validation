import { useState } from 'react'
import {useForm} from 'react-hook-form' // register, handleSubmit, formState
import './other_styles.css'

type UserData = {
  name?: string,
  email: string,
  password?: string,
  profession?: string
}

function App() {

      const {register, handleSubmit, formState: {errors}, reset} = useForm<UserData>() 

      const onSubmit = (data: UserData)=>{
        console.log(data)
        reset({
          name: '',
          email: '',
          password: '',
          profession: ''
        })
      
      }

  return (
    <>
      <div className="container h-screen mx-auto flex items-center justify-center flex-col">
        <h1 className='text-2xl'>Validação de formulários</h1>

          <div className='flex justify-start items-start flex-col m-10'>
            <input 
            className={errors.name && 'input-empty'}
            type="text" 
            placeholder='Insira seu nome...'
            {
              ...register('name', {required: true})
            }
            />
            {
              errors?.name?.type === 'required' && <p>Este campo deve ser preenchido.</p>
            }
          </div>

          <div className='flex justify-start items-start flex-col m-10'>
            <input 
            type="email" 
            placeholder='Insira seu e-mail...'
            
            {
              ...register('email', {required: true})
            }
            />
            {
              errors?.email?.type === 'required' && <p>Este campo deve ser preenchido.</p>
            }
          </div>

          <div className='flex justify-start items-start flex-col m-10'>
            <input 
            type="password" 
            placeholder='Insira sua senha...'
           
            {
              ...register('password', {required: true})
            }
            />
            {
              errors.password?.type === 'required' && <p>Este campo deve ser preenchido</p>
            }
          </div>

          <div className='flex justify-start items-start flex-col m-10'>
            <input 
            type="text" 
            placeholder='Insira sua profissão...'
            
            {
              ...register('profession', {required: true})
            }
            />
            {
              errors.profession?.type === 'required' && <p>Este campo deve ser preenchido</p>
            }
          </div>

          <div>
            <button 
            onClick={()=>handleSubmit(onSubmit)()}
            className='bg-cyan-800 rounded-sm w-72 h-10'>
              Send
            </button>
          </div>
      </div>
    </>
  )
}

export default App
