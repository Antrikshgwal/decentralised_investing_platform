// src/components/CreateProposal.js
import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../src/Navbar'
import Footer from './Footer'

const CreateProposal = () => {

    const { register, handleSubmit, setError, reset, formState: { isSubmitting, errors } } = useForm();

    // Handle form submission
    const onSubmit = async (data) => {
        try {
            console.log(data);
            alert("Proposal Created!!");
            reset();
        } catch (error) {
            setError("amount", { message: "Some Error occurred" });
        }
    };

    return (
        <>
        <Navbar/>
        <div className='flex flex-col items-center  min-h-screen p-4 bg-gray-300'>
            <form onSubmit={handleSubmit(onSubmit)} className="  shadow-2xl flex flex-col bg-white gap-4 p-6  border-gray-900 rounded-lg shadow-lg w-full max-w-lg">
            <h1 className='text-gray-900 flex flex-col bg-gray-600 items-center text-3xl mb-4 border rounded p-2 m-2 border-gray-900 pb-2'>
                Create A Proposal
            </h1>
                
                <div className="flex flex-col">
                    <label htmlFor="target" className="mb-1 font-medium">Target</label>
                    <input
                        id="target"
                        className="p-2 border border-gray-300 rounded"
                        placeholder="Target"
                        type="text"
                        {...register("target", { required: "Target is required" })}
                        aria-required="true"
                    />
                    {errors.target && <p className="text-red-500">{errors.target.message}</p>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="amount" className="mb-1 font-medium">Amount</label>
                    <input
                        id="amount"
                        className="p-2 border border-gray-300 rounded"
                        placeholder="Amount"
                        type="number"
                        {...register("amount", { required: "Amount is required" })}
                        aria-required="true"
                    />
                    {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="MarginForStakers" className="mb-1 font-medium">Margin For Stakers</label>
                    <input
                        id="MarginForStakers"
                        className="p-2 border border-gray-300 rounded"
                        placeholder="Margin For Stakers"
                        type="number"
                        {...register("MarginForStakers", { required: "Margin for stakers is required" })}
                        aria-required="true"
                    />
                    {errors.MarginForStakers && <p className="text-red-500">{errors.MarginForStakers.message}</p>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="expiryHr" className="mb-1 font-medium">Expiry Time (in hours)</label>
                    <input
                        id="expiryHr"
                        className="p-2 border border-gray-300 rounded"
                        type="number"
                        placeholder="Expiry Time (in hours)"
                        {...register("expiryHr", { required: "Expiry time is required" })}
                        aria-required="true"
                    />
                    {errors.expiryHr && <p className="text-red-500">{errors.expiryHr.message}</p>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="initialSupply" className="mb-1 font-medium">Initial Supply</label>
                    <input
                        id="initialSupply"
                        className="p-2 border border-gray-300 rounded"
                        type="number"
                        placeholder="Initial Supply"
                        {...register("initialSupply", { required: "Initial supply is required" })}
                        aria-required="true"
                    />
                    {errors.initialSupply && <p className="text-red-500">{errors.initialSupply.message}</p>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="tokenPrice" className="mb-1 font-medium">Token Price</label>
                    <input
                        id="tokenPrice"
                        className="p-2 border border-gray-300 rounded"
                        type="number"
                        placeholder="Token Price"
                        {...register("tokenPrice", { required: "Token price is required" })}
                        aria-required="true"
                    />
                    {errors.tokenPrice && <p className="text-red-500">{errors.tokenPrice.message}</p>}
                </div>

                <button disabled={isSubmitting} className="bg-blue-500 text-white p-2 rounded mt-4">
                    {isSubmitting ? "Loading..." : "Submit"}
                </button>
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default CreateProposal;
