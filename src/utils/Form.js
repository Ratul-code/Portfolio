import {useState} from "react";

 const useForm = (form={},cb=()=>{})=>{
    const [formData,setFormData] = useState(form); 
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        cb();
    }
    return {formData,setFormData,handleChange,handleSubmit};

}
export default useForm;
