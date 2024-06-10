import React, { useContext } from "react";
import { MoveLeft, PlusCircle, CloudUpload } from 'lucide-react'

export default function AddProductContainer({ showAddProduct, setShowAddProduct} ) {

    return(
        <div className="w-full overflow-y-scroll h-[100vh]  bg-[#23232361] fixed top-0 left-0  z-20  " >
            <section className="min-h-[100vh] pb-[50px] w-1/2 max-w-[755px] bg-white ml-auto rounded-tl-[16px] rounded-bl-[16px] pt-[64px]   " >
                <div className=" w-[90%] mx-auto " >
                    <span className="flex items-center justify-between border-b mb-[16px] " >
                        <h1 className="text-[24px]  " >Add Product</h1>
                        <span onClick={ () => { setShowAddProduct( false)}} className="flex items-center gap-[8px] " >
                            <MoveLeft /> <h5 className="text-[20px] " >Back</h5>
                        </span>
                    </span>

                    <div className="" >
                        <label className="text-[16px]  " >Product Details</label>
                        <span className="mt-[16px]  " >
                            <h5 className="mt-[8px] " >Image</h5>
                            <span className="flex flex-col gap-[8px] mb-[16px]  items-center justify-center rounded-[8px] p-[8px] text-[16px] border border-dashed w-fit h-[88px] p " >
                                <CloudUpload />
                                <p className="" >click here or drop your files here to upload it</p>
                            </span>
                        </span>

                        <form className="flex flex-col gap-[16px] " >
                            <span className="flex flex-col w-[432px]" >
                            <label 
                                htmlFor="productName" 
                                className="text-[16px] " 
                                >Product Name</label>
                                <input 
                                type="text" 
                                className=" border px-[16px] py-[12px] rounded-[5px] " 
                                name="productName" 
                                placeholder="example: fried rice" />
                            </span>

                            <span className="flex flex-col w-[432px]" >
                                <label 
                                htmlFor="category" 
                                className="" >Category</label>
                                <select className="border px-[16px] py-[12px] rounded-[5px] "  >
                                    <option >Select category</option>
                                </select>
                            </span>

                            <span className="flex flex-col w-[432px]" >
                                <label 
                                htmlFor="description" 
                                className="text-[16px]  " >Product Description</label>
                                <textarea 
                                className=" border px-[16px] py-[12px] rounded-[5px] " 
                                name="" 
                                >Enter description</textarea>
                            </span>

                            <label 
                            htmlFor="ProductVariants" 
                            className="text-[20px] " 
                            >Product variants</label>
                            <span className="flex   gap-[16px] " >
                                <span className="flex flex-col gap-[8px] w-1.5/4 " >
                                    <label 
                                    htmlFor="productName" 
                                    className="text-[16px] " >Variant Name</label>
                                    <input 
                                    type="text" 
                                    className="border px-[16px] py-[12px] rounded-[5px]" 
                                    name="productName" 
                                    placeholder="enter name" />
                                </span>
                                <span className="flex flex-col gap-[8px] w-1/4 " >
                                    <label 
                                    htmlFor="productName" 
                                    className="text-[16px] " >Price</label>
                                    <input 
                                    type="text" 
                                    className="border px-[16px] py-[12px] rounded-[5px]" 
                                    name="productName" 
                                    placeholder="enter price" />
                                </span>
                                <span className="flex flex-col gap-[8px] w-1/4 " >
                                    <label 
                                    htmlFor="productName" 
                                    className="text-[16px] " >Size</label>
                                    <input 
                                    type="text" 
                                    className="border px-[16px] py-[12px] rounded-[5px]" 
                                    name="productName" 
                                    placeholder="enter size" />
                                </span>
                            </span>

                            <span className="text-[#0dd983] flex gap-[8px] ml-auto " >
                                <PlusCircle />
                                <h3 className="" >Add another variant</h3>
                            </span>

                            <button type="button" className="text-white bg-[#0dd983] px-[24px] py-[16px] rounded-full " >Add Product</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}