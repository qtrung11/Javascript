/*
uncontroller component / uncontroller input
- donot cause component re-render when value change
- not management by state react
- use useRef to get value 

controller component / controller input
- management by state react
- cause component re-render when value change

*/

import React, { type ChangeEvent } from "react"
import Button from "../../components/atoms/button";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import SelectField from "../../components/atoms/select-field";

interface IFormInput {
  firstName: string,
  lastName: string,
  email: string,
  country: string
}

function Form() {
  const firstNameRef = React.useRef(null);
  const [form, setForm] = React.useState({
    lastName: '',
    country: ''
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      country: ''
    }
  })
  const onSubmit: SubmitHandler<IFormInput> = (data) =>  {
    console.log(data)
  }


  function onSubmitPure(e: React.FormEvent) {
    e.preventDefault();
    console.log('onSubmit',{
      firstNameRef: firstNameRef.current?.value,
      form
    })
  }

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  console.log('form render')
  return (
    <div>
      <h1 className="text-2xl font-bold">Form</h1>  

      <form onSubmit={onSubmitPure}>
        First Name: <input type="text" id="firstName" defaultValue="tony" ref={firstNameRef} className="border" /> <br />
        Last Name: <input type="text" name="lastName" value={form.lastName} className="border" onChange={onChange} /> <br />
        Country: 
          <select name="country" value={form.country} onChange={onChange}>
            <option>Please choose option</option>
            <option value="HN">HN</option>
            <option value="HCM">HCM</option>
          </select>
          <br />
        <Button type="submit">Submit</Button>
      </form>
      <br />

      <h3 className="text-2xl font-bold">Demo with React hook form</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        First Name: <input type="text" {...register("firstName")} /> <br />
        Last Name: <input type="text"  {...register("lastName")} /> <br />
        Email:  <input type="text"  {...register("email")} /> <br /> <br />
        Country: 
        <Controller
          name="country"
          control={control}
          render={({ field }) => {
            return (
              <SelectField 
                options={[
                  { label: 'Canada',  value: 'CA' },
                  { label: 'Vietnam',  value: 'VN' },
                ]}
                {...field} // spread props
              />
            )
          }}
        />
        <Button type="submit">Submit hook Form</Button>
      </form>

  
        
    </div>
  )
}

export default Form