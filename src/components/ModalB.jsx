import React, { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BangladeshFlag from '../images/Bangladesh.jpg';
import USAFlag from '../images/USA.png';
import './Problem-2.css';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';




const ModalB = () => {

    const [showModal, setShowModal] = useState(true);
    const handleClose = () => setShowModal(false);



    const [USContacts, setUSContacts] = useState([])
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/country-contacts/United States/?page=1')
            .then(res => res.json())
            .then(data => setUSContacts(data.results))
    }, [])


    const [allContacts, setAllContacts] = useState([])
    const handleAllContactsClick = () => {
        setModalShow(true);
        setModalShow1(false);
        setModalShowC(false);
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => setAllContacts(data.results))
        setChecked(false);
    }



    const [modalShowC, setModalShowC] = useState(false);
    const [modalCData, setModalCData] = useState(null)
    const handleOpenModalC = (data) => {
        setModalCData(data);
        setModalShowC(true);
    }

















    const [modalAPIData, setModalAPIData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleScrollToBottom = (e) => {
        const modal = e.target;
        if (modal.scrollTop + modal.clientHeight >= modal.scrollHeight) {
            console.log('Reached Bottom Modal B');
            loadMoreData();
        }
    };

    const loadMoreData = async () => {
        if (currentPage < 3) {
            try {
                console.log('SAAAAKIIB');
                setLoading(true);
                setShowModal(true);
                const response = await fetch(`https://contact.mediusware.com/api/country-contacts/United States/?page=${currentPage}`);
                const newData = await response.json();
                setModalAPIData((prevData) => [...prevData, ...newData.results]);
                setCurrentPage((prevPage) => prevPage + 1);
            }
            catch (error) {
                console.error('error:', error);
            }
            finally {
                setLoading(false);
            }
        }
    };
    useEffect(() => {
        if (showModal) {
            loadMoreData();
        }
    }, [showModal]);




    console.log("Modal API Modal B: ", modalAPIData);










    const [searchInput, setSearchInput] = useState('');
    const [searchInputAfterButtonClicked, setSearchInputAfterButtonClicked] = useState('');
    const handleGetSearchInput = (e) => {
        setSearchInput(e.target.value);
    }
    const handleSearch = (e) => {
        console.log("Search Input Inside: ", searchInput);
        setSearchInputAfterButtonClicked(searchInput);
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };






























    function MyVerticallyCenteredModalC(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p >Modal C</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div>
                        <p><span className='fw-bold'>Country Name:</span> {modalCData?.country.name}</p>
                        <p><span className='fw-bold'>Country ID:</span> {modalCData?.country.id}</p>
                        <p><span className='fw-bold'>Phone Number:</span> {modalCData?.phone}</p>
                        {
                            modalCData?.country.name === 'Bangladesh' &&
                            <div>
                                <img className='flag-width mx-auto' src={BangladeshFlag} alt="Flag" />
                            </div>
                        }

                        {
                            modalCData?.country.name === 'United States' &&
                            <div>
                                <img className='flag-width mx-auto' src={USAFlag} alt="Flag" />
                            </div>
                        }

                    </div>

                </Modal.Body>



            </Modal>
        );
    }





















    return (
        <div>
            <h1 className='text-center my-5'>Modal B</h1>


            <Modal scrollable={true} size="lg" show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal B</Modal.Title>
                    <InputGroup className="mb-3 w-50 mx-auto">
                        <Form.Control
                            value={searchInput}
                            onChange={handleGetSearchInput}
                            onKeyPress={handleKeyPress}
                            className='border border-secondary'
                            placeholder="Search Here"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button onClick={handleSearch} className='px-3' variant="primary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </Modal.Header>

                <Modal.Body onScroll={handleScrollToBottom}>


                    {
                        searchInputAfterButtonClicked?.length > 0
                        &&
                        <>
                            {
                                USContacts.filter((data) => {
                                    return searchInputAfterButtonClicked.toLowerCase() === ''
                                        ?
                                        data
                                        :
                                        data?.country?.name.includes(searchInputAfterButtonClicked) || data?.country?.name.toLowerCase().includes(searchInputAfterButtonClicked) || data?.country?.name.toUpperCase().includes(searchInputAfterButtonClicked) || data?.phone.includes(searchInputAfterButtonClicked) || data?.phone.toLowerCase().includes(searchInputAfterButtonClicked) || data?.phone.toUpperCase().includes(searchInputAfterButtonClicked)
                                }).map((data, index) => (
                                    <div onClick={() => handleOpenModalC(data)} className='d-flex  gap-3 bg-color-on-hover' key={index}>
                                        <p className=''>⦿ <span className='fw-bold'>ID:</span> <span className='fw-bold text-primary'>{data?.id}</span></p>
                                        <p className=''>⦿ <span className='fw-bold'>Country:</span> <span className='fw-bold text-primary'>{data?.country.name}</span></p>
                                        <p>⦿ <span className='fw-bold'>Phone:</span> <span className='fw-bold text-primary'>{data?.phone}</span></p>
                                    </div>
                                ))
                            }
                        </>
                    }




                    {
                        searchInput?.length === 0
                        &&
                        <>
                            {
                                USContacts?.map((data, index) => (
                                    <div onClick={() => handleOpenModalC(data)} className='d-flex  gap-3 bg-color-on-hover' key={index}>
                                        <p className=''>⦿ <span className='fw-bold'>ID:</span> <span className='fw-bold text-primary'>{data?.id}</span></p>
                                        <p className=''>⦿ <span className='fw-bold'>Country:</span> <span className='fw-bold text-primary'>{data?.country.name}</span></p>
                                        <p>⦿ <span className='fw-bold'>Phone:</span> <span className='fw-bold text-primary'>{data?.phone}</span></p>
                                    </div>
                                ))
                            }
                        </>
                    }


                    {loading && <div className='text-center text-success fs-4'>Loading...</div>}




                    <div className="d-flex justify-content-center mt-5 gap-3 mb-5">

                        <Link to='/problem-2/modalA' onClick={handleAllContactsClick}>
                            <button className="custom-colorANew" type="button">All Contacts</button>
                        </Link>

                        <button className="custom-colorB" type="button" >US Contacts</button>
                        <button className="custom-colorC" type="button" onClick={handleClose} >Close</button>
                    </div>
                </Modal.Body>


            </Modal>

            <MyVerticallyCenteredModalC
                show={modalShowC}
                onHide={() => setModalShowC(false)}
            />



        </div>
    );
};

export default ModalB;