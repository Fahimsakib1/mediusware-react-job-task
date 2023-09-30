import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import './Problem-2.css';
import BangladeshFlag from '../images/Bangladesh.jpg';
import USAFlag from '../images/USA.png';
import { Link, NavLink } from 'react-router-dom';






const Problem2 = () => {



    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShowC, setModalShowC] = useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p >Modal A</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        checked === true ?
                            <>
                                {
                                    filterData?.map((data, index) => (
                                        <div className='d-flex  gap-3' key={index}>
                                            <p className=''>⦿ <span className='fw-bold'>Country:</span> {data?.country.name}</p>
                                            <p>⦿ <span className='fw-bold'>Phone:</span> {data?.phone}</p>
                                            <p>⦿ <span className='fw-bold'>ID:</span> {data?.country.id}</p>
                                        </div>
                                    ))
                                }
                            </>

                            :
                            <>
                                {
                                    allContacts?.map((data, index) => (
                                        <div onClick={() => handleOpenModalC(data)} className='d-flex  gap-3 bg-color-on-hover' key={index}>

                                            {
                                                data?.country.name === 'United States'
                                                    ?
                                                    <>
                                                        <p className=''>⦿ <span className={`fw-bold `}>Country:</span> <span className={`fw-bold text-primary`}>{data?.country.name}</span></p>
                                                        <p>⦿ <span className='fw-bold'>Phone:</span> <span className={`fw-bold text-primary`}>{data?.phone}</span></p>
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            data?.country.name === 'Bangladesh' ?
                                                                <>
                                                                    <p className=''>⦿ <span className={`fw-bold `}>Country:</span> <span className={`fw-bold text-success`}>{data?.country.name}</span></p>
                                                                    <p>⦿ <span className='fw-bold'>Phone:</span> <span className={`fw-bold text-success`}>{data?.phone}</span></p>
                                                                </>
                                                                :
                                                                <>
                                                                    <p className=''>⦿ <span className={`fw-bold `}>Country:</span> <span className={`fw-bold text-dark`}>{data?.country.name}</span></p>
                                                                    <p>⦿ <span className='fw-bold'>Phone:</span> <span className={`fw-bold text-dark`}>{data?.phone}</span></p>
                                                                </>
                                                        }
                                                    </>
                                            }

                                        </div>
                                    ))
                                }

                            </>




                    }

                    <div className="d-flex justify-content-center mt-5 gap-3">
                        <button className="btn btn-lg btn-outline-primary" type="button">All Contacts</button>
                        <button className="btn btn-lg btn-outline-success" type="button" onClick={handleUSContactsClick}>US Contacts</button>
                        <button className="btn btn-lg btn-danger" type="button" onClick={props.onHide} >Close</button>
                    </div>
                </Modal.Body>

                <div className='container'>
                    <div className="row justify-content-center">
                        <div className='col-md-6 mx-auto '>
                            <div className="input-group mt-3 ml-6  mb-5">
                                <div className="border border-success p-2 input-group-text">
                                    <input id="checkbox"
                                        checked={checked}
                                        onChange={handleCheckBoxClicked}
                                        className="form-check-input mt-0 border border-dark p-2"
                                        type="checkbox"
                                        value=""
                                        aria-label="Checkbox for following text input"
                                    />
                                </div>
                                <input type="text" className="form-control border border-success p-2" aria-label="Text input with checkbox" placeholder='Only Even'></input>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        );
    }







    function MyVerticallyCenteredModal1(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p >Modal B</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    {
                        USContacts?.map((data, index) => (
                            <div onClick={() => handleOpenModalC(data)} className='d-flex  gap-3 bg-color-on-hover' key={index}>
                                <p className=''>⦿ <span className='fw-bold'>Country:</span> <span className='fw-bold text-primary'>{data?.country.name}</span></p>
                                <p>⦿ <span className='fw-bold'>Phone:</span> <span className='fw-bold text-primary'>{data?.phone}</span></p>
                            </div>
                        ))
                    }


                    <div className="d-flex justify-content-center mt-5 gap-3 mb-5">
                        <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleAllContactsClick}>All Contacts</button>
                        <button className="btn btn-lg btn-outline-success" type="button" >US Contacts</button>
                        <button className="btn btn-lg btn-danger" type="button" onClick={props.onHide} >Close</button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }















    return (

        <div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                    <div className="d-flex justify-content-center gap-3">

                        <Link to='/problem-2/modalA' onClick={handleAllContactsClick}>
                            <button className="customA" type="button">All Contacts</button>
                        </Link>

                        <Link to='/problem-2/modalB'>
                            <button className="customB" type="button" onClick={handleUSContactsClick}>US Contacts</button>
                        </Link>

                    </div>

                </div>
            </div>


            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


            <MyVerticallyCenteredModal1
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />

            <MyVerticallyCenteredModalC
                show={modalShowC}
                onHide={() => setModalShowC(false)}
            />








        </div>
    );
};

export default Problem2;