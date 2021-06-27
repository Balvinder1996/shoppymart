import React, { useState } from 'react';
import { ModalBody } from 'react-bootstrap';
import './Contact-us.css';
const ContactUs=()=>

{
    const [initalvalue,setintialvalue]=useState("");
    const [initalvalue2,setintialvalue2]=useState("");
    const [initalvalue3,setintialvalue3]=useState("");
    
    const onType=(event)=>
    {
        setintialvalue(event.target.name=event.target.value)  
    }
    const onType2=(event)=>
    {
        setintialvalue2(event.target.name=event.target.value)  
    }
    const onType3=(event)=>
    {
        setintialvalue3(event.target.name=event.target.value)  
    }
    const prevent=(event)=>
    {
        event.preventDefault();
        setintialvalue("");
        setintialvalue2("");
        setintialvalue3("");

    }

    return(
        <>
        <section  id="section_one">
            <div className="container p-3 text-white">
               <h3 className="h2 text-center">Contact-us</h3>
               <p className="h5 py-3">You can contact us on the email given below or you can register yourself
                   and share the idea what you have.For Applying for the Agency contact-us on
                   the number given below or you can make a email on the mail site.We will revert
                   you within 3 working days
               </p>
            </div>
        </section>
        <section className="mt-2 py-5" id="section_two">
            <div className="container-fluid text-white">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={prevent}>
                            <div className="form-group ml-3">

                                <div className="form-group-input">
                                    <label className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-md-9">
                                    <input type="text" 
                                           className="form-control bg-white " 
                                           name="Email"
                                           value={initalvalue}  
                                           onChange={onType} 
                                           required="true"
                                    />
                                    </div>
                                 </div>
                                 
                                 <div className="form-group-input">
                                    <label className="col-md-2 col-form-label">Full Name</label>
                                    <div className="col-md-9">
                                    <input type="text" 
                                           className="form-control bg-white" 
                                            value={initalvalue2} 
                                            onChange={onType2} 
                                            required="true"
                                    />
                                    </div>
                                 </div>

                                 <div className="form-group-input">
                                    <label className="col-sm-2 col-form-label">Idea</label>
                                    <div className="col-md-9">
                                    <textarea type="text" 
                                              className="form-control bg-white" 
                                              required="true"
                                              value={initalvalue3}  
                                              onChange={onType3} 
                                    />
                                    </div>
                                 </div>

                                 <div className="ml-5 py-4">
                                   <button className="btn btn-danger"
                                            data-bs-toggle="modal"
                                             data-bs-target="#exampleModal"
                                    >Submit
                                    </button>
                                 </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <div className="box_inner">
                                <div className="pb-3">
                                    <h3 className="text-center">Contact-us</h3>
                                </div>
                                <h5>Email:-shoppimart@123.com</h5>
                                <h5>Contact-no:-123321</h5>
                                <h5>Address:-8/11 New york city</h5>
                                <h5>Pin Code:-12232</h5>
                                <h5>Follow-us:-<span><i class="fab fa-instagram mx-3" id="iconic_one"></i></span>
                                                <span className="text-white"><i class="fab fa-twitter" id="iconic_two"></i></span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        {/* <modal starts here after submittion> */}
        


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{marginRight:"17px"}}>
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>



        </>
    )
}
export default ContactUs