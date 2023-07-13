import React, { useState } from 'react';
import { db } from '../../config/firebase-config';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {
    ToastContainer, toast
} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const SubjectDataRegister = () => {

    const [subjectCode, setSubjectCode] = useState('');
    const [subjectName, setSubjectName] = useState('');
    
    const subjectsCollectionRef = collection(db, 'subjects');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(subjectsCollectionRef, {subjectcode: subjectCode, subjectname: subjectName})

            setSubjectName('');
            setSubjectCode('');

            toast.success('Data submitted successfully!');
        }

        catch (error) {
            console.log('Error submitting data: ', error);

            toast.error('Data did not submit.');
        }
    } 

    return (
        <>
            <div className='text-center text-2xl'>
                Subject Register
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Subject Name"
                        value={subjectName}
                        onChange={(e) => setSubjectName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Subject Code"
                        value={subjectCode}
                        onChange={(e) => setSubjectCode(e.target.value)}
                    />
                    <button type="submit">Add Subject</button>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default SubjectDataRegister
