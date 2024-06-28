import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Dashboard from '@/Layouts/Dashboard';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import BusinessForm from './partials/BusinessForm';
import BusinessList from './partials/BusinessList';
import { toast } from 'react-toastify';

const BusinessIndex = ({ business }) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentBusiness, setCurrentBusiness] = useState({
        id: '',
        name: '',
        description: '',
        contact: ''
    });
    const { errors } = usePage().props;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            router.put(`/business/${currentBusiness.id}`, currentBusiness, {
                onSuccess: () => {
                    toast.success('Business updated successfully');
                },
                onError: () => {
                    toast.error('Failed to update business');
                }
            });
        } else {
            router.post('/business', {
                name: currentBusiness.name,
                description: currentBusiness.description,
                contact: currentBusiness.contact
            }, {
                onSuccess: () => {
                    toast.success('Business added successfully');
                },
                onError: () => {
                    toast.error('Failed to add business');
                }
            });
        }
        closeModal();
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this business?')) {
            router.delete(`/business/${id}`);
        }
    };

    const closeModal = () => {
        setModalOpened(false);
        setIsEditing(false);
        setCurrentBusiness({
            id: '',
            name: '',
            description: '',
            contact: ''
        });
    };

    const openModal = (business = null) => {
        if (business) {
            setIsEditing(true);
            setCurrentBusiness(business);
        }
        setModalOpened(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentBusiness({
            ...currentBusiness,
            [name]: value
        });
    };

    return (
        <Dashboard>
            <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h1 className="font-bold text-base">Business</h1>
                    <PrimaryButton onClick={() => openModal()}>Add new</PrimaryButton>
                    <div className="mt-4">
                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto">
                                <div className="py-2 align-middle inline-block min-w-full">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                        <BusinessList business={business} openModal={openModal} handleDelete={handleDelete} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={modalOpened} onClose={closeModal}>
                <div className="p-6 space-y-6">
                    <BusinessForm
                        currentBusiness={currentBusiness}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        isEditing={isEditing}
                        errors={errors}
                    />
                </div>
            </Modal>
        </Dashboard>
    );
};

export default BusinessIndex;
