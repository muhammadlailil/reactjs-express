import Clsx from "@/libs/clsx";

export default function TextInput({ ...attr }) {
     return (
          <div className="mb-6">
               <label
                    htmlFor=""
                    className={Clsx(
                         "text-[18px] lg:text-[21px]",
                         (attr.error) ? 'text-[#EB2730]' : 'text-dark-label'
                    )}
               >
                    {attr.label}
                    {attr.required ? (
                         <span className="text-[#EB2730]">*</span>
                    ) : (
                         <></>
                    )}
               </label>
               <input
                    {...attr}
                    className={Clsx(
                         "border block w-full rounded-xl p-3 lg:p-4 ps-5 mt-2 pe-5 font-roboto",
                         (attr.error) ? 'border-[#EB2730] focus:outline-[#EB2730]' : ''
                    )}
               />
               {attr.error ? <span className="text-[#EB2730] font-roboto text-[13px]">{attr.error}</span> : <></>}
          </div>
     );
}
